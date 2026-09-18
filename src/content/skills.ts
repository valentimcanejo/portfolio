import type { SkillGroup } from "@/content/types";

// Sourced from the resume's own skills list. Tech names aren't translated,
// so this is shared across locales — only the category labels (from
// messages) are localized.
export const skills: SkillGroup[] = [
  {
    category: "language",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "SQL", "Kotlin", "Swift"],
  },
  {
    category: "tool",
    items: [
      "React",
      "Next.js",
      "React Native",
      "Expo",
      "NativeBase / gluestack",
      "Material UI",
      "Tailwind CSS",
      "Node.js",
      "NestJS",
      "Express",
      "PostgreSQL",
      "MongoDB",
      "SQL Server",
      "Firebase",
      "Supabase",
      "Prisma",
      "Sequelize",
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
