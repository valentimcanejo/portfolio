import type { SkillGroup } from "@/content/types";

// Sourced from the resume's own skills list. Tech names aren't translated,
// so this is shared across locales — only the category labels (from
// messages) are localized. Languages get their own group; the rest stay
// organized by the stack layer each tool/framework lives in.
export const skills: SkillGroup[] = [
  {
    category: "language",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "SQL", "Kotlin", "Swift"],
  },
  {
    category: "interface",
    items: [
      "React",
      "Next.js",
      "React Native",
      "Expo",
      "NativeBase / gluestack",
      "Material UI",
      "Tailwind CSS",
    ],
  },
  {
    category: "application",
    items: ["Node.js", "NestJS", "Express"],
  },
  {
    category: "data",
    items: ["PostgreSQL", "MongoDB", "SQL Server", "Firebase", "Supabase", "Prisma", "Sequelize"],
  },
  {
    category: "infra",
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
