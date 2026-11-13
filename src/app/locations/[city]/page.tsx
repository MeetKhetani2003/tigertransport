import React from "react"
import { notFound } from "next/navigation"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MapPin, Truck, Shield, Clock, Phone, ChevronRight, CheckCircle2 } from "lucide-react"
import { Schema, generateLocalBusinessSchema } from "@/components/seo/Schema"
import citiesData from "../../../../data/cities.json"
import servicesData from "../../../../data/services.json"

interface PageProps {
  params: Promise<{ city: string }>
}

export async function generateStaticParams() {
  return citiesData.map((city: string) => ({
    city: city.toLowerCase(),
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params
  const citySlug = resolvedParams.city
  const city = citiesData.find((c: string) => c.toLowerCase() === citySlug)
  
  if (!city) return {}
  
  return {
    title: `Top Transport Company in ${city} | Logistics Services | Durga Transport Services`,
    description: `Looking for reliable transport services in ${city}? Durga Transport Services India Pvt Ltd offers premium logistics, truck transportation, and freight solutions in ${city}.`,
    keywords: [
      `transport company in ${city.toLowerCase()}`,
      `logistics services in ${city.toLowerCase()}`,
      `freight forwarder ${city.toLowerCase()}`,
      `top transporters in ${city.toLowerCase()}`,
      `truck booking ${city.toLowerCase()}`,
      `cargo movement ${city.toLowerCase()}`
    ],
    alternates: {
      canonical: `https://www.durgatransport.com/locations/${citySlug}`,
    },
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

const serviceDescriptions: Record<string, string> = {
  "truck-transportation": "Full and part truck load carrier operations across key express highway networks nationwide.",
  "trailer-transportation": "Heavy payload flatbed and lowbed trailer transport for heavy machinery, steel, and industrial raw cargo.",
  "tempo-transportation": "Sleek intra-city distribution using micro-tempos and small commercial vehicles for instant retail supply.",
  "container-transportation": "Secured 20ft and 40ft high-cube container movement for factory shifts, imports, and exports.",
  "odc-transportation": "Expert transit management for massive, oversized, and bulk industrial structures with safety clearances.",
  "vehicle-transportation": "Premium commercial vehicle relocations and bulk auto shipping across specialized carrier setups.",
  "car-transportation": "Scratch-free domestic car shipping utilizing fully covered single or multiple vehicle carriers.",
  "lorry-transportation": "Traditional and rigid open lorry carrier bookings for agriculture, manufacturing, and raw construction loads.",
  "logistics-services": "Automated and highly integrated supply chain management from cargo dispatching to final destination.",
  "storage-facility": "Sleek climate-controlled safe storage hubs strategically situated near industrial corridors.",
  "close-body-truck": "Weatherproof and fully sealed transport keeping valuable goods secure from external elements.",
  "freight-transportation": "High-volume business freight distribution across bulk raw or processed commercial shipments.",
  "pan-india-logistics": "Comprehensive logistical connectivity mapping over 500+ cities with real-time transit reports.",
}

const fleetCategories = [
  {
    name: "Flatbed Trailers",
    capacity: "20-55 Tons",
    usage: "ODC cargo, heavy machinery",
    image: "/fleet/Heavy Flatbed & Lowbed Trailers Fleet.jpeg",
  },
  {
    name: "High-Cube Containers",
    capacity: "15-30 Tons",
    usage: "FMCG, export containers",
    image: "/fleet/Standard & High Cube Container Fleet.jpeg",
  },
  {
    name: "Close Body Trucks",
    capacity: "7-16 Tons",
    usage: "Pharma, high-value chemicals",
    image: "/fleet/waterproof closebody fleet.jpeg",
  },
  {
    name: "Intra-City Tempos",
    capacity: "1-5 Tons",
    usage: "Retail supply, city shifts",
    image: "/fleet/intercity fleet.jpeg",
  }
]

export default async function CityPage({ params }: PageProps) {
  const resolvedParams = await params
  const citySlug = resolvedParams.city
  const city = citiesData.find((c: string) => c.toLowerCase() === citySlug)
  
  if (!city) {
    notFound()
  }

  const schemaData = generateLocalBusinessSchema(city)

  return (
    <div className="flex flex-col w-full bg-white">
      <Schema data={schemaData} />
      
      {/* ═══════════════════════════════════════════ */}
      {/* PAGE HERO                                  */}
      {/* ═══════════════════════════════════════════ */}
      <section className="relative w-full py-32 md:py-48 bg-[#0B0B0B] overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0 opacity-40">
           <Image
            src="/hero/main-hero.png"
            alt={`Transport Services in ${city}`}
            fill
            sizes="100vw"
            className="object-cover grayscale"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-[#0B0B0B] z-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[var(--color-brand-red)]/20 rounded-full blur-[120px] pointer-events-none z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 w-full mt-8">
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-black/40 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[var(--color-brand-red)] animate-pulse" />
              <span className="text-xs font-bold tracking-[0.2em] text-white/95 uppercase">Regional Operations</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1]">
              Premier Transport <br className="hidden md:block" />
              Company in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-red)] to-red-500">{city}</span>
            </h1>
            
            <p className="text-lg md:text-2xl text-zinc-300 font-normal leading-relaxed max-w-2xl">
              Enterprise-grade logistics and freight movement tailored for businesses operating in and around {city}.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <Link href="/quote" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[var(--color-brand-red)] text-white font-bold px-8 py-4 rounded-xl text-sm uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300">
                Book Transport <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:+919812773410" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 text-white font-bold px-8 py-4 rounded-xl text-sm uppercase tracking-wider border border-white/20 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm">
                <Phone className="w-4 h-4" /> +91 9812773410
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* ABOUT BRANCH                               */}
      {/* ═══════════════════════════════════════════ */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
            <div className="inline-flex items-center justify-center gap-3">
              <span className="w-8 h-1 bg-[var(--color-brand-red)] rounded-full" />
              <span className="text-sm font-bold tracking-widest text-zinc-900 uppercase">About Our {city} Branch</span>
              <span className="w-8 h-1 bg-[var(--color-brand-red)] rounded-full" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 leading-tight">
              Driving Supply Chain Excellence in {city}
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed">
              Durga Transport Services India Pvt Ltd brings its 25+ years of nationwide logistics expertise directly to <strong>{city}</strong>. We provide localized supply chain solutions backed by our massive pan-India infrastructure, ensuring your cargo moves faster, safer, and more efficiently.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <MapPin className="w-6 h-6" />, title: "Local Presence", desc: "Strategically located dispatch hubs." },
              { icon: <Shield className="w-6 h-6" />, title: "100% Insured", desc: "Complete protection for high-value cargo." },
              { icon: <Clock className="w-6 h-6" />, title: "24/7 Dispatch", desc: "Round-the-clock vehicle availability." },
              { icon: <CheckCircle2 className="w-6 h-6" />, title: "ISO 9001:2015", desc: "Certified quality management operations." }
            ].map((feature, i) => (
              <div key={i} className="flex flex-col items-center text-center p-8 rounded-3xl bg-zinc-50 border border-zinc-100 hover:border-[var(--color-brand-red)]/30 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-red-50 text-[var(--color-brand-red)] flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h4 className="font-bold text-zinc-900 mb-2">{feature.title}</h4>
                <span className="text-sm text-zinc-500">{feature.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* SERVICES GRID                              */}
      {/* ═══════════════════════════════════════════ */}
      <section className="py-24 bg-zinc-50 border-y border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 tracking-tight">Our Services in {city}</h2>
            <p className="text-lg text-zinc-500">Comprehensive logistics solutions utilizing our massive fleet network.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => {
              const img = serviceImages[service.slug] || "/hero/slide-1.png"
              const desc = serviceDescriptions[service.slug] || "Professional logistics solution."
              
              return (
                <div
                  key={service.slug}
                  className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-zinc-200 shadow-sm hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-500"
                >
                  <div className="relative w-full aspect-[16/10] bg-zinc-100 overflow-hidden">
                    <Image
                      src={img}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-[0.16,1,0.3,1]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  
                  <div className="p-8 flex flex-col flex-grow justify-between gap-6">
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-zinc-900 group-hover:text-[var(--color-brand-red)] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-zinc-500 text-sm leading-relaxed font-normal">
                        {desc}
                      </p>
                    </div>
                    
                    <div className="pt-6 mt-auto border-t border-zinc-100 flex items-center justify-between">
                      <Link
                        href={`/services/${service.slug}/${citySlug}`}
                        className="inline-flex items-center gap-2 text-sm font-bold text-zinc-900 hover:text-[var(--color-brand-red)] transition-colors"
                      >
                        Explore Service
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                      <span className="text-[10px] font-bold text-[var(--color-brand-red)] uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full">
                        {city} Hub
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* FLEET GRID                                 */}
      {/* ═══════════════════════════════════════════ */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 tracking-tight">Active Fleet in {city}</h2>
              <p className="text-lg text-zinc-500">Deploying a diverse range of modern, GPS-enabled transport vehicles to meet every payload requirement.</p>
            </div>
            <Link href="/fleet" className="inline-flex items-center justify-center gap-2 bg-zinc-900 hover:bg-[var(--color-brand-red)] text-white font-bold px-6 py-3.5 rounded-xl text-sm uppercase tracking-wider transition-colors shrink-0">
              View All Fleet <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {fleetCategories.map((fleet, idx) => (
              <div 
                key={idx} 
                className="group relative bg-zinc-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-500 aspect-[4/5] cursor-pointer border border-zinc-200"
              >
                <Image
                  src={fleet.image}
                  alt={fleet.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-[0.16,1,0.3,1]"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10 opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-[var(--color-brand-red)]/10 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />

                <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20">
                  <span className="text-[10px] font-bold text-white tracking-widest uppercase shadow-sm">
                    {fleet.capacity}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 z-20 p-6 md:p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="w-8 h-1 bg-[var(--color-brand-red)] mb-4 rounded-full transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out shadow-[0_0_8px_rgba(255,0,0,0.6)]" />
                  <h3 className="text-xl font-bold text-white tracking-wide mb-1">{fleet.name}</h3>
                  <p className="text-xs text-white/70 mt-2 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    Best for: {fleet.usage}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* ═══════════════════════════════════════════ */}
      {/* FULL WIDTH CTA                             */}
      {/* ═══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-[#1A1A1A] to-[#0B0B0B] text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-brand-red)]/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 space-y-8">
          <div className="w-16 h-16 bg-[var(--color-brand-red)] rounded-2xl flex items-center justify-center mx-auto shadow-2xl shadow-red-900/50 mb-6">
            <Truck className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            Ready to Move Your Cargo <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-red)] to-red-500">From {city}?</span>
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 font-normal max-w-2xl mx-auto">
            Get priority dispatch, real-time tracking, and highly competitive pricing for all your enterprise transport needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Link href="/quote" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[var(--color-brand-red)] text-white font-bold px-10 py-5 rounded-xl text-sm uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_40px_rgba(227,6,19,0.3)]">
              Request a Custom Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="tel:+919812773410" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 text-white font-bold px-10 py-5 rounded-xl text-sm uppercase tracking-wider border border-white/20 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm">
              <Phone className="w-4 h-4" /> Speak with Sales
            </a>
          </div>
        </div>
      </section>
      
    </div>
  )
}
