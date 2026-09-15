import { getTranslations } from "next-intl/server";
import type { AppLocale } from "@/content/types";
import { LAYER_ORDER, layerClasses } from "@/lib/layers";

interface StackDiagramProps {
  locale: AppLocale;
}

export async function StackDiagram({ locale }: StackDiagramProps) {
  const t = await getTranslations({ locale, namespace: "layers" });
  const hero = await getTranslations({ locale, namespace: "hero" });

  return (
    <div>
      <div className="flex flex-col gap-3">
        {LAYER_ORDER.map((layer, i) => {
          const classes = layerClasses[layer];
          return (
            <div
              key={layer}
              className={`animate-stack-in rounded-sm border-l-4 bg-foreground/[0.03] px-4 py-3 transition-all duration-300 hover:translate-x-1 hover:bg-foreground/[0.06] ${classes.border}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex items-baseline justify-between gap-4">
                <span className={`font-mono text-xs uppercase tracking-wide ${classes.text}`}>
                  {t(`${layer}.label`)}
                </span>
              </div>
              <p className="mt-1 text-sm text-muted">{t(`${layer}.hint`)}</p>
            </div>
          );
        })}
      </div>
      <p className="mt-4 font-mono text-xs text-muted">
        <span className="uppercase text-foreground">{hero("legendTitle")}</span> — {hero("legendHint")}
      </p>
    </div>
  );
}
