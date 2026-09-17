import { getTranslations } from "next-intl/server";
import type { AppLocale } from "@/content/types";
import { getExperience, getEducation, skills } from "@/content";
import { LAYER_ORDER, layerClasses } from "@/lib/layers";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./Reveal";

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
              <p className="font-mono text-xs uppercase text-muted">{t("educationTitle")}</p>
              <ul className="mt-3 space-y-3">
                {education.map((entry, i) => (
                  <li key={i} className="flex flex-wrap items-baseline justify-between gap-x-3">
                    <span>
                      <span className="font-display font-semibold">{entry.organization}</span>
                      <span className="ml-2 text-sm text-muted">{entry.role}</span>
                    </span>
                    <span className="font-mono text-xs text-muted">{entry.period}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Reveal>

        <Reveal delay={120}>
          <SectionHeading eyebrow={s("eyebrow")} title={s("title")} subtitle={s("subtitle")} />

          <div className="mt-8 space-y-5">
            {LAYER_ORDER.map((layer) => {
              const group = skills.find((g) => g.layer === layer);
              if (!group) return null;
              const classes = layerClasses[layer];
              return (
                <div key={layer}>
                  <p className={`font-mono text-xs uppercase ${classes.text}`}>
                    {layers(`${layer}.label`)}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className={`rounded-sm border px-2.5 py-1 text-sm transition-colors hover:border-foreground hover:text-foreground ${classes.border}`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
