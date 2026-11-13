import React from "react"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Metadata } from "next"
import { ArrowRight, CheckCircle2, Factory } from "lucide-react"
import { Schema, generateServiceSchema } from "@/components/seo/Schema"
import { generateServiceSpecificKeywords } from "@/lib/seo-utils"
import industriesData from "../../../../data/industries.json"

interface PageProps {
  params: Promise<{ industry: string }>
}

export async function generateStaticParams() {
  return industriesData.map((ind) => ({
    industry: ind.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params
  const industry = industriesData.find((i) => i.slug === resolvedParams.industry)
  
  if (!industry) {
    return {
      title: "Industry Not Found - Durga Transport Services India Pvt Ltd",
    }
  }

  return {
    title: `${industry.title} Logistics Services in India`,
    description: `Expert logistics and supply chain solutions for the ${industry.title.toLowerCase()} sector across India. Partner with Durga Transport Services India Pvt Ltd for secure and scalable transport.`,
    keywords: generateServiceSpecificKeywords(`${industry.title} Logistics`),
    alternates: {
      canonical: `https://www.durgatransport.com/industries/${industry.slug}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
      }
    }
  }
}

const industryImages: Record<string, string> = {
  "manufacturing": "/Industries/Manufacturing.jpeg",
  "automobile": "/Industries/automobile.jpeg",
  "construction": "/Industries/Construction Industry.jpeg",
  "infrastructure": "/Industries/infrastructure.jpeg",
  "retail-fmcg": "/Industries/retail distribution.jpeg",
  "industrial-equipment": "/Industries/Industrial equipement.jpeg",
  "heavy-machinery": "/Industries/Heavy Machinery Industry.jpeg",
  "pharmaceuticals": "/Industries/pharma.jpeg"
}

export default async function IndustryPage({ params }: PageProps) {
  const resolvedParams = await params
  const industry = industriesData.find((i) => i.slug === resolvedParams.industry)
  
  if (!industry) {
    notFound()
  }

  const schemaData = generateServiceSchema(
    `${industry.title} Logistics`,
    `Professional logistics and transport services for the ${industry.title.toLowerCase()} sector across India.`
  )

  const industryImg = industryImages[industry.slug] || "/hero/slide-2.png"

  return (
    <>
      <Schema data={schemaData} />
      
      {/* Industry Hero */}
      <section className="relative w-full pt-32 pb-24 md:pt-48 md:pb-32 bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
           <Image
            src={industryImg}
            alt={industry.title}
            fill
            sizes="100vw"
            className="object-cover opacity-90 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent md:w-3/4" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-3">
              <span className="w-12 h-1 bg-[var(--color-brand-red)] rounded-full"></span>
              <span className="text-[var(--color-brand-red)] font-bold tracking-[0.2em] uppercase text-sm">Sector Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
              <span className="block text-zinc-300 font-medium text-3xl md:text-4xl lg:text-5xl mb-2">Logistics for</span>
              {industry.title}
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-zinc-300 max-w-2xl font-light leading-relaxed">
              Robust, secure, and scalable supply chain solutions engineered specifically for the {industry.title.toLowerCase()} industry in India.
            </p>

            <div className="pt-6 flex flex-wrap gap-4">
              <Link href="/quote" className="inline-flex items-center justify-center gap-2 bg-[var(--color-brand-red)] text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-red-700 transition-all shadow-[0_0_20px_rgba(227,6,19,0.3)]">
                Get Industry Quote <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-12 gap-16">
            
            <div className="lg:col-span-8">
              <div className="prose prose-lg prose-zinc max-w-none">
                <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6 tracking-tight">Specialized Transport for {industry.title}</h2>
                <p className="text-zinc-600 text-lg leading-relaxed mb-8">
                  The {industry.title.toLowerCase()} sector forms the backbone of India's rapid economic growth. At Durga Transport Services India Pvt Ltd, we understand that supply chain disruptions can cause significant financial impact in this sector. Our specialized fleet and logistics planning are designed to mitigate these risks.
                </p>
                
                <p className="text-zinc-600 text-lg leading-relaxed mb-8">
                  From navigating strict compliance and safety standards to handling specialized or oversized cargo, our experienced team provides end-to-end management. We ensure your assets, raw materials, or finished products are transported with absolute precision.
                </p>
              </div>
              
              <div className="mt-12 bg-zinc-50 rounded-3xl p-8 md:p-12 border border-zinc-100">
                <h3 className="text-2xl font-bold text-zinc-900 mb-6">Why Partner With Us?</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    "Zero-Damage Transport Protocols",
                    "Customized Fleet Allocation",
                    "24/7 Real-Time GPS Tracking",
                    "Dedicated Sector Managers",
                    "Strict Regulatory Compliance",
                    "Pan-India Distribution Network"
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[var(--color-brand-red)] shrink-0" />
                      <span className="text-zinc-700 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-8">
                <div className="bg-zinc-900 rounded-3xl p-8 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-brand-red)] rounded-full blur-[64px] opacity-30" />
                  <h3 className="text-2xl font-bold mb-4 relative z-10">Need Immediate Transport?</h3>
                  <p className="text-zinc-400 mb-8 relative z-10">Connect with our industry specialists to deploy fleet resources for your operations immediately.</p>
                  
                  <Link href="/contact" className="block w-full py-4 px-6 bg-white text-zinc-900 font-bold text-center rounded-xl hover:bg-zinc-100 transition-colors relative z-10">
                    Contact Specialists
                  </Link>
                  <a href="tel:+919812773410" className="block w-full py-4 px-6 mt-4 border border-zinc-700 text-white font-bold text-center rounded-xl hover:bg-zinc-800 transition-colors relative z-10">
                    +91 9812773410
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
