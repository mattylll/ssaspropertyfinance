"use client";

import { motion } from "framer-motion";
import { ArrowRight, Building2, TrendingUp, MapPin } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const caseStudies = [
  {
    title: "Industrial Unit Acquisition via SIPP",
    propertyType: "Industrial",
    loanSize: "£450,000",
    ltv: "50%",
    location: "Birmingham",
    outcome: "Completed in 6 weeks",
  },
  {
    title: "Office Building Purchase for IFA Practice",
    propertyType: "Office",
    loanSize: "£325,000",
    ltv: "48%",
    location: "Manchester",
    outcome: "5.49% rate secured",
  },
  {
    title: "SSAS-Funded Retail Premises Refinance",
    propertyType: "Retail",
    loanSize: "£280,000",
    ltv: "45%",
    location: "Leeds",
    outcome: "Bridging to term loan",
  },
];

export function CaseStudyStrip() {
  return (
    <section className="py-20 border-y border-white/10 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-10"
        >
          <div>
            <h2 className="font-heading text-3xl sm:text-4xl text-white mb-2">
              Recent Case Studies
            </h2>
            <p className="text-white/50">
              Real deals we&apos;ve arranged for SIPP and SSAS trustees.
            </p>
          </div>
          <Button
            asChild
            variant="ghost"
            className="hidden sm:flex text-gold hover:text-gold/80"
          >
            <Link href="/case-studies">
              View All <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card-hover p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs px-2 py-1 rounded-full bg-gold/10 text-gold border border-gold/20">
                  {study.propertyType}
                </span>
              </div>

              <h3 className="font-heading text-lg text-white mb-4">
                {study.title}
              </h3>

              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-white/40 flex items-center gap-2">
                    <Building2 className="w-4 h-4" /> Loan Size
                  </span>
                  <span className="text-gold font-semibold">{study.loanSize}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/40 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" /> LTV
                  </span>
                  <span className="text-white">{study.ltv}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/40 flex items-center gap-2">
                    <MapPin className="w-4 h-4" /> Location
                  </span>
                  <span className="text-white">{study.location}</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-sm text-emerald-400">{study.outcome}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
