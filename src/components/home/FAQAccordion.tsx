"use client";

import Link from "next/link";
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
    learnMoreHref: "/learn/can-you-buy-commercial-property-through-a-sipp",
    learnMoreLabel: "Read our full guide to buying commercial property through a SIPP",
  },
  {
    question: "How much can a SIPP borrow to buy commercial property?",
    answer:
      "A SIPP can borrow up to 50% of the net value of the pension fund to assist with property purchase. For example, if your SIPP fund is worth £400,000, the SIPP could borrow up to £200,000, giving you a combined purchasing power of £600,000 for commercial property.",
    learnMoreHref: "/learn/how-much-can-a-sipp-borrow",
    learnMoreLabel: "Learn more about the 50% LTV rule",
  },
  {
    question: "What interest rates are available on SIPP commercial mortgages?",
    answer:
      "SIPP commercial mortgage rates typically start from around 5.49% per annum, with terms of up to 25 years. Rates depend on the lender, property type, LTV ratio, and the overall strength of the deal. We compare rates across 15+ specialist SIPP lenders to find the best terms.",
    learnMoreHref: "/learn/sipp-mortgage-interest-rates",
    learnMoreLabel: "See current SIPP mortgage interest rates",
  },
  {
    question: "Can my business rent the property from my SIPP?",
    answer:
      "Yes, this is one of the key advantages of SIPP property ownership. Your business can lease the commercial property from your SIPP at a market rent. The rent is a tax-deductible business expense, and it goes into your pension fund tax-free, boosting your retirement savings.",
    learnMoreHref: "/learn/can-business-rent-from-sipp",
    learnMoreLabel: "Read about connected party transactions",
  },
  {
    question: "What is the difference between SIPP and SSAS property finance?",
    answer:
      "A SIPP (Self-Invested Personal Pension) is an individual pension wrapper, while an SSAS (Small Self-Administered Scheme) is an occupational pension for company directors. Both can hold commercial property. SSAS schemes can also make loanbacks to the sponsoring employer (up to 50% of fund value, repaid within 5 years), which adds flexibility.",
    learnMoreHref: "/learn/ssas-vs-sipp",
    learnMoreLabel: "Compare SSAS vs SIPP for property investment",
  },
  {
    question: "How long does SIPP property purchase take?",
    answer:
      "A typical SIPP commercial property purchase takes 6-12 weeks from initial application to completion. This includes SIPP provider approval, lender valuation, legal due diligence, and completion. We work to streamline this process and have completed deals in as little as 4 weeks.",
    learnMoreHref: "/learn/how-long-sipp-property-purchase-take",
    learnMoreLabel: "See the full purchase timeline",
  },
  {
    question: "What fees are involved in a SIPP property mortgage?",
    answer:
      "Fees typically include: lender arrangement fee (1-2% of loan), valuation fee, legal fees, SIPP provider property purchase fee, and ongoing SIPP administration charges. Stamp Duty Land Tax also applies, including the 3% surcharge for purchases by a pension scheme. We provide a full fee breakdown before you proceed.",
    learnMoreHref: "/learn/sipp-mortgage-fees",
    learnMoreLabel: "Full breakdown of SIPP mortgage fees",
  },
  {
    question: "Do I need to be an IFA to refer clients for SIPP property finance?",
    answer:
      "No. While we welcome IFA referrals, anyone can enquire about SIPP commercial property finance. If you are a SIPP trustee, business owner, or property investor with a self-invested pension, you can contact us directly. IFAs benefit from our dedicated referral process and co-branded indicative terms.",
    learnMoreHref: "/learn/financial-advisers-refer-sipp-cases",
    learnMoreLabel: "How financial advisers can refer SIPP cases",
  },
  {
    question: "What is a SIPP?",
    answer:
      "A SIPP (Self-Invested Personal Pension) is a type of personal pension that gives you control over how your retirement savings are invested. Unlike standard personal pensions where the provider selects investments, a SIPP allows you to choose from a wide range of assets including stocks, bonds, funds, and — crucially — commercial property. SIPPs are regulated by the FCA and administered by authorised SIPP providers who act as trustees.",
    learnMoreHref: "/learn/what-is-a-sipp",
    learnMoreLabel: "Read our complete guide to SIPPs",
  },
  {
    question: "Are SIPP mortgages worth it?",
    answer:
      "SIPP mortgages can be highly advantageous, particularly for business owners. Key benefits include: rental income grows tax-free within your pension, no Capital Gains Tax on property disposal, and your business rent becomes a tax-deductible expense that flows into your pension pot. However, there are costs to consider — arrangement fees, SIPP provider charges, and the 3% SDLT surcharge. The property is also illiquid and tied up until retirement. For many business owners occupying commercial premises, the tax efficiencies significantly outweigh the costs.",
    learnMoreHref: "/learn/sipp-mortgage-explained",
    learnMoreLabel: "SIPP mortgages explained in full",
  },
  {
    question: "What do SIPP lenders look for?",
    answer:
      "SIPP lenders assess several key criteria: the net asset value of the SIPP fund (to confirm the 50% LTV cap), the type and quality of the commercial property, the strength of any existing or proposed tenancy, the property's location and condition, and an independent RICS valuation. Lenders also consider whether the SIPP provider is on their approved list. A strong deal typically has a quality commercial property with a reliable tenant on a long lease in an established location.",
    learnMoreHref: "/learn/sipp-lending-criteria",
    learnMoreLabel: "Full guide to SIPP lending criteria",
  },
  {
    question: "What if the property value drops after purchase?",
    answer:
      "If the property value falls, the mortgage still needs to be serviced from the SIPP fund. Unlike personal mortgages, SIPP lenders generally cannot call in the loan early due to a decline in property value alone, provided the mortgage repayments are maintained. However, if the fund cannot meet its obligations, the SIPP trustee may need to sell the property — potentially at a loss. This is why it is important to maintain sufficient liquidity within the SIPP and to choose properties with strong fundamentals and reliable rental income.",
    learnMoreHref: "/learn/sipp-property-falling-market",
    learnMoreLabel: "SIPP property in a falling market: your options",
  },
];

export function FAQAccordion() {
  return (
    <section className="py-16">
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
          <p className="text-white/60">
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
                <AccordionTrigger className="text-left text-white hover:text-gold py-5 text-sm sm:text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:rounded-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/60 text-sm leading-relaxed pb-5">
                  <p className="mb-3">{faq.answer}</p>
                  <Link
                    href={faq.learnMoreHref}
                    className="text-gold hover:text-gold-light text-xs transition-colors underline underline-offset-2"
                  >
                    {faq.learnMoreLabel} &rarr;
                  </Link>
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
