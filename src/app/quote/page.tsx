"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ClipboardList, ArrowRight, CheckCircle2, ShieldAlert } from "lucide-react"
import citiesData from "../../../data/cities.json"

export default function QuotePage() {
  const [formData, setFormData] = React.useState({
    cargoType: "truck-transportation",
    origin: "Delhi",
    destination: "Mumbai",
    weight: "",
    businessName: "",
    phone: "",
    email: ""
  })
  
  const [success, setSuccess] = React.useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSuccess(true)
    setTimeout(() => {
      setSuccess(false)
      setFormData({
        cargoType: "truck-transportation",
        origin: "Delhi",
        destination: "Mumbai",
        weight: "",
        businessName: "",
        phone: "",
        email: ""
      })
    }, 5500)
  }

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Page Hero */}
      <section className="relative w-full py-32 md:py-44 bg-[#0B0B0B] overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src="/hero/relevant-2.png"
            alt="Request Transport Quote"
            fill
            className="object-cover grayscale"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0B0B0B]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 w-full mt-8">
          <motion.div initial="hidden" animate="visible" className="space-y-4 max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 text-xs font-semibold tracking-[0.2em] text-white/95 uppercase bg-black/40 backdrop-blur-md">
              Instant Pricing Estimate
            </span>
            <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-white leading-none">
              Request a <span className="text-[var(--color-brand-red)] font-semibold">Logistics Quote</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-300 font-normal leading-relaxed max-w-2xl">
              Specify your origin, destination, and cargo weight to receive a highly detailed corporate freight estimate immediately.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quote Planner Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="bg-white p-8 md:p-12 rounded-3xl border border-zinc-150 shadow-sm relative">
            
            <div className="flex items-center gap-3 border-b border-zinc-150 pb-6 mb-8">
              <div className="p-3 bg-red-50 rounded-xl text-[var(--color-brand-red)]">
                <ClipboardList className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-medium text-zinc-900">Freight Transport Planner</h2>
                <p className="text-xs text-zinc-500 font-normal">Complete the planning details below to submit a priority request.</p>
              </div>
            </div>

            {success ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 border border-green-200 text-green-800 p-8 rounded-2xl flex flex-col items-center justify-center text-center gap-4"
              >
                <CheckCircle2 className="w-16 h-16 text-green-600 animate-bounce" />
                <div>
                  <h3 className="font-bold text-xl mb-1">Logistics Inquiry Dispatched</h3>
                  <p className="text-sm text-green-650 font-normal leading-relaxed">
                    Our pricing desk is actively calculating the optimal freight routes, fuel costs, and driver allowances for your shipment from <strong>{formData.origin} to {formData.destination}</strong>.
                    <br />
                    A regional operational manager will contact you on <strong>{formData.phone}</strong> shortly.
                  </p>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Cargo Type Selection */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-550 uppercase tracking-wider block">Logistics Operation Type</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[
                      { slug: "truck-transportation", label: "Full Truck Load" },
                      { slug: "container-transportation", label: "Container Cargo" },
                      { slug: "odc-transportation", label: "ODC Heavy Carrier" },
                      { slug: "trailer-transportation", label: "Flatbed Trailer" }
                    ].map((item) => (
                      <button
                        key={item.slug}
                        type="button"
                        onClick={() => setFormData({ ...formData, cargoType: item.slug })}
                        className={`p-4 rounded-xl border text-xs font-bold transition-all text-center ${
                          formData.cargoType === item.slug
                            ? "border-[var(--color-brand-red)] bg-red-50 text-[var(--color-brand-red)]"
                            : "border-zinc-200 text-zinc-700 bg-white hover:bg-zinc-50"
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Origin & Destination */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label htmlFor="origin" className="text-xs font-bold text-zinc-550 uppercase tracking-wider">Origin City</label>
                    <select
                      id="origin"
                      required
                      value={formData.origin}
                      onChange={(e) => setFormData({ ...formData, origin: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-zinc-950 font-medium text-sm focus:outline-none focus:border-[var(--color-brand-red)] transition-colors bg-white cursor-pointer"
                    >
                      {citiesData.map((city) => (
                        <option key={city} value={city}>{city}</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="destination" className="text-xs font-bold text-zinc-550 uppercase tracking-wider">Destination City</label>
                    <select
                      id="destination"
                      required
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-zinc-950 font-medium text-sm focus:outline-none focus:border-[var(--color-brand-red)] transition-colors bg-white cursor-pointer"
                    >
                      {citiesData.map((city) => (
                        <option key={city} value={city}>{city}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Weight & Enterprise Details */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label htmlFor="weight" className="text-xs font-bold text-zinc-550 uppercase tracking-wider">Cargo Weight (Metric Tons)</label>
                    <input
                      type="number"
                      id="weight"
                      required
                      min="1"
                      max="1000"
                      value={formData.weight}
                      onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-zinc-900 font-medium text-sm focus:outline-none focus:border-[var(--color-brand-red)] transition-colors"
                      placeholder="e.g. 24"
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="businessName" className="text-xs font-bold text-zinc-550 uppercase tracking-wider">Enterprise Name</label>
                    <input
                      type="text"
                      id="businessName"
                      required
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-zinc-900 font-medium text-sm focus:outline-none focus:border-[var(--color-brand-red)] transition-colors"
                      placeholder="e.g. Durga Manufacturing Pvt LTD"
                    />
                  </div>
                </div>

                {/* Contact coordinates */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label htmlFor="phone" className="text-xs font-bold text-zinc-550 uppercase tracking-wider">Mobile Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-zinc-900 font-medium text-sm focus:outline-none focus:border-[var(--color-brand-red)] transition-colors"
                      placeholder="e.g. +91 98127 XXXXX"
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="email" className="text-xs font-bold text-zinc-550 uppercase tracking-wider">Operational Email Address</label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-zinc-900 font-medium text-sm focus:outline-none focus:border-[var(--color-brand-red)] transition-colors"
                      placeholder="e.g. name@company.com"
                    />
                  </div>
                </div>

                {/* Trust Information Disclaimer */}
                <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-150 flex gap-3 text-zinc-500">
                  <ShieldAlert className="w-5 h-5 text-zinc-400 shrink-0 mt-0.5" />
                  <p className="text-xs leading-relaxed font-normal">
                    Durga Transport Services India Pvt Ltd values privacy. Your corporate information is solely used to construct logistics schedules, routing options, and freight price proposals. No data is shared with outer commercial directories.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[var(--color-brand-red)] text-white font-semibold py-4 rounded-xl text-sm uppercase tracking-widest hover:bg-red-700 transition-all shadow-md hover:shadow-lg"
                >
                  Generate Estimate
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
