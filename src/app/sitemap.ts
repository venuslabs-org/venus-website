import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://venuslabs.net";
  return [
    { url: `${base}/`, changeFrequency: "monthly", priority: 1 },
  ];
}



