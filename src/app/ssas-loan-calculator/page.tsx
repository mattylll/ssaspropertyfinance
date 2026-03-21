import type { Metadata } from "next";
import { SsasLoanCalculatorClient } from "@/components/calculators/SsasLoanCalculator";

export const metadata: Metadata = {
  title: "SSAS Loanback Calculator",
  description:
    "Calculate SSAS loanback repayments under HMRC 5-year rules. See maximum permitted loan, monthly repayments, and compliance status.",
};

export default function SsasLoanCalculatorPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="font-heading text-4xl sm:text-5xl text-white mb-4">
            SSAS Loanback Calculator
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto">
            Calculate your SSAS loanback under HMRC rules. The maximum loan is
            50% of fund value, repayable within 5 years at a minimum of base rate
            plus 1%.
          </p>
        </div>

        <SsasLoanCalculatorClient />

        <div className="glass-card p-4 mt-8">
          <p className="text-sm text-white/60 leading-relaxed">
            <strong className="text-white/60">Important:</strong> SSAS loanback
            rules are set by HMRC. The maximum loan is 50% of the scheme&apos;s
            net assets. The loan must be repaid within 5 years with equal
            instalments of capital and interest. Security of at least the value
            of the loan plus 10% is required. This calculator is for
            illustrative purposes only.
          </p>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "SSAS Loanback Calculator",
            applicationCategory: "FinanceApplication",
            operatingSystem: "Web",
            offers: { "@type": "Offer", price: "0", priceCurrency: "GBP" },
          }),
        }}
      />
    </div>
  );
}
