"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Calculator, FileText, Building2, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  {
    label: "Products",
    href: "/ssas-term-loan",
    icon: Building2,
    children: [
      { label: "SSAS Term Loan", href: "/ssas-term-loan" },
      { label: "SSAS Bridging Finance", href: "/ssas-bridging-finance" },
      { label: "SSAS Development Finance", href: "/ssas-development-finance" },
      { label: "SSAS Loanback", href: "/ssas-property-finance" },
      { label: "SSAS Commercial Mortgage", href: "/ssas-property-mortgage" },
    ],
  },
  {
    label: "Calculators",
    href: "/ssas-mortgage-calculator",
    icon: Calculator,
    children: [
      { label: "SSAS Mortgage Calculator", href: "/ssas-mortgage-calculator" },
      { label: "SSAS LTV Calculator", href: "/ssas-ltv-calculator" },
      { label: "SSAS Loanback Calculator", href: "/ssas-loan-calculator" },
      { label: "Rental Yield Calculator", href: "/rental-yield-calculator" },
    ],
  },
  { label: "Property Guide", href: "/commercial-property-ssas" },
  { label: "Guides", href: "/guides", icon: FileText },
  { label: "Learn", href: "/learn" },
  { label: "Lenders", href: "/lenders" },
  { label: "Contact", href: "/contact", icon: Phone },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gold-gradient flex items-center justify-center">
              <Building2 className="w-5 h-5 text-navy" />
            </div>
            <span className="font-heading text-lg text-gold">
              SSAS Property Finance
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className="nav-link-hover px-3 py-2 text-sm text-white/70 hover:text-gold transition-colors rounded-lg hover:bg-white/5"
                  >
                    {link.label}
                  </button>
                  <AnimatePresence>
                    {openDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        className="absolute top-full left-0 mt-1 w-64 glass-card p-2"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-3 py-2 text-sm text-white/70 hover:text-gold hover:bg-white/5 rounded-lg transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="nav-link-hover px-3 py-2 text-sm text-white/70 hover:text-gold transition-colors rounded-lg hover:bg-white/5"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              asChild
              className="gold-gradient text-navy font-semibold hover:opacity-90 transition-opacity"
            >
              <Link href="/contact">Get Indicative Terms</Link>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-white/70 hover:text-gold"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden border-t border-white/10"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-2 text-white/70 hover:text-gold hover:bg-white/5 rounded-lg transition-colors"
                  >
                    {link.label}
                  </Link>
                  {link.children?.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setMobileOpen(false)}
                      className="block pl-8 pr-3 py-2 text-sm text-white/60 hover:text-gold hover:bg-white/5 rounded-lg transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ))}
              <div className="pt-3">
                <Button
                  asChild
                  className="w-full gold-gradient text-navy font-semibold"
                >
                  <Link href="/contact" onClick={() => setMobileOpen(false)}>
                    Get Indicative Terms
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
