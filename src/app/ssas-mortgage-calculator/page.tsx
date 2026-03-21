import type { Metadata } from "next";
import { SsasMortgageCalculatorClient } from "@/components/calculators/SsasMortgageCalculator";

export const metadata: Metadata = {
  title: "SSAS Mortgage Calculator",
  description:
    "Calculate your SSAS commercial property mortgage. See maximum borrowing, monthly payments, and full amortisation schedule. Free SSAS mortgage calculator tool.",
  alternates: { canonical: "/ssas-mortgage-calculator" },
};

export default function SsasMortgageCalculatorPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="font-heading text-4xl sm:text-5xl text-white mb-4">
            SSAS Mortgage Calculator
          </h1>
          <p className="text-white/50 max-w-2xl mx-auto">
            Calculate your SSAS commercial property mortgage. Enter your property
            value, pension scheme size, and desired terms to see indicative monthly
            payments and a full amortisation schedule.
          </p>
        </div>

        <SsasMortgageCalculatorClient />

        {/* Disclaimer */}
        <div className="glass-card p-4 mt-8">
          <p className="text-xs text-white/40 leading-relaxed">
            <strong className="text-white/60">Important:</strong> This calculator
            provides illustrative figures only and does not constitute financial
            advice. Actual rates, terms, and eligibility depend on the lender,
            property type, and your SSAS trustees. The maximum LTV for an SSAS
            commercial property mortgage is 50% of the property value. Your
            pension and property values can go down as well as up. Always seek
            independent financial advice before proceeding.
          </p>
        </div>
      </div>

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([{
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "SSAS Mortgage Calculator",
            applicationCategory: "FinanceApplication",
            operatingSystem: "Web",
            description:
              "Calculate SSAS commercial property mortgage payments, maximum borrowing, and amortisation schedules",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "GBP",
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://ssaspropertyfinance.co.uk" },
              { "@type": "ListItem", position: 2, name: "SSAS Mortgage Calculator", item: "https://ssaspropertyfinance.co.uk/ssas-mortgage-calculator" },
            ],
          }]),
        }}
      />
    </div>
  );
}
