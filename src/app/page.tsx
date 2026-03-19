import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { ProductCards } from "@/components/home/ProductCards";
import { QuickCalculator } from "@/components/home/QuickCalculator";
import { HowItWorks } from "@/components/home/HowItWorks";
import { PermittedPropertyTypes } from "@/components/home/PermittedPropertyTypes";
import { CaseStudyStrip } from "@/components/home/CaseStudyStrip";
import { LenderPanel } from "@/components/home/LenderPanel";
import { FAQAccordion } from "@/components/home/FAQAccordion";
import { LeadCaptureSection } from "@/components/home/LeadCaptureSection";

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
      <FAQAccordion />
      <LeadCaptureSection />

      {/* Organization + FinancialService Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["FinancialService", "Organization"],
            name: "SIPP Property Finance",
            description:
              "Specialist SIPP and SSAS commercial property finance brokers",
            url: "https://sipppropertyfinance.co.uk",
            areaServed: {
              "@type": "Country",
              name: "United Kingdom",
            },
            serviceType: "Commercial Property Mortgage Brokerage",
            knowsAbout: [
              "SIPP Commercial Property Mortgage",
              "SSAS Property Loan",
              "Pension Property Finance",
              "Commercial Mortgage Brokerage",
            ],
          }),
        }}
      />
    </>
  );
}
