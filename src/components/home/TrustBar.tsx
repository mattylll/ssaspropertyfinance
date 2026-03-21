"use client";

import { motion } from "framer-motion";
import { Shield, Landmark, Clock, PoundSterling, Users } from "lucide-react";

const trustItems = [
  { icon: Shield, label: "Specialist Broker", value: "SSAS Experts" },
  { icon: Landmark, label: "HMRC Compliant", value: "Pension Property Rules" },
  { icon: Clock, label: "Experience", value: "15+ Years" },
  { icon: PoundSterling, label: "Arranged", value: "£50M+ Finance" },
  { icon: Users, label: "Founder", value: "Matt Lenzie" },
];

export function TrustBar() {
  return (
    <section className="py-8 border-y border-white/10 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-8 lg:gap-16"
        >
          {trustItems.map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <item.icon className="w-5 h-5 text-gold" />
              <div>
                <p className="text-xs text-white/60 uppercase tracking-wider">
                  {item.label}
                </p>
                <p className="text-sm font-medium text-white/70">{item.value}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
