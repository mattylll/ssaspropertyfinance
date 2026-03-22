import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Shield,
  TrendingUp,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "SSAS Bridging Finance | Short-Term Property Loans",
  description:
    "SSAS bridging loans for commercial property. Fast completion in 4-6 weeks, flexible 6-18 month terms, up to 50% LTV. Compare rates from specialist lenders.",
  alternates: { canonical: "/ssas-bridging-finance" },
};

const features = [
  {
    icon: Zap,
    title: "Fast Completion",
    description:
      "Complete in as little as 4-6 weeks — ideal for auction purchases and time-sensitive acquisitions.",
  },
  {
    icon: TrendingUp,
    title: "Up to 50% LTV",
    description:
      "Borrow up to 50% of your SSAS net asset value under HMRC rules for short-term property finance.",
  },
  {
    icon: Clock,
    title: "6-18 Month Terms",
    description:
      "Flexible short-term finance designed to bridge the gap until long-term funding or sale completes.",
  },
  {
    icon: Shield,
    title: "Specialist Lenders",
    description:
      "Access our panel of lenders experienced in SSAS bridging transactions and pension-backed lending.",
  },
];

const whenToUse = [
  {
    title: "Auction Purchases",
    description:
      "Meet the 28-day completion deadline on commercial property bought at auction through your SSAS.",
  },
  {
    title: "Chain Breaks",
    description:
      "Secure a property quickly when a chain break threatens to collapse the transaction.",
  },
  {
    title: "Refurbishment Projects",
    description:
      "Fund the purchase of commercial property requiring refurbishment before refinancing — or consider SSAS development finance for larger projects.",
  },
  {
    title: "Bridge to Term",
    description:
      "Purchase immediately with bridging finance while arranging a longer-term SSAS term loan.",
  },
];

const eligibility = [
  "Registered SSAS with sufficient net assets to support borrowing",
  "Property must be commercial (offices, industrial, retail, warehouses)",
  "Clear exit strategy required (sale, refinance to term loan, or other)",
  "Independent RICS valuation of the property",
  "All SSAS trustees must approve the transaction",
  "Structure must be HMRC-compliant under pension borrowing rules",
];

const processSteps = [
  {
    step: 1,
    title: "Initial Consultation",
    description:
      "We assess your SSAS position, borrowing capacity, property details, and exit strategy to determine feasibility.",
  },
  {
    step: 2,
    title: "Lender Sourcing",
    description:
      "We approach our specialist lender panel to secure the best bridging terms for your SSAS transaction.",
  },
  {
    step: 3,
    title: "Valuation & Legal",
    description:
      "An independent RICS valuation is instructed and specialist pension solicitors handle the legal work.",
  },
  {
    step: 4,
    title: "Trustee Approval",
    description:
      "All SSAS trustees review and approve the borrowing, property acquisition, and exit strategy.",
  },
  {
    step: 5,
    title: "Completion",
    description:
      "Funds are drawn down and the property is purchased into the SSAS. We then manage your exit route.",
  },
];

