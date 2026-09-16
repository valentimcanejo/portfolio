import type { AppLocale } from "@/content/types";
import { getStats } from "@/content";
import { StatCounter } from "./StatCounter";

interface StatsSectionProps {
  locale: AppLocale;
}

export function StatsSection({ locale }: StatsSectionProps) {
  const stats = getStats(locale);

  return (
    <section className="border-b border-border">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-6 py-12 sm:grid-cols-4 sm:py-16">
        {stats.map((stat, i) => (
          <StatCounter key={stat.label} stat={stat} locale={locale} delay={i * 100} />
        ))}
      </div>
    </section>
  );
}
