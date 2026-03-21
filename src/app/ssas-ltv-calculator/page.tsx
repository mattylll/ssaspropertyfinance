import type { Metadata } from "next";
import { SsasLtvCalculatorClient } from "@/components/calculators/SsasLtvCalculator";

export const metadata: Metadata = {
  title: "SSAS LTV Calculator",
  description:
    "Calculate your SSAS borrowing power with our free LTV calculator. See the maximum 50% LTV cap, deposit requirements, and total purchasing power.",
  alternates: { canonical: "/ssas-ltv-calculator" },
};

export default function SsasLtvCalculatorPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="font-heading text-4xl sm:text-5xl text-white mb-4">
            SSAS LTV Calculator
          </h1>
          <p className="text-white/50 max-w-2xl mx-auto">
            Understand how much your SSAS can borrow under the 50% LTV cap.
            Enter your property value and fund size to see your borrowing power.
          </p>
        </div>

        <SsasLtvCalculatorClient />

        <div className="glass-card p-4 mt-8">
          <p className="text-xs text-white/40 leading-relaxed">
            <strong className="text-white/60">Important:</strong> SSAS borrowing
            is limited to 50% of the net value of the scheme assets. This
            calculator provides illustrative figures only. Eligibility depends on
            your SSAS trustees, lender criteria, and property type. Always seek
            independent financial advice.
          </p>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([{
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "SSAS LTV Calculator",
            applicationCategory: "FinanceApplication",
            operatingSystem: "Web",
            offers: { "@type": "Offer", price: "0", priceCurrency: "GBP" },
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://ssaspropertyfinance.co.uk" },
              { "@type": "ListItem", position: 2, name: "SSAS LTV Calculator", item: "https://ssaspropertyfinance.co.uk/ssas-ltv-calculator" },
            ],
          }]),
        }}
      />
    </div>
  );
}
