import { getTranslations } from "next-intl/server";
import type { AppLocale } from "@/content/types";
import { getProfile } from "@/content";
import { StackDiagram } from "./StackDiagram";
import { FramedPhoto } from "./FramedPhoto";
import { BrazilFlagIcon } from "./icons";
import { buttonClass } from "@/lib/styles";

function renderBioParagraph(paragraph: string, locale: AppLocale, key: number) {
  if (locale === "en" && paragraph.includes("Brazil")) {
    const [before, after] = paragraph.split("Brazil");
    return (
      <p key={key}>
        {before}Brazil
        <BrazilFlagIcon className="ml-1.5 inline-block h-3 w-[1.05rem] align-middle" />
        {after}
      </p>
    );
  }
  return <p key={key}>{paragraph}</p>;
}

interface HeroProps {
  locale: AppLocale;
}

export async function Hero({ locale }: HeroProps) {
  const t = await getTranslations({ locale, namespace: "hero" });
  const profile = getProfile(locale);

  return (
    <section id="about" className="scroll-mt-20 border-b border-border">
      <div className="mx-auto grid max-w-5xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center lg:py-28">
        <div>
          <p className="font-mono text-sm text-layer-application">{t("eyebrow")}</p>
          <div className="mt-3 flex items-start gap-5">
            <FramedPhoto />
            <div>
              <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl lg:text-[3.25rem]">
                {profile.name}
              </h1>
              <p className="mt-2 text-lg text-muted">{profile.tagline}</p>
            </div>
          </div>

          <div className="mt-6 space-y-4 text-foreground/90">
            {profile.bio.map((paragraph, i) => renderBioParagraph(paragraph, locale, i))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className={buttonClass("primary")}>
              {t("ctaProjects")}
            </a>
            <a href="#contact" className={buttonClass("secondary")}>
              {t("ctaContact")}
            </a>
          </div>
        </div>

        <StackDiagram locale={locale} />
      </div>
    </section>
  );
}
