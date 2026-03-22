import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle,
  Clock,
  PoundSterling,
  Shield,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "SSAS Term Loan | Commercial Property Mortgage",
  description:
    "SSAS term loans for long-term commercial property investment. Up to 25 year terms, fixed and variable rates from 5.49%. Compare specialist lenders.",
  alternates: { canonical: "/ssas-term-loan" },
};

const features = [
  {
    icon: Clock,
    title: "Up to 25 Years",
    description:
      "Long-term finance to match your SSAS investment strategy, with terms available up to 25 years.",
  },
  {
    icon: PoundSterling,
    title: "From 5.49% pa",
    description:
      "Competitive fixed and variable rates from our panel of specialist SSAS pension property lenders.",
  },
  {
    icon: TrendingUp,
    title: "Up to 50% LTV",
    description:
      "Borrow up to 50% of your SSAS net asset value under HMRC rules for long-term property investment.",
  },
  {
    icon: Shield,
    title: "Fixed & Variable",
    description:
      "Choose from fixed-rate certainty or variable-rate flexibility to suit your pension scheme's needs.",
  },
];

const keyTerms = [
  { label: "Loan to Value", value: "Up to 50%" },
  { label: "Term", value: "1-25 years" },
  { label: "Interest Rates", value: "From 5.49% pa" },
  { label: "Rate Type", value: "Fixed or variable" },
  { label: "Repayment", value: "Interest-only or repayment" },
  { label: "Property Type", value: "Commercial only" },
  { label: "Rental Coverage", value: "Typically 125-150% ICR" },
  { label: "Arrangement Fee", value: "Typically 1-2%" },
];

const eligibility = [
  "Registered SSAS with sufficient net assets (minimum 50% of property value)",
  "Property must be commercial (offices, industrial, retail, warehouses, land)",
  "Minimum loan size typically applies (varies by lender)",
  "Rental income must meet lender interest coverage ratio requirements",
  "Independent RICS valuation of the property",
  "All SSAS trustees must approve the borrowing and property acquisition",
];

const processSteps = [
  {
    step: 1,
    title: "Initial Consultation",
    description:
      "We assess your SSAS position, property details, rental income, and financing requirements.",
  },
  {
    step: 2,
    title: "Lender Comparison",
    description:
      "We compare fixed and variable rate options across our specialist lender panel to find the best terms.",
  },
  {
    step: 3,
    title: "Application & Valuation",
    description:
      "We submit your application and instruct an independent RICS valuation of the commercial property.",
  },
  {
    step: 4,
    title: "Legal & Trustee Approval",
    description:
      "Specialist pension solicitors handle the legal work while all SSAS trustees review and approve the transaction.",
  },
  {
    step: 5,
    title: "Completion",
    description:
      "Funds are drawn down, the property is purchased into the SSAS, and rental income flows tax-free into your pension.",
  },
];

