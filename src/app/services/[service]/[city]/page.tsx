import React from "react"
import { notFound } from "next/navigation"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2, MapPin, Truck, Phone, Shield, Clock } from "lucide-react"
import { Schema, generateServiceSchema } from "@/components/seo/Schema"
import servicesData from "../../../../../data/services.json"
import citiesData from "../../../../../data/cities.json"

interface PageProps {
  params: Promise<{ service: string; city: string }>
}

export async function generateStaticParams() {
  const params: { service: string; city: string }[] = []
  
  servicesData.forEach((service) => {
    citiesData.forEach((city: string) => {
      params.push({
        service: service.slug,
        city: city.toLowerCase(),
      })
    })
  })
  
  return params
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params
  const serviceSlug = resolvedParams.service
  const citySlug = resolvedParams.city
  
  const service = servicesData.find((s) => s.slug === serviceSlug)
  const city = citiesData.find((c: string) => c.toLowerCase() === citySlug)
  
  if (!service || !city) return {}
  
  return {
    title: `${service.title} in ${city} | Top Logistics Services | Durga Transport Services India Pvt Ltd`,
    description: `Looking for ${service.title.toLowerCase()} in ${city}? Durga Transport Services India Pvt Ltd provides premium, secure, and enterprise-scale logistics solutions in ${city}.`,
    keywords: [
      `${service.title.toLowerCase()} in ${city.toLowerCase()}`,
      `hire ${service.title.toLowerCase()} company in ${city.toLowerCase()}`,
      `best ${service.title.toLowerCase()} near me`,
      `transport services for ${service.title.toLowerCase()} in ${city.toLowerCase()}`,
      `commercial ${service.title.toLowerCase()}`,
      "logistics",
      "transportation"
    ],
    alternates: {
      canonical: `https://www.durgatransportservices.in/services/${serviceSlug}/${citySlug}`,
    },
  }
}

