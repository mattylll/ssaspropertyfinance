"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Clock, Calendar } from "lucide-react";

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

export function GuidesFilter({
  articles,
  categories,
}: {
  articles: Article[];
  categories: string[];
}) {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? articles
      : articles.filter((a) => a.category === active);

  return (
    <>
      {/* Category tabs */}
      <div className="flex flex-wrap gap-2 justify-center mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`text-sm px-4 py-2 rounded-full border transition-colors ${
              active === cat
                ? "bg-gold/20 text-gold border-gold/30"
                : "bg-white/5 text-white/50 border-white/10 hover:text-white hover:border-white/20"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Article count */}
      <p className="text-white/40 text-sm mb-6">
        {filtered.length} {filtered.length === 1 ? "guide" : "guides"}
      </p>

      {/* Article grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((article) => (
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
              <h2 className="font-heading text-lg text-white mt-3 mb-2 group-hover:text-gold transition-colors line-clamp-2">
                {article.title}
              </h2>
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
    </>
  );
}
