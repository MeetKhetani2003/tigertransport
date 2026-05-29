import React from "react"
import Link from "next/link"
import Image from "next/image"
import { MapPin, ArrowRight, Star, Award, Shield, CheckCircle2 } from "lucide-react"
import citiesData from "../../../data/cities.json"

export default function LocationsPage() {
  // Group cities alphabetically
  const groupedCities: Record<string, string[]> = {}
  
  citiesData.forEach((city: string) => {
    const firstLetter = city.charAt(0).toUpperCase()
    if (!groupedCities[firstLetter]) {
      groupedCities[firstLetter] = []
    }
    groupedCities[firstLetter].push(city)
  })

  // Sort the keys (A-Z)
  const sortedLetters = Object.keys(groupedCities).sort()

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Page Hero */}
      <section className="relative w-full py-32 md:py-48 bg-[#0B0B0B] overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="/hero/slide-2.png"
            alt="Durga Transport Services India Pvt Ltd Nationwide Coverage"
            fill
            sizes="100vw"
            className="object-cover grayscale"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#0B0B0B] z-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[var(--color-brand-red)]/20 rounded-full blur-[120px] pointer-events-none z-0" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 w-full mt-8">
          <div className="space-y-6 max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 text-xs font-bold tracking-[0.2em] text-white/95 uppercase bg-black/40 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[var(--color-brand-red)] animate-pulse" />
              Pan-India Coverage
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
              Operational <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-red)] to-red-500">Hubs & Cities</span>
            </h1>
            <p className="text-lg md:text-2xl text-zinc-300 font-normal leading-relaxed max-w-2xl">
              Operating across {citiesData.length} major expressways, industrial hubs, and commercial corridors with reliable dispatch nodes.
            </p>
          </div>
        </div>
      </section>

      {/* Network Stats Card */}
      <section className="py-16 md:py-24 bg-white relative -mt-10 z-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <Star className="w-6 h-6 text-[var(--color-brand-red)]" />, title: "Pan-India Reach", desc: `Serving ${citiesData.length} active metropolitan and remote logistics sectors across the nation.` },
              { icon: <Award className="w-6 h-6 text-[var(--color-brand-red)]" />, title: "24/7 Terminals", desc: "Local corporate dispatch hubs coordinating active driver tracking and route audits." },
              { icon: <Shield className="w-6 h-6 text-[var(--color-brand-red)]" />, title: "Safe Road Clearances", desc: "Fast-tag enabled GPS fleets ensuring fluid checkpost clearance and security." }
            ].map((card, idx) => (
              <div key={idx} className="flex flex-col p-8 bg-zinc-50 rounded-3xl border border-zinc-100 hover:border-[var(--color-brand-red)]/30 hover:shadow-xl hover:shadow-red-500/5 transition-all duration-300">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-zinc-100 flex items-center justify-center mb-6">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-3">{card.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* A-Z Grid Section */}
      <section className="py-24 bg-zinc-50 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 tracking-tight">Our Transport Network</h2>
            <p className="text-lg text-zinc-500">Explore all {citiesData.length} locations where our modern fleet currently operates.</p>
          </div>
          
          <div className="space-y-16">
            {sortedLetters.map((letter) => {
              const cities = groupedCities[letter]
              return (
                <div key={letter} className="scroll-mt-32" id={`letter-${letter}`}>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-[var(--color-brand-red)] text-white font-bold text-2xl rounded-2xl flex items-center justify-center shadow-lg shadow-red-900/20 shrink-0">
                      {letter}
                    </div>
                    <div className="h-[1px] w-full bg-zinc-200" />
                  </div>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                    {cities.map((cityName) => {
                      const citySlug = cityName.toLowerCase()
                      
                      return (
                        <Link
                          key={cityName}
                          href={`/locations/${citySlug}`}
                          className="group flex flex-col justify-center px-5 py-4 rounded-2xl border border-zinc-200 bg-white hover:border-[var(--color-brand-red)] hover:shadow-lg hover:shadow-red-500/10 transition-all duration-300"
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <MapPin className="w-4 h-4 text-zinc-400 group-hover:text-[var(--color-brand-red)] transition-colors shrink-0" />
                            <h3 className="font-bold text-zinc-900 text-sm truncate">{cityName}</h3>
                          </div>
                          <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-zinc-400 group-hover:text-[var(--color-brand-red)] transition-colors">
                            <span>Services</span>
                            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </Link>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-[#1A1A1A] to-[#0B0B0B] text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[var(--color-brand-red)]/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 space-y-8">
          <div className="w-16 h-16 bg-[var(--color-brand-red)] rounded-2xl flex items-center justify-center mx-auto shadow-2xl shadow-red-900/50 mb-6">
            <CheckCircle2 className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            Ready to Dispatch Cargo <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-red)] to-red-500">Nationwide?</span>
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 font-normal max-w-2xl mx-auto">
            Work with India's most reliable transport network. Contact our regional logistics representatives to plan shipping channels now.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Link href="/quote" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[var(--color-brand-red)] text-white font-bold px-10 py-5 rounded-xl text-sm uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_40px_rgba(227,6,19,0.3)]">
              Get an Operations Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
