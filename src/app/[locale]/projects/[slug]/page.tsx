import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import { getProject, getProfile } from "@/content";
import { techIcons } from "@/components/icons";
import { LAYER_ORDER, layerClasses } from "@/lib/layers";
import { FaGithub, FaArrowUpRightFromSquare, FaArrowLeft } from "react-icons/fa6";

interface ProjectPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!hasLocale(routing.locales, locale)) return {};

  const project = getProject(locale, slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { locale, slug } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const project = getProject(locale, slug);
  if (!project) {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: "projectCase" });
  const layers = await getTranslations({ locale, namespace: "layers" });
  const p = await getTranslations({ locale, namespace: "projects" });
  const profile = getProfile(locale);

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 font-mono text-sm text-muted hover:text-foreground"
      >
        <FaArrowLeft size={12} aria-hidden /> {t("back")}
      </Link>

      <div className="mt-6 flex flex-wrap items-baseline justify-between gap-3">
        <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          {project.title}
        </h1>
        <span className="font-mono text-sm text-muted">{project.year}</span>
      </div>
      <p className="mt-2 font-mono text-sm text-layer-application">{project.role}</p>

      <p
        className={`mt-6 text-lg ${project.pending ? "italic text-muted" : "text-foreground/90"}`}
      >
        {project.summary}
      </p>

      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        <div>
          <h2 className="font-mono text-xs uppercase text-muted">{t("layersTitle")}</h2>
          <div className="mt-2 flex flex-wrap gap-2">
            {LAYER_ORDER.filter((layer) => project.layers.includes(layer)).map((layer) => (
              <span
                key={layer}
                className={`rounded-sm border px-2 py-0.5 font-mono text-[11px] uppercase ${layerClasses[layer].border} ${layerClasses[layer].text}`}
              >
                {layers(`${layer}.label`)}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-mono text-xs uppercase text-muted">{t("stackTitle")}</h2>
          <div className="mt-2 flex flex-wrap gap-3 text-2xl text-muted">
            {project.tech.map((tech) => {
              const Icon = techIcons[tech];
              return <Icon key={tech} aria-hidden />;
            })}
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="font-mono text-xs uppercase text-muted">{t("notesTitle")}</h2>
        {project.notes && project.notes.length > 0 ? (
          <ul className="mt-3 list-disc space-y-2 pl-5 text-foreground/90">
            {project.notes.map((note, i) => (
              <li key={i}>{note}</li>
            ))}
          </ul>
        ) : (
          <p className="mt-3 text-sm text-muted">{t("notesEmpty")}</p>
        )}
      </div>

      <div className="mt-10 border-t border-border pt-6">
        <h2 className="font-mono text-xs uppercase text-muted">{t("linksTitle")}</h2>
        <div className="mt-3 flex flex-wrap gap-5 font-mono text-sm">
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-foreground hover:text-layer-application"
          >
            <FaGithub aria-hidden /> {p("visitRepo")}
          </a>
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-foreground hover:text-layer-application"
            >
              <FaArrowUpRightFromSquare size={12} aria-hidden /> {p("visitDemo")}
            </a>
          )}
          <a href={`mailto:${profile.email}`} className="text-muted hover:text-foreground">
            {profile.email}
          </a>
        </div>
      </div>
    </article>
  );
}
