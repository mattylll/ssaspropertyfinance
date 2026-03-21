import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, ArrowRight, Clock } from "lucide-react";
import { clusters } from "@/data/articles";

export const metadata: Metadata = {
  title: "Learn | SIPP & SSAS Property Finance Guides",
  description:
    "Comprehensive guides covering SIPP and SSAS property investment, mortgages, tax planning, and more. The definitive UK resource for pension property finance.",
  keywords: [
    "SIPP property guides",
    "SSAS property guides",
    "pension property investment",
    "SIPP mortgage guide",
    "commercial property pension",
  ],
};

export default function LearnPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 max-w-3xl">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
            <BookOpen className="w-4 h-4 text-gold" />
            <span className="text-sm text-white/70">Learning Centre</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl text-white leading-tight mb-6">
            SIPP & SSAS Property
            <br />
            <span className="text-gold-gradient">Learning Centre</span>
          </h1>

          <p className="text-lg text-white/60 leading-relaxed">
            The definitive UK resource for pension property finance. Expert
            guides covering everything from SIPP fundamentals to advanced tax
            planning, written by Matt Lenzie — board advisor to a SIPP business
            with over £2.9bn assets under advisory.
          </p>
        </div>

        <div className="space-y-20">
          {clusters.map((cluster) => (
            <section key={cluster.slug} id={cluster.slug}>
              {/* Cluster header with hero image */}
              <div className="mb-8">
                <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden mb-6 glass-card">
                  <Image
                    src={cluster.heroImage}
                    alt={cluster.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 1280px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h2 className="font-heading text-2xl sm:text-3xl text-white mb-1">
                      {cluster.name}
                    </h2>
                    <p className="text-sm text-white/60">{cluster.description}</p>
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cluster.articles.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/learn/${article.slug}`}
                    className="glass-card-hover p-5 group block"
                  >
                    <h3 className="text-sm font-semibold text-white group-hover:text-gold transition-colors mb-2 leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-xs text-white/40 line-clamp-2 mb-3">
                      {article.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-white/30 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {article.readingTime}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-gold/0 group-hover:text-gold transition-colors" />
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* CollectionPage schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "SIPP & SSAS Property Finance Learning Centre",
            description:
              "Comprehensive guides covering SIPP and SSAS property investment, mortgages, tax planning, and more.",
            url: "https://sipppropertyfinance.co.uk/learn",
            publisher: {
              "@type": "Organization",
              name: "SIPP Property Finance",
              url: "https://sipppropertyfinance.co.uk",
            },
            author: {
              "@type": "Person",
              name: "Matt Lenzie",
              jobTitle: "Founder",
            },
          }),
        }}
      />
    </div>
  );
}
