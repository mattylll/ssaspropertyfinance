"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { calculateSippLtv } from "@/lib/calculators/sipp-ltv";

export function QuickCalculator() {
  const [propertyValue, setPropertyValue] = useState(500000);
  const [fundValue, setFundValue] = useState(400000);

  const results = calculateSippLtv({ propertyValue, sippFundValue: fundValue });

  const formatCurrency = (n: number) =>
    new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
      maximumFractionDigits: 0,
    }).format(n);

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Calculator */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg gold-gradient flex items-center justify-center">
                <Calculator className="w-5 h-5 text-navy" />
              </div>
              <div>
                <h3 className="font-heading text-xl text-white">
                  Quick LTV Calculator
                </h3>
                <p className="text-sm text-white/50">
                  See how much your SIPP can borrow
                </p>
              </div>
            </div>

            <div className="space-y-5">
              <div>
                <Label className="text-white/70 text-sm mb-2 block">
                  Property Value
                </Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40">
                    £
                  </span>
                  <Input
                    type="number"
                    value={propertyValue}
                    onChange={(e) => setPropertyValue(Number(e.target.value))}
                    className="glass-input pl-7 text-white"
                  />
                </div>
              </div>

              <div>
                <Label className="text-white/70 text-sm mb-2 block">
                  SIPP Fund Value
                </Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40">
                    £
                  </span>
                  <Input
                    type="number"
                    value={fundValue}
                    onChange={(e) => setFundValue(Number(e.target.value))}
                    className="glass-input pl-7 text-white"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-white/10">
              <Button
                asChild
                className="w-full gold-gradient text-navy font-semibold hover:opacity-90"
              >
                <Link href="/sipp-mortgage-calculator">
                  Full Calculator
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="font-heading text-3xl text-white mb-2">
              Your SIPP Borrowing Power
            </h2>
            <p className="text-white/50 mb-6">
              SIPPs can borrow up to 50% of the property value. Here&apos;s what your
              pension fund could achieve.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-5">
                <p className="text-xs text-white/40 uppercase tracking-wider mb-1">
                  Max Borrowing
                </p>
                <p className="text-2xl font-bold text-gold">
                  {formatCurrency(results.maxBorrowing)}
                </p>
                <p className="text-xs text-white/40 mt-1">50% of property value</p>
              </div>
              <div className="glass-card p-5">
                <p className="text-xs text-white/40 uppercase tracking-wider mb-1">
                  SIPP Deposit
                </p>
                <p className="text-2xl font-bold text-white">
                  {formatCurrency(results.depositFromFund)}
                </p>
                <p className="text-xs text-white/40 mt-1">From your pension fund</p>
              </div>
              <div className="glass-card p-5">
                <p className="text-xs text-white/40 uppercase tracking-wider mb-1">
                  Remaining Fund
                </p>
                <p
                  className={`text-2xl font-bold ${results.fundSufficient ? "text-emerald-400" : "text-red-400"}`}
                >
                  {formatCurrency(results.remainingFund)}
                </p>
                <p className="text-xs text-white/40 mt-1">
                  {results.fundSufficient ? "Fund sufficient" : "Insufficient funds"}
                </p>
              </div>
              <div className="glass-card p-5">
                <p className="text-xs text-white/40 uppercase tracking-wider mb-1">
                  Buying Power
                </p>
                <p className="text-2xl font-bold text-blue-accent">
                  {formatCurrency(results.totalPurchasePower)}
                </p>
                <p className="text-xs text-white/40 mt-1">
                  Maximum property value
                </p>
              </div>
            </div>

            <p className="text-xs text-white/30 mt-4">
              For illustrative purposes only. Actual borrowing depends on lender
              criteria, property type, and SIPP provider approval.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
