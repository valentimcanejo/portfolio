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
      className="inline-flex items-center rounded-sm border-2 border-layer-application font-mono text-sm font-semibold"
      role="group"
      aria-label={t("label")}
    >
      {routing.locales.map((loc) => (
        <button
          key={loc}
          type="button"
          aria-pressed={loc === locale}
          onClick={() => router.replace(pathname, { locale: loc })}
          className={`px-3 py-1.5 uppercase transition-colors ${
            loc === locale
              ? "bg-layer-application text-background"
              : "text-layer-application hover:bg-layer-application/10"
          }`}
        >
          {loc}
        </button>
      ))}
    </div>
  );
}
