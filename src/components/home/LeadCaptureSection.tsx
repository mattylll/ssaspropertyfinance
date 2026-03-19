"use client";

import { motion } from "framer-motion";
import { EnquiryForm } from "@/components/forms/EnquiryForm";

export function LeadCaptureSection() {
  return (
    <section className="py-20 border-t border-white/10" id="enquiry">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="font-heading text-3xl sm:text-4xl text-white mb-4">
            Get Indicative Terms
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Complete our short enquiry form and receive indicative SIPP mortgage
            terms from our specialist broker within 24 hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <EnquiryForm />
        </motion.div>
      </div>
    </section>
  );
}
