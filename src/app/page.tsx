"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { ArrowRight, Truck, Container, CarFront, Warehouse, Shield, Clock, MapPin, Phone, PhoneCall, ChevronDown, CheckCircle2, Users, Headphones, Eye, Award } from "lucide-react"
import servicesData from "../../data/services.json"

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const } })
}

const industries = [
  { name: "Manufacturing", img: "/services/industry_manufacturing.png" },
  { name: "Automobile", img: "/services/industry_automobile.png" },
  { name: "Construction", img: "/services/industry_construction.png" },
  { name: "Infrastructure", img: "/services/industry_construction.png" },
  { name: "Retail & FMCG", img: "/services/storage-facility.png" },
  { name: "Industrial Equipment", img: "/services/industry_manufacturing.png" },
  { name: "Heavy Machinery", img: "/services/industry_automobile.png" },
  { name: "Pharmaceuticals", img: "/services/storage-facility.png" },
]

const faqs = [
  { q: "Do you provide Pan India transportation services?", a: "Yes. Durga Transport Services operates across all major Indian states and union territories. Our logistics network spans 500+ cities ensuring seamless cargo movement nationwide." },
  { q: "What types of trucks are available?", a: "We offer a diverse fleet including open trucks, closed body trucks, trailers, containers, ODC vehicles, tempos, and specialized vehicle carriers to handle every type of cargo." },
  { q: "Is real-time cargo tracking available?", a: "Absolutely. We provide GPS-enabled real-time tracking for all shipments, giving you complete visibility over your cargo from pickup to delivery." },
  { q: "Do you handle ODC (Over Dimensional Cargo)?", a: "Yes. We specialize in ODC transportation with custom trailers, route surveys, and all necessary permits for oversized and heavy cargo movement across India." },
  { q: "What industries do you serve?", a: "We serve manufacturing, automobile, construction, infrastructure, retail, FMCG, pharmaceuticals, and heavy machinery industries with tailored logistics solutions." },
  { q: "Do you provide storage and warehousing?", a: "Yes. We offer secure, climate-appropriate storage facilities at strategic locations across India for short-term and long-term warehousing needs." },
  { q: "How can I request a transport quote?", a: "You can request a free quote through our website, call us at +91 9812773410, or reach us on WhatsApp for instant assistance." },
  { q: "Is your customer support available 24/7?", a: "Yes. Our dedicated support team is available 24 hours a day, 7 days a week to assist with booking, tracking, and any logistics queries." },
  { q: "What safety measures do you follow?", a: "We follow strict safety protocols including vehicle inspection, driver training, cargo insurance, GPS tracking, and compliance with all transport regulations." },
  { q: "Do you provide logistics support for manufacturers?", a: "Yes. We offer end-to-end supply chain solutions for manufacturers including raw material transport, finished goods delivery, and just-in-time logistics." },
  { q: "Can you transport vehicles and cars?", a: "Yes. We have specialized vehicle carriers and car transport services ensuring safe and scratch-free delivery of automobiles across India." },
  { q: "What locations do you cover in North India?", a: "We have strong operations across Delhi, Gurugram, Noida, Faridabad, Jaipur, Chandigarh, Ludhiana, Amritsar, Lucknow, and all NCR regions." },
  { q: "Do you provide container transportation?", a: "Yes. We handle 20ft and 40ft container transportation for import/export cargo, factory shifting, and bulk goods movement across India." },
  { q: "What makes DTS different from other transporters?", a: "Our 25+ years of experience, modern fleet, pan-India network, 24/7 support, transparent pricing, and commitment to on-time delivery sets us apart." },
  { q: "Do you offer freight transportation services?", a: "Yes. We provide comprehensive freight transportation including FTL (Full Truck Load) and PTL (Part Truck Load) services across all routes in India." },
]

const serviceIcons: Record<string, React.ReactNode> = {
  "truck-transportation": <Truck className="w-6 h-6" />,
  "trailer-transportation": <Truck className="w-6 h-6" />,
  "tempo-transportation": <CarFront className="w-6 h-6" />,
  "container-transportation": <Container className="w-6 h-6" />,
  "odc-transportation": <Truck className="w-6 h-6" />,
  "vehicle-transportation": <CarFront className="w-6 h-6" />,
  "car-transportation": <CarFront className="w-6 h-6" />,
  "lorry-transportation": <Truck className="w-6 h-6" />,
  "logistics-services": <MapPin className="w-6 h-6" />,
  "storage-facility": <Warehouse className="w-6 h-6" />,
  "close-body-truck": <Truck className="w-6 h-6" />,
  "freight-transportation": <Container className="w-6 h-6" />,
  "pan-india-logistics": <MapPin className="w-6 h-6" />,
}

