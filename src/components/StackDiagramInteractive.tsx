"use client";

import { useRef } from "react";
import type { Layer } from "@/content/types";
import { layerClasses } from "@/lib/layers";
import { layerIcons } from "./icons";

interface LayerItem {
  layer: Layer;
  label: string;
  hint: string;
}

interface StackDiagramInteractiveProps {
  layers: LayerItem[];
  legendTitle: string;
  legendHint: string;
}

const DEPTH_PX = [5, 9, 13, 17];
const GLOW_VAR: Record<Layer, string> = {
  interface: "var(--color-layer-interface)",
  application: "var(--color-layer-application)",
  data: "var(--color-layer-data)",
  infra: "var(--color-layer-infra)",
};

export function StackDiagramInteractive({
  layers,
  legendTitle,
  legendHint,
}: StackDiagramInteractiveProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const bandRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  function handleLegendClick(e: React.MouseEvent, layer: Layer) {
    const target = document.getElementById(`skill-group-${layer}`);
    if (!target) return;
    e.preventDefault();

    target.scrollIntoView({ behavior: "smooth", block: "center" });

    window.setTimeout(() => {
      target.style.boxShadow = `0 0 28px -6px ${GLOW_VAR[layer]}`;
      target.style.backgroundColor = `color-mix(in srgb, ${GLOW_VAR[layer]} 6%, transparent)`;
      window.setTimeout(() => {
        target.style.boxShadow = "";
        target.style.backgroundColor = "";
      }, 1400);
    }, 350);
  }

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const mx = (e.clientX - rect.left) / rect.width - 0.5;
    const my = e.clientY - rect.top;

    bandRefs.current.forEach((band, i) => {
      if (!band) return;
      const bandRect = band.getBoundingClientRect();
      const bandCenter = bandRect.top - rect.top + bandRect.height / 2;
      const proximity = Math.max(0, 1 - Math.abs(my - bandCenter) / (rect.height / 2 || 1));
      const depth = DEPTH_PX[i] ?? DEPTH_PX[DEPTH_PX.length - 1];
      const translateX = mx * depth * 2 + proximity * 6;

      band.style.transform = `translateX(${translateX.toFixed(1)}px)`;
      band.style.boxShadow =
        proximity > 0.2
          ? `0 0 ${(proximity * 22).toFixed(0)}px -6px ${GLOW_VAR[layers[i].layer]}`
          : "";
    });
  }

  function handleMouseLeave() {
    bandRefs.current.forEach((band) => {
      if (!band) return;
      band.style.transform = "";
      band.style.boxShadow = "";
    });
  }

  return (
    <div ref={containerRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <div className="flex flex-col gap-3">
        {layers.map(({ layer, label, hint }, i) => {
          const classes = layerClasses[layer];
          const Icon = layerIcons[layer];
          return (
            <a
              key={layer}
              href={`#skill-group-${layer}`}
              onClick={(e) => handleLegendClick(e, layer)}
              ref={(el) => {
                bandRefs.current[i] = el;
              }}
              className={`animate-stack-in block rounded-sm border-l-4 bg-foreground/[0.03] px-4 py-3 transition-[transform,box-shadow,background-color] duration-200 ease-out will-change-transform hover:bg-foreground/[0.06] ${classes.border}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex items-baseline justify-between gap-4">
                <span
                  className={`flex items-center gap-1.5 font-mono text-xs uppercase tracking-wide ${classes.text}`}
                >
                  <Icon aria-hidden />
                  {label}
                </span>
              </div>
              <p className="mt-1 text-sm text-muted">{hint}</p>
            </a>
          );
        })}
      </div>
      <p className="mt-4 font-mono text-xs text-muted">
        <span className="uppercase text-foreground">{legendTitle}</span> — {legendHint}
      </p>
    </div>
  );
}
