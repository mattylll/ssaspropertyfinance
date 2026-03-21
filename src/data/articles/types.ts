export interface ArticleSection {
  id: string;
  heading: string;
  content: string; // HTML string
}

export interface Article {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  cluster: string;
  clusterSlug: string;
  articleNumber: number;
  readingTime: string;
  publishDate: string; // ISO date e.g. "2026-03-20"
  updatedDate?: string; // ISO date if revised
  schemaType: "Article" | "FAQPage" | "HowTo";
  sections: ArticleSection[];
  keyTakeaways: string[];
  relatedSlugs: string[];
  relatedCalculators?: { title: string; href: string }[];
  relatedPages?: { title: string; href: string }[];
}

export interface ArticleCluster {
  name: string;
  slug: string;
  description: string;
  heroImage: string; // path to cluster hero image
  articles: Article[];
}
