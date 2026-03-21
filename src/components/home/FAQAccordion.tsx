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
    question: "Can I buy commercial property through my SSAS?",
    answer:
      "Yes. A Small Self-Administered Scheme (SSAS) can hold commercial property as a permitted investment under HMRC rules. This includes offices, industrial units, retail premises, and warehouses. The SSAS trustees purchase the property, and the pension fund benefits from rental income and capital growth. Residential property is generally not permitted.",
  },
  {
    question: "How much can an SSAS borrow to buy commercial property?",
    answer:
      "An SSAS can borrow up to 50% of the net value of the scheme's assets to assist with property purchase. For example, if your SSAS fund is worth £400,000, the scheme could borrow up to £200,000, giving you a combined purchasing power of £600,000 for commercial property. Multiple members can pool their assets for larger acquisitions.",
  },
  {
    question: "What interest rates are available on SSAS commercial mortgages?",
    answer:
      "SSAS commercial mortgage rates typically start from around 5.49% per annum, with terms of up to 25 years. Rates depend on the lender, property type, LTV ratio, and the overall strength of the deal. We compare rates across 15+ specialist SSAS lenders to find the best terms.",
  },
  {
    question: "Can my business rent the property from my SSAS?",
    answer:
      "Yes, this is one of the key advantages of SSAS property ownership. Your sponsoring employer can lease the commercial property from your SSAS at a market rent. The rent is a tax-deductible business expense, and it goes into your pension fund tax-free, boosting your retirement savings.",
  },
  {
    question: "What is an SSAS loanback and how does it work?",
    answer:
      "An SSAS loanback allows the scheme to lend up to 50% of the scheme's net assets back to the sponsoring employer. The loan must be repaid within 5 years with equal instalments of capital and interest. The interest rate must be at least 1% above the average base rate, and security of at least the loan value plus 10% is required.",
  },
  {
    question: "How long does an SSAS property purchase take?",
    answer:
      "A typical SSAS commercial property purchase takes 6-12 weeks from initial application to completion. This includes trustee approval, lender valuation, legal due diligence, and completion. We work to streamline this process and have completed deals in as little as 4 weeks.",
  },
  {
    question: "What fees are involved in an SSAS property mortgage?",
    answer:
      "Fees typically include: lender arrangement fee (1-2% of loan), valuation fee, legal fees, SSAS administration charges, and ongoing scheme management fees. Stamp Duty Land Tax also applies, including the 3% surcharge for purchases by a pension scheme. We provide a full fee breakdown before you proceed.",
  },
  {
    question: "How many members can an SSAS have?",
    answer:
      "An SSAS can have up to 11 members, all of whom must be directors or employees of the sponsoring employer. Each member is also a trustee, giving them direct control over investment decisions. This allows multiple directors to pool their pension assets for larger property acquisitions.",
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
            Common questions about SSAS commercial property finance.
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
