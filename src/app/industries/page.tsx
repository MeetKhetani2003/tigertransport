"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Factory, Car, Building2, HardHat, ShoppingCart, Drill, Truck, Stethoscope } from "lucide-react"
import industriesData from "../../../data/industries.json"

const industryIcons: Record<string, React.ReactNode> = {
  "manufacturing": <Factory className="w-8 h-8 text-[var(--color-brand-red)]" />,
  "automobile": <Car className="w-8 h-8 text-[var(--color-brand-red)]" />,
  "construction": <Building2 className="w-8 h-8 text-[var(--color-brand-red)]" />,
  "infrastructure": <HardHat className="w-8 h-8 text-[var(--color-brand-red)]" />,
  "retail-fmcg": <ShoppingCart className="w-8 h-8 text-[var(--color-brand-red)]" />,
  "industrial-equipment": <Drill className="w-8 h-8 text-[var(--color-brand-red)]" />,
  "heavy-machinery": <Truck className="w-8 h-8 text-[var(--color-brand-red)]" />,
  "pharmaceuticals": <Stethoscope className="w-8 h-8 text-[var(--color-brand-red)]" />
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

export default function IndustriesPage() {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* Page Hero */}
      <section className="relative w-full py-32 md:py-44 bg-[#0B0B0B] overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src="/Industries/infrastructure.jpeg"
            alt="Durga Transport Services India Pvt Ltd Industries"
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
              Industry Expertise
            </span>
            <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-white leading-none">
              Industries <span className="text-[var(--color-brand-red)] font-semibold">We Serve</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-300 font-normal leading-relaxed max-w-2xl">
              Specialized logistics solutions powering the core sectors of the Indian economy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industriesData.map((industry, idx) => {
              const icon = industryIcons[industry.slug] || <Factory className="w-8 h-8 text-[var(--color-brand-red)]" />
              const img = industryImages[industry.slug] || "/hero/slide-1.png"
              
              return (
                <motion.div
                  key={industry.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-zinc-150 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="relative w-full aspect-[16/10] bg-zinc-100 overflow-hidden">
                    <Image
                      src={img}
                      alt={industry.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow justify-between gap-4">
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-zinc-900 group-hover:text-[var(--color-brand-red)] transition-colors">
                        {industry.title}
                      </h3>
                      <p className="text-zinc-650 text-sm leading-relaxed font-normal">
                        Enterprise-grade logistics tailored precisely for the {industry.title.toLowerCase()} sector across India.
                      </p>
                    </div>
                    
                    <div className="pt-4 mt-auto border-t border-zinc-100 flex items-center justify-between">
                      <Link
                        href={`/industries/${industry.slug}`}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-brand-red)] hover:text-red-700 transition-colors shrink-0"
                      >
                        Explore Sector
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                      <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest truncate ml-4">Enterprise Supply</span>
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
        <div className="relative z-10 max-w-3xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Scale Your Industry Operations</h2>
          <p className="text-zinc-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Partner with us to build a robust, scalable, and highly efficient supply chain for your sector.
          </p>
          <Link href="/quote" className="inline-flex items-center justify-center gap-2 bg-[var(--color-brand-red)] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-red-700 transition-colors shadow-[0_0_40px_rgba(227,6,19,0.3)]">
            Request an Industry Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
