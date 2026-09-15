import { getTranslations } from "next-intl/server";
import type { AppLocale } from "@/content/types";
import { getProfile } from "@/content";
import { socialIcons } from "./icons";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./Reveal";
import { buttonClass } from "@/lib/styles";
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlineArrowDownTray } from "react-icons/hi2";

interface ContactProps {
  locale: AppLocale;
}

export async function Contact({ locale }: ContactProps) {
  const t = await getTranslations({ locale, namespace: "contact" });
  const profile = getProfile(locale);

  return (
    <section id="contact" className="scroll-mt-20">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <Reveal>
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("title")}
            subtitle={t("subtitle")}
            align="center"
          />

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={`mailto:${profile.email}`} className={buttonClass("primary")}>
              <HiOutlineMail aria-hidden /> {t("emailCta")}
            </a>
            <a href="/cv-en.pdf" className={buttonClass("secondary")} download>
              <HiOutlineArrowDownTray aria-hidden /> {t("resumeEn")}
            </a>
            <a href="/cv-pt.pdf" className={buttonClass("secondary")} download>
              <HiOutlineArrowDownTray aria-hidden /> {t("resumePt")}
            </a>
          </div>

          <div className="mt-12 text-center">
            <p className="font-mono text-xs uppercase text-muted">{t("socialTitle")}</p>
            <div className="mt-3 flex justify-center gap-6 text-2xl text-muted">
              {profile.socials.map(({ key, url }) => {
                const Icon = socialIcons[key];
                return (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={key}
                    className="transition-colors hover:text-foreground"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
