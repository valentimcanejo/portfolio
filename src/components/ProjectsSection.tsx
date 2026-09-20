"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import type { Layer, Project } from "@/content/types";
import { LAYER_ORDER, layerClasses } from "@/lib/layers";
import { SectionHeading } from "./ui/SectionHeading";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./Reveal";

interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const t = useTranslations("projects");
  const layers = useTranslations("layers");
  const [active, setActive] = useState<Layer | null>(null);

  const filtered = useMemo(
    () => (active ? projects.filter((p) => p.layers.includes(active)) : projects),
    [active, projects],
  );

  return (
    <section id="projects" className="scroll-mt-20 border-b border-border">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} subtitle={t("subtitle")} />

        <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label={t("subtitle")}>
          <button
            type="button"
            onClick={() => setActive(null)}
            aria-pressed={active === null}
            className={`rounded-sm border px-3 py-1.5 font-mono text-xs uppercase transition-colors ${
              active === null
                ? "border-foreground bg-foreground text-background"
                : "border-border text-muted hover:text-foreground"
            }`}
          >
            {t("filterAll")}
          </button>
          {LAYER_ORDER.map((layer) => {
            const isActive = active === layer;
            const classes = layerClasses[layer];
            return (
              <button
                key={layer}
                type="button"
                onClick={() => setActive(isActive ? null : layer)}
                aria-pressed={isActive}
                className={`rounded-sm border px-3 py-1.5 font-mono text-xs uppercase transition-colors ${classes.border} ${
                  isActive ? `${classes.bg} text-white` : `${classes.text} hover:opacity-80`
                }`}
              >
                {layers(`${layer}.label`)}
              </button>
            );
          })}
        </div>

        {filtered.length > 0 ? (
          <div className="mt-8 grid gap-x-5 gap-y-8 sm:grid-cols-2">
            {filtered.map((project, i) => (
              <Reveal key={project.slug} delay={Math.min(i, 5) * 60}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="mt-8">
            <p className="text-sm text-muted">{t("empty")}</p>
            <button
              type="button"
              onClick={() => setActive(null)}
              className="mt-3 font-mono text-sm text-foreground underline decoration-layer-application decoration-2 underline-offset-4 hover:text-layer-application"
            >
              {t("showAll")}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
