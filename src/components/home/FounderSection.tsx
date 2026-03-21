"use client";

import { motion } from "framer-motion";
import { Landmark, TrendingUp, Briefcase, Award } from "lucide-react";

const credentials = [
  {
    icon: Landmark,
    stat: "£2.9bn+",
    label: "Assets Under Advisory",
    detail: "Board advisor and consultant to a leading SIPP business",
  },
  {
    icon: TrendingUp,
    stat: "£300m+",
    label: "Capital Raised",
    detail: "Equity and debt across multiple transactions",
  },
  {
    icon: Briefcase,
    stat: "Banking",
    label: "Former Banker",
    detail: "Institutional lending and credit experience",
  },
  {
    icon: Award,
    stat: "Corporate Finance",
    label: "Former Partner",
    detail: "Partner in a corporate finance advisory business",
  },
];

export function FounderSection() {
  return (
    <section className="py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-gold text-sm font-medium uppercase tracking-wider mb-3">
              Meet the Founder
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl text-white mb-6">
              Matt Lenzie
            </h2>
            <div className="space-y-4 text-white/60 leading-relaxed">
              <p>
                Matt founded SIPP Property Finance to give pension trustees and
                their advisers direct access to the specialist commercial
                mortgage market — without the jargon, delays, or conflicts of
                interest that too often come with pension property lending.
              </p>
              <p>
                As a board advisor to a SIPP business managing over{" "}
                <span className="text-white/80 font-medium">
                  £2.9 billion in assets under advisory
                </span>
                , Matt understands the regulatory, operational, and investment
                realities that pension trustees face when acquiring commercial
                property.
              </p>
              <p>
                His career spans institutional banking and a partnership in a
                corporate finance advisory firm, where he was involved in
                raising over{" "}
                <span className="text-white/80 font-medium">
                  £300 million of equity and debt finance
                </span>
                . That depth of capital markets experience means every SIPP
                Property Finance client benefits from structuring expertise that
                goes well beyond standard mortgage broking.
              </p>
            </div>
          </motion.div>

          {/* Right — Credential cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="grid grid-cols-2 gap-4"
          >
            {credentials.map((cred, i) => (
              <motion.div
                key={cred.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="glass-card-hover p-5"
              >
                <cred.icon className="w-5 h-5 text-gold mb-3" />
                <p className="text-xl font-bold text-gold mb-0.5">
                  {cred.stat}
                </p>
                <p className="text-sm font-medium text-white/80 mb-1">
                  {cred.label}
                </p>
                <p className="text-xs text-white/50">{cred.detail}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
