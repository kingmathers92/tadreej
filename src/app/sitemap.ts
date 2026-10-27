import type { MetadataRoute } from "next";
import { site } from "@/lib/config";
import { products } from "@/lib/products";
import { locales } from "@/lib/i18n/types";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/shop", "/about", "/contact", ...products.map((p) => `/shop/${p.slug}`)];

  return locales.flatMap((locale) =>
    paths.map((path) => ({
      url: `${site.url}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : path.startsWith("/shop/") ? 0.6 : 0.7,
      alternates: {
        languages: Object.fromEntries(locales.map((l) => [l, `${site.url}/${l}${path}`])),
      },
    }))
  );
}
