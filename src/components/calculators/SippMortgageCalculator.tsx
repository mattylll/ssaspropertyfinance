"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Calculator,
  ArrowRight,
  TrendingUp,
  PoundSterling,
  Percent,
  Calendar,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  calculateSippMortgage,
  type SippMortgageInputs,
} from "@/lib/calculators/sipp-mortgage";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

export function SippMortgageCalculatorClient() {
  const [inputs, setInputs] = useState<SippMortgageInputs>({
    propertyValue: 500000,
    sippFundValue: 400000,
    ltvPercent: 50,
    interestRate: 5.49,
    termYears: 20,
  });

  const results = calculateSippMortgage(inputs);

  const fmt = (n: number) =>
    new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
      maximumFractionDigits: 0,
    }).format(n);

  const chartData = results.amortisationSchedule.map((row) => ({
    year: `Yr ${row.year}`,
    Interest: row.interestPaid,
    Principal: row.principalPaid,
  }));

  return (
    <div className="grid lg:grid-cols-5 gap-8">
      {/* Inputs */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="lg:col-span-2 glass-card p-6 space-y-5"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg gold-gradient flex items-center justify-center">
            <Calculator className="w-5 h-5 text-navy" />
          </div>
          <h2 className="font-heading text-lg text-white">Calculator Inputs</h2>
        </div>

        <div>
          <Label className="text-white/70 text-sm mb-2 flex items-center gap-2">
            <PoundSterling className="w-3 h-3" /> Property Value
          </Label>
          <Input
            type="number"
            value={inputs.propertyValue}
            onChange={(e) =>
              setInputs({ ...inputs, propertyValue: Number(e.target.value) })
            }
            className="glass-input text-white"
          />
        </div>

        <div>
          <Label className="text-white/70 text-sm mb-2 flex items-center gap-2">
            <PoundSterling className="w-3 h-3" /> SIPP Fund Value
          </Label>
          <Input
            type="number"
            value={inputs.sippFundValue}
            onChange={(e) =>
              setInputs({ ...inputs, sippFundValue: Number(e.target.value) })
            }
            className="glass-input text-white"
          />
        </div>

        <div>
          <Label className="text-white/70 text-sm mb-2 flex items-center gap-2">
            <Percent className="w-3 h-3" /> LTV (%) — max 50%
          </Label>
          <Input
            type="number"
            value={inputs.ltvPercent}
            onChange={(e) =>
              setInputs({
                ...inputs,
                ltvPercent: Math.min(50, Number(e.target.value)),
              })
            }
            className="glass-input text-white"
            max={50}
          />
        </div>

        <div>
          <Label className="text-white/70 text-sm mb-2 flex items-center gap-2">
            <TrendingUp className="w-3 h-3" /> Interest Rate (% pa)
          </Label>
          <Input
            type="number"
            step="0.01"
            value={inputs.interestRate}
            onChange={(e) =>
              setInputs({ ...inputs, interestRate: Number(e.target.value) })
            }
            className="glass-input text-white"
          />
        </div>

        <div>
          <Label className="text-white/70 text-sm mb-2 flex items-center gap-2">
            <Calendar className="w-3 h-3" /> Term (years)
          </Label>
          <Input
            type="number"
            value={inputs.termYears}
            onChange={(e) =>
              setInputs({ ...inputs, termYears: Number(e.target.value) })
            }
            className="glass-input text-white"
            min={1}
            max={25}
          />
        </div>

        <Button
          asChild
          className="w-full gold-gradient text-navy font-semibold hover:opacity-90 mt-4"
        >
          <Link href="/contact">
            Get Real Rates <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </Button>
      </motion.div>

      {/* Results */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="lg:col-span-3 space-y-6"
      >
        {/* Summary cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <div className="glass-card p-6">
            <p className="text-xs text-white/60 uppercase tracking-wider mb-1">
              Max Loan
            </p>
            <p className="text-xl font-bold text-gold">{fmt(results.maxLoan)}</p>
            <p className="text-xs text-white/40 mt-1">
              {results.ltvActual}% LTV
            </p>
          </div>
          <div className="glass-card p-6">
            <p className="text-xs text-white/60 uppercase tracking-wider mb-1">
              Monthly Payment
            </p>
            <p className="text-xl font-bold text-white">
              {fmt(results.monthlyPayment)}
            </p>
            <p className="text-xs text-white/40 mt-1">Capital & interest</p>
          </div>
          <div className="glass-card p-6">
            <p className="text-xs text-white/60 uppercase tracking-wider mb-1">
              Deposit Required
            </p>
            <p className="text-xl font-bold text-blue-accent">
              {fmt(results.depositRequired)}
            </p>
            <p className="text-xs text-white/40 mt-1">From SIPP fund</p>
          </div>
          <div className="glass-card p-6">
            <p className="text-xs text-white/60 uppercase tracking-wider mb-1">
              Total Cost
            </p>
            <p className="text-xl font-bold text-white">
              {fmt(results.totalCost)}
            </p>
          </div>
          <div className="glass-card p-6">
            <p className="text-xs text-white/60 uppercase tracking-wider mb-1">
              Total Interest
            </p>
            <p className="text-xl font-bold text-white/70">
              {fmt(results.totalInterest)}
            </p>
          </div>
          <div className="glass-card p-6">
            <p className="text-xs text-white/60 uppercase tracking-wider mb-1">
              Fund Remaining
            </p>
            <p
              className={`text-xl font-bold ${
                inputs.sippFundValue - results.depositRequired >= 0
                  ? "text-emerald-400"
                  : "text-red-400"
              }`}
            >
              {fmt(
                Math.max(0, inputs.sippFundValue - results.depositRequired)
              )}
            </p>
          </div>
        </div>

        {/* Chart */}
        <div className="glass-card p-6">
          <h3 className="font-heading text-lg text-white mb-4">
            Annual Repayment Breakdown
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis
                  dataKey="year"
                  tick={{ fill: "rgba(255,255,255,0.4)", fontSize: 11 }}
                  axisLine={{ stroke: "rgba(255,255,255,0.1)" }}
                />
                <YAxis
                  tick={{ fill: "rgba(255,255,255,0.4)", fontSize: 11 }}
                  axisLine={{ stroke: "rgba(255,255,255,0.1)" }}
                  tickFormatter={(v) => `£${(v / 1000).toFixed(0)}k`}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#0F2040",
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: 8,
                    color: "#F0F0F0",
                    fontSize: 12,
                  }}
                  formatter={(value) => fmt(Number(value))}
                />
                <Legend
                  wrapperStyle={{ color: "rgba(255,255,255,0.5)", fontSize: 12 }}
                />
                <Bar dataKey="Interest" stackId="a" fill="#C9A84C" radius={[0, 0, 0, 0]} />
                <Bar dataKey="Principal" stackId="a" fill="#5B9CF6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Amortisation table */}
        <div className="glass-card p-6 overflow-x-auto">
          <h3 className="font-heading text-lg text-white mb-4">
            Amortisation Schedule
          </h3>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-white/60 text-xs uppercase tracking-wider">
                <th className="text-left py-2 pr-4">Year</th>
                <th className="text-right py-2 px-2">Opening</th>
                <th className="text-right py-2 px-2">Payment</th>
                <th className="text-right py-2 px-2">Interest</th>
                <th className="text-right py-2 px-2">Principal</th>
                <th className="text-right py-2 pl-2">Closing</th>
              </tr>
            </thead>
            <tbody>
              {results.amortisationSchedule.map((row) => (
                <tr
                  key={row.year}
                  className="border-t border-white/5 text-white/60"
                >
                  <td className="py-2 pr-4 font-mono text-gold">{row.year}</td>
                  <td className="text-right py-2 px-2 font-mono">
                    {fmt(row.openingBalance)}
                  </td>
                  <td className="text-right py-2 px-2 font-mono">
                    {fmt(row.annualPayment)}
                  </td>
                  <td className="text-right py-2 px-2 font-mono">
                    {fmt(row.interestPaid)}
                  </td>
                  <td className="text-right py-2 px-2 font-mono">
                    {fmt(row.principalPaid)}
                  </td>
                  <td className="text-right py-2 pl-2 font-mono">
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
