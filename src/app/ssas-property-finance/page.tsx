import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Landmark,
  CheckCircle,
  Shield,
  Users,
  PoundSterling,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "SSAS Property Finance & Loanback",
  description:
    "SSAS property loans and loanback facility for company directors. Up to 50% loanback under HMRC 5-year rules. Specialist SSAS commercial property finance.",
};

const features = [
  {
    icon: PoundSterling,
    title: "50% Loanback",
    description:
      "Borrow up to 50% of scheme assets back to the sponsoring employer under HMRC rules.",
  },
  {
    icon: Users,
    title: "Multiple Trustees",
    description:
      "SSAS schemes can have multiple member trustees, allowing pooled pension assets for larger acquisitions.",
  },
  {
    icon: FileText,
    title: "HMRC 5-Year Rule",
    description:
      "Loanback must be repaid with equal instalments of capital and interest within 5 years.",
  },
  {
    icon: Shield,
    title: "Tax Efficiency",
    description:
      "Rental income is tax-free within the SSAS. Capital gains on disposal are also exempt from CGT.",
  },
];

export default function SsasPropertyFinancePage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
              <Landmark className="w-4 h-4 text-gold" />
              <span className="text-sm text-white/70">
                SSAS Property Specialists
              </span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl text-white leading-tight mb-6">
              SSAS Property
              <br />
              Finance &{" "}
              <span className="text-gold-gradient">Loanback</span>
            </h1>

            <p className="text-lg text-white/60 mb-8 leading-relaxed">
              Specialist Small Self-Administered Scheme (SSAS) property finance
              for company directors and business owners. Leverage your company
              pension scheme for commercial property acquisition, development
              finance, and loanback facilities.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="gold-gradient text-navy font-semibold hover:opacity-90"
              >
                <Link href="/contact">
                  Enquire About SSAS Finance
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/5 hover:text-gold"
              >
                <Link href="/ssas-loan-calculator">
                  SSAS Calculator
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

        {/* Content sections */}
        <section className="mb-20">
          <h2 className="font-heading text-3xl text-white mb-6">
            What is an SSAS?
          </h2>
          <div className="glass-card p-8">
            <p className="text-white/60 leading-relaxed">
              A Small Self-Administered Scheme (SSAS) is an occupational pension
              scheme typically set up by a company for its directors. Unlike a
              SIPP, which is a personal pension, an SSAS is a trust-based scheme
              where the members are also the trustees, giving them direct
              control over investment decisions. SSAS schemes can hold
              commercial property, make loans to the sponsoring employer, and
              pool assets from multiple members for larger investments.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="font-heading text-3xl text-white mb-6">
            SSAS Loanback Rules
          </h2>
          <div className="glass-card p-8">
            <ul className="space-y-4">
              {[
                "Maximum loan is 50% of the scheme's net assets",
                "Loan must be repaid within 5 years with equal instalments",
                "Interest rate must be at least 1% above the average base rate",
                "Security of at least the value of the loan plus 10% is required",
                "The loan must be to the sponsoring employer, not individual members",
                "A first charge on an asset of equivalent value must be provided",
              ].map((rule) => (
                <li key={rule} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                  <span className="text-white/60 text-sm">{rule}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="glass-card p-10 text-center">
          <h2 className="font-heading text-3xl text-white mb-4">
            Explore SSAS Property Finance Options
          </h2>
          <p className="text-white/50 max-w-xl mx-auto mb-6">
            Whether you&apos;re looking at commercial property acquisition or a
            loanback facility, our specialist team can guide you through the
            process.
          </p>
          <Button
            asChild
            size="lg"
            className="gold-gradient text-navy font-semibold hover:opacity-90"
          >
            <Link href="/contact">
              Get SSAS Finance Advice
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </section>
      </div>
    </div>
  );
}
