import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { getProjects } from "@/content";
import { Hero } from "@/components/Hero";
import { StatsSection } from "@/components/StatsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { Contact } from "@/components/Contact";

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const projects = getProjects(locale);

  return (
    <div id="top">
      <Hero locale={locale} />
      <StatsSection locale={locale} />
      <ExperienceSection locale={locale} />
      <ProjectsSection projects={projects} />
      <Contact locale={locale} />
    </div>
  );
}
