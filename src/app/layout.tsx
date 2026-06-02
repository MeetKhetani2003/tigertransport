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

import { generateDynamicKeywords } from "@/lib/seo-utils";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.durgatransport.com"),
  title: {
    template: "%s | Durga Transport Services India Pvt Ltd",
    default: "Durga Transport Services India Pvt Ltd | Enterprise Logistics Company",
  },
  description: "India's Trusted Transport & Logistics Partner. Reliable transportation, freight movement and logistics solutions across India. Serving 500+ cities.",
  keywords: generateDynamicKeywords([
    "durga transport",
    "transport services in india",
  ]),
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Durga Transport Services India Pvt Ltd | Enterprise Logistics Company",
    description: "India's Trusted Transport & Logistics Partner. Reliable transportation, freight movement and logistics solutions across India.",
    url: "https://www.durgatransport.com",
    siteName: "Durga Transport Services India Pvt Ltd",
    images: [
      {
        url: "/logo.png",
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
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "https://www.durgatransport.com",
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
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18205812839"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-18205812839');
            `,
          }}
        />
      </head>
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
