import type { MetadataRoute } from "next";

import { businessConfig } from "@/config/business";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: businessConfig.url,

      lastModified: new Date(),

      changeFrequency: "monthly",

      priority: 1,
    },
  ];
}