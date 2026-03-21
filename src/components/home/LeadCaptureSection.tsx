"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { QuickEnquiryForm } from "@/components/forms/QuickEnquiryForm";
import { Zap, ClipboardList } from "lucide-react";

export function LeadCaptureSection() {
  const [mode, setMode] = useState<"quick" | "detailed">("quick");

  return (
    <section className="py-16 border-t border-white/10" id="enquiry">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="font-heading text-3xl sm:text-4xl text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-white/60 max-w-xl mx-auto mb-8">
            Send a quick message or complete our detailed enquiry form to receive
            indicative SIPP mortgage terms within 24 hours.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center rounded-full bg-white/5 border border-white/10 p-1">
            <button
              onClick={() => setMode("quick")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                mode === "quick"
                  ? "gold-gradient text-navy"
                  : "text-white/60 hover:text-white"
              }`}
            >
              <Zap className="w-4 h-4" />
              Quick Enquiry
            </button>
            <button
              onClick={() => setMode("detailed")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                mode === "detailed"
                  ? "gold-gradient text-navy"
                  : "text-white/60 hover:text-white"
              }`}
            >
              <ClipboardList className="w-4 h-4" />
              Detailed Enquiry
            </button>
          </div>
        </motion.div>

        <motion.div
          key={mode}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          {mode === "quick" ? (
            <div className="max-w-lg mx-auto">
              <QuickEnquiryForm />
              <p className="text-center text-white/40 text-xs mt-4">
                Want to get indicative terms faster?{" "}
                <button
                  onClick={() => setMode("detailed")}
                  className="text-gold underline hover:text-gold/80"
                >
                  Complete our detailed form
                </button>{" "}
                with your property and pension details.
              </p>
            </div>
          ) : (
            <>
              <EnquiryForm />
              <p className="text-center text-white/40 text-xs mt-4">
                Not ready for all the details?{" "}
                <button
                  onClick={() => setMode("quick")}
                  className="text-gold underline hover:text-gold/80"
                >
                  Send a quick message
                </button>{" "}
                and we&apos;ll call you back.
              </p>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
