import type { AppLocale } from "@/i18n/routing";
import type { Profile, Project, ExperienceEntry, Stat } from "@/content/types";

import { profile as enProfile } from "./en/profile";
import { profile as ptProfile } from "./pt/profile";
import { projects as enProjects } from "./en/projects";
import { projects as ptProjects } from "./pt/projects";
import { experience as enExperience } from "./en/experience";
import { experience as ptExperience } from "./pt/experience";
import { stats as enStats } from "./en/stats";
import { stats as ptStats } from "./pt/stats";

const profiles: Record<AppLocale, Profile> = { en: enProfile, pt: ptProfile };
const projectsByLocale: Record<AppLocale, Project[]> = {
  en: enProjects,
  pt: ptProjects,
};
const experienceByLocale: Record<AppLocale, ExperienceEntry[]> = {
  en: enExperience,
  pt: ptExperience,
};
const statsByLocale: Record<AppLocale, Stat[]> = { en: enStats, pt: ptStats };

export function getProfile(locale: AppLocale): Profile {
  return profiles[locale];
}

export function getProjects(locale: AppLocale): Project[] {
  return projectsByLocale[locale];
}

export function getProject(locale: AppLocale, slug: string): Project | undefined {
  return projectsByLocale[locale].find((project) => project.slug === slug);
}

export function getExperience(locale: AppLocale): ExperienceEntry[] {
  return experienceByLocale[locale];
}

export function getStats(locale: AppLocale): Stat[] {
  return statsByLocale[locale];
}

export { skills } from "./skills";
export type { Layer, TechKey, SocialKey, Stat } from "./types";
