import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";
import { SmoothScroll } from "@/components/layout/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Durga Transport Services India Pvt Ltd",
    default: "Durga Transport Services India Pvt Ltd | Enterprise Logistics Company",
  },
  description: "India's Trusted Transport & Logistics Partner. Reliable transportation, freight movement and logistics solutions across India.",
  keywords: [
    "logistics company india",
    "transport services",
    "freight forwarder india",
    "transport company",
    "durga transport",
    "pan india transport",
    "trucking services india",
    "supply chain solutions",
    "transport services in junagadh",
    "logistics company in rajkot",
    "transport company in ahmedabad",
    "freight forwarders in kanpur",
    "truck booking in lucknow",
    "best transporters in delhi",
    "transport services pan india"
  ],
  openGraph: {
    title: "Durga Transport Services India Pvt Ltd | Enterprise Logistics Company",
    description: "India's Trusted Transport & Logistics Partner. Reliable transportation, freight movement and logistics solutions across India.",
    url: "https://www.durgatransport.com",
    siteName: "Durga Transport Services India Pvt Ltd",
    images: [
      {
        url: "https://www.durgatransport.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Durga Transport Services India Pvt Ltd Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Durga Transport Services India Pvt Ltd",
    description: "India's Trusted Transport & Logistics Partner.",
    images: ["https://www.durgatransport.com/logo.png"],
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
      className={`${inter.variable} ${outfit.variable} antialiased bg-white text-zinc-900`}
    >
      <body className="min-h-full flex flex-col bg-white text-zinc-900 selection:bg-[var(--color-brand-red)] selection:text-white">
        <SmoothScroll>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <WhatsAppCTA />
        </SmoothScroll>
      </body>
    </html>
  );
}
