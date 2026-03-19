"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calculator, Shield, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-16">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-[10%] w-[500px] h-[500px] rounded-full bg-blue-accent/5 blur-[100px]"
        />
        <motion.div
          animate={{
            x: [0, -20, 0],
            y: [0, 30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-[10%] w-[400px] h-[400px] rounded-full bg-gold/5 blur-[100px]"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
              <Shield className="w-4 h-4 text-gold" />
              <span className="text-sm text-white/70">FCA Regulated Broker</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Commercial Property
              <br />
              Finance Through Your{" "}
              <span className="text-gold-gradient">SIPP</span>
            </h1>

            <p className="text-lg text-white/60 mb-8 max-w-xl leading-relaxed">
              Specialist brokers connecting UK SIPP and SSAS trustees with
              competitive commercial property mortgage rates. Compare lenders,
              calculate your borrowing power, and get indicative terms in minutes.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Button
                asChild
                size="lg"
                className="gold-gradient text-navy font-semibold text-base px-8 hover:opacity-90 transition-opacity"
              >
                <Link href="/contact">
                  Get Indicative Terms
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/5 hover:text-gold text-base"
              >
                <Link href="/sipp-mortgage-calculator">
                  <Calculator className="mr-2 w-5 h-5" />
                  Try Our Calculator
                </Link>
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex items-center gap-6 text-sm text-white/40">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-gold" />
                <span>50% Max LTV</span>
              </div>
              <div className="h-4 w-px bg-white/20" />
              <span>From 5.49% pa</span>
              <div className="h-4 w-px bg-white/20" />
              <span>15+ Lenders</span>
            </div>
          </motion.div>

          {/* Right — Glass stat cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:grid grid-cols-2 gap-4"
          >
            {[
              {
                label: "Total Arranged",
                value: "£50M+",
                sub: "SIPP property finance",
              },
              {
                label: "Average LTV",
                value: "48%",
                sub: "Within HMRC 50% cap",
              },
              {
                label: "Completion Time",
                value: "6-8 Weeks",
                sub: "From application",
              },
              {
                label: "Client Satisfaction",
                value: "4.9/5",
                sub: "From 200+ reviews",
              },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                className="glass-card-hover p-6"
              >
                <p className="text-sm text-white/50 mb-1">{stat.label}</p>
                <p className="text-2xl font-bold text-gold mb-1">{stat.value}</p>
                <p className="text-xs text-white/40">{stat.sub}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
