import type { Layer } from "@/content/types";
import { layerClasses } from "@/lib/layers";
import { skillIcons, skillColors } from "./icons";

interface SkillsMarqueeProps {
  layer: Layer;
  label: string;
  items: string[];
  reverse?: boolean;
}

export function SkillsMarquee({ layer, label, items, reverse }: SkillsMarqueeProps) {
  const classes = layerClasses[layer];
  const duration = Math.max(items.length * 8, 40);

  return (
    <div>
      <p className={`font-mono text-xs uppercase ${classes.text}`}>{label}</p>
      <div className="group relative mt-3 overflow-hidden motion-reduce:overflow-visible [mask-image:linear-gradient(90deg,transparent,black_5%,black_95%,transparent)]">
        <div
          className={`flex w-max gap-3 animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:w-full ${
            reverse ? "[animation-direction:reverse]" : ""
          }`}
          style={{ animationDuration: `${duration}s` }}
        >
          {[...items, ...items].map((item, i) => {
            const Icon = skillIcons[item];
            const color = skillColors[item];
            return (
              <span
                key={`${item}-${i}`}
                aria-hidden={i >= items.length}
                className={`flex h-24 w-24 shrink-0 flex-col items-center justify-center gap-2 rounded-md border p-2 text-center transition-colors hover:border-foreground ${classes.border} ${
                  i >= items.length ? "motion-reduce:hidden" : ""
                }`}
              >
                {Icon && (
                  <Icon aria-hidden className="text-3xl" style={color ? { color } : undefined} />
                )}
                <span className="text-xs leading-tight">{item}</span>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
