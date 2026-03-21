import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | SSAS Property Finance",
  description:
    "Privacy policy for SSAS Property Finance (Lenzie Consulting Ltd). How we collect, use, and protect your personal data in compliance with UK GDPR.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl sm:text-5xl text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-white/50 max-w-2xl mx-auto">
            Last updated: March 2026
          </p>
        </div>

        <div className="space-y-6">
          <div className="glass-card p-8">
            <h2 className="font-heading text-2xl text-white mb-4">
              Who We Are
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

          <div className="glass-card p-8">
            <h2 className="font-heading text-2xl text-white mb-4">
              Data We Collect
            </h2>
            <p className="text-white/60 mb-4">
              We collect personal data only when you submit an enquiry through our contact form. This may include:
            </p>
            <ul className="space-y-2 text-white/60">
              <li className="flex items-start gap-2">
                <span className="text-gold font-mono mt-0.5">—</span>
                <span><strong className="text-white">Contact details:</strong> your name, email address, and phone number</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold font-mono mt-0.5">—</span>
                <span><strong className="text-white">Property details:</strong> property type, location, estimated value, and intended use</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold font-mono mt-0.5">—</span>
                <span><strong className="text-white">Pension details:</strong> SSAS fund size and trustee information relevant to the enquiry</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold font-mono mt-0.5">—</span>
                <span><strong className="text-white">Professional details:</strong> firm reference number if you are an IFA or professional making a referral</span>
              </li>
            </ul>
            <p className="text-white/60 mt-4">
              We do not collect sensitive personal data (such as health information) and we do not collect data from children under 18.
            </p>
          </div>

          <div className="glass-card p-8">
            <h2 className="font-heading text-2xl text-white mb-4">
              Legal Basis for Processing
            </h2>
            <p className="text-white/60 mb-4">
              We process your personal data on the following legal bases under UK GDPR:
            </p>
            <ul className="space-y-3 text-white/60">
              <li className="flex items-start gap-2">
                <span className="text-gold font-mono mt-0.5">—</span>
                <span>
                  <strong className="text-white">Legitimate interests</strong> — to respond to your enquiry, provide indicative finance terms,
                  and follow up on the matter you have raised with us. We have assessed that our legitimate interest
                  does not override your rights and freedoms.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold font-mono mt-0.5">—</span>
                <span>
                  <strong className="text-white">Consent</strong> — if you opt in to marketing communications, we will use your contact
                  details to send you relevant updates. You may withdraw this consent at any time.
                </span>
              </li>
            </ul>
          </div>

          <div className="glass-card p-8">
            <h2 className="font-heading text-2xl text-white mb-4">
              How We Use Your Data
            </h2>
            <ul className="space-y-2 text-white/60">
              <li className="flex items-start gap-2">
                <span className="text-gold font-mono mt-0.5">—</span>
                <span>To respond to your enquiry and provide indicative SSAS property finance terms</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold font-mono mt-0.5">—</span>
                <span>To introduce your case to lenders within our panel where you have requested this</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold font-mono mt-0.5">—</span>
                <span>To contact you regarding updates on your case or enquiry</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold font-mono mt-0.5">—</span>
                <span>To send marketing communications where you have given consent</span>
              </li>
            </ul>
            <p className="text-white/60 mt-4">
              We will never sell your personal data to third parties or use it for purposes unrelated to your enquiry.
            </p>
          </div>

          <div className="glass-card p-8">
            <h2 className="font-heading text-2xl text-white mb-4">
              Third Parties
            </h2>
            <p className="text-white/60 mb-4">
              We use the following third-party services to operate our platform:
            </p>
            <ul className="space-y-3 text-white/60">
              <li className="flex items-start gap-2">
                <span className="text-gold font-mono mt-0.5">—</span>
                <span>
                  <strong className="text-white">Convex (database provider)</strong> — your enquiry data is stored securely in Convex&apos;s
                  cloud database infrastructure. Convex processes data in accordance with their data processing agreement
                  and applicable data protection law.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold font-mono mt-0.5">—</span>
                <span>
                  <strong className="text-white">Email service provider</strong> — we use a third-party email service to deliver notifications
                  and respond to enquiries. This provider processes your contact details solely to facilitate communication.
                </span>
              </li>
            </ul>
            <p className="text-white/60 mt-4">
              All third parties are required to handle your data securely and in compliance with UK GDPR. We do not
              permit them to use your data for their own purposes.
            </p>
          </div>

          <div className="glass-card p-8">
            <h2 className="font-heading text-2xl text-white mb-4">
              Data Retention
            </h2>
            <p className="text-white/60 mb-3">
              We retain enquiry data for as long as is necessary to fulfil the purpose for which it was collected,
              and for a reasonable period thereafter in case queries arise in connection with your enquiry.
            </p>
            <p className="text-white/60 mb-3">
              Where a finance transaction proceeds, we may retain records for up to 6 years in line with standard
              commercial and legal record-keeping requirements.
            </p>
            <p className="text-white/60">
              Where no transaction proceeds, we will ordinarily delete or anonymise enquiry data within 2 years of
              last contact, unless you have requested earlier deletion.
            </p>
          </div>

          <div className="glass-card p-8">
            <h2 className="font-heading text-2xl text-white mb-4">
              Your Rights
            </h2>
            <p className="text-white/60 mb-4">
              Under UK GDPR you have the following rights in relation to your personal data:
            </p>
            <ul className="space-y-3 text-white/60">
              <li className="flex items-start gap-2">
                <span className="text-gold font-mono mt-0.5">—</span>
                <span><strong className="text-white">Right of access</strong> — to request a copy of the personal data we hold about you</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold font-mono mt-0.5">—</span>
                <span><strong className="text-white">Right to rectification</strong> — to request correction of inaccurate or incomplete data</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold font-mono mt-0.5">—</span>
                <span><strong className="text-white">Right to erasure</strong> — to request deletion of your personal data, subject to legal obligations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold font-mono mt-0.5">—</span>
                <span><strong className="text-white">Right to data portability</strong> — to receive your data in a structured, machine-readable format</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold font-mono mt-0.5">—</span>
                <span><strong className="text-white">Right to object</strong> — to object to processing based on legitimate interests or for direct marketing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold font-mono mt-0.5">—</span>
                <span><strong className="text-white">Right to withdraw consent</strong> — to withdraw marketing consent at any time without affecting prior processing</span>
              </li>
            </ul>
            <p className="text-white/60 mt-4">
              To exercise any of these rights, please contact us at{" "}
              <strong className="text-white">enquiries@ssaspropertyfinance.co.uk</strong>. We will respond within
              one month.
            </p>
          </div>

          <div className="glass-card p-8">
            <h2 className="font-heading text-2xl text-white mb-4">
              Cookies
            </h2>
            <p className="text-white/60 mb-3">
              This website uses only essential cookies necessary for the site to function. We do not use tracking,
              analytics, advertising, or third-party cookies.
            </p>
            <p className="text-white/60">
              Essential cookies are used solely to maintain session state where required. No consent is required
              for strictly necessary cookies under applicable law.
            </p>
          </div>

          <div className="glass-card p-8">
            <h2 className="font-heading text-2xl text-white mb-4">
              Complaints
            </h2>
            <p className="text-white/60 mb-3">
              If you have concerns about how we handle your personal data, please contact us in the first instance
              at <strong className="text-white">enquiries@ssaspropertyfinance.co.uk</strong>. We will investigate
              and respond promptly.
            </p>
            <p className="text-white/60">
              You also have the right to lodge a complaint with the Information Commissioner&apos;s Office (ICO),
              the UK supervisory authority for data protection:{" "}
              <strong className="text-white">ico.org.uk</strong> or telephone 0303 123 1113.
            </p>
          </div>

          <div className="glass-card p-8">
            <h2 className="font-heading text-2xl text-white mb-4">
              Changes to This Policy
            </h2>
            <p className="text-white/60">
              We may update this privacy policy from time to time. The date at the top of this page will reflect the
              most recent revision. Continued use of this site following any changes constitutes acceptance of the
              updated policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
