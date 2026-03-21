import type { MetadataRoute } from "next";
import { allArticles } from "@/data/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sipppropertyfinance.co.uk";

  const coreRoutes = [
    { path: "/", changeFrequency: "weekly" as const, priority: 1 },
    { path: "/sipp-property-mortgage", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/ssas-property-finance", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/commercial-property-sipp", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/lenders", changeFrequency: "weekly" as const, priority: 0.8 },
    { path: "/learn", changeFrequency: "weekly" as const, priority: 0.8 },
    { path: "/contact", changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/sipp-mortgage-calculator", changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/sipp-ltv-calculator", changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/ssas-loan-calculator", changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/rental-yield-calculator", changeFrequency: "monthly" as const, priority: 0.7 },
  ];

  const articleRoutes = allArticles.map((article) => ({
    path: `/learn/${article.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...coreRoutes, ...articleRoutes].map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
