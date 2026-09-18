import type { Layer } from "@/content/types";
import { layerClasses } from "@/lib/layers";
import { skillIcons, skillColors } from "./icons";

interface SkillsMarqueeProps {
  layer: Layer;
  label: string;
  items: string[];
}

export function SkillsMarquee({ layer, label, items }: SkillsMarqueeProps) {
  const classes = layerClasses[layer];

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
