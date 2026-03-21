import type { Metadata } from "next";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Get SIPP Property Finance Terms",
  description:
    "Get indicative SIPP and SSAS commercial property mortgage terms within 24 hours. Complete our enquiry form or contact our specialist brokers directly.",
};

export default function ContactPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl sm:text-5xl text-white mb-4">
            Get Indicative Terms
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto">
            Complete the enquiry form below and a specialist SIPP property
            finance broker will be in touch within 24 hours with indicative
            terms tailored to your requirements.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <EnquiryForm />
          </div>

          {/* Contact info */}
          <div className="space-y-6">
            <div className="glass-card p-6">
              <h3 className="font-heading text-lg text-white mb-4">
                Contact Details
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-gold mt-0.5" />
                  <div>
                    <p className="text-sm text-white/70">Phone</p>
                    <p className="text-sm text-white">0800 XXX XXXX</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-gold mt-0.5" />
                  <div>
                    <p className="text-sm text-white/70">Email</p>
                    <p className="text-sm text-white">
                      enquiries@sipppropertyfinance.co.uk
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gold mt-0.5" />
                  <div>
                    <p className="text-sm text-white/70">Office</p>
                    <p className="text-sm text-white">Hertfordshire, UK</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-gold mt-0.5" />
                  <div>
                    <p className="text-sm text-white/70">Hours</p>
                    <p className="text-sm text-white">Mon-Fri: 9am - 6pm</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <h3 className="font-heading text-lg text-white mb-3">
                What Happens Next?
              </h3>
              <ol className="space-y-3 text-sm text-white/60">
                <li className="flex items-start gap-2">
                  <span className="text-gold font-mono">1.</span>
                  We review your enquiry within 24 hours
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold font-mono">2.</span>
                  A specialist broker calls to discuss your requirements
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold font-mono">3.</span>
                  We source indicative terms from our lender panel
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold font-mono">4.</span>
                  You receive a tailored proposal — no obligation
                </li>
              </ol>
            </div>

            <div className="glass-card p-6">
              <h3 className="font-heading text-lg text-white mb-3">
                IFA / Professional Referrals
              </h3>
              <p className="text-sm text-white/60 mb-3">
                Are you an IFA, solicitor, or accountant referring a client? We
                offer a dedicated professional referral process with co-branded
                indicative terms and ongoing case updates.
              </p>
              <p className="text-sm text-white/60">
                Include your firm reference number in the form and
                we&apos;ll prioritise your enquiry.
              </p>
            </div>
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact SIPP Property Finance",
            description: "Get indicative SIPP commercial property mortgage terms",
          }),
        }}
      />
    </div>
  );
}
