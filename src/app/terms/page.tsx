import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | SSAS Property Finance",
  description:
    "Terms of use for SSAS Property Finance. This site provides information only and does not constitute financial advice. SSAS property loans are unregulated.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl sm:text-5xl text-white mb-4">
            Terms of Use
          </h1>
          <p className="text-white/50 max-w-2xl mx-auto">
            Last updated: March 2026
          </p>
        </div>

        <div className="space-y-6">
          <div className="glass-card p-8">
            <h2 className="font-heading text-2xl text-white mb-4">
              About This Site
            </h2>
            <p className="text-white/60 mb-3">
              This website is operated by <strong className="text-white">Lenzie Consulting Ltd</strong>, trading as{" "}
              <strong className="text-white">SSAS Property Finance</strong>. We are registered in England and Wales
              under company number <strong className="text-white">08174104</strong>.
            </p>
            <p className="text-white/60 mb-3">
              <strong className="text-white">Registered office:</strong> Lynch Farm, The Lynch, Kensworth, Beds, LU6 3QZ
            </p>
            <p className="text-white/60">
              <strong className="text-white">Email:</strong> enquiries@ssaspropertyfinance.co.uk
            </p>
          </div>

          <div className="glass-card p-8 border border-gold/20">
            <h2 className="font-heading text-2xl text-white mb-4">
              Regulatory Status
            </h2>
            <p className="text-white/60 mb-3">
              <strong className="text-white">SSAS property loans are unregulated lending.</strong> They do not fall
              within the scope of FCA regulation because they are extended to pension scheme trustees rather than
              to consumers.
            </p>
            <p className="text-white/60 mb-3">
              Lenzie Consulting Ltd is <strong className="text-white">not authorised or regulated by the Financial
              Conduct Authority (FCA)</strong> in connection with SSAS property finance. We operate as an
              introducer, connecting pension trustees with specialist lenders.
            </p>
            <p className="text-white/60">
              If you are in any doubt about whether SSAS property finance is appropriate for your circumstances,
              you should seek independent financial advice from an FCA-authorised adviser before proceeding.
            </p>
          </div>

          <div className="glass-card p-8">
            <h2 className="font-heading text-2xl text-white mb-4">
              Information Only — Not Financial Advice
            </h2>
            <p className="text-white/60 mb-3">
              All content on this website is provided for general information purposes only. Nothing on this site
              constitutes financial advice, investment advice, tax advice, or a recommendation to enter into any
              particular transaction or arrangement.
            </p>
            <p className="text-white/60 mb-3">
              Indicative rates, loan-to-value ratios, terms, and other figures presented on this site are illustrative
              only. They are not offers and are subject to lender credit assessment, property valuation, legal due
              diligence, and prevailing market conditions.
            </p>
            <p className="text-white/60">
              You should always seek independent financial, legal, and tax advice from appropriately qualified
              professionals before making any decision in connection with SSAS property finance.
            </p>
          </div>

          <div className="glass-card p-8">
            <h2 className="font-heading text-2xl text-white mb-4">
              No Guarantees on Rates, Terms, or Availability
            </h2>
            <p className="text-white/60 mb-3">
              We make no representation or warranty — express or implied — that:
            </p>
            <ul className="space-y-2 text-white/60 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-gold font-mono mt-0.5">—</span>
                <span>any particular rate, product, or term will be available to you</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold font-mono mt-0.5">—</span>
                <span>any lender will approve your application or provide finance</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold font-mono mt-0.5">—</span>
                <span>the information on this site is accurate, complete, or current at the time of reading</span>
              </li>
            </ul>
            <p className="text-white/60">
              Lending markets change frequently. All information should be verified directly with the relevant lender
              before you rely on it.
            </p>
          </div>

          <div className="glass-card p-8">
            <h2 className="font-heading text-2xl text-white mb-4">
              Intellectual Property
            </h2>
            <p className="text-white/60 mb-3">
              All content on this website — including text, graphics, logos, and design — is the property of
              Lenzie Consulting Ltd or its content suppliers and is protected by applicable intellectual property law.
            </p>
            <p className="text-white/60">
              You may view and print pages from this site for your personal, non-commercial use. You may not
              reproduce, redistribute, republish, or commercially exploit any content without our prior written consent.
            </p>
          </div>

          <div className="glass-card p-8">
            <h2 className="font-heading text-2xl text-white mb-4">
              Limitation of Liability
            </h2>
            <p className="text-white/60 mb-3">
              To the fullest extent permitted by law, Lenzie Consulting Ltd excludes all liability for any loss or
              damage arising from your use of this website or reliance on its content, including but not limited to:
            </p>
            <ul className="space-y-2 text-white/60 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-gold font-mono mt-0.5">—</span>
                <span>financial loss arising from reliance on indicative rates or terms</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold font-mono mt-0.5">—</span>
                <span>loss of business, profits, or anticipated savings</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold font-mono mt-0.5">—</span>
                <span>indirect or consequential loss of any kind</span>
              </li>
            </ul>
            <p className="text-white/60">
              Nothing in these terms limits our liability for death or personal injury caused by our negligence,
              fraud, or any other liability that cannot be excluded by law.
            </p>
          </div>

          <div className="glass-card p-8">
            <h2 className="font-heading text-2xl text-white mb-4">
              Third-Party Links
            </h2>
            <p className="text-white/60">
              This site may contain links to third-party websites. These are provided for convenience only.
              We have no control over the content of those sites and accept no responsibility for them or for
              any loss or damage that may arise from your use of them.
            </p>
          </div>

          <div className="glass-card p-8">
            <h2 className="font-heading text-2xl text-white mb-4">
              Governing Law
            </h2>
            <p className="text-white/60">
              These terms of use and any dispute or claim arising out of or in connection with them shall be
              governed by and construed in accordance with the laws of <strong className="text-white">England and Wales</strong>.
              You agree to submit to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </div>

          <div className="glass-card p-8">
            <h2 className="font-heading text-2xl text-white mb-4">
              Changes to These Terms
            </h2>
            <p className="text-white/60">
              We may update these terms from time to time. The date at the top of this page reflects the most
              recent revision. Continued use of this site following any changes constitutes acceptance of the
              updated terms.
            </p>
          </div>

          <div className="glass-card p-8">
            <h2 className="font-heading text-2xl text-white mb-4">
              Contact
            </h2>
            <p className="text-white/60">
              If you have any questions about these terms, please contact us at{" "}
              <strong className="text-white">enquiries@ssaspropertyfinance.co.uk</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
