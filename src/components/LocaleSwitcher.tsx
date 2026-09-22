"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("language");

  return (
    <div className="inline-flex items-center gap-2 font-mono text-xs">
      <span className="hidden text-muted lg:inline">// {t("label").toLowerCase()}</span>
      <div
        className="inline-flex items-center rounded-sm border border-border text-sm"
        role="group"
        aria-label={t("label")}
      >
        {routing.locales.map((loc) => (
          <button
            key={loc}
            type="button"
            aria-pressed={loc === locale}
            onClick={() => router.replace(pathname, { locale: loc })}
            className={`px-3 py-1.5 font-semibold uppercase transition-colors ${
              loc === locale
                ? "bg-foreground text-background"
                : "text-muted hover:text-foreground"
            }`}
          >
            {loc}
          </button>
        ))}
      </div>
    </div>
  );
}
