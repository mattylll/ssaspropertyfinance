"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Can I buy commercial property through my SIPP?",
    answer:
      "Yes. SIPPs can hold commercial property as a permitted investment under HMRC rules. This includes offices, industrial units, retail premises, and warehouses. The SIPP trustee purchases the property, and your pension fund benefits from rental income and capital growth. Residential property is generally not permitted.",
  },
  {
    question: "How much can a SIPP borrow to buy commercial property?",
    answer:
      "A SIPP can borrow up to 50% of the net value of the pension fund to assist with property purchase. For example, if your SIPP fund is worth £400,000, the SIPP could borrow up to £200,000, giving you a combined purchasing power of £600,000 for commercial property.",
  },
  {
    question: "What interest rates are available on SIPP commercial mortgages?",
    answer:
      "SIPP commercial mortgage rates typically start from around 5.49% per annum, with terms of up to 25 years. Rates depend on the lender, property type, LTV ratio, and the overall strength of the deal. We compare rates across 15+ specialist SIPP lenders to find the best terms.",
  },
  {
    question: "Can my business rent the property from my SIPP?",
    answer:
      "Yes, this is one of the key advantages of SIPP property ownership. Your business can lease the commercial property from your SIPP at a market rent. The rent is a tax-deductible business expense, and it goes into your pension fund tax-free, boosting your retirement savings.",
  },
  {
    question: "What is the difference between SIPP and SSAS property finance?",
    answer:
      "A SIPP (Self-Invested Personal Pension) is an individual pension wrapper, while an SSAS (Small Self-Administered Scheme) is an occupational pension for company directors. Both can hold commercial property. SSAS schemes can also make loanbacks to the sponsoring employer (up to 50% of fund value, repaid within 5 years), which adds flexibility.",
  },
  {
    question: "How long does SIPP property purchase take?",
    answer:
      "A typical SIPP commercial property purchase takes 6-12 weeks from initial application to completion. This includes SIPP provider approval, lender valuation, legal due diligence, and completion. We work to streamline this process and have completed deals in as little as 4 weeks.",
  },
  {
    question: "What fees are involved in a SIPP property mortgage?",
    answer:
      "Fees typically include: lender arrangement fee (1-2% of loan), valuation fee, legal fees, SIPP provider property purchase fee, and ongoing SIPP administration charges. Stamp Duty Land Tax also applies, including the 3% surcharge for purchases by a pension scheme. We provide a full fee breakdown before you proceed.",
  },
  {
    question: "Do I need to be an IFA to refer clients for SIPP property finance?",
    answer:
      "No. While we welcome IFA referrals, anyone can enquire about SIPP commercial property finance. If you are a SIPP trustee, business owner, or property investor with a self-invested pension, you can contact us directly. IFAs benefit from our dedicated referral process and co-branded indicative terms.",
  },
];

export function FAQAccordion() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl sm:text-4xl text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-white/50">
            Common questions about SIPP and SSAS commercial property finance.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="glass-card px-6 border-white/10"
              >
                <AccordionTrigger className="text-left text-white hover:text-gold py-5 text-sm sm:text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/50 text-sm leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>

      {/* FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </section>
  );
}
