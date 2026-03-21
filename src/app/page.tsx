import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { ProductCards } from "@/components/home/ProductCards";
import { QuickCalculator } from "@/components/home/QuickCalculator";
import { HowItWorks } from "@/components/home/HowItWorks";
import { PermittedPropertyTypes } from "@/components/home/PermittedPropertyTypes";
import { CaseStudyStrip } from "@/components/home/CaseStudyStrip";
import { LenderPanel } from "@/components/home/LenderPanel";
import { FAQAccordion } from "@/components/home/FAQAccordion";
import { FeaturedArticles } from "@/components/home/FeaturedArticles";
import { FounderSection } from "@/components/home/FounderSection";
import { LatestGuides } from "@/components/home/LatestGuides";
import { LeadCaptureSection } from "@/components/home/LeadCaptureSection";

export const metadata: Metadata = {
  title:
    "SIPP Property Finance | Specialist SIPP & SSAS Commercial Property Mortgage Brokers",
  description:
    "Compare SIPP and SSAS commercial property mortgage rates from 5.49%. Use our free calculators, explore 15+ specialist lenders, and get indicative terms within 24 hours.",
  keywords: [
    "SIPP commercial property mortgage",
    "SIPP property finance",
    "SSAS property loan",
    "SIPP mortgage calculator",
    "commercial property SIPP",
    "SIPP lenders UK",
    "pension property finance",
    "SSAS loanback",
  ],
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ProductCards />
      <QuickCalculator />
      <HowItWorks />
      <PermittedPropertyTypes />
      <CaseStudyStrip />
      <LenderPanel />
      <FounderSection />
      <FAQAccordion />
      <FeaturedArticles />
      <LatestGuides />
      <LeadCaptureSection />

      {/* Organization + FinancialService Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["FinancialService", "Organization"],
            name: "SSAS Property Finance",
            description:
              "Specialist SSAS commercial property finance brokers",
            url: "https://ssaspropertyfinance.co.uk",
            areaServed: {
              "@type": "Country",
              name: "United Kingdom",
            },
            serviceType: "Commercial Property Mortgage Brokerage",
            knowsAbout: [
              "SSAS Commercial Property Mortgage",
              "SSAS Property Loan",
              "SSAS Loanback",
              "Pension Property Finance",
              "Commercial Mortgage Brokerage",
            ],
            founder: {
              "@type": "Person",
              name: "Matt Lenzie",
              jobTitle: "Founder",
              description:
                "Board advisor to a SIPP business with over £2.9bn assets under advisory. Former banker and corporate finance partner involved in raising over £300m of equity and debt.",
              knowsAbout: [
                "SIPP Property Investment",
                "SSAS Commercial Lending",
                "Corporate Finance",
                "Commercial Mortgage Structuring",
                "Pension Trustee Advisory",
              ],
            },
            address: {
              "@type": "PostalAddress",
              streetAddress: "Lynch Farm, The Lynch",
              addressLocality: "Kensworth",
              addressRegion: "Bedfordshire",
              postalCode: "LU6 3QZ",
              addressCountry: "GB",
            },
            sameAs: [],
          }),
        }}
      />
    </>
  );
}
