export function buttonClass(variant: "primary" | "secondary" = "primary") {
  const base =
    "inline-flex items-center gap-2 rounded-sm px-5 py-2.5 font-mono text-sm transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2";
  if (variant === "primary") {
    return `${base} bg-foreground text-background hover:bg-layer-application hover:shadow-lg`;
  }
  return `${base} border border-border text-foreground hover:border-layer-application hover:text-layer-application hover:shadow-lg`;
}
