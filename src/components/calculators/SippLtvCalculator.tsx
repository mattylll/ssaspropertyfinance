"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Calculator, ArrowRight, PoundSterling } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { calculateSippLtv } from "@/lib/calculators/sipp-ltv";

export function SippLtvCalculatorClient() {
  const [propertyValue, setPropertyValue] = useState(500000);
  const [fundValue, setFundValue] = useState(400000);

  const results = calculateSippLtv({
    propertyValue,
    sippFundValue: fundValue,
  });

  const fmt = (n: number) =>
    new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
      maximumFractionDigits: 0,
    }).format(n);

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="glass-card p-6 space-y-5"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg gold-gradient flex items-center justify-center">
            <Calculator className="w-5 h-5 text-navy" />
          </div>
          <h2 className="font-heading text-lg text-white">Your Details</h2>
        </div>

        <div>
          <Label className="text-white/70 text-sm mb-2 flex items-center gap-2">
            <PoundSterling className="w-3 h-3" /> Property Value
          </Label>
          <Input
            type="number"
            value={propertyValue}
            onChange={(e) => setPropertyValue(Number(e.target.value))}
            className="glass-input text-white"
          />
        </div>

        <div>
          <Label className="text-white/70 text-sm mb-2 flex items-center gap-2">
            <PoundSterling className="w-3 h-3" /> SIPP Fund Value
          </Label>
          <Input
            type="number"
            value={fundValue}
            onChange={(e) => setFundValue(Number(e.target.value))}
            className="glass-input text-white"
          />
        </div>

        <Button
          asChild
          className="w-full gold-gradient text-navy font-semibold hover:opacity-90 mt-4"
        >
          <Link href="/contact">
            Get Real Terms <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="space-y-4"
      >
        <div className="glass-card p-6">
          <p className="text-xs text-white/40 uppercase tracking-wider mb-1">
            Maximum Borrowing (50% LTV)
          </p>
          <p className="text-3xl font-bold text-gold">
            {fmt(results.maxBorrowing)}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="glass-card p-5">
            <p className="text-xs text-white/40 mb-1">SIPP Deposit</p>
            <p className="text-xl font-bold text-white">
              {fmt(results.depositFromFund)}
            </p>
          </div>
          <div className="glass-card p-5">
            <p className="text-xs text-white/40 mb-1">Fund Remaining</p>
            <p
              className={`text-xl font-bold ${
                results.fundSufficient ? "text-emerald-400" : "text-red-400"
              }`}
            >
              {fmt(results.remainingFund)}
            </p>
          </div>
        </div>

        <div className="glass-card p-6">
          <p className="text-xs text-white/40 uppercase tracking-wider mb-1">
            Total Purchasing Power
          </p>
          <p className="text-3xl font-bold text-blue-accent">
            {fmt(results.totalPurchasePower)}
          </p>
          <p className="text-xs text-white/30 mt-1">
            Maximum property value your SIPP can target
          </p>
        </div>

        {!results.fundSufficient && (
          <div className="glass-card p-4 border-red-500/30">
            <p className="text-sm text-red-400">
              Your SIPP fund of {fmt(fundValue)} is insufficient for the 50%
              deposit on a {fmt(propertyValue)} property. You would need{" "}
              {fmt(results.depositFromFund)} from your fund.
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
}
