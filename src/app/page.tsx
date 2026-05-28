"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { ArrowRight, Truck, Container, CarFront, Warehouse, Shield, Clock, MapPin, Phone, PhoneCall, ChevronDown, CheckCircle2, Users, Headphones, Eye, Award, Star, Quote } from "lucide-react"
import servicesData from "../../data/services.json"

const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: (i: number) => ({ 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { delay: i * 0.15, duration: 1, ease: [0.16, 1, 0.3, 1] } 
  })
}

const industries = [
  { name: "Manufacturing", img: "/Industries/Manufacturing.jpeg" },
  { name: "Automobile", img: "/Industries/automobile.jpeg" },
  { name: "Construction", img: "/Industries/Construction Industry.jpeg" },
  { name: "Infrastructure", img: "/Industries/infrastructure.jpeg" },
  { name: "Retail & FMCG", img: "/Industries/retail distribution.jpeg" },
  { name: "Industrial Equipment", img: "/Industries/Industrial equipement.jpeg" },
  { name: "Heavy Machinery", img: "/Industries/Heavy Machinery Industry.jpeg" },
  { name: "Pharmaceuticals", img: "/Industries/pharma.jpeg" },
]

const faqs = [
  { q: "Do you provide Pan India transportation services?", a: "Yes. Durga Transport Services India Pvt Ltd operates across all major Indian states and union territories. Our logistics network spans 500+ cities ensuring seamless cargo movement nationwide." },
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
  { q: "What makes Durga Transport Services India Pvt Ltd different from other transporters?", a: "Our 25+ years of experience, modern fleet, pan-India network, 24/7 support, transparent pricing, and commitment to on-time delivery sets us apart." },
  { q: "Do you offer freight transportation services?", a: "Yes. We provide comprehensive freight transportation including FTL (Full Truck Load) and PTL (Part Truck Load) services across all routes in India." },
]

const testimonials = [
  {
    name: "Rajesh Kumar",
    company: "Tata Motors Supplier",
    review: "Durga Transport has been our primary logistics partner for over 5 years. Their fleet reliability and on-time delivery across India is unmatched. Highly recommended for heavy machinery transport.",
    rating: 5
  },
  {
    name: "Amit Sharma",
    company: "Reliance Infrastructure",
    review: "We rely on Durga Transport for moving our ODC cargo and construction materials. Their team is extremely professional and their real-time tracking gives us complete peace of mind.",
    rating: 5
  },
  {
    name: "Sneha Patel",
    company: "Gujarat Pharma Co.",
    review: "Their close body trucks are perfect for our sensitive pharmaceutical shipments. We have never faced any issues with weather damage or delays. Truly a 5-star enterprise logistics company.",
    rating: 5
  },
  {
    name: "Vikram Singh",
    company: "Automotive Logistics Group",
    review: "We moved a fleet of 50 cars from Delhi to Bangalore. Durga Transport's car carriers delivered them without a single scratch. Best transport service in India without a doubt.",
    rating: 5
  }
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
  "freight-transportation": "/services/freight service.jpeg", // fallback
  "pan-india-logistics": "/services/pan india.jpeg",
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
  {
    image: "/services/pan india.jpeg",
    badge: "Pan India Supply Chain",
    title1: "Delivering ",
    highlight: "Excellence",
    title2: " Across India.",
    subtitle: "End-to-End Transport, Freight & Supply Chain Logistics.",
    description: "Empowering enterprises with 25+ years of trusted transportation, advanced fleet capabilities, and seamless pan-India connectivity.",
    cta1: { text: "Request Quote", link: "/quote" },
    cta2: { text: "Discover Services", link: "/services" }
  },
  {
    image: "/services/container transportation.jpeg",
    badge: "Container Freight Transit",
    title1: "Secure ",
    highlight: "Container",
    title2: " Logistics.",
    subtitle: "Seamless Export & Import Container Movement.",
    description: "Optimized 20ft and 40ft container transportation services engineered for industrial freight, FMCG, and heavy commercial goods.",
    cta1: { text: "Book Container", link: "/quote" },
    cta2: { text: "View Details", link: "/services/container-transportation" }
  },
  {
    image: "/services/odc transportation.jpeg",
    badge: "Over Dimensional Cargo",
    title1: "Specialized ",
    highlight: "ODC",
    title2: " Transport.",
    subtitle: "Heavy Machinery & Structural Freight Solutions.",
    description: "Expert transit management for massive, oversized industrial structures with comprehensive route surveys and safety clearances.",
    cta1: { text: "Consult Expert", link: "/quote" },
    cta2: { text: "ODC Services", link: "/services/odc-transportation" }
  },
  {
    image: "/fleet/Heavy Flatbed & Lowbed Trailers Fleet.jpeg",
    badge: "Advanced Transport Fleet",
    title1: "Modern ",
    highlight: "Flatbed",
    title2: " Trailers.",
    subtitle: "High-Capacity Payload Carriers for Industrial Sectors.",
    description: "Equipped with multi-axle pneumatic suspensions and real-time GPS tracking to handle 50+ metric ton loads securely.",
    cta1: { text: "Hire Trailer", link: "/quote" },
    cta2: { text: "Explore Fleet", link: "/fleet" }
  },
  {
    image: "/fleet/waterproof closebody fleet.jpeg",
    badge: "Secure Cargo Transit",
    title1: "Weatherproof ",
    highlight: "Close Body",
    title2: " Trucks.",
    subtitle: "100% Sealed & Safe Transportation Fleet.",
    description: "Ideal for pharmaceuticals, electronics, and high-value chemical transportation requiring absolute protection from the elements.",
    cta1: { text: "Book Truck", link: "/quote" },
    cta2: { text: "View Fleet Specs", link: "/fleet" }
  },
  {
    image: "/Industries/Manufacturing.jpeg",
    badge: "Manufacturing Logistics",
    title1: "Enterprise ",
    highlight: "Supply Chain",
    title2: " Solutions.",
    subtitle: "End-to-End Logistics for Manufacturing.",
    description: "Streamlined raw material inbound and finished goods logistics tailored for India's largest manufacturing plants.",
    cta1: { text: "Get Proposal", link: "/quote" },
    cta2: { text: "Our Services", link: "/services" }
  },
  {
    image: "/Industries/automobile.jpeg",
    badge: "Automobile Transportation",
    title1: "Reliable ",
    highlight: "Auto Carrier",
    title2: " Fleet.",
    subtitle: "Zero-Damage Vehicle Shipping Nationwide.",
    description: "Premium commercial vehicle relocations and bulk auto shipping across specialized multi-vehicle carrier setups.",
    cta1: { text: "Move Vehicles", link: "/quote" },
    cta2: { text: "Auto Transport", link: "/services/vehicle-transportation" }
  }
]

