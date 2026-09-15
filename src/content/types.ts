import type { AppLocale } from "@/i18n/routing";

export type Layer = "interface" | "application" | "data" | "infra";

export type TechKey =
  | "react"
  | "typescript"
  | "javascript"
  | "vue"
  | "threejs"
  | "mui"
  | "nodejs"
  | "java"
  | "electron"
  | "ethereum"
  | "json"
  | "nextjs"
  | "tailwind"
  | "go"
  | "reactnative";

export interface Project {
  slug: string;
  title: string;
  role: string;
  summary: string;
  pending?: boolean;
  notes?: string[];
  layers: Layer[];
  tech: TechKey[];
  repoUrl: string;
  demoUrl?: string;
  year: number;
}

export interface ExperienceEntry {
  role: string;
  organization: string;
  period: string;
  description: string;
}

export type SocialKey = "github" | "linkedin" | "instagram" | "email";

export interface Profile {
  name: string;
  role: string;
  tagline: string;
  bio: string[];
  location: string;
  email: string;
  socials: { key: SocialKey; url: string }[];
}

export interface SkillGroup {
  layer: Layer;
  items: string[];
}

export type { AppLocale };
