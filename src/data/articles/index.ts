import type { Article, ArticleCluster } from "./types";
import { cluster1Articles } from "./cluster-1-sipp-fundamentals";
import { cluster2Articles } from "./cluster-2-sipp-mortgages";
import { cluster3Articles } from "./cluster-3-ssas-property";
import { cluster4Articles } from "./cluster-4-tax-planning";
import { cluster5Articles } from "./cluster-5-connected-party";
import { cluster6Articles } from "./cluster-6-property-types";
import { cluster7Articles } from "./cluster-7-due-diligence";
import { cluster8Articles } from "./cluster-8-lenders-market";
import { cluster9Articles } from "./cluster-9-investment-strategy";
import { cluster10Articles } from "./cluster-10-advisers-regulation";
import { cluster11Articles } from "./cluster-11-case-studies";

export const clusters: ArticleCluster[] = [
  {
    name: "SIPP Property Fundamentals",
    slug: "sipp-fundamentals",
    description: "Everything you need to know about SIPPs and commercial property investment",
    heroImage: "/images/learn/sipp-fundamentals.webp",
    articles: cluster1Articles,
  },
  {
    name: "SIPP Mortgages & Borrowing",
    slug: "sipp-mortgages",
    description: "How pension borrowing works, rates, and mortgage options",
    heroImage: "/images/learn/sipp-mortgages.webp",
    articles: cluster2Articles,
  },
  {
    name: "SSAS Property & Loanback",
    slug: "ssas-property",
    description: "Small Self-Administered Schemes for property investment",
    heroImage: "/images/learn/ssas-property.webp",
    articles: cluster3Articles,
  },
  {
    name: "Tax & Financial Planning",
    slug: "tax-planning",
    description: "Tax benefits, allowances, and financial planning with SIPP property",
    heroImage: "/images/learn/tax-planning.webp",
    articles: cluster4Articles,
  },
  {
    name: "Connected Party Transactions",
    slug: "connected-party",
    description: "HMRC rules for transactions between your SIPP and your business",
    heroImage: "/images/learn/connected-party.webp",
    articles: cluster5Articles,
  },
  {
    name: "Property Types & Sectors",
    slug: "property-types",
    description: "Which property types can a SIPP hold and sector-specific guidance",
    heroImage: "/images/learn/property-types.webp",
    articles: cluster6Articles,
  },
  {
    name: "Due Diligence & Process",
    slug: "due-diligence",
    description: "Surveys, valuations, solicitors, and the purchase process",
    heroImage: "/images/learn/due-diligence.webp",
    articles: cluster7Articles,
  },
  {
    name: "Lenders & Market",
    slug: "lenders-market",
    description: "SIPP mortgage lenders, brokers, and market trends",
    heroImage: "/images/learn/lenders-market.webp",
    articles: cluster8Articles,
  },
  {
    name: "Investment Strategy & Returns",
    slug: "investment-strategy",
    description: "Returns, portfolio building, and exit strategies for SIPP property",
    heroImage: "/images/learn/investment-strategy.webp",
    articles: cluster9Articles,
  },
  {
    name: "Professional Advisers & Regulation",
    slug: "advisers-regulation",
    description: "IFAs, accountants, FCA regulation, and HMRC compliance",
    heroImage: "/images/learn/advisers-regulation.webp",
    articles: cluster10Articles,
  },
  {
    name: "Case Studies & Scenarios",
    slug: "case-studies",
    description: "Real-world examples of SIPP and SSAS property transactions",
    heroImage: "/images/learn/case-studies.webp",
    articles: cluster11Articles,
  },
];

export const allArticles: Article[] = clusters.flatMap((c) => c.articles);

export function getArticleBySlug(slug: string): Article | undefined {
  return allArticles.find((a) => a.slug === slug);
}

export function getRelatedArticles(article: Article): Article[] {
  return article.relatedSlugs
    .map((slug) => getArticleBySlug(slug))
    .filter((a): a is Article => a !== undefined);
}

export function getClusterForArticle(article: Article): ArticleCluster | undefined {
  return clusters.find((c) => c.slug === article.clusterSlug);
}
