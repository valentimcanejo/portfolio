import type { Layer } from "@/content/types";

export const LAYER_ORDER: Layer[] = ["interface", "application", "data", "infra"];

// Literal class names on purpose — Tailwind's scanner needs to see these
// strings verbatim in source, they can't be built from a template at runtime.
export const layerClasses: Record<
  Layer,
  { bg: string; text: string; border: string; ring: string }
> = {
  interface: {
    bg: "bg-layer-interface",
    text: "text-layer-interface",
    border: "border-layer-interface",
    ring: "ring-layer-interface",
  },
  application: {
    bg: "bg-layer-application",
    text: "text-layer-application",
    border: "border-layer-application",
    ring: "ring-layer-application",
  },
  data: {
    bg: "bg-layer-data",
    text: "text-layer-data",
    border: "border-layer-data",
    ring: "ring-layer-data",
  },
  infra: {
    bg: "bg-layer-infra",
    text: "text-layer-infra",
    border: "border-layer-infra",
    ring: "ring-layer-infra",
  },
};
