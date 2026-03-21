import Link from "next/link";
import { Building2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  Products: [
    { label: "SIPP Property Mortgage", href: "/sipp-property-mortgage" },
    { label: "SSAS Property Finance", href: "/ssas-property-finance" },
    { label: "Commercial Property Guide", href: "/commercial-property-sipp" },
    { label: "Lender Panel", href: "/lenders" },
  ],
  Learn: [
    { label: "Learning Centre", href: "/learn" },
    { label: "What Is a SIPP?", href: "/learn/what-is-a-sipp" },
    { label: "SIPP Mortgage Explained", href: "/learn/sipp-mortgage-explained" },
    { label: "SSAS vs SIPP", href: "/learn/ssas-vs-sipp" },
    { label: "Tax Benefits of SIPP Property", href: "/learn/tax-benefits-sipp-property" },
    { label: "Case Studies", href: "/learn/case-study-business-owner-buys-office-sipp" },
  ],
  Calculators: [
    { label: "SIPP Mortgage Calculator", href: "/sipp-mortgage-calculator" },
    { label: "SIPP LTV Calculator", href: "/sipp-ltv-calculator" },
    { label: "SSAS Loanback Calculator", href: "/ssas-loan-calculator" },
    { label: "Rental Yield Calculator", href: "/rental-yield-calculator" },
  ],
  Company: [
    { label: "Contact Us", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg gold-gradient flex items-center justify-center">
                <Building2 className="w-5 h-5 text-navy" />
              </div>
              <span className="font-heading text-lg text-gold">
                SIPP Property Finance
              </span>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed">
              Founded by Matt Lenzie — board advisor to a SIPP business with
              over £2.9bn assets under advisory, former banker and corporate
              finance partner. Helping UK pension trustees and IFAs access
              competitive commercial mortgage rates.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-gold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8 bg-white/10" />

        {/* Disclaimer */}
        <div className="glass-card p-4 mb-6">
          <p className="text-sm text-white/50 leading-relaxed">
            <strong className="text-white/60">Disclaimer:</strong> Lenzie
            Consulting Ltd trading as SIPP Property Finance. Registered in England
            and Wales. Registered office: Hertfordshire, UK. SIPP and SSAS
            commercial property loans are not regulated by the Financial Conduct
            Authority. The information on this website does not constitute
            financial advice. The value of pensions and investments can go down
            as well as up. Always seek independent financial advice before
            making pension investment decisions.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Lenzie Consulting Ltd trading as
            SIPP Property Finance. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-white/40">
            <Link href="/privacy" className="hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gold transition-colors">
              Terms
            </Link>
            <span>Lenzie Consulting Ltd</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
