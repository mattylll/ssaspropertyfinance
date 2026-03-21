"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Factory,
  Store,
  Warehouse,
  Home,
  Trees,
  CircleCheck,
  CircleX,
} from "lucide-react";

const propertyTypes = [
  {
    icon: Building2,
    name: "Office Buildings",
    permitted: true,
    note: "Standard commercial offices",
  },
  {
    icon: Factory,
    name: "Industrial Units",
    permitted: true,
    note: "Factories, workshops, depots",
  },
  {
    icon: Store,
    name: "Retail Premises",
    permitted: true,
    note: "Shops, high street, retail parks",
  },
  {
    icon: Warehouse,
    name: "Warehouses",
    permitted: true,
    note: "Distribution, storage, logistics",
  },
  {
    icon: Building2,
    name: "Mixed-Use",
    permitted: true,
    note: "Commercial with ancillary residential",
  },
  {
    icon: Home,
    name: "Residential Property",
    permitted: false,
    note: "Not permitted in SSAS (HMRC rules)",
  },
  {
    icon: Trees,
    name: "Agricultural Land",
    permitted: false,
    note: "Generally not permitted in SSAS",
  },
  {
    icon: Home,
    name: "Holiday Lets",
    permitted: false,
    note: "Classed as residential by HMRC",
  },
];

export function PermittedPropertyTypes() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl sm:text-4xl text-white mb-4">
            HMRC Permitted Property Types
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            HMRC strictly regulates which property types can be held within an
            SSAS. Commercial property is generally permitted; residential is not.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {propertyTypes.map((type, i) => (
            <motion.div
              key={type.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`glass-card p-5 ${
                type.permitted
                  ? "border-emerald-500/20 hover:border-emerald-500/40"
                  : "border-red-500/20 hover:border-red-500/40"
              } transition-colors`}
            >
              <div className="flex items-start justify-between mb-3">
                <type.icon className="w-6 h-6 text-white/60" />
                {type.permitted ? (
                  <CircleCheck className="w-5 h-5 text-emerald-400" />
                ) : (
                  <CircleX className="w-5 h-5 text-red-400" />
                )}
              </div>
              <h3 className="text-sm font-semibold text-white mb-1">{type.name}</h3>
              <p className="text-xs text-white/40">{type.note}</p>
              <div className="mt-3">
                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${
                    type.permitted
                      ? "bg-emerald-500/10 text-emerald-400"
                      : "bg-red-500/10 text-red-400"
                  }`}
                >
                  {type.permitted ? "Permitted" : "Not Permitted"}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-xs text-white/30 text-center mt-6">
          Based on HMRC guidance RPSM03107030. Rules may change — always confirm
          with your SSAS trustees and seek professional advice.
        </p>
      </div>
    </section>
  );
}
