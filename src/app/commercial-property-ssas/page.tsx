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
  title: "SSAS Property Finance - The Complete UK Guide",
  description:
    "Complete guide to buying commercial property through an SSAS. HMRC rules, permitted property types, borrowing limits, loanback facility, tax benefits, and step-by-step process explained.",
  alternates: { canonical: "/commercial-property-ssas" },
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

export default function CommercialPropertySsasPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
            <BookOpen className="w-4 h-4 text-gold" />
            <span className="text-sm text-white/70">Comprehensive Guide</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl text-white leading-tight mb-6">
            SSAS Property Finance
            <br />
            <span className="text-gold-gradient">The Complete UK Guide</span>
          </h1>

          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/30 flex items-center justify-center">
              <span className="text-gold text-sm font-semibold">ML</span>
            </div>
            <div>
              <p className="text-sm text-white/70">Written by <span className="text-white">Matt Lenzie</span></p>
              <p className="text-xs text-white/40">Founder, SSAS Property Finance</p>
            </div>
          </div>

          <p className="text-lg text-white/60 leading-relaxed">
            Everything you need to know about purchasing commercial property
            through a Small Self-Administered Scheme (SSAS). From HMRC rules and
            permitted investments to borrowing limits, loanback facilities, and the
            step-by-step purchase process.
          </p>
        </div>

        {/* Table of contents */}
        <nav className="glass-card p-6 mb-12">
          <h2 className="font-heading text-lg text-white mb-4">
            In This Guide
          </h2>
          <ul className="space-y-2 text-sm">
            {[
              ["#what-is-ssas-property", "What is SSAS Property Investment?"],
              ["#permitted-types", "HMRC Permitted Property Types"],
              ["#borrowing-rules", "SSAS Borrowing Rules (50% LTV)"],
              ["#loanback", "SSAS Loanback Facility"],
              ["#tax-benefits", "Tax Benefits of SSAS Property"],
              ["#purchase-process", "The Purchase Process"],
              ["#connected-party", "Connected Party Transactions"],
            ].map(([href, label]) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-white/50 hover:text-gold transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Content */}
        <div className="space-y-16">
          <section id="what-is-ssas-property">
            <h2 className="font-heading text-3xl text-white mb-6">
              What is SSAS Property Investment?
            </h2>
            <div className="glass-card p-8 space-y-4 text-white/60 leading-relaxed text-sm">
              <p>
                A Small Self-Administered Scheme (SSAS) is an occupational
                pension scheme typically set up by a company for its directors.
                Unlike a standard company pension where the provider chooses the
                investments, an SSAS allows the member trustees to choose from a
                wider range of assets — including commercial property.
              </p>
              <p>
                When an SSAS purchases commercial property, the property becomes
                an asset of the pension scheme. The SSAS trustees hold legal title
                to the property, and any rental income or capital gains flow
                back into the pension scheme, growing tax-free until members begin
                drawing their pensions.
              </p>
              <p>
                This creates a powerful tax-planning opportunity for company
                directors in particular: the sponsoring employer can rent its commercial
                premises from the SSAS, turning what was a business expense
                into a pension contribution. The rent is tax-deductible for the
                business and tax-free within the SSAS. Multiple members can pool
                their assets for larger acquisitions.
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
              <p className="text-xs text-white/40 flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                Source: HMRC Registered Pension Schemes Manual (RPSM03107030).
                Always verify current rules with your SSAS trustees before
                proceeding.
              </p>
            </div>
          </section>

          <section id="borrowing-rules">
            <h2 className="font-heading text-3xl text-white mb-6">
              SSAS Borrowing Rules
            </h2>
            <div className="glass-card p-8 space-y-4 text-white/60 leading-relaxed text-sm">
              <p>
                Under current HMRC rules, an SSAS can borrow up to{" "}
                <strong className="text-gold">
                  50% of the net value of the scheme&apos;s assets
                </strong>{" "}
                at the time of borrowing. This borrowing can only be used for
                the purpose of acquiring an asset — typically commercial
                property.
              </p>
              <p>
                For example, if your SSAS holds £500,000 in investments, you
                could borrow up to £250,000, giving you a combined purchasing
                power of £750,000 for commercial property. With multiple members
                pooling assets, the purchasing power can be significantly greater.
              </p>
              <p>
                The loan must be from a bona fide third-party lender (not from
                members or a connected party), and the property itself usually
                serves as security for the loan. Interest rates and terms are
                negotiated with the lender, with typical terms ranging from 5 to
                25 years.
              </p>
            </div>
          </section>

          <section id="loanback">
            <h2 className="font-heading text-3xl text-white mb-6">
              SSAS Loanback Facility
            </h2>
            <div className="glass-card p-8 space-y-4 text-white/60 leading-relaxed text-sm">
              <p>
                One of the unique advantages of an SSAS over other pension schemes
                is the ability to make a{" "}
                <strong className="text-gold">loanback to the sponsoring employer</strong>.
                This allows the scheme to lend up to 50% of the net scheme assets
                back to the company.
              </p>
              <p>
                The loanback must comply with strict HMRC rules: the loan must be
                repaid within 5 years with equal instalments of capital and interest,
                the interest rate must be at least 1% above the average base rate,
                and security of at least the loan value plus 10% must be provided
                (typically a first charge on a company asset).
              </p>
              <p>
                This facility provides an additional source of business finance
                while simultaneously growing the pension scheme through interest
                payments.
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
                  "Rental income is received tax-free within the SSAS",
                  "No Capital Gains Tax on property disposal within the SSAS",
                  "Rent paid by the sponsoring employer is a tax-deductible expense",
                  "No Income Tax on rental profits (unlike direct property ownership)",
                  "Pension scheme growth is sheltered from all UK taxes",
                  "Potential Inheritance Tax benefits through pension death benefits",
                  "Loanback interest payments grow the pension fund",
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
              The SSAS Property Purchase Process
            </h2>
            <div className="space-y-4">
              {[
                {
                  step: "1",
                  title: "Initial Assessment",
                  desc: "We assess your SSAS fund value, target property, and borrowing requirements to confirm viability.",
                },
                {
                  step: "2",
                  title: "Trustee Approval",
                  desc: "Your SSAS trustees review the proposed property to confirm it meets the scheme's investment criteria.",
                },
                {
                  step: "3",
                  title: "Lender Sourcing",
                  desc: "We source indicative terms from our panel of specialist SSAS commercial property lenders.",
                },
                {
                  step: "4",
                  title: "Application & Valuation",
                  desc: "Formal mortgage application submitted. Lender instructs an independent RICS valuation.",
                },
                {
                  step: "5",
                  title: "Legal Due Diligence",
                  desc: "Solicitors conduct searches and due diligence. The SSAS trustees are the legal purchasers.",
                },
                {
                  step: "6",
                  title: "Completion",
                  desc: "Mortgage drawn down, purchase completed, and property registered in the SSAS trustees' names.",
                },
              ].map((s) => (
                <div key={s.step} className="glass-card p-6 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl gold-gradient flex items-center justify-center shrink-0 font-heading text-navy text-lg">
                    {s.step}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{s.title}</h3>
                    <p className="text-sm text-white/50">{s.desc}</p>
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
                One of the key benefits of SSAS property ownership is the
                ability for a connected party — such as the sponsoring employer — to
                lease the property from the SSAS. This is specifically permitted
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

        {/* CTA */}
        <section className="glass-card p-10 text-center mt-16">
          <h2 className="font-heading text-3xl text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-white/50 max-w-xl mx-auto mb-6">
            Speak to a specialist SSAS property finance broker today. We&apos;ll
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
              <Link href="/ssas-mortgage-calculator">Try Calculator</Link>
            </Button>
          </div>
        </section>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Article",
              headline: "SSAS Property Finance - The Complete UK Guide",
              description:
                "Complete guide to buying commercial property through an SSAS. HMRC rules, permitted property types, borrowing limits, loanback facility, tax benefits, and step-by-step process.",
              author: {
                "@type": "Person",
                name: "Matt Lenzie",
                jobTitle: "Founder & Principal Broker",
                worksFor: { "@type": "Organization", name: "SSAS Property Finance" },
              },
              publisher: {
                "@type": "Organization",
                name: "SSAS Property Finance",
                url: "https://ssaspropertyfinance.co.uk",
              },
              mainEntityOfPage: "https://ssaspropertyfinance.co.uk/commercial-property-ssas",
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://ssaspropertyfinance.co.uk" },
                { "@type": "ListItem", position: 2, name: "Commercial Property SSAS Guide", item: "https://ssaspropertyfinance.co.uk/commercial-property-ssas" },
              ],
            },
          ]),
        }}
      />
    </div>
  );
}
