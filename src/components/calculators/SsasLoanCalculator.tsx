"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Calculator,
  ArrowRight,
  PoundSterling,
  Percent,
  Calendar,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { calculateSsasLoanback } from "@/lib/calculators/ssas-loanback";

export function SsasLoanCalculatorClient() {
  const [fundValue, setFundValue] = useState(500000);
  const [loanAmount, setLoanAmount] = useState(200000);
  const [rate, setRate] = useState(6.0);
  const [term, setTerm] = useState(5);

  const results = calculateSsasLoanback({
    fundValue,
    loanAmount,
    interestRate: rate,
    termYears: term,
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
          <h2 className="font-heading text-lg text-white">Loan Details</h2>
        </div>

        <div>
          <Label className="text-white/70 text-sm mb-2 flex items-center gap-2">
            <PoundSterling className="w-3 h-3" /> SSAS Fund Value
          </Label>
          <Input
            type="number"
            value={fundValue}
            onChange={(e) => setFundValue(Number(e.target.value))}
            className="glass-input text-white"
          />
        </div>

        <div>
          <Label className="text-white/70 text-sm mb-2 flex items-center gap-2">
            <PoundSterling className="w-3 h-3" /> Requested Loan Amount
          </Label>
          <Input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(Number(e.target.value))}
            className="glass-input text-white"
          />
        </div>

        <div>
          <Label className="text-white/70 text-sm mb-2 flex items-center gap-2">
            <Percent className="w-3 h-3" /> Interest Rate (% pa)
          </Label>
          <Input
            type="number"
            step="0.01"
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className="glass-input text-white"
          />
        </div>

        <div>
          <Label className="text-white/70 text-sm mb-2 flex items-center gap-2">
            <Calendar className="w-3 h-3" /> Term (years, max 5)
          </Label>
          <Input
            type="number"
            value={term}
            onChange={(e) => setTerm(Number(e.target.value))}
            className="glass-input text-white"
            max={5}
            min={1}
          />
        </div>

        <Button
          asChild
          className="w-full gold-gradient text-navy font-semibold hover:opacity-90 mt-4"
        >
          <Link href="/contact">
            Discuss SSAS Options <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="space-y-4"
      >
        {/* Compliance status */}
        <div
          className={`glass-card p-5 ${
            results.isCompliant
              ? "border-emerald-500/30"
              : "border-red-500/30"
          }`}
        >
          <div className="flex items-center gap-3">
            {results.isCompliant ? (
              <CheckCircle className="w-6 h-6 text-emerald-400" />
            ) : (
              <AlertTriangle className="w-6 h-6 text-red-400" />
            )}
            <div>
              <p
                className={`font-semibold ${
                  results.isCompliant ? "text-emerald-400" : "text-red-400"
                }`}
              >
                {results.isCompliant
                  ? "HMRC Compliant"
                  : "Exceeds HMRC Limits"}
              </p>
              <p className="text-xs text-white/40">
                Max loan: {fmt(results.maxPermittedLoan)} | Max term:{" "}
                {results.hmrcMaxTerm} years
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="glass-card p-5">
            <p className="text-xs text-white/40 mb-1">Permitted Loan</p>
            <p className="text-xl font-bold text-gold">
              {fmt(results.requestedLoan)}
            </p>
          </div>
          <div className="glass-card p-5">
            <p className="text-xs text-white/40 mb-1">Monthly Repayment</p>
            <p className="text-xl font-bold text-white">
              {fmt(results.monthlyRepayment)}
            </p>
          </div>
          <div className="glass-card p-5">
            <p className="text-xs text-white/40 mb-1">Total Repayment</p>
            <p className="text-xl font-bold text-white">
              {fmt(results.totalRepayment)}
            </p>
          </div>
          <div className="glass-card p-5">
            <p className="text-xs text-white/40 mb-1">Total Interest</p>
            <p className="text-xl font-bold text-white/70">
              {fmt(results.totalInterest)}
            </p>
          </div>
        </div>

        {/* Repayment schedule */}
        <div className="glass-card p-6">
          <h3 className="font-heading text-lg text-white mb-4">
            Repayment Schedule
          </h3>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-white/40 text-xs uppercase tracking-wider">
                <th className="text-left py-2">Year</th>
                <th className="text-right py-2">Opening</th>
                <th className="text-right py-2">Repayment</th>
                <th className="text-right py-2">Closing</th>
              </tr>
            </thead>
            <tbody>
              {results.repaymentSchedule.map((row) => (
                <tr
                  key={row.year}
                  className="border-t border-white/5 text-white/60"
                >
                  <td className="py-2 font-mono text-gold">{row.year}</td>
                  <td className="text-right py-2 font-mono">
                    {fmt(row.openingBalance)}
                  </td>
                  <td className="text-right py-2 font-mono">
                    {fmt(row.repayment)}
                  </td>
                  <td className="text-right py-2 font-mono">
                    {fmt(row.closingBalance)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
