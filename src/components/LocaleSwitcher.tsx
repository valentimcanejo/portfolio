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
    <div
      className="inline-flex items-center rounded-sm border border-border font-mono text-xs"
      role="group"
      aria-label={t("label")}
    >
      {routing.locales.map((loc) => (
        <button
          key={loc}
          type="button"
          aria-pressed={loc === locale}
          onClick={() => router.replace(pathname, { locale: loc })}
          className={`px-2.5 py-1.5 uppercase transition-colors ${
            loc === locale
              ? "bg-foreground text-background"
              : "text-muted hover:text-foreground"
          }`}
        >
          {loc}
        </button>
      ))}
    </div>
  );
}
