import { getTranslations } from "next-intl/server";
import type { AppLocale } from "@/content/types";
import { LAYER_ORDER } from "@/lib/layers";
import { StackDiagramInteractive } from "./StackDiagramInteractive";

interface StackDiagramProps {
  locale: AppLocale;
}

export async function StackDiagram({ locale }: StackDiagramProps) {
  const t = await getTranslations({ locale, namespace: "layers" });
  const hero = await getTranslations({ locale, namespace: "hero" });

  const layers = LAYER_ORDER.map((layer) => ({
    layer,
    label: t(`${layer}.label`),
    hint: t(`${layer}.hint`),
  }));

  return (
    <StackDiagramInteractive
      layers={layers}
      legendTitle={hero("legendTitle")}
      legendHint={hero("legendHint")}
    />
  );
}
