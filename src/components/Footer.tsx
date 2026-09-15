import { useTranslations, useLocale } from "next-intl";
import { getProfile } from "@/content";
import { socialIcons } from "./icons";

export function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale() as "en" | "pt";
  const profile = getProfile(locale);

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono">
          © {new Date().getFullYear().toString()} {profile.name} — {t("builtWith")}
        </p>
        <div className="flex items-center gap-4">
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
                <Icon size={16} />
              </a>
            );
          })}
          <a href="#top" className="font-mono transition-colors hover:text-foreground">
            {t("backToTop")}
          </a>
        </div>
      </div>
    </footer>
  );
}
