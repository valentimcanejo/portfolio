"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { AppLocale, Stat } from "@/content/types";
import { layerClasses } from "@/lib/layers";

interface StatCounterProps {
  stat: Stat;
  locale: AppLocale;
  delay?: number;
}

const DURATION_MS = 1200;
const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

export function StatCounter({ stat, locale, delay = 0 }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(0);
  const formatter = useMemo(
    () => new Intl.NumberFormat(locale === "pt" ? "pt-BR" : "en-US"),
    [locale],
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        if (reduceMotion) {
          setDisplay(stat.value);
          return;
        }

        const timeout = setTimeout(() => {
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - start) / DURATION_MS, 1);
            setDisplay(Math.round(stat.value * easeOutExpo(progress)));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }, delay);

        return () => clearTimeout(timeout);
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [stat.value, delay]);

  const classes = layerClasses[stat.layer];

  return (
    <div ref={ref}>
      <p className={`font-mono text-4xl font-semibold tabular-nums sm:text-5xl ${classes.text}`}>
        {formatter.format(display)}
        {stat.suffix}
      </p>
      <p className="mt-2 text-sm text-muted">{stat.label}</p>
    </div>
  );
}
