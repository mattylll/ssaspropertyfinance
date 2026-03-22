"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Building2, Landmark, Briefcase, Zap, HardHat } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    icon: Building2,
    title: "SSAS Term Loan",
    description:
      "Long-term commercial property mortgages through your SSAS. Fixed and variable rates from 5.49% with terms up to 25 years.",
    stats: ["Up to 25 years", "From 5.49%", "Fixed & variable"],
    href: "/ssas-term-loan",
    cta: "Explore Term Loans",
  },
  {
    icon: Zap,
    title: "SSAS Bridging Finance",
    description:
      "Short-term SSAS bridging loans for commercial property acquisitions requiring fast completion. Competitive rates, flexible terms.",
    stats: ["4-6 week completion", "6-18 month terms", "Up to 50% LTV"],
    href: "/ssas-bridging-finance",
    cta: "Explore Bridging",
  },
  {
    icon: HardHat,
    title: "SSAS Development Finance",
    description:
      "Fund commercial property conversions, refurbishments, and ground-up development through your SSAS with staged drawdowns.",
    stats: ["Staged drawdowns", "GDV-based", "Commercial only"],
    href: "/ssas-development-finance",
    cta: "Explore Development",
  },
  {
    icon: Landmark,
    title: "SSAS Loanback",
    description:
      "Borrow up to 50% of your SSAS scheme assets back to the sponsoring employer under HMRC rules. Repaid within 5 years.",
    stats: ["50% loanback", "HMRC 5-year rule", "Multiple trustees"],
    href: "/ssas-property-finance",
    cta: "Explore SSAS Loanback",
  },
  {
    icon: Briefcase,
    title: "SSAS Commercial Mortgage",
    description:
      "Purchase commercial property through your SSAS with up to 50% LTV. Fixed and variable rates from specialist pension lenders.",
    stats: ["Up to 50% LTV", "From 5.49%", "25 year terms"],
    href: "/ssas-property-mortgage",
    cta: "Explore SSAS Mortgages",
  },
];

export function ProductCards() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl sm:text-4xl text-white mb-4">
            Specialist Pension Property Finance
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            Whether you&apos;re purchasing through an SSAS or exploring loanback
            options, we connect you with the right lender for your commercial
            property goals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card-hover p-8 flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center mb-5">
                <product.icon className="w-6 h-6 text-navy" />
              </div>

              <h3 className="font-heading text-xl text-white mb-3">
                {product.title}
              </h3>

              <p className="text-sm text-white/50 mb-5 flex-1">
                {product.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {product.stats.map((stat) => (
                  <span
                    key={stat}
                    className="text-xs px-3 py-1 rounded-full bg-white/5 text-gold border border-gold/20"
                  >
                    {stat}
                  </span>
                ))}
              </div>

              <Button
                asChild
                variant="outline"
                className="w-full border-white/20 text-white hover:bg-white/5 hover:text-gold"
              >
                <Link href={product.href}>
                  {product.cta}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
