"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import type { Project } from "@/content/types";
import { SectionHeading } from "./ui/SectionHeading";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./Reveal";

interface ProjectsSectionProps {
  projects: Project[];
}

const INITIAL_COUNT = 6;

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const t = useTranslations("projects");
  const [showAll, setShowAll] = useState(false);

  const visible = showAll ? projects : projects.slice(0, INITIAL_COUNT);
  const remaining = projects.length - INITIAL_COUNT;

  return (
    <section id="projects" className="scroll-mt-20 border-b border-border">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} subtitle={t("subtitle")} />

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {visible.map((project, i) => (
            <Reveal key={project.slug} delay={Math.min(i, 5) * 60}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        {remaining > 0 && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="font-mono text-sm text-foreground underline decoration-layer-application decoration-2 underline-offset-4 hover:text-layer-application"
            >
              {showAll ? t("showLess") : t("loadMore", { count: remaining })}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
