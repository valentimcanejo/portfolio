import type { SkillCategory } from "@/content/types";
import { layerClasses } from "@/lib/layers";
import { skillIcons, skillColors } from "./icons";

// Languages get a neutral style since they aren't a stack layer; the other
// four categories reuse the same accent colors as the exploded-stack diagram.
const categoryClasses: Record<SkillCategory, { text: string; border: string }> = {
  language: { text: "text-muted", border: "border-border" },
  interface: layerClasses.interface,
  application: layerClasses.application,
  data: layerClasses.data,
  infra: layerClasses.infra,
};

interface SkillsMarqueeProps {
  category: SkillCategory;
  label: string;
  items: string[];
}

export function SkillsMarquee({ category, label, items }: SkillsMarqueeProps) {
  const classes = categoryClasses[category];

  return (
    <div id={`skill-group-${category}`} className="scroll-mt-24 rounded-md transition-colors duration-300">
      <p className={`font-mono text-xs uppercase ${classes.text}`}>{label}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((item) => {
          const Icon = skillIcons[item];
          const color = skillColors[item];
          return (
            <span
              key={item}
              className={`flex h-16 w-16 shrink-0 flex-col items-center justify-center gap-1 rounded-md border p-1 text-center transition-colors hover:border-foreground ${classes.border}`}
            >
              {Icon && (
                <Icon aria-hidden className="text-lg" style={color ? { color } : undefined} />
              )}
              <span className="text-[10px] leading-tight">{item}</span>
            </span>
          );
        })}
      </div>
    </div>
  );
}
