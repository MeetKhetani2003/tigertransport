"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Truck, Container, CarFront, Warehouse, MapPin, ArrowRight, Shield, Clock } from "lucide-react"
import servicesData from "../../../data/services.json"

const serviceIcons: Record<string, React.ReactNode> = {
  "truck-transportation": <Truck className="w-8 h-8 text-[var(--color-brand-red)]" />,
  "trailer-transportation": <Truck className="w-8 h-8 text-[var(--color-brand-red)]" />,
  "tempo-transportation": <CarFront className="w-8 h-8 text-[var(--color-brand-red)]" />,
  "container-transportation": <Container className="w-8 h-8 text-[var(--color-brand-red)]" />,
  "odc-transportation": <Truck className="w-8 h-8 text-[var(--color-brand-red)]" />,
  "vehicle-transportation": <CarFront className="w-8 h-8 text-[var(--color-brand-red)]" />,
  "car-transportation": <CarFront className="w-8 h-8 text-[var(--color-brand-red)]" />,
  "lorry-transportation": <Truck className="w-8 h-8 text-[var(--color-brand-red)]" />,
  "logistics-services": <MapPin className="w-8 h-8 text-[var(--color-brand-red)]" />,
  "storage-facility": <Warehouse className="w-8 h-8 text-[var(--color-brand-red)]" />,
  "close-body-truck": <Truck className="w-8 h-8 text-[var(--color-brand-red)]" />,
  "freight-transportation": <Container className="w-8 h-8 text-[var(--color-brand-red)]" />,
  "pan-india-logistics": <MapPin className="w-8 h-8 text-[var(--color-brand-red)]" />,
}

const serviceImages: Record<string, string> = {
  "truck-transportation": "/services/truck-transportation.png",
  "trailer-transportation": "/services/trailer-transportation.png",
  "tempo-transportation": "/services/tempo-transportation.png",
  "container-transportation": "/services/container-transportation.png",
  "odc-transportation": "/services/odc-transportation.png", 
  "vehicle-transportation": "/services/vehicle-transportation.png",
  "car-transportation": "/services/car-transportation.png",
  "lorry-transportation": "/services/lorry-transportation.png", 
  "logistics-services": "/services/logistics-services.png", 
  "storage-facility": "/services/storage-facility.png",
  "close-body-truck": "/services/close-body-truck.png", 
  "freight-transportation": "/services/container-transportation.png", 
  "pan-india-logistics": "/services/pan-india-logistics.png", 
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

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* Page Hero */}
      <section className="relative w-full py-32 md:py-44 bg-[#0B0B0B] overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src="/hero/relevant-1.png"
            alt="Durga Transport Services India Pvt Ltd Fleet"
            fill
            sizes="100vw"
            className="object-cover grayscale"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0B0B0B]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 w-full mt-8">
          <motion.div initial="hidden" animate="visible" className="space-y-4 max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 text-xs font-semibold tracking-[0.2em] text-white/95 uppercase bg-black/40 backdrop-blur-md">
              Enterprise Solutions
            </span>
            <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-white leading-none">
              Our <span className="text-[var(--color-brand-red)] font-semibold">Logistics Services</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-300 font-normal leading-relaxed max-w-2xl">
              Reliable, secure, and fully verified fleet solutions customized for your exact supply chain operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, idx) => {
              const icon = serviceIcons[service.slug] || <Truck className="w-8 h-8 text-[var(--color-brand-red)]" />
              const img = serviceImages[service.slug] || "/hero/relevant-1.png"
              const desc = serviceDescriptions[service.slug] || "Professional logistics solution."
              
              return (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-zinc-150 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="relative w-full aspect-[16/10] bg-zinc-100 overflow-hidden">
                    <Image
                      src={img}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 p-3 bg-white/90 backdrop-blur rounded-xl shadow-md z-10">
                      {icon}
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow justify-between gap-4">
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-zinc-900 group-hover:text-[var(--color-brand-red)] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-zinc-650 text-sm leading-relaxed font-normal">
                        {desc}
                      </p>
                    </div>
                    
                    <div className="pt-2 border-t border-zinc-100 flex items-center justify-between">
                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-800 hover:text-[var(--color-brand-red)] transition-colors"
                      >
                        View Details
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                      <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Durga Transport Services India Pvt Ltd Cargo</span>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-24 bg-[#0B0B0B] relative overflow-hidden text-center border-t border-zinc-900">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-brand-red)]/10 rounded-full blur-[160px] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 space-y-6">
          <h2 className="text-3xl md:text-5xl font-medium text-white leading-tight">
            Need Custom Fleet Movements?
          </h2>
          <p className="text-zinc-400 font-normal max-w-xl mx-auto text-sm md:text-base">
            Whether you require dedicated container transportation or reliable full truck loads, our dispatch network is standing by to manage your cargo securely.
          </p>
          <div className="flex items-center justify-center gap-4 pt-4">
            <Link href="/quote" className="inline-flex items-center gap-2 bg-[var(--color-brand-red)] text-white font-semibold px-8 py-4 rounded-xl text-sm uppercase tracking-wider hover:bg-red-700 transition-all shadow-lg shadow-red-900/20">
              Request Customized Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
