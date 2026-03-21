import type { Metadata } from "next";
import { fetchQuery } from "convex/nextjs";
import { api } from "../../../../convex/_generated/api";
import Link from "next/link";
import Image from "next/image";
import { Clock, Calendar, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";

type Article = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  author: string;
  authorTitle: string;
  heroImage: string;
  heroImageAlt: string;
  publishedAt: number;
  updatedAt: number;
  readingTime: number;
  isPublished: boolean;
  relatedSlugs: string[];
  primaryKeyword: string;
  secondaryKeywords: string[];
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs: { slug: string; publishedAt: number }[] = await fetchQuery(
    api.articles.getAllSlugs
  );
  return slugs.map((s: { slug: string }) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article: Article | null = await fetchQuery(api.articles.getBySlug, {
    slug,
  });
  if (!article) return { title: "Article Not Found" };

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    keywords: [article.primaryKeyword, ...article.secondaryKeywords],
    alternates: { canonical: `/guides/${slug}` },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      type: "article",
      publishedTime: new Date(article.publishedAt).toISOString(),
      modifiedTime: new Date(article.updatedAt).toISOString(),
      authors: [article.author],
      images: [
        {
          url: article.heroImage,
          width: 1200,
          height: 630,
          alt: article.heroImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.metaTitle,
      description: article.metaDescription,
      images: [article.heroImage],
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article: Article | null = await fetchQuery(api.articles.getBySlug, {
    slug,
  });
  if (!article) notFound();

  const allArticles: Article[] = await fetchQuery(api.articles.listPublished);
  const relatedArticles = allArticles.filter((a: Article) =>
    article.relatedSlugs.includes(a.slug)
  );

  const publishedDate = new Date(article.publishedAt).toLocaleDateString(
    "en-GB",
    { day: "numeric", month: "long", year: "numeric" }
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    image: `https://ssaspropertyfinance.co.uk${article.heroImage}`,
    datePublished: new Date(article.publishedAt).toISOString(),
    dateModified: new Date(article.updatedAt).toISOString(),
    author: {
      "@type": "Person",
      name: article.author,
      jobTitle: article.authorTitle,
      url: "https://ssaspropertyfinance.co.uk/about",
    },
    publisher: {
      "@type": "Organization",
      name: "SSAS Property Finance",
      url: "https://ssaspropertyfinance.co.uk",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://ssaspropertyfinance.co.uk/guides/${slug}`,
    },
    keywords: [article.primaryKeyword, ...article.secondaryKeywords].join(", "),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://ssaspropertyfinance.co.uk",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Guides",
        item: "https://ssaspropertyfinance.co.uk/guides",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: `https://ssaspropertyfinance.co.uk/guides/${slug}`,
      },
    ],
  };

  return (
    <>
      <article className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-white/40 mb-8">
            <Link href="/" className="hover:text-gold transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/guides" className="hover:text-gold transition-colors">
              Guides
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/60 truncate">{article.title}</span>
          </nav>

          {/* Category badge */}
          <span className="inline-block text-xs px-3 py-1 rounded-full bg-gold/10 text-gold border border-gold/20 mb-4">
            {article.category}
          </span>

          {/* Title */}
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-white mb-6 leading-tight">
            {article.title}
          </h1>

          {/* Author byline */}
          <div className="flex items-center gap-4 mb-8 pb-8 border-b border-white/10">
            <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center text-gold font-heading text-lg">
              ML
            </div>
            <div>
              <p className="text-white font-medium">
                Written by {article.author}
              </p>
              <p className="text-white/40 text-sm">{article.authorTitle}</p>
            </div>
            <div className="ml-auto flex items-center gap-4 text-sm text-white/40">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {publishedDate}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {article.readingTime} min read
              </span>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden mb-10 border border-white/10">
            <Image
              src={article.heroImage}
              alt={article.heroImageAlt}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Article content */}
          <div
            className="prose prose-invert prose-gold max-w-none
              prose-headings:font-heading prose-headings:text-white
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-white/70 prose-p:leading-relaxed
              prose-a:text-gold prose-a:no-underline hover:prose-a:underline
              prose-strong:text-white
              prose-li:text-white/70
              prose-blockquote:border-gold/30 prose-blockquote:text-white/60 prose-blockquote:italic"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* About the Author */}
          <div className="glass-card p-6 mt-12">
            <h3 className="font-heading text-lg text-white mb-3">
              About the Author
            </h3>
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center text-gold font-heading text-xl flex-shrink-0">
                ML
              </div>
              <div>
                <p className="text-white font-medium">{article.author}</p>
                <p className="text-white/40 text-sm mb-2">
                  {article.authorTitle}
                </p>
                <p className="text-white/60 text-sm leading-relaxed">
                  Matt Lenzie is a former banker and corporate finance partner
                  with extensive experience in pension-backed property
                  transactions. He founded SSAS Property Finance to help company
                  directors and trustees navigate the complexities of commercial
                  property acquisition through Small Self-Administered Schemes.
                </p>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-8">
            {article.tags.map((tag: string) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full bg-white/5 text-white/40 border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-16 border-t border-white/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-2xl text-white mb-8">
              Related Guides
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedArticles.slice(0, 3).map((related: Article) => (
                <Link
                  key={related.slug}
                  href={`/guides/${related.slug}`}
                  className="glass-card-hover p-5 block group"
                >
                  <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden mb-4">
                    <Image
                      src={related.heroImage}
                      alt={related.heroImageAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <span className="text-xs text-gold">{related.category}</span>
                  <h3 className="font-heading text-white mt-1 group-hover:text-gold transition-colors">
                    {related.title}
                  </h3>
                  <p className="text-sm text-white/40 mt-2 line-clamp-2">
                    {related.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-card p-8">
            <h2 className="font-heading text-2xl text-white mb-3">
              Ready to Explore SSAS Property Finance?
            </h2>
            <p className="text-white/60 mb-6 max-w-lg mx-auto">
              Get indicative terms from our panel of specialist SSAS lenders.
              No obligation, no fees for initial consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                asChild
                className="gold-gradient text-navy font-semibold hover:opacity-90"
              >
                <Link href="/contact">Get Indicative Terms</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white/20 text-white hover:bg-white/5"
              >
                <Link href="/ssas-mortgage-calculator">
                  Try Our Calculator
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  );
}
