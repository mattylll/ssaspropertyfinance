import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BookOpen, Clock, ArrowLeft, ArrowRight, Calculator, Calendar, User } from "lucide-react";
import { allArticles, getArticleBySlug, getRelatedArticles, getClusterForArticle } from "@/data/articles";

export function generateStaticParams() {
  return allArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  const cluster = getClusterForArticle(article);

  return {
    title: article.title,
    description: article.description,
    keywords: article.keywords,
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      locale: "en_GB",
      siteName: "SIPP Property Finance",
      publishedTime: article.publishDate,
      modifiedTime: article.updatedDate ?? article.publishDate,
      authors: ["Matt Lenzie"],
      images: cluster?.heroImage
        ? [{ url: cluster.heroImage, width: 1200, height: 675, alt: article.title }]
        : [],
    },
  };
}

const BASE_URL = "https://sipppropertyfinance.co.uk";

function buildSchemas(article: NonNullable<ReturnType<typeof getArticleBySlug>>, cluster: ReturnType<typeof getClusterForArticle>) {
  const schemas: Record<string, unknown>[] = [];

  // BreadcrumbList schema
  schemas.push({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: BASE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Learn",
        item: `${BASE_URL}/learn`,
      },
      ...(cluster
        ? [
            {
              "@type": "ListItem",
              position: 3,
              name: cluster.name,
              item: `${BASE_URL}/learn#${cluster.slug}`,
            },
            {
              "@type": "ListItem",
              position: 4,
              name: article.title,
              item: `${BASE_URL}/learn/${article.slug}`,
            },
          ]
        : [
            {
              "@type": "ListItem",
              position: 3,
              name: article.title,
              item: `${BASE_URL}/learn/${article.slug}`,
            },
          ]),
    ],
  });

  // Author / Person schema
  const authorSchema = {
    "@type": "Person",
    name: "Matt Lenzie",
    jobTitle: "Founder",
    url: BASE_URL,
    description:
      "Board advisor to a SIPP business with over £2.9bn assets under advisory. Former banker and corporate finance partner with experience raising over £300m of equity and debt.",
    knowsAbout: [
      "SIPP Property Investment",
      "SSAS Commercial Lending",
      "Commercial Mortgage Structuring",
      "Pension Trustee Advisory",
    ],
  };

  const publisherSchema = {
    "@type": "Organization",
    name: "SIPP Property Finance",
    url: BASE_URL,
  };

  // Article-type specific schema
  if (article.schemaType === "FAQPage") {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: article.sections.map((s) => ({
        "@type": "Question",
        name: s.heading,
        acceptedAnswer: {
          "@type": "Answer",
          text: s.content.replace(/<[^>]*>/g, ""),
        },
      })),
    });
  }

  if (article.schemaType === "HowTo") {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: article.title,
      description: article.description,
      step: article.sections.map((s, i) => ({
        "@type": "HowToStep",
        position: i + 1,
        name: s.heading,
        text: s.content.replace(/<[^>]*>/g, ""),
      })),
    });
  }

  // Always include Article schema (even alongside FAQ/HowTo)
  schemas.push({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.publishDate,
    dateModified: article.updatedDate ?? article.publishDate,
    author: authorSchema,
    publisher: publisherSchema,
    mainEntityOfPage: `${BASE_URL}/learn/${article.slug}`,
    ...(cluster?.heroImage && {
      image: {
        "@type": "ImageObject",
        url: `${BASE_URL}${cluster.heroImage}`,
        width: 1200,
        height: 675,
      },
    }),
    keywords: article.keywords.join(", "),
    wordCount: article.sections.reduce(
      (acc, s) => acc + s.content.replace(/<[^>]*>/g, "").split(/\s+/).length,
      0
    ),
    articleSection: article.cluster,
  });

  return schemas;
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = getRelatedArticles(article);
  const cluster = getClusterForArticle(article);
  const schemas = buildSchemas(article, cluster);

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-white/40 mb-8">
          <Link href="/" className="hover:text-gold transition-colors">Home</Link>
          <span aria-hidden="true">/</span>
          <Link href="/learn" className="hover:text-gold transition-colors">Learn</Link>
          <span aria-hidden="true">/</span>
          {cluster && (
            <>
              <span className="text-white/40">{cluster.name}</span>
              <span aria-hidden="true">/</span>
            </>
          )}
          <span className="text-white/60 truncate">{article.title}</span>
        </nav>

        {/* Hero Image */}
        {cluster?.heroImage && (
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-10 glass-card">
            <Image
              src={cluster.heroImage}
              alt={article.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>
        )}

        {/* Header */}
        <header className="mb-10">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
            <BookOpen className="w-4 h-4 text-gold" />
            <span className="text-sm text-white/70">{cluster?.name ?? "Guide"}</span>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-4">
            {article.title}
          </h1>

          <p className="text-lg text-white/60 leading-relaxed mb-6">
            {article.description}
          </p>

          {/* Author byline + dates */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/40">
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4" />
              <span>Matt Lenzie</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <time dateTime={article.publishDate}>
                {formatDate(article.publishDate)}
              </time>
            </span>
            {article.updatedDate && article.updatedDate !== article.publishDate && (
              <span className="text-white/30">
                Updated{" "}
                <time dateTime={article.updatedDate}>
                  {formatDate(article.updatedDate)}
                </time>
              </span>
            )}
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {article.readingTime}
            </span>
          </div>
        </header>

        {/* Key Takeaways */}
        {article.keyTakeaways.length > 0 && (
          <div className="glass-card p-6 mb-10 border-l-4 border-gold">
            <h2 className="font-heading text-lg text-white mb-3">Key Takeaways</h2>
            <ul className="space-y-2">
              {article.keyTakeaways.map((takeaway, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-white/60">
                  <span className="text-gold mt-0.5">&#10003;</span>
                  {takeaway}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Table of Contents */}
        <nav className="glass-card p-6 mb-12" aria-label="Table of contents">
          <h2 className="font-heading text-lg text-white mb-4">In This Guide</h2>
          <ol className="space-y-2 text-sm list-decimal list-inside">
            {article.sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="text-white/60 hover:text-gold transition-colors"
                >
                  {section.heading}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Content */}
        <article className="space-y-12">
          {article.sections.map((section) => (
            <section key={section.id} id={section.id}>
              <h2 className="font-heading text-2xl sm:text-3xl text-white mb-6">
                {section.heading}
              </h2>
              <div
                className="glass-card p-6 sm:p-8 prose-article"
                dangerouslySetInnerHTML={{ __html: section.content }}
              />
            </section>
          ))}
        </article>

        {/* E-E-A-T Author Box */}
        <div className="mt-12 glass-card p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-full gold-gradient flex items-center justify-center shrink-0">
              <User className="w-7 h-7 text-navy" />
            </div>
            <div>
              <h3 className="font-heading text-lg text-white mb-1">
                Written by Matt Lenzie
              </h3>
              <p className="text-xs text-gold mb-2">Founder, SIPP Property Finance</p>
              <p className="text-sm text-white/50 leading-relaxed">
                Board advisor to a SIPP business with over £2.9bn assets under advisory.
                Former banker and corporate finance partner with experience raising over
                £300m of equity and debt. Matt specialises in structuring SIPP and SSAS
                commercial property transactions for UK business owners and investors.
              </p>
            </div>
          </div>
        </div>

        {/* Related Calculators */}
        {article.relatedCalculators && article.relatedCalculators.length > 0 && (
          <div className="mt-12 glass-card p-6">
            <h3 className="font-heading text-lg text-white mb-4 flex items-center gap-2">
              <Calculator className="w-5 h-5 text-gold" />
              Related Calculators
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {article.relatedCalculators.map((calc) => (
                <Link
                  key={calc.href}
                  href={calc.href}
                  className="flex items-center justify-between glass-card-hover p-4 text-sm text-white/70 hover:text-gold transition-colors"
                >
                  {calc.title}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Related Pages */}
        {article.relatedPages && article.relatedPages.length > 0 && (
          <div className="mt-6 glass-card p-6">
            <h3 className="font-heading text-lg text-white mb-4">Related Pages</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {article.relatedPages.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="flex items-center justify-between glass-card-hover p-4 text-sm text-white/70 hover:text-gold transition-colors"
                >
                  {page.title}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Related Articles */}
        {related.length > 0 && (
          <div className="mt-12">
            <h3 className="font-heading text-xl text-white mb-6">
              Continue Reading
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/learn/${rel.slug}`}
                  className="glass-card-hover p-5 group block"
                >
                  <h4 className="text-sm font-semibold text-white group-hover:text-gold transition-colors mb-2">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-white/40 line-clamp-2">
                    {rel.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Back to Learn */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <Link
            href="/learn"
            className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-gold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Learning Centre
          </Link>
        </div>
      </div>

      {/* Schema Markup — one script per schema */}
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
    </div>
  );
}
