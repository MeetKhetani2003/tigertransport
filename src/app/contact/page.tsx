"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock, Send, ShieldCheck } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  })
  
  const [submitted, setSubmitted] = React.useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", email: "", phone: "", company: "", message: "" })
    }, 4000)
  }

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Page Hero */}
      <section className="relative w-full py-32 md:py-44 bg-[#0B0B0B] overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src="/hero/relevant-1.png"
            alt="Contact Durga Transport Services India Pvt Ltd"
            fill
            className="object-cover grayscale"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0B0B0B]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 w-full mt-8">
          <motion.div initial="hidden" animate="visible" className="space-y-4 max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 text-xs font-semibold tracking-[0.2em] text-white/95 uppercase bg-black/40 backdrop-blur-md">
              24/7 Operations Hub
            </span>
            <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-white leading-none">
              Contact <span className="text-[var(--color-brand-red)] font-semibold">Logistics Team</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-300 font-normal leading-relaxed max-w-2xl">
              Get in touch with our corporate logistics office or regional dispatch coordinates immediately.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Grid Contact & Details */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            {/* Contact coordinates */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <span className="text-sm font-semibold text-[var(--color-brand-red)] uppercase tracking-[0.2em]">Coordinates</span>
                <h2 className="text-3xl font-medium text-zinc-900">Let's Keep In Touch</h2>
                <p className="text-zinc-500 font-normal">Connect with our support desks for booking help, transit delays, or enterprise pricing.</p>
              </div>
              
              <div className="space-y-6">
                {[
                  { icon: <Phone className="w-5 h-5 text-[var(--color-brand-red)]" />, label: "Phone Hotline", val: "+91 9812773410", link: "tel:+919812773410" },
                  { icon: <Mail className="w-5 h-5 text-[var(--color-brand-red)]" />, label: "Email Queries", val: "info@durgatransport.com", link: "mailto:info@durgatransport.com" },
                  { icon: <MapPin className="w-5 h-5 text-[var(--color-brand-red)]" />, label: "Corporate HQ", val: "Durga Transport Services India Pvt Ltd, Transport Nagar, Delhi NCR, India", link: "#" },
                  { icon: <Clock className="w-5 h-5 text-[var(--color-brand-red)]" />, label: "Office Timings", val: "24 Hours Operational Dispatch (Pan India)", link: "#" }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-5 rounded-2xl border border-zinc-150 bg-zinc-50 hover:bg-zinc-50/50 transition-colors">
                    <div className="p-3 bg-white rounded-xl shadow-sm border border-zinc-100 shrink-0">
                      {item.icon}
                    </div>
                    <div className="space-y-1">
                      <div className="text-xs text-zinc-400 font-bold uppercase tracking-wider">{item.label}</div>
                      {item.link !== "#" ? (
                        <a href={item.link} className="font-bold text-zinc-900 hover:text-[var(--color-brand-red)] transition-colors block text-base md:text-lg">
                          {item.val}
                        </a>
                      ) : (
                        <span className="font-bold text-zinc-900 block text-base md:text-lg">{item.val}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Premium Flat Contact Form */}
            <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-3xl border border-zinc-150">
              <div className="space-y-2 mb-8">
                <h3 className="text-2xl font-medium text-zinc-900">Send an Operation Inquiry</h3>
                <p className="text-sm text-zinc-500 font-normal">Our dispatch desks reply within 15 minutes during standard operational slots.</p>
              </div>

              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-2xl flex flex-col items-center justify-center text-center gap-3"
                >
                  <ShieldCheck className="w-12 h-12 text-green-600 animate-bounce" />
                  <h4 className="font-bold text-lg">Inquiry Sent Successfully</h4>
                  <p className="text-sm text-green-650 font-normal">Your logistics inquiry has been dispatched to our central planning department. A regional supervisor will contact you shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-1">
                      <label htmlFor="name" className="text-xs font-bold text-zinc-550 uppercase tracking-wider">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-zinc-900 font-medium text-sm focus:outline-none focus:border-[var(--color-brand-red)] transition-colors"
                        placeholder="e.g. Rahul Sharma"
                      />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="email" className="text-xs font-bold text-zinc-550 uppercase tracking-wider">Email Address</label>
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

                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-1">
                      <label htmlFor="phone" className="text-xs font-bold text-zinc-550 uppercase tracking-wider">Contact Phone</label>
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
                      <label htmlFor="company" className="text-xs font-bold text-zinc-550 uppercase tracking-wider">Enterprise Name</label>
                      <input
                        type="text"
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-zinc-900 font-medium text-sm focus:outline-none focus:border-[var(--color-brand-red)] transition-colors"
                        placeholder="e.g. Durga Manufacturing Pvt LTD"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="message" className="text-xs font-bold text-zinc-550 uppercase tracking-wider">Logistics Requirements</label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-zinc-900 font-medium text-sm focus:outline-none focus:border-[var(--color-brand-red)] transition-colors resize-none"
                      placeholder="Please specify source, destination, cargo type, and approximate payload weight."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-[var(--color-brand-red)] text-white font-semibold py-4 rounded-xl text-sm uppercase tracking-widest hover:bg-red-700 transition-all shadow-md hover:shadow-lg"
                  >
                    Submit Operation Request
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
