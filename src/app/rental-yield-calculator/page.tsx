import type { Metadata } from "next";
import { RentalYieldCalculatorClient } from "@/components/calculators/RentalYieldCalculator";

export const metadata: Metadata = {
  title: "Rental Yield Calculator",
  description:
    "Calculate gross and net rental yield for SIPP commercial property investments. See annual surplus or deficit within your pension fund.",
};

export default function RentalYieldCalculatorPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="font-heading text-4xl sm:text-5xl text-white mb-4">
            Rental Yield Calculator
          </h1>
          <p className="text-white/50 max-w-2xl mx-auto">
            Calculate the gross and net rental yield for your SIPP commercial
            property investment. Factor in expenses and mortgage repayments to
            see the true return within your pension.
          </p>
        </div>

        <RentalYieldCalculatorClient />

        <div className="glass-card p-4 mt-8">
          <p className="text-xs text-white/40 leading-relaxed">
            <strong className="text-white/60">Important:</strong> Rental yields
            shown are for illustrative purposes only. Actual yields will depend
            on tenant quality, lease terms, void periods, and property
            management costs. Rental income within a SIPP is tax-free.
          </p>
        </div>
      </div>
    </div>
  );
}
