import type { Metadata } from "next";
import { fetchQuery } from "convex/nextjs";
import { api } from "../../../convex/_generated/api";
import Link from "next/link";
import Image from "next/image";
import { Clock, Calendar } from "lucide-react";
import { GuidesFilter } from "./GuidesFilter";

export const metadata: Metadata = {
  title: "SSAS Property Finance Guides",
  description:
    "Expert guides on SSAS property finance, pension-backed commercial mortgages, HMRC rules, loanback, and investment strategies. Written by Matt Lenzie.",
  alternates: { canonical: "/guides" },
};

const CATEGORIES = [
  "All",
  "SSAS Fundamentals",
  "Property Purchase",
  "Borrowing & LTV",
  "Loanback",
  "Tax & HMRC",
  "Property Types",
  "Connected Parties",
  "Finance & Rates",
  "Case Studies",
  "Strategy & Planning",
];

type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  heroImage: string;
  heroImageAlt: string;
  publishedAt: number;
  readingTime: number;
};

export default async function GuidesPage() {
  const articles: Article[] = await fetchQuery(api.articles.listPublished);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "SSAS Property Finance Guides",
    description:
      "Expert guides covering all aspects of SSAS property finance and pension-backed commercial mortgages.",
    numberOfItems: articles.length,
    itemListElement: articles.map((article: Article, i: number) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `https://ssaspropertyfinance.co.uk/guides/${article.slug}`,
      name: article.title,
    })),
  };

  return (
    <>
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-heading text-4xl sm:text-5xl text-white mb-4">
              SSAS Property Finance Guides
            </h1>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              Expert guides covering SSAS pensions, commercial property
              investment, HMRC compliance, and financing strategies. Written by
              Matt Lenzie, former banker and corporate finance partner.
            </p>
          </div>

          {/* Category filter + article grid */}
          <GuidesFilter articles={articles} categories={CATEGORIES} />
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
