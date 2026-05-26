"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { MapPin, ArrowRight, Star, Award, Shield } from "lucide-react"
import citiesData from "../../../data/cities.json"

// Categorizing cities into regional hubs
const regions = {
  "North India": ["Delhi", "Gurugram", "Noida", "Faridabad", "Ghaziabad", "Jaipur", "Lucknow", "Kanpur", "Chandigarh", "Ludhiana", "Amritsar"],
  "West India": ["Mumbai", "Pune", "Nashik", "Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhopal", "Indore"],
  "South & Central India": ["Bangalore", "Chennai", "Hyderabad", "Nagpur"],
  "East India": ["Kolkata", "Patna", "Ranchi"]
}

export default function LocationsPage() {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* Page Hero */}
      <section className="relative w-full py-32 md:py-44 bg-[#0B0B0B] overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src="/hero/relevant-2.png"
            alt="Durga Transport Nationwide Coverage"
            fill
            className="object-cover grayscale"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0B0B0B]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 w-full mt-8">
          <motion.div initial="hidden" animate="visible" className="space-y-4 max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 text-xs font-semibold tracking-[0.2em] text-white/95 uppercase bg-black/40 backdrop-blur-md">
              Pan-India Coverage
            </span>
            <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-white leading-none">
              Operational <span className="text-[var(--color-brand-red)] font-semibold">Hubs & Cities</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-300 font-normal leading-relaxed max-w-2xl">
              Operating across all major expressways, industrial hubs, and commercial corridors with reliable dispatch nodes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Regions Grid Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="space-y-16">
            {Object.entries(regions).map(([regionName, cities], rIdx) => (
              <motion.div
                key={regionName}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: rIdx * 0.1 }}
                className="space-y-6"
              >
                <div className="border-b border-zinc-200 pb-4">
                  <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-brand-red)]" />
                    {regionName}
                  </h2>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {cities.map((cityName) => {
                    const citySlug = cityName.toLowerCase()
                    const isExist = citiesData.find((c: string) => c.toLowerCase() === citySlug)
                    
                    if (!isExist) return null
                    
                    return (
                      <Link
                        key={cityName}
                        href={`/locations/${citySlug}`}
                        className="group flex flex-col justify-between p-5 rounded-2xl border border-zinc-150 bg-white hover:border-[var(--color-brand-red)] hover:shadow-sm transition-all"
                      >
                        <div className="space-y-2">
                          <MapPin className="w-5 h-5 text-zinc-400 group-hover:text-[var(--color-brand-red)] transition-colors" />
                          <h3 className="font-bold text-zinc-900 text-base">{cityName}</h3>
                        </div>
                        <div className="pt-4 flex items-center justify-between text-xs font-semibold text-zinc-500 group-hover:text-[var(--color-brand-red)] transition-colors">
                          <span>View Office</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Network Stats Card */}
      <section className="py-20 bg-zinc-50 border-t border-zinc-150">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { icon: <Star className="w-8 h-8 text-[var(--color-brand-red)]" />, title: "Pan-India Reach", desc: "Serving major metropolitan regions and remote logistics sectors alike." },
              { icon: <Award className="w-8 h-8 text-[var(--color-brand-red)]" />, title: "25+ Major Terminals", desc: "Local corporate offices coordinating active driver tracking and route audits." },
              { icon: <Shield className="w-8 h-8 text-[var(--color-brand-red)]" />, title: "Safe Road Clearances", desc: "Fast-tag enabled fleets ensuring fluid checkpost clearance." }
            ].map((card, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2 max-w-sm mx-auto">
                <div className="p-3 bg-white rounded-2xl shadow-sm border border-zinc-100 mb-2">
                  {card.icon}
                </div>
                <h3 className="font-bold text-zinc-900">{card.title}</h3>
                <p className="text-sm text-zinc-500 font-normal leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-24 bg-[#0B0B0B] relative overflow-hidden text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-brand-red)]/10 rounded-full blur-[160px] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 space-y-6">
          <h2 className="text-3xl md:text-5xl font-medium text-white leading-tight">
            Ready to Dispatch Cargo Nationwide?
          </h2>
          <p className="text-zinc-400 font-normal max-w-xl mx-auto text-sm md:text-base">
            Work with India's most reliable transport systems. Contact our regional logistics representatives to plan shipping channels now.
          </p>
          <div className="flex items-center justify-center gap-4 pt-4">
            <Link href="/quote" className="inline-flex items-center gap-2 bg-[var(--color-brand-red)] text-white font-semibold px-8 py-4 rounded-xl text-sm uppercase tracking-wider hover:bg-red-700 transition-all shadow-lg shadow-red-900/20">
              Get an Operations Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
