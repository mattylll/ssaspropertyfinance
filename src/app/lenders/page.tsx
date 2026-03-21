import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "SIPP Commercial Property Lenders UK",
  description:
    "Compare specialist SIPP and SSAS commercial property mortgage lenders. Rates from 5.49%, up to 50% LTV, terms to 25 years. UK's leading SIPP lender panel.",
};

const lenders = [
  {
    name: "West Bromwich Building Society",
    minLoan: "£50,000",
    maxLoan: "£3,000,000",
    maxLtv: "50%",
    minRate: "5.49%",
    sipp: true,
    ssas: true,
    propertyTypes: ["Office", "Industrial", "Retail", "Mixed-Use"],
    features: ["Fixed & Variable rates", "Up to 25 year terms", "Interest-only available"],
    termMax: "25 years",
  },
  {
    name: "Shawbrook Bank",
    minLoan: "£100,000",
    maxLoan: "£5,000,000",
    maxLtv: "50%",
    minRate: "5.99%",
    sipp: true,
    ssas: false,
    propertyTypes: ["Office", "Industrial", "Retail"],
    features: ["Fast turnaround", "Interest-only available", "Specialist team"],
    termMax: "20 years",
  },
  {
    name: "Redwood Bank",
    minLoan: "£250,000",
    maxLoan: "£15,000,000",
    maxLtv: "50%",
    minRate: "5.75%",
    sipp: true,
    ssas: true,
    propertyTypes: ["Office", "Industrial", "Retail", "Mixed-Use"],
    features: ["Dedicated relationship manager", "Flexible structuring", "Large loans"],
    termMax: "25 years",
  },
  {
    name: "Aldermore",
    minLoan: "£50,000",
    maxLoan: "£10,000,000",
    maxLtv: "50%",
    minRate: "5.89%",
    sipp: true,
    ssas: true,
    propertyTypes: ["Office", "Industrial", "Retail", "Mixed-Use"],
    features: ["Multiple property types", "Broker-only", "Portfolio lending"],
    termMax: "25 years",
  },
  {
    name: "Hampshire Trust Bank",
    minLoan: "£150,000",
    maxLoan: "£5,000,000",
    maxLtv: "50%",
    minRate: "6.25%",
    sipp: true,
    ssas: false,
    propertyTypes: ["Office", "Industrial", "Retail"],
    features: ["Specialist SIPP lending", "Competitive rates", "Fast decisions"],
    termMax: "20 years",
  },
  {
    name: "Paragon Bank",
    minLoan: "£100,000",
    maxLoan: "£25,000,000",
    maxLtv: "50%",
    minRate: "5.69%",
    sipp: true,
    ssas: true,
    propertyTypes: ["Office", "Industrial", "Retail", "Mixed-Use"],
    features: ["Large loan specialist", "Portfolio landlord friendly", "Flexible terms"],
    termMax: "25 years",
  },
];

export default function LendersPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl sm:text-5xl text-white mb-4">
            SIPP Commercial Property Lenders
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto">
            Our specialist panel of UK SIPP and SSAS commercial property mortgage
            lenders. We compare terms across all lenders to find the best deal
            for your pension fund.
          </p>
        </div>

        <div className="glass-card p-6 mb-8">
          <p className="text-sm text-white/60 leading-relaxed">
            Our lender panel comprises specialist UK institutions that actively
            lend to SIPP and SSAS trustees for commercial property acquisition.
            Each lender has been vetted for their understanding of pension
            property transactions, speed of service, and competitive terms. As
            whole-of-market brokers, we are not tied to any single lender — we
            compare across the full panel to secure the most favourable rates,
            LTV, and terms for your specific pension fund and property type.
          </p>
        </div>

        <div className="space-y-4">
          {lenders.map((lender) => (
            <div key={lender.name} className="glass-card-hover p-6">
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                {/* Name & badges */}
                <div className="lg:w-1/4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-gold" />
                    </div>
                    <h2 className="font-semibold text-white text-sm">
                      {lender.name}
                    </h2>
                  </div>
                  <div className="flex gap-2 mt-2">
                    {lender.sipp && (
                      <Badge
                        variant="outline"
                        className="border-gold/30 text-gold text-xs"
                      >
                        SIPP
                      </Badge>
                    )}
                    {lender.ssas && (
                      <Badge
                        variant="outline"
                        className="border-blue-accent/30 text-blue-accent text-xs"
                      >
                        SSAS
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Key stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:w-1/3">
                  <div>
                    <p className="text-xs text-white/60">Min Loan</p>
                    <p className="text-sm font-medium text-white">
                      {lender.minLoan}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-white/60">Max Loan</p>
                    <p className="text-sm font-medium text-white">
                      {lender.maxLoan}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-white/60">Max LTV</p>
                    <p className="text-sm font-medium text-gold">
                      {lender.maxLtv}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-white/60">From</p>
                    <p className="text-sm font-medium text-gold">
                      {lender.minRate}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="lg:w-1/4">
                  <div className="space-y-1">
                    {lender.features.map((f) => (
                      <p
                        key={f}
                        className="text-xs text-white/60 flex items-center gap-1.5"
                      >
                        <Check className="w-3 h-3 text-emerald-400" />
                        {f}
                      </p>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="lg:w-auto">
                  <Button
                    asChild
                    size="sm"
                    className="gold-gradient text-navy font-semibold hover:opacity-90 w-full lg:w-auto"
                  >
                    <Link href="/contact">
                      Enquire <ArrowRight className="ml-1 w-3 h-3" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="glass-card p-4 mt-8">
          <p className="text-sm text-white/60 leading-relaxed">
            <strong className="text-white/60">Note:</strong> Rates and criteria
            shown are indicative and subject to change. Actual terms depend on
            property type, location, borrower profile, and market conditions.
            All SIPP commercial property mortgages are subject to lender
            approval and SIPP provider acceptance.
          </p>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FinancialService",
            name: "SIPP Property Finance - Lender Panel",
            description:
              "Compare specialist SIPP and SSAS commercial property mortgage lenders. Rates from 5.49%, up to 50% LTV.",
            url: "https://sipppropertyfinance.co.uk/lenders",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "SIPP Commercial Property Lenders",
              itemListElement: lenders.map((lender, index) => ({
                "@type": "ListItem",
                position: index + 1,
                item: {
                  "@type": "FinancialProduct",
                  name: `${lender.name} - SIPP Mortgage`,
                  description: lender.features.join(". "),
                  provider: {
                    "@type": "Organization",
                    name: lender.name,
                  },
                },
              })),
            },
          }),
        }}
      />
    </div>
  );
}
