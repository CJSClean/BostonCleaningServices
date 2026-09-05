import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { services } from "@/lib/data/services";
import { locations, countyPages } from "@/lib/data/locations";
import { getAllServiceLocationSlugs } from "@/lib/data/service-locations";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entry = (
    path: string,
    priority: number,
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] = "monthly"
  ) => ({ url: `${SITE_URL}${path}`, lastModified: now, changeFrequency, priority });

  return [
    entry("", 1, "weekly"),
    entry("/about", 0.6),
    entry("/checklist", 0.7),
    entry("/contact", 0.7),
    entry("/privacy-policy", 0.2, "yearly"),
    entry("/terms", 0.2, "yearly"),
    ...services.map((s) => entry(s.href, 0.9)),
    ...countyPages.map((c) => entry(c.href, 0.7)),
    ...locations.map((l) => entry(l.href, 0.8)),
    ...getAllServiceLocationSlugs().map((slug) => entry(`/services/${slug}`, 0.7)),
  ];
}
