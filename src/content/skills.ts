import type { SkillGroup } from "@/content/types";

// Grounded in the stacks actually used across the projects above, plus this
// site's own stack. Tech names aren't translated, so this list is shared
// across locales — only the layer labels (from messages) are localized.
export const skills: SkillGroup[] = [
  {
    layer: "interface",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Vue",
      "React Native (Expo)",
      "Three.js",
      "Material UI",
      "Tailwind CSS",
    ],
  },
  {
    layer: "application",
    items: ["Node.js", "Go", "Java", "JavaScript", "Electron"],
  },
  {
    layer: "data",
    items: ["JSON Server", "Ethereum / Web3"],
  },
  {
    layer: "infra",
    items: ["Git & GitHub", "Vercel", "Firebase Hosting"],
  },
];