export default function SsasTermLoanPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
              <Building2 className="w-4 h-4 text-gold" />
              <span className="text-sm text-white/70">
                Long-Term Pension Property Finance
              </span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl text-white leading-tight mb-6">
              SSAS Term
              <br />
              <span className="text-gold-gradient">Loan</span>
            </h1>

            <p className="text-sm text-white/50 mb-6">Reviewed by Matt Lenzie, Founder — SSAS Property Finance</p>

            <p className="text-lg text-white/60 mb-8 leading-relaxed">
              Long-term commercial property mortgages through your SSAS pension
              scheme. Competitive fixed and variable rates from 5.49% with
              terms up to 25 years from specialist pension lenders.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="gold-gradient text-navy font-semibold hover:opacity-90"
              >
                <Link href="/contact">
                  Get Term Loan Rates
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

        {/* What Is an SSAS Term Loan */}
        <section className="mb-20">
          <h2 className="font-heading text-3xl text-white mb-6">
            What Is an SSAS Term Loan?
          </h2>
          <div className="glass-card p-8 prose prose-sm prose-invert max-w-none">
            <p className="text-white/60 leading-relaxed">
              An SSAS term loan is a long-term mortgage used by your Small
              Self-Administered Scheme to purchase commercial property. Unlike{" "}
              <Link href="/ssas-bridging-finance" className="text-gold hover:text-gold/80 transition-colors">
                SSAS bridging finance
              </Link>{" "}
              which is designed for short-term needs, a term
              loan provides stable, long-term funding with predictable
              repayments over periods of up to 25 years.
            </p>
            <p className="text-white/60 leading-relaxed mt-4">
              Under HMRC rules, your SSAS can borrow up to 50% of its net
              asset value. For example, an SSAS with £500,000 in assets can
              borrow up to £250,000, giving a total purchasing power of
              £750,000 for commercial property. The loan is secured against the
              property and repaid from the SSAS fund, with rental income
              flowing tax-free into the scheme.
            </p>
            <p className="text-white/60 leading-relaxed mt-4">
              Both fixed and variable rate options are available. Fixed rates
              provide certainty of repayments, making it easier for trustees to
              plan cash flow. Variable rates may offer lower initial costs but
              carry the risk of rate increases. Interest-only and capital
              repayment structures are both available, with interest-only being
              popular for maximising rental yield within the pension scheme.
            </p>
          </div>
        </section>

        {/* Key Terms */}
        <section className="mb-20">
          <h2 className="font-heading text-3xl text-white mb-6">
            Typical SSAS Term Loan Terms
          </h2>
          <div className="glass-card p-8">
            <div className="grid sm:grid-cols-2 gap-4">
              {keyTerms.map((term) => (
                <div
                  key={term.label}
                  className="flex items-center justify-between py-3 border-b border-white/5 last:border-0"
                >
                  <span className="text-sm text-white/50">{term.label}</span>
                  <span className="text-sm font-semibold text-gold">
                    {term.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fixed vs Variable */}
        <section className="mb-20">
          <h2 className="font-heading text-3xl text-white mb-6">
            Fixed vs Variable Rate SSAS Loans
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="glass-card-hover p-6">
              <h3 className="text-sm font-semibold text-white mb-2">
                Fixed Rate
              </h3>
              <p className="text-xs text-white/50">
                Lock in your interest rate for a set period (typically 2-5
                years). Provides certainty of repayments and protection against
                rate rises. Ideal for SSAS trustees who want predictable costs.
                Early repayment charges usually apply during the fixed period.
              </p>
            </div>
            <div className="glass-card-hover p-6">
              <h3 className="text-sm font-semibold text-white mb-2">
                Variable Rate
              </h3>
              <p className="text-xs text-white/50">
                Rate moves with the Bank of England base rate or a lender
                reference rate. May offer lower initial costs than fixed rates.
                Gives flexibility to overpay or exit without early repayment
                charges. Suitable when rates are expected to remain stable or
                fall.
              </p>
            </div>
          </div>
        </section>

        {/* Eligibility */}
        <section className="mb-20">
          <h2 className="font-heading text-3xl text-white mb-6">
            SSAS Term Loan Eligibility
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
            The SSAS Term Loan Process
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
            <Link href="/ssas-bridging-finance" className="glass-card-hover p-6 block">
              <h3 className="text-sm font-semibold text-white mb-2">SSAS Bridging Finance</h3>
              <p className="text-xs text-white/50">
                Need to complete quickly? Short-term bridging finance with completion in as little as 4-6 weeks.
              </p>
            </Link>
            <Link href="/ssas-development-finance" className="glass-card-hover p-6 block">
              <h3 className="text-sm font-semibold text-white mb-2">SSAS Development Finance</h3>
              <p className="text-xs text-white/50">
                Fund commercial conversions, refurbishments, and ground-up development with staged drawdowns.
              </p>
            </Link>
            <Link href="/ssas-property-finance" className="glass-card-hover p-6 block">
              <h3 className="text-sm font-semibold text-white mb-2">SSAS Loanback</h3>
              <p className="text-xs text-white/50">
                Borrow up to 50% of your SSAS assets back to the sponsoring employer under HMRC rules.
              </p>
            </Link>
          </div>
        </section>

        {/* SIPP mention */}
        <section className="mb-20">
          <div className="glass-card p-8">
            <h2 className="font-heading text-2xl text-white mb-4">
              Term Loans Also Available via SIPP
            </h2>
            <p className="text-white/60 text-sm leading-relaxed">
              Long-term commercial property mortgages are also available for
              Self-Invested Personal Pensions (SIPPs). If you hold a SIPP
              rather than an SSAS, visit our sister site{" "}
              <a
                href="https://sipppropertyfinance.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-gold/80 transition-colors"
              >
                SIPP Property Finance
              </a>{" "}
              for specialist SIPP mortgage options.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="glass-card p-10 text-center">
          <h2 className="font-heading text-3xl text-white mb-4">
            Ready for a Long-Term SSAS Property Mortgage?
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
              Get Term Loan Rates
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
              name: "SSAS Term Loan",
              description:
                "SSAS term loans for long-term commercial property investment. Up to 25 year terms, competitive fixed and variable rates from 5.49%.",
              provider: {
                "@type": "FinancialService",
                name: "SSAS Property Finance",
                url: "https://ssaspropertyfinance.co.uk",
              },
              category: "Commercial Property Mortgage",
              interestRate: {
                "@type": "QuantitativeValue",
                minValue: 5.49,
                unitText: "% per annum",
              },
              loanTerm: {
                "@type": "QuantitativeValue",
                minValue: 1,
                maxValue: 25,
                unitText: "years",
              },
              areaServed: { "@type": "Country", name: "United Kingdom" },
            },
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "SSAS Term Loan",
              url: "https://ssaspropertyfinance.co.uk/ssas-term-loan",
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
                { "@type": "ListItem", position: 2, name: "SSAS Term Loan", item: "https://ssaspropertyfinance.co.uk/ssas-term-loan" },
              ],
            },
          ]),
        }}
      />
    </div>
  );
}