export default function Home() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(0)
  const [currentSlide, setCurrentSlide] = React.useState(0)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 15000) // Slower carousel speed for readability
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex flex-col w-full">

      {/* ═══════════════════════════════════════════ */}
      {/* SECTION 01 — HERO                          */}
      {/* ═══════════════════════════════════════════ */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Background Carousel */}
        <AnimatePresence>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)", transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 z-0 origin-center"
          >
            <Image
              src={heroSlides[currentSlide].image}
              alt={`${heroSlides[currentSlide].badge} - ${heroSlides[currentSlide].highlight}`}
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
            {/* Cinematic Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/90" />
            <div className="absolute inset-0 bg-black/20" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 pt-48 md:pt-56 pb-20 w-full flex flex-col md:flex-row items-center justify-between">
          <AnimatePresence mode="wait">
            <motion.div key={currentSlide} initial="hidden" animate="visible" exit={{ opacity: 0, y: -40, filter: "blur(8px)", transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }} className="space-y-5 flex flex-col items-start text-left w-full max-w-3xl">

              {/* Elegant Subdued Badge */}
              <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-4 px-6 py-2 rounded-full border border-white/20 text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-white/95 uppercase shadow bg-black/40 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-red)]" />
                {heroSlides[currentSlide].badge}
              </motion.div>

              {/* Cinematic Headline - Balanced Weight, No Heavy Shadows */}
              <motion.h1 variants={fadeUp} custom={1} className="text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-medium leading-[1.05] tracking-tight text-white">
                {heroSlides[currentSlide].title1} <span className="text-transparent font-bold" style={{ WebkitTextStroke: "2px rgba(255,255,255,0.9)" }}>{heroSlides[currentSlide].highlight}</span> <br className="hidden sm:block" />
                {heroSlides[currentSlide].title2}
              </motion.h1>

              {/* Relevant Sub-headline */}
              <motion.div variants={fadeUp} custom={2} className="space-y-2 w-full mt-2">
                <p className="text-lg md:text-2xl text-white leading-relaxed font-medium tracking-wide">
                  {heroSlides[currentSlide].subtitle}
                </p>
                <p className="text-sm md:text-lg text-white/80 leading-relaxed font-normal max-w-2xl">
                  {heroSlides[currentSlide].description}
                </p>
              </motion.div>

              {/* Minimalist Call to Actions */}
              <motion.div variants={fadeUp} custom={3} className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                <Link href={heroSlides[currentSlide].cta1.link} className="group inline-flex items-center justify-center gap-3 bg-[var(--color-brand-red)] text-white font-semibold px-8 py-3.5 rounded-xl text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300">
                  {heroSlides[currentSlide].cta1.text}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href={heroSlides[currentSlide].cta2.link} className="inline-flex items-center justify-center gap-3 text-white font-semibold px-8 py-3.5 rounded-xl text-sm tracking-widest uppercase border border-white/30 bg-white/5 hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-md">
                  {heroSlides[currentSlide].cta2.text}
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Progress Navigation */}
          <div className="hidden md:flex flex-col items-end gap-6 w-32 shrink-0">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className="group w-full flex items-center justify-end gap-4"
                aria-label={`View slide ${idx + 1}: ${heroSlides[idx].title1}${heroSlides[idx].highlight}`}
                aria-current={currentSlide === idx ? "true" : "false"}
              >
                <span className={`text-xs font-bold transition-colors ${currentSlide === idx ? "text-white" : "text-white/60"}`}>0{idx + 1}</span>
                <div className="relative w-16 h-1 bg-white/20 rounded-full overflow-hidden">
                  {currentSlide === idx && (
                    <motion.div
                      key={`progress-${idx}`}
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 15, ease: "linear" }}
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
      <section className="pt-24 md:pt-32 pb-12 md:pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }} className="relative">
              {/* Decorative Background Elements */}
              <div className="absolute -inset-4 bg-zinc-50 rounded-[2.5rem] -z-10 transform rotate-2" />
              <div className="absolute -inset-4 bg-[var(--color-brand-red)]/5 rounded-[2.5rem] -z-10 transform -rotate-2" />
              
              <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl shadow-zinc-200/50 border-[6px] border-white">
                <Image
                  src="/hero/main-hero.png"
                  alt="About Durga Transport Services India Pvt Ltd"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover hover:scale-105 transition-transform duration-1000 ease-out"
                />
              </div>
              
              {/* Modern Floating Trust Card */}
              <div className="absolute -bottom-6 right-4 sm:-right-8 bg-white/95 backdrop-blur-xl p-5 rounded-2xl shadow-2xl shadow-zinc-200/50 border border-zinc-100 flex items-center gap-4">
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center shrink-0 text-[var(--color-brand-red)]">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-bold text-zinc-900">100% Reliable</div>
                  <div className="text-xs font-medium text-zinc-500">Trusted Logistics Partner</div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="space-y-6 md:pl-8">
              <div className="inline-flex items-center gap-3">
                <span className="w-8 h-1 bg-[var(--color-brand-red)] rounded-full" />
                <span className="text-sm font-bold tracking-widest text-[var(--color-brand-red)] uppercase">About Durga Transport Services India Pvt Ltd</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 leading-[1.15] tracking-tight">
                Enterprise Logistics, <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-red)] to-red-600">Delivered with Excellence</span>
              </h2>
              
              <div className="pl-6 border-l-4 border-[var(--color-brand-red)]">
                <p className="text-zinc-600 text-lg leading-relaxed font-medium">
                  Durga Transport Services India Pvt Ltd is a trusted logistics and transportation company providing dependable transportation solutions across India. We specialize in truck, trailer, container, ODC, vehicle, tempo, storage, and freight services.
                </p>
              </div>
              
              <p className="text-zinc-500 text-base leading-relaxed">
                Our mission is to deliver safe, timely, and cost-effective logistics services while building long-term customer relationships through professionalism and reliability.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                {["Nationwide Network Spanning 500+ Cities", "Modern Fleet with GPS Tracking", "24/7 Dedicated Support Team"].map((item, i) => (
                  <div key={i} className={`flex items-start gap-3 p-4 rounded-2xl bg-zinc-50 border border-zinc-100 ${i === 2 ? "sm:col-span-2 sm:w-1/2" : ""}`}>
                    <CheckCircle2 className="w-5 h-5 text-[var(--color-brand-red)] shrink-0 mt-0.5" />
                    <span className="text-zinc-700 font-semibold text-sm leading-snug">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="pt-6">
                <Link href="/about" className="group inline-flex items-center justify-center gap-3 bg-zinc-900 text-white font-semibold px-8 py-4 rounded-xl text-sm hover:bg-[var(--color-brand-red)] transition-all duration-300 shadow-lg hover:shadow-red-500/20">
                  Learn More About Us <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* SECTION 03 — SERVICES                      */}
      {/* ═══════════════════════════════════════════ */}
      <section className="pt-12 md:pt-16 pb-12 md:pb-16 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-label">Our Services</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 mt-3 mb-4">Comprehensive Logistics Solutions</h2>
            <p className="text-zinc-500 text-lg">End-to-end transportation capabilities engineered for enterprise scale.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, idx) => (
              <motion.div key={service.slug} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={idx % 3}>
                <Link href={`/services/${service.slug}`} className="group relative flex flex-col bg-white rounded-3xl overflow-hidden border border-zinc-150 shadow-sm hover:shadow-xl hover:shadow-red-500/10 hover:-translate-y-1 transition-all duration-500 h-full">
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-zinc-100">
                    <Image
                      src={serviceImages[service.slug] || "/hero/slide-1.png"}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                    
                    {/* Floating Icon */}
                    <div className="absolute top-4 right-4 z-20 w-12 h-12 bg-white/95 backdrop-blur-md rounded-2xl flex items-center justify-center text-[var(--color-brand-red)] shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                      {serviceIcons[service.slug] || <Truck className="w-6 h-6" />}
                    </div>
                    
                    <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center gap-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                      <span className="text-[10px] font-bold text-white uppercase tracking-widest bg-[var(--color-brand-red)] px-3 py-1.5 rounded-full">
                        Enterprise Grade
                      </span>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow justify-between">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-zinc-900 mb-3 group-hover:text-[var(--color-brand-red)] transition-colors">{service.title}</h3>
                      <p className="text-zinc-500 text-sm leading-relaxed font-normal">Reliable and professional {service.title.toLowerCase()} tailored for enterprise scale across India.</p>
                    </div>
                    
                    <div className="mt-8 pt-4 border-t border-zinc-100 flex items-center justify-between">
                      <span className="inline-flex items-center gap-2 text-sm font-bold text-zinc-800 group-hover:text-[var(--color-brand-red)] transition-colors">
                        Explore Service <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                      </span>
                      <div className="w-8 h-8 rounded-full bg-zinc-50 flex items-center justify-center group-hover:bg-red-50 transition-colors">
                         <span className="text-[10px] text-zinc-400 group-hover:text-[var(--color-brand-red)] font-bold">
                           {String(idx + 1).padStart(2, '0')}
                         </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>


        </div>
      </section>

      <section className="pt-12 md:pt-16 pb-24 md:pb-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-label">Our Fleet</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 mt-3 mb-4 tracking-tight">Modern Fleet for Every Need</h2>
            <p className="text-zinc-500 text-lg leading-relaxed">A diverse, well-maintained enterprise fleet ready for any logistics challenge.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { name: "Flatbed Trailers", img: "/fleet/Heavy Flatbed & Lowbed Trailers Fleet.jpeg" },
              { name: "High-Cube Containers", img: "/fleet/Standard & High Cube Container Fleet.jpeg" },
              { name: "Close Body Trucks", img: "/fleet/waterproof closebody fleet.jpeg" },
              { name: "Intra-City Tempos", img: "/fleet/intercity fleet.jpeg" },
            ].map((vehicle, idx) => (
              <motion.div 
                key={idx} 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true }} 
                variants={fadeUp} 
                custom={idx % 3} 
                className="group relative bg-zinc-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-500 aspect-[4/3] cursor-pointer border border-zinc-200/50"
              >
                <Image
                  src={vehicle.img}
                  alt={vehicle.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-[0.16,1,0.3,1]"
                />
                
                {/* Elegant Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10 opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
                
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-[var(--color-brand-red)]/10 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />

                {/* Top Action Icon */}
                <div className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className="w-4 h-4 text-white -rotate-45" />
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-0 left-0 right-0 z-20 p-6 md:p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="w-8 h-1 bg-[var(--color-brand-red)] mb-4 rounded-full transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out shadow-[0_0_8px_rgba(255,0,0,0.6)]" />
                  <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide">{vehicle.name}</h3>
                  <p className="text-xs font-semibold text-white/60 mt-2 tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    DURGA TRANSPORT
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
             <Link href="/fleet" className="inline-flex items-center justify-center gap-3 bg-zinc-900 text-white font-semibold px-8 py-4 rounded-xl text-sm hover:bg-[var(--color-brand-red)] hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300 uppercase tracking-widest">
               Explore Full Fleet Capabilities <ArrowRight className="w-4 h-4" />
             </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* SECTION 05 — INDUSTRIES                    */}
      {/* ═══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-zinc-50 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-label">Industries We Serve</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 mt-3 mb-4">Tailored for Every Sector</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {industries.map((ind, idx) => (
              <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={idx % 4} className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-red-500/15 transition-all duration-500 aspect-[4/5] cursor-pointer border border-zinc-100">
                <Image
                  src={ind.img}
                  alt={ind.name}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-[0.16,1,0.3,1]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10 opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className="w-3 h-3 text-white -rotate-45" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 z-20 p-5 md:p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="w-8 h-1 bg-[var(--color-brand-red)] mb-4 rounded-full transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />
                  <h3 className="text-base md:text-xl font-bold text-white tracking-wide">{ind.name}</h3>
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
            <span className="text-[var(--color-brand-gold)] text-xs font-bold tracking-[0.25em] uppercase">Why Choose Durga Transport Services India Pvt Ltd</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">The Durga Transport Services India Pvt Ltd Advantage</h2>
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
      {/* SECTION 07 — TESTIMONIALS                   */}
      {/* ═══════════════════════════════════════════ */}
      <section className="py-24 bg-zinc-50 border-t border-zinc-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6 mb-16 text-center">
          <span className="section-label">Client Reviews</span>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mt-3 mb-4">Trusted by Industry Leaders</h2>
          <p className="text-zinc-500 text-lg">See what our enterprise partners say about our logistics services.</p>
        </div>
        
        {/* CSS-only infinite marquee */}
        <div className="relative w-full flex overflow-hidden">
          {/* Fading Edges */}
          <div className="absolute top-0 left-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-zinc-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-zinc-50 to-transparent z-10 pointer-events-none" />
          
          <motion.div 
            className="flex gap-6 md:gap-8 px-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              ease: "linear",
              duration: 30, // Adjust speed
              repeat: Infinity 
            }}
          >
            {/* Double the array for seamless infinite scroll */}
            {[...testimonials, ...testimonials].map((testimonial, idx) => (
              <div 
                key={idx} 
                className="w-[320px] md:w-[400px] shrink-0 bg-white p-8 rounded-3xl shadow-sm border border-zinc-100 flex flex-col gap-6"
              >
                <div className="flex text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-zinc-600 leading-relaxed italic relative">
                  <Quote className="absolute -top-4 -left-4 w-10 h-10 text-zinc-100 -z-10 rotate-180" />
                  "{testimonial.review}"
                </p>
                <div className="mt-auto pt-6 border-t border-zinc-100 flex items-center gap-4">
                  <div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center font-bold text-zinc-400 text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900">{testimonial.name}</h4>
                    <span className="text-xs font-semibold text-[var(--color-brand-red)] tracking-widest uppercase">{testimonial.company}</span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* SECTION 07.5 — FAQ                           */}
      {/* ═══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <span className="section-label">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mt-3 mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-zinc-100 rounded-2xl overflow-hidden bg-zinc-50/50 h-fit">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)} 
                  className="w-full text-left flex items-start justify-between p-5 md:p-6 gap-4"
                  aria-expanded={openFaq === idx}
                  aria-controls={`faq-answer-${idx}`}
                  id={`faq-button-${idx}`}
                >
                  <span className="text-base font-semibold text-zinc-800 pt-0.5">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-zinc-400 shrink-0 transition-transform duration-300 ${openFaq === idx ? "rotate-180" : ""}`} aria-hidden="true" />
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div 
                      id={`faq-answer-${idx}`}
                      role="region"
                      aria-labelledby={`faq-button-${idx}`}
                      initial={{ height: 0, opacity: 0 }} 
                      animate={{ height: "auto", opacity: 1 }} 
                      exit={{ height: 0, opacity: 0 }} 
                      transition={{ duration: 0.3 }} 
                      className="overflow-hidden"
                    >
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