export default function SsasBridgingFinancePage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
              <Zap className="w-4 h-4 text-gold" />
              <span className="text-sm text-white/70">
                Short-Term Pension Property Finance
              </span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl text-white leading-tight mb-6">
              SSAS Bridging
              <br />
              <span className="text-gold-gradient">Finance</span>
            </h1>

            <p className="text-sm text-white/50 mb-6">Reviewed by Matt Lenzie, Founder — SSAS Property Finance</p>

            <p className="text-lg text-white/60 mb-8 leading-relaxed">
              Fast, short-term commercial property finance through your SSAS
              pension scheme. Ideal for auction purchases, chain breaks, and
              bridge-to-term strategies with completion in as little as 4-6
              weeks.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="gold-gradient text-navy font-semibold hover:opacity-90"
              >
                <Link href="/contact">
                  Get Bridging Terms
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

        {/* What Is SSAS Bridging Finance */}
        <section className="mb-20">
          <h2 className="font-heading text-3xl text-white mb-6">
            What Is SSAS Bridging Finance?
          </h2>
          <div className="glass-card p-8 prose prose-sm prose-invert max-w-none">
            <p className="text-white/60 leading-relaxed">
              SSAS bridging finance is a short-term loan secured against
              commercial property, funded through your Small Self-Administered
              Scheme. Unlike a traditional SSAS mortgage which runs for up to 25
              years, bridging finance typically lasts between 6 and 18 months
              and is designed for situations where speed of completion is
              critical.
            </p>
            <p className="text-white/60 leading-relaxed mt-4">
              Under HMRC rules, your SSAS can borrow up to 50% of its net asset
              value for property acquisition. Bridging finance uses this same
              borrowing capacity but with a shorter term and a defined exit
              strategy — typically refinancing onto a longer-term SSAS mortgage
              or selling the property.
            </p>
            <p className="text-white/60 leading-relaxed mt-4">
              Interest rates on SSAS bridging loans are higher than term
              lending, reflecting the shorter duration and speed of arrangement.
              However, the ability to move quickly on commercial property
              opportunities — particularly at auction or when a vendor requires
              fast completion — makes bridging finance an essential tool for
              SSAS trustees looking to build a property portfolio.
            </p>
          </div>
        </section>

        {/* When to Use */}
        <section className="mb-20">
          <h2 className="font-heading text-3xl text-white mb-6">
            When to Use SSAS Bridging Finance
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {whenToUse.map((item) => (
              <div key={item.title} className="glass-card-hover p-6">
                <h3 className="text-sm font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-white/50">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Eligibility */}
        <section className="mb-20">
          <h2 className="font-heading text-3xl text-white mb-6">
            SSAS Bridging Finance Eligibility
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

        {/* The Process */}
        <section className="mb-20">
          <h2 className="font-heading text-3xl text-white mb-6">
            The SSAS Bridging Process
          </h2>
          <div className="space-y-4">
            {processSteps.map((s) => (
              <div key={s.step} className="glass-card p-6 flex gap-5">
                <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center shrink-0">
                  <span className="text-navy font-bold text-sm">{s.step}</span>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white mb-1">
                    {s.title}
                  </h3>
                  <p className="text-xs text-white/50">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Related Products */}
        <section className="mb-20">
          <h2 className="font-heading text-3xl text-white mb-6">
            Related SSAS Finance Products
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link href="/ssas-term-loan" className="glass-card-hover p-6 block">
              <h3 className="text-sm font-semibold text-white mb-2">SSAS Term Loan</h3>
              <p className="text-xs text-white/50">
                Refinance your bridging loan onto a long-term SSAS mortgage with fixed or variable rates from 5.49%.
              </p>
            </Link>
            <Link href="/ssas-development-finance" className="glass-card-hover p-6 block">
              <h3 className="text-sm font-semibold text-white mb-2">SSAS Development Finance</h3>
              <p className="text-xs text-white/50">
                For larger refurbishment or conversion projects, staged development finance may be more suitable.
              </p>
            </Link>
            <Link href="/ssas-property-mortgage" className="glass-card-hover p-6 block">
              <h3 className="text-sm font-semibold text-white mb-2">SSAS Commercial Mortgage</h3>
              <p className="text-xs text-white/50">
                Standard SSAS commercial property mortgages with up to 50% LTV and terms up to 25 years.
              </p>
            </Link>
          </div>
        </section>

        {/* SIPP mention */}
        <section className="mb-20">
          <div className="glass-card p-8">
            <h2 className="font-heading text-2xl text-white mb-4">
              Bridging Finance Also Available via SIPP
            </h2>
            <p className="text-white/60 text-sm leading-relaxed">
              Short-term bridging finance is also available for Self-Invested
              Personal Pensions (SIPPs). If you hold a SIPP rather than an
              SSAS, visit our sister site{" "}
              <a
                href="https://sipppropertyfinance.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-gold/80 transition-colors"
              >
                SIPP Property Finance
              </a>{" "}
              for specialist SIPP bridging finance options.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="glass-card p-10 text-center">
          <h2 className="font-heading text-3xl text-white mb-4">
            Need Fast SSAS Property Finance?
          </h2>
          <p className="text-white/50 max-w-xl mx-auto mb-6">
            Tell us about your commercial property opportunity and we will
            source competitive bridging terms from our specialist SSAS lender
            panel. No obligation, no fees for initial consultation.
          </p>
          <Button
            asChild
            size="lg"
            className="gold-gradient text-navy font-semibold hover:opacity-90"
          >
            <Link href="/contact">
              Get Bridging Terms
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
              name: "SSAS Bridging Finance",
              description:
                "Short-term SSAS bridging loans for commercial property. Fast completion, flexible terms, up to 50% LTV.",
              provider: {
                "@type": "FinancialService",
                name: "SSAS Property Finance",
                url: "https://ssaspropertyfinance.co.uk",
              },
              category: "Bridging Finance",
              loanTerm: {
                "@type": "QuantitativeValue",
                minValue: 6,
                maxValue: 18,
                unitText: "months",
              },
              areaServed: { "@type": "Country", name: "United Kingdom" },
            },
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "SSAS Bridging Finance",
              url: "https://ssaspropertyfinance.co.uk/ssas-bridging-finance",
              author: {
                "@type": "Person",
                name: "Matt Lenzie",
                jobTitle: "Founder",
                worksFor: {
                  "@type": "Organization",
                  name: "SSAS Property Finance",
                },
              },
              datePublished: "2026-03-21",
              dateModified: "2026-03-21",
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://ssaspropertyfinance.co.uk" },
                { "@type": "ListItem", position: 2, name: "SSAS Bridging Finance", item: "https://ssaspropertyfinance.co.uk/ssas-bridging-finance" },
              ],
            },
          ]),
        }}
      />
    </div>
  );
}
