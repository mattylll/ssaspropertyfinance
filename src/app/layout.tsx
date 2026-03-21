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
  metadataBase: new URL("https://ssaspropertyfinance.co.uk"),
  title: {
    default: "SSAS Property Finance | Specialist Commercial Property Mortgage Brokers",
    template: "%s | SSAS Property Finance",
  },
  description:
    "Specialist SSAS commercial property finance brokers. Compare SSAS mortgage rates, use our calculators, and get indicative terms in minutes.",
  keywords: [
    "SSAS commercial property mortgage",
    "SSAS property finance",
    "SSAS property loan",
    "SSAS mortgage calculator",
    "commercial property SSAS",
    "SSAS lenders UK",
    "pension property finance",
  ],
  authors: [{ name: "SSAS Property Finance" }],
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "SSAS Property Finance",
    title: "SSAS Property Finance | Specialist Commercial Property Mortgage Brokers",
    description:
      "Specialist SSAS commercial property finance brokers. Compare rates, use calculators, get indicative terms.",
  },
  twitter: {
    card: "summary_large_image",
    title: "SSAS Property Finance",
    description: "Specialist SSAS commercial property mortgage brokers",
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
      </body>
    </html>
  );
}
