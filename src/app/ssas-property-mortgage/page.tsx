import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle,
  Shield,
  TrendingUp,
  Clock,
  PoundSterling,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "SSAS Commercial Property Mortgage",
  description:
    "Specialist SSAS commercial property mortgages from 5.49%. Up to 50% LTV, 25 year terms, 15+ specialist lenders. Get indicative terms in 24 hours.",
  alternates: { canonical: "/ssas-property-mortgage" },
};

const features = [
  {
    icon: TrendingUp,
    title: "Up to 50% LTV",
    description:
      "Borrow up to half the property value through your SSAS, maximising your pension scheme's purchasing power.",
  },
  {
    icon: PoundSterling,
    title: "From 5.49% pa",
    description:
      "Competitive fixed and variable rates from our panel of 15+ specialist SSAS commercial property lenders.",
  },
  {
    icon: Clock,
    title: "6-8 Week Completion",
    description:
      "Our experienced team manages the full process from application through to completion with your SSAS trustees.",
  },
  {
    icon: Shield,
    title: "Trusted Specialists",
    description:
      "Dedicated SSAS commercial property finance specialists with 15+ years of market experience.",
  },
];

const eligibility = [
  "Property must be commercial (offices, industrial, retail, warehouses)",
  "SSAS must have sufficient funds for the deposit (minimum 50% of property value)",
  "Property must be purchased at market value with an independent valuation",
  "Tenant must be in place or arranged (connected party tenants are permitted)",
  "SSAS trustees must approve the property as a permitted investment",
  "Residential property is not permitted within an SSAS (HMRC RPSM03107030)",
];

export default function SsasPropertyMortgagePage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
              <Building2 className="w-4 h-4 text-gold" />
              <span className="text-sm text-white/70">
                Specialist SSAS Lender Panel
              </span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl text-white leading-tight mb-6">
              SSAS Commercial
              <br />
              Property{" "}
              <span className="text-gold-gradient">Mortgages</span>
            </h1>

            <p className="text-sm text-white/50 mb-6">Reviewed by Matt Lenzie, Founder — SSAS Property Finance</p>

            <p className="text-lg text-white/60 mb-8 leading-relaxed">
              Purchase commercial property through your Small Self-Administered
              Scheme with specialist SSAS mortgage rates from 5.49%. We compare
              terms across 15+ lenders to find the right deal for your pension
              scheme.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="gold-gradient text-navy font-semibold hover:opacity-90"
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
                className="border-white/20 text-white hover:bg-white/5 hover:text-gold"
              >
                <Link href="/ssas-mortgage-calculator">
                  Use Calculator
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {features.map((f) => (
              <div key={f.title} className="glass-card-hover p-5">
                <f.icon className="w-6 h-6 text-gold mb-3" />
                <h3 className="text-sm font-semibold text-white mb-1">
                  {f.title}
                </h3>
                <p className="text-xs text-white/40">{f.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How SSAS Mortgages Work */}
        <section className="mb-20">
          <h2 className="font-heading text-3xl text-white mb-6">
            How SSAS Commercial Property Mortgages Work
          </h2>
          <div className="glass-card p-8 prose prose-sm prose-invert max-w-none">
            <p className="text-white/60 leading-relaxed">
              An SSAS commercial property mortgage allows your pension scheme to
              borrow money to purchase commercial property. Under HMRC rules,
              your SSAS can borrow up to 50% of its net asset value. This means
              if your SSAS has £400,000 in funds, it can borrow up to £200,000
              to purchase a property worth up to £600,000. Multiple members can
              pool their assets for even larger acquisitions.
            </p>
            <p className="text-white/60 leading-relaxed mt-4">
              The property is held as an asset within your SSAS, and any rental
              income flows back into your pension scheme tax-free. This is
              particularly advantageous for company directors who can purchase
              their own commercial premises through their SSAS and pay a
              market-rate rent — the rent is a tax-deductible business expense,
              and it goes directly into your pension scheme.
            </p>
            <p className="text-white/60 leading-relaxed mt-4">
              The mortgage is secured against the property and repaid from the
              SSAS fund over terms of up to 25 years. Interest rates for SSAS
              commercial mortgages typically start from around 5.49% per annum,
              with both fixed and variable rate options available from specialist
              pension lenders.
            </p>
          </div>
        </section>

        {/* Eligibility */}
        <section className="mb-20">
          <h2 className="font-heading text-3xl text-white mb-6">
            SSAS Property Mortgage Eligibility
          </h2>
          <div className="glass-card p-8">
            <ul className="space-y-4">
              {eligibility.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                  <span className="text-white/60 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="glass-card p-10 text-center">
          <h2 className="font-heading text-3xl text-white mb-4">
            Ready to Explore SSAS Property Finance?
          </h2>
          <p className="text-white/50 max-w-xl mx-auto mb-6">
            Complete our short enquiry form and receive indicative terms from
            specialist SSAS lenders within 24 hours. No obligation, no fees for
            initial consultation.
          </p>
          <Button
            asChild
            size="lg"
            className="gold-gradient text-navy font-semibold hover:opacity-90"
          >
            <Link href="/contact">
              Get Indicative Terms
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </section>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "FinancialProduct",
              name: "SSAS Commercial Property Mortgage",
              description:
                "Specialist SSAS commercial property mortgages from 5.49%. Up to 50% LTV, 25 year terms, 15+ specialist lenders.",
              provider: {
                "@type": "FinancialService",
                name: "SSAS Property Finance",
                url: "https://ssaspropertyfinance.co.uk",
              },
              category: "Commercial Property Mortgage",
              areaServed: { "@type": "Country", name: "United Kingdom" },
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://ssaspropertyfinance.co.uk" },
                { "@type": "ListItem", position: 2, name: "SSAS Commercial Property Mortgage", item: "https://ssaspropertyfinance.co.uk/ssas-property-mortgage" },
              ],
            },
          ]),
        }}
      />
    </div>
  );
}
