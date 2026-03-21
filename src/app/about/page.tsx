import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Briefcase, Building2, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About Matt Lenzie | SSAS Property Finance Founder",
  description:
    "Meet Matt Lenzie, founder of SSAS Property Finance. Former banker, corporate finance partner, and board advisor to a £2.9bn AUA SIPP business.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero */}
        <div className="text-center mb-20">
          <h1 className="font-heading text-4xl sm:text-5xl text-white mb-6 leading-tight">
            About{" "}
            <span className="text-gold-gradient">SSAS Property Finance</span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            We are a specialist broker focused exclusively on pension-backed
            commercial property finance — combining deep pension expertise with
            hands-on experience in structured finance and capital raising.
          </p>
        </div>

        {/* Founder section */}
        <section className="mb-20">
          <div className="glass-card p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row gap-10 items-start">
              {/* Headshot placeholder */}
              <div className="shrink-0 flex flex-col items-center gap-3">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/30" />
                <p className="text-sm text-white/40 text-center">Matt Lenzie</p>
              </div>

              {/* Bio */}
              <div>
                <div className="mb-4">
                  <h2 className="font-heading text-3xl text-white mb-1">
                    Matt Lenzie
                  </h2>
                  <p className="text-gold text-sm font-medium">
                    Founder &amp; Principal Broker
                  </p>
                  <p className="text-white/40 text-sm mt-1">
                    Lenzie Consulting Ltd &middot; Company No. 08174104
                  </p>
                </div>

                <div className="space-y-4 text-white/60 leading-relaxed text-sm">
                  <p>
                    Matt founded SSAS Property Finance to fill a clear gap in the market: most
                    commercial mortgage brokers lack the specialist knowledge to navigate the
                    regulatory and structural complexity of pension-backed property transactions.
                    Clients need a broker who understands both the finance and the pension
                    wrapper — and that is the model we have built.
                  </p>
                  <p>
                    Prior to founding SSAS Property Finance, Matt spent his career in banking
                    and corporate finance, including as a partner in a corporate finance
                    advisory business. During that time he was involved in raising in excess of
                    £300 million of equity and debt across a range of transactions spanning
                    property, infrastructure, and private equity.
                  </p>
                  <p>
                    Matt currently serves as a board advisor and consultant to a SIPP business
                    with over £2.9 billion in Assets Under Advisory. This role gives him an
                    exceptional vantage point on pension scheme investment requirements,
                    trustee obligations, and lender appetite for pension property transactions —
                    insight that directly benefits SSAS clients.
                  </p>
                </div>
              </div>
            </div>

            {/* Credentials strip */}
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 border-t border-white/10 pt-8">
              {[
                {
                  icon: Briefcase,
                  label: "Former Banker",
                  detail: "Corporate finance partner",
                },
                {
                  icon: TrendingUp,
                  label: "£300m+ Raised",
                  detail: "Equity & debt transactions",
                },
                {
                  icon: Building2,
                  label: "£2.9bn AUA",
                  detail: "Board advisor, SIPP business",
                },
                {
                  icon: Users,
                  label: "SSAS Specialist",
                  detail: "Pension property finance",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <item.icon className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {item.label}
                    </p>
                    <p className="text-xs text-white/40">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="mb-20">
          <h2 className="font-heading text-3xl text-white mb-6">
            Our Approach
          </h2>
          <div className="glass-card p-8">
            <div className="space-y-5 text-white/60 leading-relaxed text-sm">
              <p>
                SSAS property transactions are structurally different from standard commercial
                mortgages. The borrower is the pension scheme itself — a trust — which means
                lenders require specific due diligence on scheme documentation, trustee
                authority, and HMRC compliance. Many mainstream brokers encounter these
                requirements for the first time mid-transaction, causing delays and in some
                cases deal failure.
              </p>
              <p>
                Our specialist broker model means we qualify lenders before we approach them.
                We only work with lenders who have demonstrated an appetite for pension-backed
                transactions and who understand the documentation requirements. This saves time
                for both the client and the lender, and materially improves the probability of
                a successful completion.
              </p>
              <p>
                We work across SSAS commercial property mortgages, SSAS development finance,
                and loanback facilities. Because we focus exclusively on this niche, we can
                offer clients a depth of knowledge that generalist brokers cannot match.
              </p>
            </div>
          </div>
        </section>

        {/* Alltrust partnership */}
        <section className="mb-20">
          <h2 className="font-heading text-3xl text-white mb-6">
            Alltrust &mdash; Our SIPP Partner
          </h2>
          <div className="glass-card p-8">
            <div className="space-y-5 text-white/60 leading-relaxed text-sm">
              <p>
                Alltrust is a related business that provides Self-Invested Personal Pension
                (SIPP) administration and trustee services. The relationship gives SSAS
                Property Finance a direct operational connection to the SIPP market, and
                ensures that clients with SIPP structures — rather than SSAS — can also be
                supported through an appropriate specialist channel.
              </p>
              <p>
                This relationship also underpins Matt&apos;s role as board advisor to a SIPP
                business with £2.9bn+ in Assets Under Advisory, providing market intelligence
                on lender appetite, scheme structures, and the evolving regulatory landscape
                for pension property investment.
              </p>
              <p>
                If you hold assets in a SIPP rather than an SSAS, please mention this when you
                enquire — we can ensure you are directed to the most appropriate service.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="glass-card p-10 text-center">
          <h2 className="font-heading text-3xl text-white mb-4">
            Speak to a Specialist
          </h2>
          <p className="text-white/50 max-w-xl mx-auto mb-6">
            If you are considering using your SSAS to acquire or refinance
            commercial property, contact us for a no-obligation discussion.
          </p>
          <Button
            asChild
            size="lg"
            className="gold-gradient text-navy font-semibold hover:opacity-90"
          >
            <Link href="/contact">
              Get in Touch
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </section>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Matt Lenzie",
            jobTitle: "Founder & Principal Broker",
            worksFor: {
              "@type": "Organization",
              name: "SSAS Property Finance",
            },
            knowsAbout: [
              "SSAS",
              "Commercial Property Finance",
              "Pension Property Investment",
              "Corporate Finance",
            ],
            description:
              "Former banker and corporate finance partner. Board advisor to a £2.9bn AUA SIPP business.",
          }),
        }}
      />
    </div>
  );
}
