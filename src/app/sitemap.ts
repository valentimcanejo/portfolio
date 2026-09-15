import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { getProjects } from "@/content";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of routing.locales) {
    entries.push({ url: `${SITE_URL}/${locale}`, changeFrequency: "monthly", priority: 1 });
    for (const project of getProjects(locale)) {
      entries.push({
        url: `${SITE_URL}/${locale}/projects/${project.slug}`,
        changeFrequency: "yearly",
        priority: 0.6,
      });
    }
  }

  return entries;
}
