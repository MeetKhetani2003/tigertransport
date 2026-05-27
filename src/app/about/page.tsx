"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Shield, Users, Clock, Award, ArrowRight } from "lucide-react"

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" } })
}

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* Page Hero */}
      <section className="relative w-full py-32 md:py-44 bg-[#0B0B0B] overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src="/hero/relevant-2.png"
            alt="About Durga Transport Services India Pvt Ltd"
            fill
            className="object-cover grayscale"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0B0B0B]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 w-full mt-8">
          <motion.div initial="hidden" animate="visible" className="space-y-4 max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 text-xs font-semibold tracking-[0.2em] text-white/95 uppercase bg-black/40 backdrop-blur-md">
              Our Legacy & Journey
            </span>
            <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-white leading-none">
              About <span className="text-[var(--color-brand-red)] font-semibold">Durga Transport Services India Pvt Ltd</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-300 font-normal leading-relaxed max-w-2xl">
              Pioneering enterprise logistics with 25+ years of trust, dedicated carrier fleet, and nationwide connectivity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Legacy Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-zinc-100">
                <Image src="/hero/relevant-1.png" alt="Durga Transport Services India Pvt Ltd Express Route" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-[var(--color-brand-red)] rounded-2xl flex flex-col items-center justify-center shadow-lg p-4">
                <div className="text-4xl font-bold text-white tracking-tight">25+</div>
                <div className="text-[10px] font-bold text-zinc-100 uppercase tracking-widest text-center mt-1">Years of Trust</div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <span className="text-sm font-semibold text-[var(--color-brand-red)] uppercase tracking-[0.2em]">Our History</span>
              <h2 className="text-3xl md:text-4xl font-medium text-zinc-900 leading-tight">
                An Unwavering Commitment <br />to India's Supply Chain
              </h2>
              <p className="text-base md:text-lg text-zinc-600 leading-relaxed font-normal">
                Established over two decades ago, Durga Transport Services India Pvt Ltd started with a clear vision: to redefine reliability in transport and logistics. Today, we are proud to stand as one of India's most trusted logistics partners, managing national supply networks for blue-chip corporations and growing enterprises alike.
              </p>
              <p className="text-zinc-600 leading-relaxed font-normal">
                We believe that modern businesses need more than just carrier space; they need a proactive, responsive, and accountable supply chain partner. That is why we invest in our own advanced fleet, real-time GPS tracking systems, and automated operations to guarantee consistent, safe, and on-time transit every single time.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Corporate Mission & Pillars */}
      <section className="py-20 bg-zinc-50 border-y border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-sm font-semibold text-[var(--color-brand-red)] uppercase tracking-[0.2em]">Our Principles</span>
            <h2 className="text-3xl md:text-4xl font-medium text-zinc-900">What Drives Us</h2>
            <p className="text-zinc-500 font-normal">Our operations are rooted in these core principles to ensure elite logistical delivery.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8 text-[var(--color-brand-red)]" />,
                title: "Safety & Compliance",
                desc: "Every container, load, and transport job is fully insured and managed using strictly verified transit protocols and verified drivers."
              },
              {
                icon: <Users className="w-8 h-8 text-[var(--color-brand-red)]" />,
                title: "Customer First Focus",
                desc: "We assign dedicated account representatives to manage and streamline communication, reporting, and transit optimization for you."
              },
              {
                icon: <Award className="w-8 h-8 text-[var(--color-brand-red)]" />,
                title: "Operational Excellence",
                desc: "From complex Over Dimensional Cargo (ODC) to seamless full truckload freight, we execute every shipment with precise engineering."
              }
            ].map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-zinc-100 shadow-sm flex flex-col items-start gap-4 hover:shadow-md transition-shadow"
              >
                <div className="p-3 bg-red-50 rounded-xl">
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-bold text-zinc-900">{pillar.title}</h3>
                <p className="text-zinc-650 text-sm leading-relaxed font-normal">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-24 bg-[#0B0B0B] relative overflow-hidden text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-brand-red)]/10 rounded-full blur-[160px] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 space-y-6">
          <h2 className="text-3xl md:text-5xl font-medium text-white leading-tight">
            Ready to Optimize Your Logistics?
          </h2>
          <p className="text-zinc-400 font-normal max-w-xl mx-auto text-sm md:text-base">
            Work with India's premium transport and distribution enterprise. Let's arrange your fleet movement securely and seamlessly.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/quote" className="inline-flex items-center gap-2 bg-[var(--color-brand-red)] text-white font-semibold px-8 py-4 rounded-xl text-sm uppercase tracking-wider hover:bg-red-700 transition-all shadow-lg shadow-red-900/20">
              Get an Instant Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl text-sm uppercase tracking-wider hover:bg-white/10 transition-all">
              Contact Logistics Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
