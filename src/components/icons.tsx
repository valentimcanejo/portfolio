import type { IconType } from "react-icons";
import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaVuejs,
  FaEthereum,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaGolang,
  FaGitAlt,
  FaDatabase,
  FaPuzzlePiece,
  FaDisplay,
  FaServer,
  FaGear,
} from "react-icons/fa6";
import {
  SiTypescript,
  SiJavascript,
  SiThreedotjs,
  SiMaterialdesign,
  SiElectron,
  SiJson,
  SiNextdotjs,
  SiTailwindcss,
  SiExpo,
  SiKotlin,
  SiSwift,
  SiNestjs,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiVercel,
  SiHtml5,
  SiCss,
  SiExpress,
  SiSupabase,
  SiPrisma,
  SiSequelize,
  SiGithubactions,
  SiJira,
  SiJest,
  SiSelenium,
  SiPuppeteer,
  SiStorybook,
  SiFigma,
  SiTauri,
  SiFlutter,
  SiDart,
} from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import type { TechKey, SocialKey, Layer } from "@/content/types";

export const layerIcons: Record<Layer, IconType> = {
  interface: FaDisplay,
  application: FaServer,
  data: FaDatabase,
  infra: FaGear,
};

export const techIcons: Record<TechKey, IconType> = {
  react: FaReact,
  typescript: SiTypescript,
  javascript: SiJavascript,
  vue: FaVuejs,
  threejs: SiThreedotjs,
  mui: SiMaterialdesign,
  nodejs: FaNodeJs,
  java: FaJava,
  electron: SiElectron,
  ethereum: FaEthereum,
  json: SiJson,
  nextjs: SiNextdotjs,
  tailwind: SiTailwindcss,
  go: FaGolang,
  reactnative: SiExpo,
  kotlin: SiKotlin,
  swift: SiSwift,
  nestjs: SiNestjs,
  postgresql: SiPostgresql,
  mongodb: SiMongodb,
  firebase: SiFirebase,
  vercel: SiVercel,
  flutter: SiFlutter,
  dart: SiDart,
  gluestack: FaPuzzlePiece,
};

// Hand-drawn (not emoji) so it renders identically everywhere — Windows
// fonts commonly fall back flag emoji to plain "BR" text.
export function BrazilFlagIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 14" className={className} aria-hidden role="img">
      <rect width="20" height="14" rx="1.5" fill="#009c3b" />
      <polygon points="10,2 18,7 10,12 2,7" fill="#ffdf00" />
      <circle cx="10" cy="7" r="3.2" fill="#002776" />
    </svg>
  );
}

export const socialIcons: Record<SocialKey, IconType> = {
  github: FaGithub,
  linkedin: FaLinkedin,
  instagram: FaInstagram,
  email: HiOutlineMail,
};

// Icons and brand colors for the free-text skills list (src/content/skills.ts).
// Colors are the technology's own brand color; omitted where the mark is
// black/near-black and would disappear on a dark background (falls back to
// the current text color instead).
export const skillIcons: Record<string, IconType> = {
  React: FaReact,
  "Next.js": SiNextdotjs,
  "React Native": FaReact,
  Expo: SiExpo,
  "NativeBase / gluestack": FaPuzzlePiece,
  "Material UI": SiMaterialdesign,
  "Tailwind CSS": SiTailwindcss,
  HTML: SiHtml5,
  CSS: SiCss,
  Kotlin: SiKotlin,
  Swift: SiSwift,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  "Node.js": FaNodeJs,
  NestJS: SiNestjs,
  Express: SiExpress,
  SQL: FaDatabase,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  "SQL Server": FaDatabase,
  Firebase: SiFirebase,
  Supabase: SiSupabase,
  Prisma: SiPrisma,
  Sequelize: SiSequelize,
  Git: FaGitAlt,
  "GitHub Actions": SiGithubactions,
  Vercel: SiVercel,
  "Jira / Atlassian": SiJira,
  Jest: SiJest,
  Selenium: SiSelenium,
  Puppeteer: SiPuppeteer,
  Storybook: SiStorybook,
  Figma: SiFigma,
  Tauri: SiTauri,
  Electron: SiElectron,
};

export const skillColors: Record<string, string> = {
  React: "#61dafb",
  "React Native": "#61dafb",
  "Material UI": "#007fff",
  "Tailwind CSS": "#06b6d4",
  HTML: "#e34f26",
  CSS: "#1572b6",
  Kotlin: "#7f52ff",
  Swift: "#f05138",
  TypeScript: "#3178c6",
  JavaScript: "#f7df1e",
  "Node.js": "#339933",
  NestJS: "#e0234e",
  PostgreSQL: "#4169e1",
  MongoDB: "#47a248",
  Firebase: "#ffca28",
  Supabase: "#3fcf8e",
  Sequelize: "#52b0e7",
  Git: "#f05032",
  "GitHub Actions": "#2088ff",
  "Jira / Atlassian": "#0052cc",
  Jest: "#c21325",
  Selenium: "#43b02a",
  Puppeteer: "#40b5a4",
  Storybook: "#ff4785",
  Figma: "#f24e1e",
  Tauri: "#ffc131",
  Electron: "#47848f",
};
