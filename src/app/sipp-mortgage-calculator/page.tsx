import type { Metadata } from "next";
import { SippMortgageCalculatorClient } from "@/components/calculators/SippMortgageCalculator";

export const metadata: Metadata = {
  title: "SIPP Mortgage Calculator",
  description:
    "Calculate your SIPP commercial property mortgage. See maximum borrowing, monthly payments, and full amortisation schedule. Free SIPP mortgage calculator tool.",
};

export default function SippMortgageCalculatorPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="font-heading text-4xl sm:text-5xl text-white mb-4">
            SIPP Mortgage Calculator
          </h1>
          <p className="text-white/50 max-w-2xl mx-auto">
            Calculate your SIPP commercial property mortgage. Enter your property
            value, pension fund size, and desired terms to see indicative monthly
            payments and a full amortisation schedule.
          </p>
        </div>

        <SippMortgageCalculatorClient />

        {/* FCA Disclaimer */}
        <div className="glass-card p-4 mt-8">
          <p className="text-xs text-white/40 leading-relaxed">
            <strong className="text-white/60">Important:</strong> This calculator
            provides illustrative figures only and does not constitute financial
            advice. Actual rates, terms, and eligibility depend on the lender,
            property type, and your SIPP provider. The maximum LTV for a SIPP
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
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "SIPP Mortgage Calculator",
            applicationCategory: "FinanceApplication",
            operatingSystem: "Web",
            description:
              "Calculate SIPP commercial property mortgage payments, maximum borrowing, and amortisation schedules",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "GBP",
            },
          }),
        }}
      />
    </div>
  );
}
