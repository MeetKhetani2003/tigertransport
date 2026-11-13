"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Shield, Settings, Truck, Clipboard, ArrowRight } from "lucide-react"

const fleetCategories = [
  {
    name: "Heavy Flatbed & Lowbed Trailers",
    capacity: "20 to 55 Metric Tons",
    usage: "ODC cargo, construction iron, heavy factory machinery, steel coils, and boiler tanks.",
    image: "/fleet/Heavy Flatbed & Lowbed Trailers Fleet.jpeg",
    spec: "Multi-axle mechanical/pneumatic suspension systems, custom tiedowns, and standard GPS setups."
  },
  {
    name: "Standard & High-Cube Containers",
    capacity: "15 to 30 Metric Tons",
    usage: "FMCG shipments, consumer appliances, export containers, clean raw materials, and electronics.",
    image: "/fleet/Standard & High Cube Container Fleet.jpeg",
    spec: "Fully sealed 20ft & 40ft structures with lock rods, weatherproof builds, and tamperproof sensors."
  },
  {
    name: "Close Body & Weatherproof Trucks",
    capacity: "7 to 16 Metric Tons",
    usage: "Pharmaceuticals, high-value commercial chemicals, textiles, and auto parts.",
    image: "/fleet/waterproof closebody fleet.jpeg",
    spec: "Rigid steel/aluminum composite cabins, double lock rear gates, and shock absorption setups."
  },
  {
    name: "Intra-City Tempos & Small Carriers",
    capacity: "1 to 5 Metric Tons",
    usage: "Last mile retail supply, domestic household shifts, and urban warehouse transfers.",
    image: "/fleet/intercity fleet.jpeg",
    spec: "Sleek turning radii, direct city permit clearances, and standard loading ramps."
  }
]

export default function FleetPage() {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* Page Hero */}
      <section className="relative w-full py-32 md:py-44 bg-[#0B0B0B] overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src="/hero/relevant-3.png"
            alt="Durga Transport Services India Pvt Ltd Carrier Fleet"
            fill
            className="object-cover grayscale"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0B0B0B]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 w-full mt-8">
          <motion.div initial="hidden" animate="visible" className="space-y-4 max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 text-xs font-semibold tracking-[0.2em] text-white/95 uppercase bg-black/40 backdrop-blur-md">
              High Capacity Carriers
            </span>
            <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-white leading-none">
              Durga Transport Services India Pvt Ltd <span className="text-[var(--color-brand-red)] font-semibold">Active Fleet</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-300 font-normal leading-relaxed max-w-2xl">
              Equipped with modern specifications, safety equipment, and GPS tracking to handle every logistics requirement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Fleet Listing Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="space-y-16">
            {fleetCategories.map((category, idx) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className={`relative aspect-[16/10] w-full rounded-3xl overflow-hidden border border-zinc-150 shadow-sm ${idx % 2 === 1 ? "lg:order-last" : ""}`}>
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover hover:scale-102 transition-transform duration-500"
                  />
                </div>
                
                <div className="space-y-6">
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-[var(--color-brand-red)] uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full">
                      Payload: {category.capacity}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 mt-2">
                      {category.name}
                    </h2>
                  </div>
                  
                  <div className="space-y-4 text-zinc-650 text-base leading-relaxed font-normal">
                    <div className="flex items-start gap-3">
                      <Settings className="w-5 h-5 text-[var(--color-brand-red)] shrink-0 mt-1" />
                      <div>
                        <strong className="text-zinc-800 font-bold block">Vehicle Specs:</strong>
                        {category.spec}
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Clipboard className="w-5 h-5 text-[var(--color-brand-red)] shrink-0 mt-1" />
                      <div>
                        <strong className="text-zinc-800 font-bold block">Primary Logistics Use:</strong>
                        {category.usage}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-zinc-50 border-t border-zinc-100 text-center">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-3 gap-8">
          {[
            { title: "GPS Integrated Fleet", desc: "Every truck is tracked in real-time, sending automated delay updates." },
            { title: "ISO 9001:2015 Standards", desc: "Rigorous mechanical audits, routine brake checks, and driver verification." },
            { title: "Insured Transit Operations", desc: "Comprehensive cargo protection, minimizing risk profiles for heavy loads." }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center gap-2 max-w-sm mx-auto">
              <Shield className="w-8 h-8 text-[var(--color-brand-red)] mb-2" />
              <h3 className="font-bold text-zinc-900">{item.title}</h3>
              <p className="text-sm text-zinc-500 font-normal">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA section */}
      <section className="py-24 bg-[#0B0B0B] relative overflow-hidden text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-brand-red)]/10 rounded-full blur-[160px] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 space-y-6">
          <h2 className="text-3xl md:text-5xl font-medium text-white leading-tight">
            Schedule Your Commercial Fleet Load
          </h2>
          <p className="text-zinc-400 font-normal max-w-xl mx-auto text-sm md:text-base">
            Work with India's premier transport enterprise. Connect with our dispatch managers to reserve standard containers or trailers now.
          </p>
          <div className="flex items-center justify-center gap-4 pt-4">
            <Link href="/quote" className="inline-flex items-center gap-2 bg-[var(--color-brand-red)] text-white font-semibold px-8 py-4 rounded-xl text-sm uppercase tracking-wider hover:bg-red-700 transition-all shadow-lg shadow-red-900/20">
              Request Fleet Booking
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