export default async function ServiceCityPage({ params }: PageProps) {
  const resolvedParams = await params
  const serviceSlug = resolvedParams.service
  const citySlug = resolvedParams.city
  
  const service = servicesData.find((s) => s.slug === serviceSlug)
  const city = citiesData.find((c: string) => c.toLowerCase() === citySlug)
  
  if (!service || !city) {
    notFound()
  }

  const schemaData = generateServiceSchema(
    `${service.title} in ${city}`,
    `Professional ${service.title.toLowerCase()} in ${city} by Durga Transport Services India Pvt Ltd.`
  )

  return (
    <div className="flex flex-col w-full bg-white">
      <Schema data={schemaData} />
      
      {/* ═══════════════════════════════════════════ */}
      {/* HERO SECTION                               */}
      {/* ═══════════════════════════════════════════ */}
      <section className="relative w-full py-32 md:py-48 bg-[#0B0B0B] overflow-hidden flex items-center">
        {/* Background Image & Overlays */}
        <div className="absolute inset-0 z-0 opacity-40">
           <Image
            src="/hero/slide-2.png"
            alt={`${service.title} in ${city}`}
            fill
            sizes="100vw"
            className="object-cover grayscale"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-[#0B0B0B] z-0" />
        
        {/* Ambient Glow */}
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-brand-red)]/10 rounded-full blur-[140px] pointer-events-none z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 w-full mt-8">
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-black/40 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[var(--color-brand-red)] animate-pulse" />
                <span className="text-xs font-bold tracking-[0.2em] text-white/95 uppercase">Specialized Service</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-black/40 backdrop-blur-md text-white/90 text-xs font-bold tracking-[0.2em] uppercase">
                <MapPin className="w-3 h-3 text-[var(--color-brand-red)]" />
                {city}
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1]">
              {service.title} <br className="hidden md:block" />
              in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-red)] to-red-500">{city}</span>
            </h1>
            
            <p className="text-lg md:text-2xl text-zinc-300 font-normal leading-relaxed max-w-2xl">
              Premium, reliable, and highly secure {service.title.toLowerCase()} operations scaled for enterprises in {city}.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <Link href="/quote" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[var(--color-brand-red)] text-white font-bold px-8 py-4 rounded-xl text-sm uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_30px_rgba(227,6,19,0.3)]">
                Request Service <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:+919812773410" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 text-white font-bold px-8 py-4 rounded-xl text-sm uppercase tracking-wider border border-white/20 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm">
                <Phone className="w-4 h-4" /> +91 9812773410
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* CONTENT SECTION                            */}
      {/* ═══════════════════════════════════════════ */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Content Area */}
            <div className="lg:col-span-8 space-y-12">
              
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3">
                  <span className="w-8 h-1 bg-[var(--color-brand-red)] rounded-full" />
                  <span className="text-sm font-bold tracking-widest text-zinc-900 uppercase">{service.title} Expertise</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 leading-tight">
                  Industry-Leading {service.title} for {city} Businesses
                </h2>
                <div className="prose prose-lg text-zinc-600 max-w-none">
                  <p className="text-lg leading-relaxed">
                    Durga Transport Services India Pvt Ltd delivers specialized <strong>{service.title.toLowerCase()}</strong> to businesses, manufacturers, and supply chains operating in <strong>{city}</strong>. By integrating modern transport technologies with our deep local operational knowledge, we guarantee seamless cargo movement.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Our robust fleet stationed near {city} allows us to provide rapid deployment and highly scalable logistics. Whether you are shipping raw materials into {city} or distributing finished goods nationwide, our {service.title.toLowerCase()} is built to deliver on time, every time.
                  </p>
                </div>
              </div>

              {/* Key Benefits Grid */}
              <div className="space-y-8 pt-8 border-t border-zinc-100">
                <h3 className="text-2xl font-bold text-zinc-900">Why Choose Us in {city}?</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    { title: "Local Infrastructure", desc: `Deep operational reach and dedicated dispatch hubs located near ${city}.` },
                    { title: "Advanced Fleet", desc: "State-of-the-art, well-maintained vehicles ensuring absolute cargo safety." },
                    { title: "Real-time Visibility", desc: "Live GPS tracking and dedicated enterprise account managers." },
                    { title: "Compliance Assured", desc: `Strict adherence to all regional and national transport regulations in ${city}.` }
                  ].map((benefit, i) => (
                    <div key={i} className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100 hover:border-[var(--color-brand-red)]/30 transition-colors">
                      <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center mb-4">
                        <CheckCircle2 className="w-5 h-5 text-[var(--color-brand-red)]" />
                      </div>
                      <h4 className="text-lg font-bold text-zinc-900 mb-2">{benefit.title}</h4>
                      <p className="text-sm text-zinc-600 leading-relaxed">{benefit.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              
            </div>
            
            {/* Right Sidebar - Sticky Contact & Specs */}
            <div className="lg:col-span-4 space-y-8">
              <div className="sticky top-32 bg-[#1A1A1A] p-8 rounded-3xl text-white shadow-2xl">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                  <Truck className="w-6 h-6 text-[var(--color-brand-red)]" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Book {service.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                  Available directly from our {city} operations center. Get priority routing and tailored pricing.
                </p>
                
                <div className="space-y-4">
                  <Link href="/quote" className="w-full flex items-center justify-between bg-[var(--color-brand-red)] hover:bg-red-700 text-white font-bold px-6 py-4 rounded-xl transition-colors">
                    Request Pricing <ArrowRight className="w-5 h-5" />
                  </Link>
                  <a href="tel:+919812773410" className="w-full flex items-center justify-between bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold px-6 py-4 rounded-xl transition-colors">
                    Talk to Expert <Phone className="w-5 h-5" />
                  </a>
                </div>

                <hr className="border-white/10 my-8" />
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4 text-zinc-300" />
                    </div>
                    <div>
                      <div className="text-xs text-zinc-400 font-semibold uppercase tracking-wider">Availability</div>
                      <div className="font-medium text-sm">24/7 Dispatch in {city}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                      <Shield className="w-4 h-4 text-zinc-300" />
                    </div>
                    <div>
                      <div className="text-xs text-zinc-400 font-semibold uppercase tracking-wider">Assurance</div>
                      <div className="font-medium text-sm">Insured & Tracked</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      
    </div>
  )
}
