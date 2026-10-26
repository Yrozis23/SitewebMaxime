import type { MetadataRoute } from "next";
import { siteConfig } from "@/constants/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: siteConfig.url, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${siteConfig.url}/cgv`, lastModified, changeFrequency: "yearly", priority: 0.2 },
    { url: `${siteConfig.url}/mentions-legales`, lastModified, changeFrequency: "yearly", priority: 0.2 },
  ];
}
