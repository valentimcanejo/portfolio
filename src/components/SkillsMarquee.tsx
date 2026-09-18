import type { SkillCategory } from "@/content/types";
import { skillIcons, skillColors } from "./icons";

// Reuses two of the stack-layer accent colors just as generic visual
// variety between the two groups — not a claim that languages "are" the
// interface layer or tools "are" the application layer.
const categoryClasses: Record<SkillCategory, { text: string; border: string }> = {
  language: { text: "text-layer-interface", border: "border-layer-interface" },
  tool: { text: "text-layer-application", border: "border-layer-application" },
};

interface SkillsMarqueeProps {
  category: SkillCategory;
  label: string;
  items: string[];
}

export function SkillsMarquee({ category, label, items }: SkillsMarqueeProps) {
  const classes = categoryClasses[category];

  return (
    <div>
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
