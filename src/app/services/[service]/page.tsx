import React from "react"
import { notFound } from "next/navigation"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Schema, generateServiceSchema } from "@/components/seo/Schema"
import servicesData from "../../../../data/services.json"

interface PageProps {
  params: Promise<{ service: string }>
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    service: service.slug,
  }))
}

import { generateServiceSpecificKeywords } from "@/lib/seo-utils"

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params
  const service = servicesData.find((s) => s.slug === resolvedParams.service)
  
  if (!service) return {}
  
  return {
    title: `${service.title} Services in India`,
    description: `Professional ${service.title.toLowerCase()} across India. Reliable, secure, and enterprise-grade logistics by Durga Transport Services India Pvt Ltd. Serving 500+ cities.`,
    keywords: generateServiceSpecificKeywords(service.title),
    alternates: {
      canonical: `https://www.durgatransport.com/services/${service.slug}`,
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

const serviceImages: Record<string, string> = {
  "truck-transportation": "/services/truck-transportation.jpeg",
  "trailer-transportation": "/services/trailer transport.jpeg",
  "tempo-transportation": "/services/tempo service.jpeg",
  "container-transportation": "/services/container transportation.jpeg",
  "odc-transportation": "/services/odc transportation.jpeg",
  "vehicle-transportation": "/services/vehicle transport.jpeg",
  "car-transportation": "/services/car transport.jpeg",
  "lorry-transportation": "/services/lori transportation.jpeg",
  "logistics-services": "/services/Logistics sercice.jpeg",
  "storage-facility": "/services/storage facility.jpeg",
  "close-body-truck": "/services/close body truck.jpeg",
  "freight-transportation": "/services/freight service.jpeg",
  "pan-india-logistics": "/services/pan india.jpeg",
}
const serviceHeroImages: Record<string, string> = {
  "truck-transportation": "/hero/slide-1.png",
  "trailer-transportation": "/hero/slide-2.png",
  "tempo-transportation": "/fleet/intercity fleet.jpeg",
  "container-transportation": "/fleet/Standard & High Cube Container Fleet.jpeg",
  "odc-transportation": "/Industries/Heavy Machinery Industry.jpeg",
  "vehicle-transportation": "/Industries/automobile.jpeg",
  "car-transportation": "/Industries/automobile.jpeg",
  "lorry-transportation": "/Industries/Construction Industry.jpeg",
  "logistics-services": "/hero/main-hero.png",
  "storage-facility": "/Industries/retail distribution.jpeg",
  "close-body-truck": "/fleet/waterproof closebody fleet.jpeg",
  "freight-transportation": "/hero/slide-3.png",
  "pan-india-logistics": "/hero/main-hero.png",
}

export default async function ServicePage({ params }: PageProps) {
  const resolvedParams = await params
  const service = servicesData.find((s) => s.slug === resolvedParams.service)
  
  if (!service) {
    notFound()
  }

  const schemaData = generateServiceSchema(
    service.title,
    `Professional ${service.title.toLowerCase()} across India by Durga Transport Services India Pvt Ltd.`
  )

  const serviceHeroImg = serviceHeroImages[service.slug] || "/hero/main-hero.png"
  const serviceImg = serviceImages[service.slug] || "/hero/slide-1.png"

  return (
    <>
      <Schema data={schemaData} />
      
      {/* Service Hero */}
      <section className="relative w-full pt-32 pb-24 md:pt-48 md:pb-32 bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
           <Image
            src={serviceHeroImg}
            alt={service.title}
            fill
            sizes="100vw"
            className="object-cover opacity-90 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent md:w-3/4" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-3">
              <span className="w-8 h-1 bg-[var(--color-brand-red)] rounded-full" />
              <span className="text-sm font-bold tracking-widest text-[var(--color-brand-red)] uppercase">Enterprise Logistics Service</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1]">
              {service.title}
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl font-light">
              Enterprise-grade {service.title.toLowerCase()} tailored for your specific supply chain requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Main Content */}
            <div className="lg:col-span-8 space-y-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6 tracking-tight">
                  Comprehensive {service.title} Solutions
                </h2>
                
                <div className="pl-6 border-l-4 border-[var(--color-brand-red)] mb-8">
                  <p className="text-zinc-600 text-lg leading-relaxed font-medium">
                    At Durga Transport Services India Pvt Ltd, our {service.title.toLowerCase()} is designed to meet the rigorous demands of modern enterprise supply chains. We combine deep industry expertise with a robust national network to deliver exceptional reliability and speed.
                  </p>
                </div>
                
                <p className="text-zinc-500 text-lg leading-relaxed mb-8">
                  Whether you are moving raw materials, finished goods, or specialized equipment, our modern fleet and experienced logistics professionals ensure that your cargo reaches its destination safely and on time. We utilize advanced tracking systems to provide real-time visibility and dedicated account management for personalized service.
                </p>
              </div>
              
              {/* Image break */}
              <div className="relative w-full aspect-[16/9] rounded-[2rem] overflow-hidden shadow-2xl border border-zinc-100">
                 <Image
                  src={serviceImg}
                  alt={`${service.title} in action`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-1000"
                />
              </div>
              
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-8 tracking-tight">Key Service Benefits</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Pan India coverage with dedicated routes.",
                    "Real-time GPS tracking and dedicated support.",
                    "Highly maintained fleet ensuring minimal transit delays.",
                    "Customized solutions for complex freight.",
                    "Strict adherence to safety and compliance standards."
                  ].map((benefit, i) => (
                    <div key={i} className={`flex items-start gap-4 p-5 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-red-100 hover:bg-red-50/30 transition-colors ${i === 4 ? "sm:col-span-2" : ""}`}>
                      <CheckCircle2 className="w-6 h-6 text-[var(--color-brand-red)] shrink-0 mt-0.5" />
                      <span className="text-zinc-700 font-semibold text-base leading-snug">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Sticky Sidebar CTA */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-6">
                <div className="bg-zinc-900 p-8 rounded-3xl shadow-2xl overflow-hidden relative">
                  {/* Decorative background element */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-brand-red)] rounded-full blur-[80px] opacity-20 pointer-events-none" />
                  
                  <h3 className="text-2xl font-bold text-white mb-3">Request a Quote</h3>
                  <p className="text-zinc-400 mb-8 text-sm leading-relaxed">
                    Need {service.title.toLowerCase()}? Contact our logistics experts today for a customized and competitive proposal.
                  </p>
                  <div className="space-y-4 relative z-10">
                    <Link href="/quote" className="group flex items-center justify-center gap-3 w-full bg-[var(--color-brand-red)] text-white font-semibold h-14 rounded-xl hover:bg-red-700 transition-colors shadow-lg hover:shadow-red-500/20">
                      Get Pricing <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <a href="tel:+919812773410" className="flex items-center justify-center gap-3 w-full bg-white/5 text-white font-semibold h-14 rounded-xl hover:bg-white/10 transition-colors border border-white/10 backdrop-blur-md">
                      Call +91 9812773410
                    </a>
                  </div>
                </div>
                
                {/* Secondary Help Card */}
                <div className="bg-zinc-50 p-6 rounded-3xl border border-zinc-100 flex items-center gap-4">
                   <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0">
                     <span className="text-xl font-bold text-[var(--color-brand-red)]">24</span>
                   </div>
                   <div>
                     <div className="font-bold text-zinc-900">24/7 Support Desk</div>
                     <div className="text-sm text-zinc-500">Always here to help you</div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
