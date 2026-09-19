import { getTranslations } from "next-intl/server";
import type { AppLocale } from "@/content/types";
import { getExperience, getEducation, skills } from "@/content";
import type { SkillCategory } from "@/content/types";
import { LAYER_ORDER } from "@/lib/layers";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./Reveal";
import { SkillsMarquee } from "./SkillsMarquee";
import { FaGraduationCap } from "react-icons/fa6";

interface ExperienceSectionProps {
  locale: AppLocale;
}

export async function ExperienceSection({ locale }: ExperienceSectionProps) {
  const t = await getTranslations({ locale, namespace: "experience" });
  const s = await getTranslations({ locale, namespace: "skills" });
  const layers = await getTranslations({ locale, namespace: "layers" });
  const experience = getExperience(locale);
  const education = getEducation(locale);

  return (
    <section id="experience" className="scroll-mt-20 border-b border-border">
      <div className="mx-auto grid max-w-5xl gap-12 px-6 py-20 lg:grid-cols-2">
        <Reveal>
          <SectionHeading eyebrow={t("eyebrow")} title={t("title")} subtitle={t("subtitle")} />

          {experience.length > 0 ? (
            <ol className="mt-8 space-y-6 border-l border-border pl-6">
              {experience.map((entry, i) => (
                <li key={i} className="relative">
                  <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full bg-layer-application" />
                  <p className="font-mono text-xs uppercase text-muted">{entry.period}</p>
                  <h3 className="mt-1 font-display text-lg font-semibold">{entry.organization}</h3>
                  <p className="font-mono text-sm text-layer-application">{entry.role}</p>
                  <p className="mt-1 text-sm text-foreground/90">{entry.description}</p>
                </li>
              ))}
            </ol>
          ) : (
            <p className="mt-8 text-sm text-muted">{t("empty")}</p>
          )}

          {education.length > 0 && (
            <div className="mt-10 border-t border-border pt-6">
              <h3 className="font-display text-xl font-semibold tracking-tight">
                {t("educationTitle")}
              </h3>
              <ul className="mt-4 space-y-6">
                {education.map((entry, i) => (
                  <li key={i}>
                    <p className="font-mono text-xs uppercase text-muted">{entry.period}</p>
                    <h3 className="mt-1 font-display text-lg font-semibold">
                      {entry.organizationUrl ? (
                        <a
                          href={entry.organizationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline decoration-layer-application decoration-2 underline-offset-4 hover:text-layer-application"
                        >
                          {entry.organization}
                        </a>
                      ) : (
                        entry.organization
                      )}
                    </h3>
                    <p className="flex items-center gap-1.5 font-mono text-sm text-layer-application">
                      <FaGraduationCap aria-hidden />
                      {entry.role}
                    </p>
                    <p className="mt-1 text-sm text-foreground/90">{entry.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Reveal>

        <Reveal delay={120}>
          <SectionHeading eyebrow={s("eyebrow")} title={s("title")} subtitle={s("subtitle")} />

          <div className="mt-8 space-y-6">
            {(["language", ...LAYER_ORDER] as SkillCategory[]).map((category) => {
              const group = skills.find((g) => g.category === category);
              if (!group) return null;
              const label =
                category === "language" ? s("categories.language") : layers(`${category}.label`);
              return (
                <SkillsMarquee key={category} category={category} label={label} items={group.items} />
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
