import type { MetadataRoute } from "next";
import { siteConfig } from "@/constants/content";
import { servicePages } from "@/constants/servicePages";

// Dates fixes : à mettre à jour quand le contenu de la page change réellement.
const CONTENT_UPDATED = new Date("2026-10-28");
const LEGAL_UPDATED = new Date("2026-10-26");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteConfig.url, lastModified: CONTENT_UPDATED, changeFrequency: "monthly", priority: 1 },
    ...servicePages.map((p) => ({
      url: `${siteConfig.url}/services/${p.slug}`,
      lastModified: CONTENT_UPDATED,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: `${siteConfig.url}/cgv`, lastModified: LEGAL_UPDATED, changeFrequency: "yearly", priority: 0.2 },
    { url: `${siteConfig.url}/mentions-legales`, lastModified: LEGAL_UPDATED, changeFrequency: "yearly", priority: 0.2 },
  ];
}
