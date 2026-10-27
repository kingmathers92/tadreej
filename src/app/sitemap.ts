import type { MetadataRoute } from "next";
import { site } from "@/lib/config";
import { products } from "@/lib/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/shop", "/about", "/contact"].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const productRoutes = products.map((p) => ({
    url: `${site.url}/shop/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...productRoutes];
}
