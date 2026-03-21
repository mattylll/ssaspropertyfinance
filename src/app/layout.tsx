import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ConvexClientProvider } from "@/components/providers/ConvexClientProvider";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: "400",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "SIPP Property Finance | Specialist Commercial Property Mortgage Brokers",
    template: "%s | SIPP Property Finance",
  },
  description:
    "Specialist SIPP and SSAS commercial property finance brokers. Compare SIPP mortgage rates, use our calculators, and get indicative terms in minutes.",
  keywords: [
    "SIPP commercial property mortgage",
    "SIPP property finance",
    "SSAS property loan",
    "SIPP mortgage calculator",
    "commercial property SIPP",
    "SIPP lenders UK",
    "pension property finance",
  ],
  authors: [{ name: "SIPP Property Finance" }],
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "SIPP Property Finance",
    title: "SIPP Property Finance | Specialist Commercial Property Mortgage Brokers",
    description:
      "Specialist SIPP and SSAS commercial property finance brokers. Compare rates, use calculators, get indicative terms.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SIPP Property Finance - Specialist Commercial Property Mortgage Brokers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SIPP Property Finance",
    description: "Specialist SIPP & SSAS commercial property mortgage brokers",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${dmSerif.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col animated-bg">
        <ConvexClientProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ConvexClientProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FinancialService",
              name: "SIPP Property Finance",
              description:
                "Specialist SIPP and SSAS commercial property finance brokers. Compare mortgage rates and get indicative terms.",
              url: "https://sipppropertyfinance.co.uk",
              areaServed: "GB",
              serviceType: "Commercial Property Mortgage Brokerage",
            }),
          }}
        />
      </body>
    </html>
  );
}
