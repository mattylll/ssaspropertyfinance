import type { Metadata } from "next";
import { SippLtvCalculatorClient } from "@/components/calculators/SippLtvCalculator";

export const metadata: Metadata = {
  title: "SIPP LTV Calculator",
  description:
    "Calculate your SIPP borrowing power with our free LTV calculator. See the maximum 50% LTV cap, deposit requirements, and total purchasing power.",
};

export default function SippLtvCalculatorPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="font-heading text-4xl sm:text-5xl text-white mb-4">
            SIPP LTV Calculator
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto">
            Understand how much your SIPP can borrow under the 50% LTV cap.
            Enter your property value and fund size to see your borrowing power.
          </p>
        </div>

        <SippLtvCalculatorClient />

        <div className="glass-card p-4 mt-8">
          <p className="text-sm text-white/60 leading-relaxed">
            <strong className="text-white/60">Important:</strong> SIPP borrowing
            is limited to 50% of the net value of the scheme assets. This
            calculator provides illustrative figures only. Eligibility depends on
            your SIPP provider, lender criteria, and property type. Always seek
            independent financial advice.
          </p>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "SIPP LTV Calculator",
            applicationCategory: "FinanceApplication",
            operatingSystem: "Web",
            offers: { "@type": "Offer", price: "0", priceCurrency: "GBP" },
          }),
        }}
      />
    </div>
  );
}
