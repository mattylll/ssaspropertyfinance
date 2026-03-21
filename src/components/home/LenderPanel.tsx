"use client";

import { motion } from "framer-motion";
import { Building2, Check } from "lucide-react";

const lenders = [
  {
    name: "West Bromwich BS",
    maxLtv: "50%",
    minRate: "5.49%",
    features: ["SIPP & SSAS", "25yr terms"],
  },
  {
    name: "Shawbrook Bank",
    maxLtv: "50%",
    minRate: "5.99%",
    features: ["SIPP only", "Fast turnaround"],
  },
  {
    name: "Redwood Bank",
    maxLtv: "50%",
    minRate: "5.75%",
    features: ["SIPP & SSAS", "Dedicated RM"],
  },
  {
    name: "Aldermore",
    maxLtv: "50%",
    minRate: "5.89%",
    features: ["SIPP & SSAS", "Multi-property"],
  },
  {
    name: "Hampshire Trust",
    maxLtv: "50%",
    minRate: "6.25%",
    features: ["SIPP specialist", "Competitive rates"],
  },
  {
    name: "Paragon Bank",
    maxLtv: "50%",
    minRate: "5.69%",
    features: ["SIPP & SSAS", "Large loans"],
  },
];

export function LenderPanel() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl sm:text-4xl text-white mb-4">
            Our Specialist Lender Panel
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            We work with the UK&apos;s leading SIPP and SSAS commercial property
            mortgage lenders to secure you the best terms.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {lenders.map((lender, i) => (
            <motion.div
              key={lender.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass-card-hover p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-gold" />
                </div>
                <h3 className="text-sm font-semibold text-white">
                  {lender.name}
                </h3>
              </div>

              <div className="flex items-center gap-4 mb-3 text-sm">
                <div>
                  <span className="text-white/60">Max LTV: </span>
                  <span className="text-gold font-medium">{lender.maxLtv}</span>
                </div>
                <div>
                  <span className="text-white/60">From: </span>
                  <span className="text-gold font-medium">{lender.minRate}</span>
                </div>
              </div>

              <div className="space-y-1">
                {lender.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-2 text-xs text-white/60"
                  >
                    <Check className="w-3 h-3 text-emerald-400" />
                    {feature}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
