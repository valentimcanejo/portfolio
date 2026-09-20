"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { Project } from "@/content/types";
import { techIcons } from "./icons";
import { layerClasses, LAYER_ORDER } from "@/lib/layers";
import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";

interface ProjectCardProps {
  project: Project;
}

const MAX_TILT_DEG = 6;

export function ProjectCard({ project }: ProjectCardProps) {
  const t = useTranslations("projects");
  const layers = useTranslations("layers");
  const cardRef = useRef<HTMLElement>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const card = cardRef.current;
    if (!card) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rect = card.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(800px) rotateX(${(-py * MAX_TILT_DEG).toFixed(2)}deg) rotateY(${(px * MAX_TILT_DEG).toFixed(2)}deg) translateY(-4px)`;
  }

  function handleMouseLeave() {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "";
  }

  return (
    <article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group flex h-full flex-col justify-between rounded-sm border border-border bg-foreground/[0.02] p-5 transition-[transform,border-color,box-shadow] duration-200 ease-out will-change-transform hover:border-layer-application hover:shadow-xl hover:shadow-layer-application/10"
    >
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="font-display text-lg font-semibold transition-colors group-hover:text-layer-application">
            {project.title}
          </h3>
          <span className="font-mono text-xs text-muted">{project.year}</span>
        </div>
        <p className="mt-1 font-mono text-xs text-muted">{project.role}</p>

        <p
          className={`mt-3 line-clamp-3 text-sm ${
            project.pending ? "italic text-muted" : "text-foreground/90"
          }`}
        >
          {project.summary}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {LAYER_ORDER.filter((layer) => project.layers.includes(layer)).map(
            (layer) => (
              <span
                key={layer}
                className={`rounded-sm border px-2 py-0.5 font-mono text-[11px] uppercase ${layerClasses[layer].border} ${layerClasses[layer].text}`}
              >
                {layers(`${layer}.label`)}
              </span>
            ),
          )}
        </div>
      </div>

      <div>
        <div className="flex flex-wrap gap-2 text-lg text-muted">
          {project.tech.map((tech) => {
            const Icon = techIcons[tech];
            return <Icon key={tech} aria-hidden />;
          })}
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-4 font-mono text-sm">
          <Link
            href={`/projects/${project.slug}`}
            className="text-foreground underline decoration-layer-application decoration-2 underline-offset-4 hover:text-layer-application"
          >
            {t("viewCase")}
          </Link>
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-muted hover:text-foreground"
            >
              <FaGithub aria-hidden /> {t("visitRepo")}
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-muted hover:text-foreground"
            >
              <FaArrowUpRightFromSquare aria-hidden size={12} /> {t("visitDemo")}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
