"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, ArrowRight, Clock } from "lucide-react";

const featuredArticles = [
  {
    title: "What Is a SIPP? A Complete Guide for Property Investors",
    description:
      "How SIPPs work, who they suit, and why they're the pension of choice for property investors.",
    href: "/learn/what-is-a-sipp",
    readingTime: "9 min read",
    cluster: "Fundamentals",
  },
  {
    title: "SIPP Mortgage Explained: How Pension Borrowing Works",
    description:
      "How SIPP mortgages work, the 50% LTV rule, and what to expect from the lending process.",
    href: "/learn/sipp-mortgage-explained",
    readingTime: "8 min read",
    cluster: "Mortgages",
  },
  {
    title: "Tax Benefits of Buying Property Through a SIPP",
    description:
      "Tax-free rental income, no CGT, contribution relief and IHT benefits explained.",
    href: "/learn/tax-benefits-sipp-property",
    readingTime: "9 min read",
    cluster: "Tax Planning",
  },
  {
    title: "Can Your Business Rent Property From Your SIPP?",
    description:
      "How connected party leasing works, HMRC rules, and the tax advantages for business owners.",
    href: "/learn/can-business-rent-from-sipp",
    readingTime: "7 min read",
    cluster: "Connected Party",
  },
  {
    title: "SSAS vs SIPP: Which Is Better for Property Investment?",
    description:
      "Key differences, loanback rules, and which scheme suits your business structure.",
    href: "/learn/ssas-vs-sipp",
    readingTime: "8 min read",
    cluster: "SSAS",
  },
  {
    title: "Case Study: Business Owner Buys Their Office Through a SIPP",
    description:
      "How James used his SIPP to purchase his £390k office — saving tens of thousands in tax.",
    href: "/learn/case-study-business-owner-buys-office-sipp",
    readingTime: "7 min read",
    cluster: "Case Study",
  },
];

export function FeaturedArticles() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-4">
            <BookOpen className="w-4 h-4 text-gold" />
            <span className="text-sm text-white/70">Learning Centre</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl text-white mb-4">
            Expert Guides & Resources
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            In-depth guides covering every aspect of SIPP and SSAS property
            finance — from the basics to advanced tax planning strategies.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8"
        >
          {featuredArticles.map((article) => (
            <Link
              key={article.href}
              href={article.href}
              className="glass-card-hover p-6 group block"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs text-gold/80 font-medium">
                  {article.cluster}
                </span>
              </div>
              <h3 className="text-sm font-semibold text-white group-hover:text-gold transition-colors mb-2 leading-snug">
                {article.title}
              </h3>
              <p className="text-xs text-white/40 line-clamp-2 mb-4">
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
        </motion.div>

        <div className="text-center">
          <Link
            href="/learn"
            className="inline-flex items-center gap-2 text-sm text-gold hover:text-gold-light transition-colors font-medium"
          >
            Browse all 100+ guides
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
