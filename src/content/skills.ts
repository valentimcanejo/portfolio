import type { SkillGroup } from "@/content/types";

// Sourced from the resume's own skills list. Tech names aren't translated,
// so this is shared across locales — only the layer labels (from messages)
// are localized.
export const skills: SkillGroup[] = [
  {
    layer: "interface",
    items: [
      "React",
      "Next.js",
      "React Native",
      "Expo",
      "NativeBase / gluestack",
      "Material UI",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "Kotlin",
      "Swift",
    ],
  },
  {
    layer: "application",
    items: ["TypeScript", "JavaScript", "Node.js", "NestJS", "Express"],
  },
  {
    layer: "data",
    items: [
      "SQL",
      "PostgreSQL",
      "MongoDB",
      "SQL Server",
      "Firebase",
      "Supabase",
      "Prisma",
      "Sequelize",
    ],
  },
  {
    layer: "infra",
    items: [
      "Git",
      "GitHub Actions",
      "Vercel",
      "Jira / Atlassian",
      "Jest",
      "Selenium",
      "Puppeteer",
      "Storybook",
      "Figma",
      "Tauri",
      "Electron",
    ],
  },
];