const serviceImages: Record<string, string> = {
  "truck-transportation": "/services/truck-transportation.png",
  "trailer-transportation": "/services/trailer-transportation.png",
  "tempo-transportation": "/services/tempo-transportation.png",
  "container-transportation": "/services/container-transportation.png",
  "odc-transportation": "/services/truck-transportation.png", // fallback
  "vehicle-transportation": "/services/vehicle-transportation.png",
  "car-transportation": "/services/car-transportation.png",
  "lorry-transportation": "/services/truck-transportation.png", // fallback
  "logistics-services": "/hero/slide-2.png", // fallback to warehouse aerial
  "storage-facility": "/services/storage-facility.png",
  "close-body-truck": "/services/truck-transportation.png", // fallback
  "freight-transportation": "/services/container-transportation.png", // fallback
  "pan-india-logistics": "/hero/slide-1.png", // fallback to fleet
}

function Counter({ value, decimals = 0, suffix = "" }: { value: number; decimals?: number; suffix?: string }) {
  const ref = React.useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!inView) return
    let start = 0
    const end = value * Math.pow(10, decimals)
    const duration = 2000
    const steps = 50
    const stepValue = Math.ceil(end / steps)
    const stepTime = duration / steps

    const timer = setInterval(() => {
      start += stepValue
      if (start >= end) {
        clearInterval(timer)
        setCount(end)
      } else {
        setCount(start)
      }
    }, stepTime)

    return () => clearInterval(timer)
  }, [inView, value, decimals])

  const displayValue = (count / Math.pow(10, decimals)).toFixed(decimals)

  return <span ref={ref}>{parseFloat(displayValue)}{suffix}</span>
}

const heroSlides = [
  "/hero/relevant-1.png",
  "/hero/relevant-2.png",
  "/hero/relevant-3.png",
]

