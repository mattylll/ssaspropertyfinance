import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  CircleX,
  BookOpen,
  AlertTriangle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "SIPP Property Finance - The Complete UK Guide",
  description:
    "Complete guide to buying commercial property through a SIPP. HMRC rules, permitted property types, borrowing limits, tax benefits, and step-by-step process explained.",
};

const permittedTypes = [
  "Commercial offices",
  "Industrial units and warehouses",
  "Retail premises and shops",
  "Commercial land for development",
  "Hotels (commercial)",
  "Care homes (commercial)",
  "Mixed-use (predominantly commercial)",
  "Agricultural land used commercially",
];

const notPermittedTypes = [
  "Residential property (houses, flats)",
  "Holiday homes and furnished holiday lets",
  "Student accommodation",
  "Residential buy-to-let property",
  "Timeshares",
  "Property used as a member's residence",
];

export default function CommercialPropertySippPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
            <BookOpen className="w-4 h-4 text-gold" />
            <span className="text-sm text-white/70">Comprehensive Guide</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl text-white leading-tight mb-6">
            SIPP Property Finance
            <br />
            <span className="text-gold-gradient">The Complete UK Guide</span>
          </h1>

          <p className="text-lg text-white/60 leading-relaxed">
            Everything you need to know about purchasing commercial property
            through a Self-Invested Personal Pension (SIPP). From HMRC rules and
            permitted investments to borrowing limits and the step-by-step
            purchase process.
          </p>
        </div>

        {/* Table of contents */}
        <nav className="glass-card p-6 mb-12">
          <h2 className="font-heading text-lg text-white mb-4">
            In This Guide
          </h2>
          <ul className="space-y-2 text-sm">
            {[
              ["#what-is-sipp-property", "What is SIPP Property Investment?"],
              ["#permitted-types", "HMRC Permitted Property Types"],
              ["#borrowing-rules", "SIPP Borrowing Rules (50% LTV)"],
              ["#tax-benefits", "Tax Benefits of SIPP Property"],
              ["#purchase-process", "The Purchase Process"],
              ["#connected-party", "Connected Party Transactions"],
            ].map(([href, label]) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-white/60 hover:text-gold transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Content */}
        <div className="space-y-16">
          <section id="what-is-sipp-property">
            <h2 className="font-heading text-3xl text-white mb-6">
              What is SIPP Property Investment?
            </h2>
            <div className="glass-card p-8 space-y-4 text-white/60 leading-relaxed text-sm">
              <p>
                A Self-Invested Personal Pension (SIPP) is a type of personal
                pension that gives you control over how your pension fund is
                invested. Unlike standard personal pensions where the provider
                chooses the investments, a SIPP allows you to choose from a
                wider range of assets — including commercial property.
              </p>
              <p>
                When a SIPP purchases commercial property, the property becomes
                an asset of the pension fund. The SIPP trustee holds legal title
                to the property, and any rental income or capital gains flow
                back into the pension fund, growing tax-free until you begin
                drawing your pension.
              </p>
              <p>
                This creates a powerful tax-planning opportunity for business
                owners in particular: your company can rent its commercial
                premises from your SIPP, turning what was a business expense
                into a pension contribution. The rent is tax-deductible for the
                business and tax-free within the SIPP.
              </p>
            </div>
          </section>

          <section id="permitted-types">
            <h2 className="font-heading text-3xl text-white mb-6">
              HMRC Permitted Property Types
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass-card p-6">
                <h3 className="text-lg font-semibold text-emerald-400 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Permitted
                </h3>
                <ul className="space-y-3">
                  {permittedTypes.map((type) => (
                    <li
                      key={type}
                      className="flex items-start gap-2 text-sm text-white/60"
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                      {type}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass-card p-6">
                <h3 className="text-lg font-semibold text-red-400 mb-4 flex items-center gap-2">
                  <CircleX className="w-5 h-5" />
                  Not Permitted
                </h3>
                <ul className="space-y-3">
                  {notPermittedTypes.map((type) => (
                    <li
                      key={type}
                      className="flex items-start gap-2 text-sm text-white/60"
                    >
                      <CircleX className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                      {type}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="glass-card p-4 mt-4 border-gold/20">
              <p className="text-sm text-white/60 flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                Source: HMRC Registered Pension Schemes Manual (RPSM03107030).
                Always verify current rules with your SIPP provider before
                proceeding.
              </p>
            </div>
          </section>

          <section id="borrowing-rules">
            <h2 className="font-heading text-3xl text-white mb-6">
              SIPP Borrowing Rules
            </h2>
            <div className="glass-card p-8 space-y-4 text-white/60 leading-relaxed text-sm">
              <p>
                Under current HMRC rules, a SIPP can borrow up to{" "}
                <strong className="text-gold">
                  50% of the net value of the scheme&apos;s assets
                </strong>{" "}
                at the time of borrowing. This borrowing can only be used for
                the purpose of acquiring an asset — typically commercial
                property.
              </p>
              <p>
                For example, if your SIPP holds £500,000 in investments, you
                could borrow up to £250,000, giving you a combined purchasing
                power of £750,000 for commercial property.
              </p>
              <p>
                The loan must be from a bona fide third-party lender (not from
                you or a connected party), and the property itself usually
                serves as security for the loan. Interest rates and terms are
                negotiated with the lender, with typical terms ranging from 5 to
                25 years.
              </p>
            </div>
          </section>

          <section id="tax-benefits">
            <h2 className="font-heading text-3xl text-white mb-6">
              Tax Benefits
            </h2>
            <div className="glass-card p-8">
              <ul className="space-y-4">
                {[
                  "Rental income is received tax-free within the SIPP",
                  "No Capital Gains Tax on property disposal within the SIPP",
                  "Rent paid by your business is a tax-deductible expense",
                  "No Income Tax on rental profits (unlike direct property ownership)",
                  "Pension fund growth is sheltered from all UK taxes",
                  "Potential Inheritance Tax benefits through pension death benefits",
                ].map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-3 text-sm text-white/60"
                  >
                    <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section id="purchase-process">
            <h2 className="font-heading text-3xl text-white mb-6">
              The SIPP Property Purchase Process
            </h2>
            <div className="space-y-4">
              {[
                {
                  step: "1",
                  title: "Initial Assessment",
                  desc: "We assess your SIPP fund value, target property, and borrowing requirements to confirm viability.",
                },
                {
                  step: "2",
                  title: "SIPP Provider Approval",
                  desc: "Your SIPP provider reviews the proposed property to confirm it meets their acceptance criteria.",
                },
                {
                  step: "3",
                  title: "Lender Sourcing",
                  desc: "We source indicative terms from our panel of specialist SIPP commercial property lenders.",
                },
                {
                  step: "4",
                  title: "Application & Valuation",
                  desc: "Formal mortgage application submitted. Lender instructs an independent RICS valuation.",
                },
                {
                  step: "5",
                  title: "Legal Due Diligence",
                  desc: "Solicitors conduct searches and due diligence. The SIPP trustee is the legal purchaser.",
                },
                {
                  step: "6",
                  title: "Completion",
                  desc: "Mortgage drawn down, purchase completed, and property registered in the SIPP trustee's name.",
                },
              ].map((s) => (
                <div key={s.step} className="glass-card p-6 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl gold-gradient flex items-center justify-center shrink-0 font-heading text-navy text-lg">
                    {s.step}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{s.title}</h3>
                    <p className="text-sm text-white/60">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="connected-party">
            <h2 className="font-heading text-3xl text-white mb-6">
              Connected Party Transactions
            </h2>
            <div className="glass-card p-8 space-y-4 text-white/60 leading-relaxed text-sm">
              <p>
                One of the key benefits of SIPP property ownership is the
                ability for a connected party — such as your own business — to
                lease the property from the SIPP. This is specifically permitted
                under HMRC rules, provided the transaction is conducted at
                arm&apos;s length (i.e., at market value).
              </p>
              <p>
                The rent must be set at a market rate, typically supported by an
                independent surveyor&apos;s valuation. The rent should be
                reviewed regularly (usually every 3-5 years) to ensure it
                remains at market level.
              </p>
            </div>
          </section>
        </div>

        {/* Explore Further */}
        <section className="mt-16">
          <h2 className="font-heading text-2xl text-white mb-6">
            Explore Further
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "What Is a SIPP? Complete Guide for Property Investors", href: "/learn/what-is-a-sipp" },
              { title: "The Complete Guide to SIPP Rules for Commercial Property", href: "/learn/sipp-rules-for-commercial-property" },
              { title: "What Types of Property Can a SIPP Hold?", href: "/learn/what-types-of-property-can-a-sipp-hold" },
              { title: "Tax Benefits of Buying Property Through a SIPP", href: "/learn/tax-benefits-sipp-property" },
              { title: "Connected Party Transactions: HMRC Rules Explained", href: "/learn/connected-party-transactions-hmrc" },
              { title: "How Does a SIPP Property Purchase Work? Step by Step", href: "/learn/how-does-a-sipp-property-purchase-work" },
            ].map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="glass-card-hover p-5 group block"
              >
                <h3 className="text-sm font-semibold text-white group-hover:text-gold transition-colors leading-snug">
                  {guide.title}
                </h3>
                <span className="text-xs text-gold/60 mt-2 inline-flex items-center gap-1 group-hover:text-gold transition-colors">
                  Read guide <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link
              href="/learn"
              className="inline-flex items-center gap-2 text-sm text-gold hover:text-gold-light transition-colors font-medium"
            >
              Browse all guides
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="glass-card p-10 text-center mt-16">
          <h2 className="font-heading text-3xl text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-white/60 max-w-xl mx-auto mb-6">
            Speak to a specialist SIPP property finance broker today. We&apos;ll
            assess your situation and provide indicative terms within 24 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="gold-gradient text-navy font-semibold hover:opacity-90"
            >
              <Link href="/contact">
                Get Indicative Terms
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/5 hover:text-gold"
            >
              <Link href="/sipp-mortgage-calculator">Try Calculator</Link>
            </Button>
          </div>
        </section>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "SIPP Property Finance - The Complete UK Guide",
            description:
              "Complete guide to buying commercial property through a SIPP. HMRC rules, permitted property types, borrowing limits, tax benefits, and step-by-step process.",
            author: {
              "@type": "Organization",
              name: "SIPP Property Finance",
              url: "https://sipppropertyfinance.co.uk",
            },
            publisher: {
              "@type": "Organization",
              name: "SIPP Property Finance",
              url: "https://sipppropertyfinance.co.uk",
            },
            url: "https://sipppropertyfinance.co.uk/commercial-property-sipp",
            mainEntityOfPage:
              "https://sipppropertyfinance.co.uk/commercial-property-sipp",
          }),
        }}
      />
    </div>
  );
}
