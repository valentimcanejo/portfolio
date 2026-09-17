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
  const duration = Math.max(items.length * 3, 18);

  return (
    <div>
      <p className={`font-mono text-xs uppercase ${classes.text}`}>{label}</p>
      <div className="group relative mt-2 overflow-hidden motion-reduce:overflow-visible [mask-image:linear-gradient(90deg,transparent,black_5%,black_95%,transparent)]">
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
                className={`inline-flex shrink-0 items-center gap-2 rounded-sm border px-3 py-1.5 text-sm whitespace-nowrap ${classes.border} ${
                  i >= items.length ? "motion-reduce:hidden" : ""
                }`}
              >
                {Icon && (
                  <Icon
                    aria-hidden
                    className="text-base"
                    style={color ? { color } : undefined}
                  />
                )}
                {item}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