export default function Home() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(0)
  const [currentSlide, setCurrentSlide] = React.useState(0)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 8000) // Reduced carousel speed
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex flex-col w-full">

      {/* ═══════════════════════════════════════════ */}
      {/* SECTION 01 — HERO                          */}
      {/* ═══════════════════════════════════════════ */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Carousel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1.1 }}
            exit={{ opacity: 0, transition: { duration: 1.5 } }}
            transition={{ 
              opacity: { duration: 1.5, ease: "easeInOut" },
              scale: { duration: 10, ease: "linear" } 
            }}
            className="absolute inset-0 z-0 origin-center"
          >
            <Image
              src={heroSlides[currentSlide]}
              alt="Durga Transport Cinematic Concept"
              fill
              className="object-cover"
              priority
            />
            {/* Cinematic Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/90" />
            <div className="absolute inset-0 bg-black/20" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 pt-48 md:pt-56 pb-20 w-full flex flex-col md:flex-row items-center justify-between">
          <motion.div initial="hidden" animate="visible" className="space-y-5 flex flex-col items-start text-left w-full max-w-3xl">
            
            {/* Elegant Subdued Badge */}
            <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-4 px-6 py-2 rounded-full border border-white/20 text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-white/95 uppercase shadow bg-black/40 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-red)]" />
              ISO 9001:2015 Certified Logistics
            </motion.div>

            {/* Cinematic Headline - Balanced Weight, No Heavy Shadows */}
            <motion.h1 variants={fadeUp} custom={1} className="text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-medium leading-[1.05] tracking-tight text-white">
              Delivering <span className="text-[var(--color-brand-red)] font-semibold">Excellence</span> <br className="hidden sm:block" />
              Across India.
            </motion.h1>

            {/* Relevant Sub-headline */}
            <motion.div variants={fadeUp} custom={2} className="space-y-2 w-full mt-2">
              <p className="text-lg md:text-2xl text-white leading-relaxed font-medium tracking-wide">
                End-to-End Transport, Freight & Supply Chain Logistics.
              </p>
              <p className="text-sm md:text-lg text-white/80 leading-relaxed font-normal max-w-2xl">
                Empowering enterprises with 25+ years of trusted transportation, advanced fleet capabilities, and seamless pan-India connectivity.
              </p>
            </motion.div>

            {/* Minimalist Call to Actions */}
            <motion.div variants={fadeUp} custom={3} className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <Link href="/quote" className="group inline-flex items-center justify-center gap-3 bg-[var(--color-brand-red)] text-white font-semibold px-8 py-3.5 rounded-xl text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300">
                Request Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/services" className="inline-flex items-center justify-center gap-3 text-white font-semibold px-8 py-3.5 rounded-xl text-sm tracking-widest uppercase border border-white/30 bg-white/5 hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-md">
                Discover Services
              </Link>
            </motion.div>
          </motion.div>

          {/* Carousel Progress Navigation */}
          <div className="hidden md:flex flex-col items-end gap-6 w-32 shrink-0">
            {heroSlides.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className="group w-full flex items-center justify-end gap-4"
              >
                <span className={`text-xs font-bold transition-colors ${currentSlide === idx ? "text-white" : "text-white/30"}`}>0{idx + 1}</span>
                <div className="relative w-16 h-1 bg-white/10 rounded-full overflow-hidden">
                  {currentSlide === idx && (
                    <motion.div 
                      key={`progress-${idx}`}
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 8, ease: "linear" }}
                      className="absolute left-0 top-0 bottom-0 bg-[var(--color-brand-red)]"
                    />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* SECTION 1.5 — ENTERPRISE STATS (SEPARATE)  */}
      {/* ═══════════════════════════════════════════ */}
      <section className="relative py-16 bg-[#0B0B0B] border-y border-zinc-900 overflow-hidden">
        {/* Soft glowing ambient spots */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[var(--color-brand-red)]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-zinc-800/20 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 divide-y md:divide-y-0 md:divide-x divide-zinc-800">
            {[
              { value: 25, label: "Years of Excellence", suffix: "+", sub: "Established industry legacy" },
              { value: 500, label: "Cities Connected", suffix: "+", sub: "Robust pan-India network" },
              { value: 1, label: "Million Deliveries", decimals: 1, suffix: "M+", sub: "Secure & on-time shipments" },
            ].map((stat, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="flex flex-col items-center text-center px-4 py-6 md:py-4"
              >
                <div className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-2">
                  <Counter value={stat.value} decimals={stat.decimals || 0} suffix={stat.suffix} />
                </div>
                <div className="text-sm font-semibold text-[var(--color-brand-red)] uppercase tracking-[0.2em] mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-zinc-550 font-light">
                  {stat.sub}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* SECTION 02 — ABOUT DTS                     */}
      {/* ═══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden">
                <Image src="/hero/main-hero.png" alt="About Durga Transport Services" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 gold-accent rounded-2xl flex items-center justify-center shadow-lg">
                <div className="text-center text-white">
                  <div className="text-3xl font-bold">25+</div>
                  <div className="text-xs font-semibold uppercase tracking-wider">Years</div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="space-y-6">
              <span className="section-label">About Durga Transport</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 leading-tight">
                Enterprise Logistics, <br /><span className="text-[var(--color-brand-red)]">Delivered with Excellence</span>
              </h2>
              <p className="text-zinc-500 text-lg leading-relaxed">
                Durga Transport Services India is a trusted logistics and transportation company providing dependable transportation solutions across India. We specialize in truck, trailer, container, ODC, vehicle, tempo, storage, and freight services.
              </p>
              <p className="text-zinc-500 leading-relaxed">
                Our mission is to deliver safe, timely, and cost-effective logistics services while building long-term customer relationships through professionalism and reliability.
              </p>
              <ul className="space-y-3 pt-2">
                {["Nationwide Network Spanning 500+ Cities", "Modern Fleet with GPS Tracking", "24/7 Dedicated Support Team"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-[var(--color-brand-red)] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/about" className="inline-flex items-center gap-2 text-[var(--color-brand-red)] font-bold text-sm hover:gap-3 transition-all duration-300 mt-4">
                Learn More About Us <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* SECTION 03 — SERVICES                      */}
      {/* ═══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-label">Our Services</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 mt-3 mb-4">Comprehensive Logistics Solutions</h2>
            <p className="text-zinc-500 text-lg">End-to-end transportation capabilities engineered for enterprise scale.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.slice(0, 6).map((service, idx) => (
              <motion.div key={service.slug} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={idx % 3}>
                <Link href={`/services/${service.slug}`} className="group block bg-white rounded-2xl border border-zinc-100 hover:border-[var(--color-brand-red)]/20 hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-500 overflow-hidden h-full">
                  <div className="relative w-full aspect-[16/9] overflow-hidden bg-zinc-100">
                    <Image 
                      src={serviceImages[service.slug] || "/hero/slide-1.png"} 
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80 transition-opacity duration-500" />
                    
                    {/* Official Logo Overlay for Branding */}
                    <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm p-2 rounded shadow-sm border border-white/20">
                      <Image src="/logo.png" alt="Durga Transport" width={80} height={24} className="object-contain h-5 w-auto" />
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-zinc-900 mb-2 group-hover:text-[var(--color-brand-red)] transition-colors">{service.title}</h3>
                    <p className="text-base text-zinc-500 line-clamp-2">Reliable and professional {service.title.toLowerCase()} tailored for enterprise scale across India.</p>
                    <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[var(--color-brand-red)]">
                      Explore Service <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link href="/services" className="inline-flex items-center justify-center gap-2 bg-white text-zinc-800 font-bold px-8 py-4 rounded-xl text-base border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50 transition-all duration-300">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* SECTION 04 — FLEET SHOWCASE                 */}
      {/* ═══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-label">Our Fleet</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 mt-3 mb-4">Modern Fleet for Every Need</h2>
            <p className="text-zinc-500 text-lg">A diverse, well-maintained fleet ready for any logistics challenge.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Heavy Trucks", img: "/services/truck-transportation.png" },
              { name: "Flatbed Trailers", img: "/services/trailer-transportation.png" },
              { name: "Container Carriers", img: "/services/container-transportation.png" },
              { name: "Tempo Delivery", img: "/services/tempo-transportation.png" },
              { name: "Vehicle Carriers", img: "/services/vehicle-transportation.png" },
              { name: "ODC Fleet", img: "/hero/slide-1.png" },
            ].map((vehicle, idx) => (
              <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={idx % 3} className="group relative rounded-2xl overflow-hidden bg-zinc-100 aspect-[4/3] cursor-pointer">
                <Image src={vehicle.img} alt={vehicle.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Official Logo Overlay */}
                <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm p-2 rounded shadow-sm border border-white/20">
                  <Image src="/logo.png" alt="Durga Transport" width={100} height={30} className="object-contain h-6 w-auto" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
                  <h3 className="text-xl font-bold text-white">{vehicle.name}</h3>
                  <p className="text-sm text-white/70 mt-1">DURGA TRANSPORT SERVICES</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* SECTION 05 — INDUSTRIES                    */}
      {/* ═══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-label">Industries We Serve</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 mt-3 mb-4">Tailored for Every Sector</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((ind, idx) => (
              <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={idx % 4} className="group relative bg-white rounded-2xl overflow-hidden border border-zinc-100 hover:border-[var(--color-brand-red)]/20 hover:shadow-xl transition-all duration-300 aspect-[4/5] cursor-pointer">
                <Image src={ind.img} alt={ind.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />
                <div className="absolute bottom-0 left-0 right-0 z-20 p-5 text-center">
                  <h3 className="text-base md:text-lg font-bold text-white tracking-wide">{ind.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* SECTION 06 — WHY CHOOSE DTS                */}
      {/* ═══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[var(--color-brand-gold)] text-xs font-bold tracking-[0.25em] uppercase">Why Choose DTS</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">The DTS Advantage</h2>
            <p className="text-zinc-400 text-lg">What makes us India's most trusted logistics partner.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Headphones className="w-6 h-6" />, title: "24/7 Support", desc: "Round-the-clock dedicated support for all your logistics needs." },
              { icon: <MapPin className="w-6 h-6" />, title: "Pan India Coverage", desc: "Operations spanning 500+ cities across every major Indian state." },
              { icon: <Shield className="w-6 h-6" />, title: "Safe & Insured", desc: "Comprehensive cargo insurance and GPS-tracked secure transport." },
              { icon: <Users className="w-6 h-6" />, title: "Expert Team", desc: "25+ years of logistics expertise and industry-trained professionals." },
              { icon: <Eye className="w-6 h-6" />, title: "Full Transparency", desc: "Real-time tracking, clear pricing, and proactive communication." },
              { icon: <Award className="w-6 h-6" />, title: "Enterprise Grade", desc: "Solutions built for India's largest manufacturers and enterprises." },
            ].map((item, idx) => (
              <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={idx % 3} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors duration-300">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-brand-red)] text-white flex items-center justify-center mb-5">{item.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* SECTION 07 — FAQ                           */}
      {/* ═══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <span className="section-label">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mt-3 mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-zinc-100 rounded-2xl overflow-hidden bg-zinc-50/50">
                <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className="w-full text-left flex items-center justify-between p-5 md:p-6 gap-4">
                  <span className="text-base font-semibold text-zinc-800">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-zinc-400 shrink-0 transition-transform duration-300 ${openFaq === idx ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                      <div className="px-5 md:px-6 pb-5 md:pb-6 text-zinc-500 text-sm leading-relaxed border-t border-zinc-100 pt-4">{faq.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* SECTION 08 — LEAD GENERATION CTA            */}
      {/* ═══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-[var(--color-brand-red)] via-[#B01A1A] to-[#8B1515] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">Ready to Move Your Freight?</h2>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10">Get a competitive quote in minutes. Our logistics experts are standing by to optimize your supply chain.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/quote" className="inline-flex items-center gap-2 bg-white text-[var(--color-brand-red)] font-bold px-8 py-4 rounded-xl text-base hover:bg-zinc-100 transition-all duration-300 shadow-xl">
              Request Transport Quote <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="tel:+919812773410" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-bold px-8 py-4 rounded-xl text-base border border-white/20 hover:bg-white/20 transition-all duration-300">
              <PhoneCall className="w-5 h-5" /> +91 9812773410
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}

