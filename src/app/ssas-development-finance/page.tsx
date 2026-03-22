import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle,
  HardHat,
  Layers,
  Shield,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "SSAS Development Finance | Pension Property Development",
  description:
    "SSAS development finance for commercial property projects. Fund conversions, refurbishments, and ground-up development. Staged drawdowns, GDV-based lending.",
  alternates: { canonical: "/ssas-development-finance" },
};

const features = [
  {
    icon: TrendingUp,
    title: "Up to 50% LTV",
    description:
      "Borrowing based on gross development value (GDV), maximising funding for your commercial project.",
  },
  {
    icon: Layers,
    title: "Staged Drawdowns",
    description:
      "Funds released in stages as the project progresses, monitored by a professional quantity surveyor.",
  },
  {
    icon: Building2,
    title: "Commercial Only",
    description:
      "Finance for commercial end-use projects — offices, industrial units, retail, and mixed-use schemes.",
  },
  {
    icon: Shield,
    title: "Specialist Lenders",
    description:
      "Access lenders experienced in pension-backed development transactions and staged drawdown facilities.",
  },
];

const projectTypes = [
  {
    title: "Commercial Conversions",
    description:
      "Convert existing buildings into commercial premises — for example, warehouse to office space or retail to mixed-use.",
  },
  {
    title: "Change of Use",
    description:
      "Fund projects involving planning permission change of use to create commercial property from non-commercial stock.",
  },
  {
    title: "Refurbishment",
    description:
      "Significant refurbishment of existing commercial property to increase value and rental yield before refinancing.",
  },
  {
    title: "Ground-Up Development",
    description:
      "Fund the construction of new commercial buildings on land held by or being acquired by your SSAS.",
  },
];

const eligibility = [
  "Registered SSAS with sufficient net assets to support borrowing",
  "Property must have a commercial end-use (offices, industrial, retail)",
  "Planning permission granted or permitted development rights confirmed",
  "Experienced developer preferred — lenders assess track record",
  "Independent RICS valuation and development appraisal required",
  "Clear exit strategy (refinance to term loan, sale, or hold with rental income)",
];

const processSteps = [
  {
    step: 1,
    title: "Feasibility Assessment",
    description:
      "We review your SSAS position, development plans, planning status, and borrowing capacity to determine feasibility.",
  },
  {
    step: 2,
    title: "Development Appraisal",
    description:
      "A full development appraisal is prepared including GDV calculation, build costs, and projected returns.",
  },
  {
    step: 3,
    title: "Lender Sourcing",
    description:
      "We approach specialist development lenders on our panel to secure terms with staged drawdown facilities.",
  },
  {
    step: 4,
    title: "Valuation & Monitoring",
    description:
      "An independent RICS valuation is instructed and a monitoring surveyor appointed to oversee staged releases.",
  },
  {
    step: 5,
    title: "Trustee Approval & Drawdown",
    description:
      "All SSAS trustees approve the facility. Initial funds are drawn down with subsequent releases tied to build milestones.",
  },
  {
    step: 6,
    title: "Completion & Exit",
    description:
      "On project completion, the development is either refinanced onto a term loan, sold, or held for rental income.",
  },
];

export default function SsasDevelopmentFinancePage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
              <HardHat className="w-4 h-4 text-gold" />
              <span className="text-sm text-white/70">
                Pension-Backed Property Development
              </span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl text-white leading-tight mb-6">
              SSAS Development
              <br />
              <span className="text-gold-gradient">Finance</span>
            </h1>

            <p className="text-sm text-white/50 mb-6">Reviewed by Matt Lenzie, Founder — SSAS Property Finance</p>

            <p className="text-lg text-white/60 mb-8 leading-relaxed">
              Fund commercial property conversions, refurbishments, and
              ground-up development through your SSAS pension scheme. Staged
              drawdowns, GDV-based lending, and specialist development lenders.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="gold-gradient text-navy font-semibold hover:opacity-90"
              >
                <Link href="/contact">
                  Discuss Your Project
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

        {/* What Is SSAS Development Finance */}
        <section className="mb-20">
          <h2 className="font-heading text-3xl text-white mb-6">
            What Is SSAS Development Finance?
          </h2>
          <div className="glass-card p-8 prose prose-sm prose-invert max-w-none">
            <p className="text-white/60 leading-relaxed">
              SSAS development finance allows your pension scheme to fund
              commercial property development projects. Unlike a standard SSAS
              mortgage used to purchase completed buildings, development finance
              is structured around the construction or conversion process, with
              funds released in stages as the project reaches agreed milestones.
            </p>
            <p className="text-white/60 leading-relaxed mt-4">
              Lending is typically assessed on gross development value (GDV) —
              the projected value of the completed project — rather than the
              current value of the site. This means your SSAS can potentially
              fund a larger project than the existing site value would suggest,
              provided the completed development supports the borrowing within
              HMRC&apos;s 50% net asset borrowing limit.
            </p>
            <p className="text-white/60 leading-relaxed mt-4">
              A monitoring surveyor is appointed by the lender to inspect the
              development at each stage before funds are released. This protects
              both the lender and your SSAS by ensuring the project is being
              delivered on budget and to specification. On completion, the
              development is typically refinanced onto a longer-term SSAS
              mortgage or sold.
            </p>
          </div>
        </section>

        {/* Project Types */}
        <section className="mb-20">
          <h2 className="font-heading text-3xl text-white mb-6">
            Types of Projects We Finance
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {projectTypes.map((item) => (
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
            SSAS Development Finance Eligibility
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
            The Development Finance Process
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
                Short-term finance for purchasing a site quickly before commencing your development project.
              </p>
            </Link>
            <Link href="/ssas-term-loan" className="glass-card-hover p-6 block">
              <h3 className="text-sm font-semibold text-white mb-2">SSAS Term Loan</h3>
              <p className="text-xs text-white/50">
                Refinance your completed development onto a long-term SSAS mortgage with rates from 5.49%.
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
              Development Finance Also Available via SIPP
            </h2>
            <p className="text-white/60 text-sm leading-relaxed">
              Commercial property development finance is also available for
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
              for specialist SIPP development finance options.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="glass-card p-10 text-center">
          <h2 className="font-heading text-3xl text-white mb-4">
            Have a Commercial Development Project?
          </h2>
          <p className="text-white/50 max-w-xl mx-auto mb-6">
            Share your development plans with us and we will source competitive
            terms from specialist SSAS development lenders. No obligation, no
            fees for initial consultation.
          </p>
          <Button
            asChild
            size="lg"
            className="gold-gradient text-navy font-semibold hover:opacity-90"
          >
            <Link href="/contact">
              Discuss Your Project
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
              name: "SSAS Development Finance",
              description:
                "SSAS development finance for commercial property projects. Fund conversions, refurbishments, and ground-up development through your SSAS pension.",
              provider: {
                "@type": "FinancialService",
                name: "SSAS Property Finance",
                url: "https://ssaspropertyfinance.co.uk",
              },
              category: "Development Finance",
              areaServed: { "@type": "Country", name: "United Kingdom" },
            },
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "SSAS Development Finance",
              url: "https://ssaspropertyfinance.co.uk/ssas-development-finance",
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
                { "@type": "ListItem", position: 2, name: "SSAS Development Finance", item: "https://ssaspropertyfinance.co.uk/ssas-development-finance" },
              ],
            },
          ]),
        }}
      />
    </div>
  );
}
