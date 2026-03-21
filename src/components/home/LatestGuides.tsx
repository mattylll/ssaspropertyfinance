import { fetchQuery } from "convex/nextjs";
import { api } from "../../../convex/_generated/api";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

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

export async function LatestGuides() {
  const articles: Article[] = await fetchQuery(api.articles.listPublished);
  const latest = articles.slice(0, 6);

  if (latest.length === 0) return null;

  return (
    <section className="py-20 border-y border-white/10 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="font-heading text-3xl sm:text-4xl text-white mb-2">
              Latest SSAS Guides
            </h2>
            <p className="text-white/50">
              Expert insights on SSAS property finance, tax rules, and
              investment strategies.
            </p>
          </div>
          <Button
            asChild
            variant="ghost"
            className="hidden sm:flex text-gold hover:text-gold/80"
          >
            <Link href="/guides">
              View All Guides <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {latest.map((article) => (
            <Link
              key={article.slug}
              href={`/guides/${article.slug}`}
              className="glass-card-hover block group"
            >
              <div className="relative w-full aspect-[16/9] overflow-hidden rounded-t-xl">
                <Image
                  src={article.heroImage}
                  alt={article.heroImageAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <span className="text-xs px-2 py-1 rounded-full bg-gold/10 text-gold border border-gold/20">
                  {article.category}
                </span>
                <h3 className="font-heading text-lg text-white mt-3 mb-2 group-hover:text-gold transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-sm text-white/50 line-clamp-2 mb-4">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-white/30">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(article.publishedAt).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readingTime} min
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Button
            asChild
            variant="ghost"
            className="text-gold hover:text-gold/80"
          >
            <Link href="/guides">
              View All Guides <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
