"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Calculator, ArrowRight, PoundSterling } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { calculateRentalYield } from "@/lib/calculators/rental-yield";

export function RentalYieldCalculatorClient() {
  const [purchasePrice, setPurchasePrice] = useState(500000);
  const [annualRent, setAnnualRent] = useState(35000);
  const [annualExpenses, setAnnualExpenses] = useState(5000);
  const [mortgageRepayment, setMortgageRepayment] = useState(20000);

  const results = calculateRentalYield({
    purchasePrice,
    annualRent,
    annualExpenses,
    mortgageRepayment,
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
          <h2 className="font-heading text-lg text-white">Property Details</h2>
        </div>

        <div>
          <Label className="text-white/70 text-sm mb-2 flex items-center gap-2">
            <PoundSterling className="w-3 h-3" /> Purchase Price
          </Label>
          <Input
            type="number"
            value={purchasePrice}
            onChange={(e) => setPurchasePrice(Number(e.target.value))}
            className="glass-input text-white"
          />
        </div>

        <div>
          <Label className="text-white/70 text-sm mb-2 flex items-center gap-2">
            <PoundSterling className="w-3 h-3" /> Annual Rent
          </Label>
          <Input
            type="number"
            value={annualRent}
            onChange={(e) => setAnnualRent(Number(e.target.value))}
            className="glass-input text-white"
          />
        </div>

        <div>
          <Label className="text-white/70 text-sm mb-2 flex items-center gap-2">
            <PoundSterling className="w-3 h-3" /> Annual Expenses
          </Label>
          <Input
            type="number"
            value={annualExpenses}
            onChange={(e) => setAnnualExpenses(Number(e.target.value))}
            className="glass-input text-white"
          />
        </div>

        <div>
          <Label className="text-white/70 text-sm mb-2 flex items-center gap-2">
            <PoundSterling className="w-3 h-3" /> Annual Mortgage Repayment
          </Label>
          <Input
            type="number"
            value={mortgageRepayment}
            onChange={(e) => setMortgageRepayment(Number(e.target.value))}
            className="glass-input text-white"
          />
        </div>

        <Button
          asChild
          className="w-full gold-gradient text-navy font-semibold hover:opacity-90 mt-4"
        >
          <Link href="/contact">
            Get Real Figures <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="space-y-4"
      >
        <div className="grid grid-cols-2 gap-4">
          <div className="glass-card p-6">
            <p className="text-xs text-white/40 uppercase tracking-wider mb-1">
              Gross Yield
            </p>
            <p className="text-3xl font-bold text-gold">
              {results.grossYield}%
            </p>
          </div>
          <div className="glass-card p-6">
            <p className="text-xs text-white/40 uppercase tracking-wider mb-1">
              Net Yield
            </p>
            <p className="text-3xl font-bold text-blue-accent">
              {results.netYield}%
            </p>
          </div>
        </div>

        <div className="glass-card p-5">
          <p className="text-xs text-white/40 uppercase tracking-wider mb-1">
            Net Income (before mortgage)
          </p>
          <p className="text-2xl font-bold text-white">
            {fmt(results.netIncome)}
          </p>
          <p className="text-xs text-white/30 mt-1">Annual rent minus expenses</p>
        </div>

        <div
          className={`glass-card p-5 ${
            results.annualSurplus >= 0
              ? "border-emerald-500/20"
              : "border-red-500/20"
          }`}
        >
          <p className="text-xs text-white/40 uppercase tracking-wider mb-1">
            Annual Surplus / Deficit
          </p>
          <p
            className={`text-2xl font-bold ${
              results.annualSurplus >= 0
                ? "text-emerald-400"
                : "text-red-400"
            }`}
          >
            {fmt(results.annualSurplus)}
          </p>
          <p className="text-xs text-white/30 mt-1">
            {results.annualSurplus >= 0
              ? "Your SIPP generates a surplus after mortgage costs"
              : "Your SIPP will need topping up to cover the shortfall"}
          </p>
        </div>

        <div className="glass-card p-5">
          <p className="text-xs text-white/40 uppercase tracking-wider mb-1">
            Monthly Cash Position
          </p>
          <p
            className={`text-2xl font-bold ${
              results.monthlySurplus >= 0
                ? "text-emerald-400"
                : "text-red-400"
            }`}
          >
            {fmt(results.monthlySurplus)}
            <span className="text-sm text-white/40 ml-1">/ month</span>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
