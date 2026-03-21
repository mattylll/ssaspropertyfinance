"use client";

import { motion } from "framer-motion";
import { FileText, Search, Handshake, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: FileText,
    step: "01",
    title: "Submit Enquiry",
    description:
      "Complete our short enquiry form with your property and pension details. Takes under 2 minutes.",
  },
  {
    icon: Search,
    step: "02",
    title: "Expert Assessment",
    description:
      "Our specialist broker reviews your requirements and identifies the most suitable SSAS lenders.",
  },
  {
    icon: Handshake,
    step: "03",
    title: "Lender Matching",
    description:
      "We present you with indicative terms from multiple specialist SSAS mortgage lenders.",
  },
  {
    icon: CheckCircle,
    step: "04",
    title: "Completion",
    description:
      "We manage the full application process through to completion, liaising with your SSAS trustees.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-16 border-y border-white/10 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-heading text-3xl sm:text-4xl text-white mb-4">
            How It Works
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            From first enquiry to completion, we guide you through every step of
            securing SSAS property finance.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative text-center"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-gold/30 to-transparent" />
              )}

              <div className="w-16 h-16 rounded-2xl glass-card mx-auto mb-4 flex items-center justify-center">
                <step.icon className="w-7 h-7 text-gold" />
              </div>

              <span className="text-xs font-mono text-gold/60 tracking-wider">
                STEP {step.step}
              </span>
              <h3 className="font-heading text-lg text-white mt-1 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-white/60 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
