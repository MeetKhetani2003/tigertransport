"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, Phone, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Fleet", href: "/fleet" },
  { name: "Industries", href: "/industries" },
  { name: "Locations", href: "/locations" },
  { name: "Contact", href: "/contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const pathname = usePathname()

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500">
      {/* Top Micro Bar */}
      <div className="hidden lg:block bg-[#1A1A1A] text-white/80">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-8 text-xs tracking-wide">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            24/7 Pan India Operations
          </span>
          <div className="flex items-center divide-x divide-white/20">
            <a href="mailto:info@durgatransport.com" className="pr-4 hover:text-white transition-colors">info@durgatransport.com</a>
            <a href="tel:+919812773410" className="pl-4 font-semibold hover:text-white transition-colors flex items-center gap-1.5">
              <Phone className="w-3 h-3" />
              +91 9812773410
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav - Floating Pill Style */}
      <div className={`mt-4 mx-4 md:mx-6 lg:mx-auto max-w-7xl rounded-2xl transition-all duration-500 flex items-center justify-between px-4 md:px-6 h-[72px] lg:h-[80px] ${
        scrolled 
          ? "bg-white/95 backdrop-blur-xl shadow-sm border border-white/20" 
          : "bg-white/90 backdrop-blur-md border border-white/10"
      }`}>
        {/* Logo */}
        <Link href="/" className="relative shrink-0 flex items-center">
          <Image
            src="/logo.png"
            alt="Durga Transport Services India Pvt Ltd"
            width={240}
            height={60}
            className={`object-contain transition-all duration-300 ${scrolled ? "h-12 md:h-14" : "h-14 md:h-16"} w-auto`}
            priority
          />
        </Link>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-5 py-2.5 text-[14px] font-semibold tracking-wide rounded-lg transition-colors ${
                  isActive
                    ? "text-[var(--color-brand-red)]"
                    : "text-zinc-600 hover:text-black"
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute bottom-0 left-4 right-4 h-[2px] rounded-full bg-[var(--color-brand-red)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            )
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+919812773410"
            className="flex items-center gap-2 text-[15px] font-bold transition-colors text-zinc-800 hover:text-[var(--color-brand-red)]"
          >
            <Phone className="w-4 h-4 text-[var(--color-brand-red)]" />
            <span>+91 9812773410</span>
          </a>
          <Link
            href="/quote"
            className="inline-flex items-center gap-2 text-[15px] font-bold px-6 py-3 rounded-xl transition-all duration-300 bg-[var(--color-brand-red)] text-white hover:bg-[var(--color-brand-red-dark)] shadow-lg shadow-red-900/25"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden relative w-12 h-12 flex items-center justify-center rounded-xl transition-colors hover:bg-zinc-100"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                <X className="w-6 h-6 text-zinc-800" />
              </motion.div>
            ) : (
              <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                <Menu className="w-6 h-6 text-zinc-800" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 top-16 bg-black/20 backdrop-blur-sm lg:hidden z-40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-full left-0 right-0 bg-white border-t border-zinc-100 lg:hidden z-50 shadow-xl"
            >
              <div className="max-w-lg mx-auto p-6 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between py-3 px-4 rounded-xl text-base font-semibold transition-colors ${
                      pathname === link.href
                        ? "text-[var(--color-brand-red)] bg-red-50"
                        : "text-zinc-800 hover:bg-zinc-50"
                    }`}
                  >
                    {link.name}
                    <ChevronDown className="w-4 h-4 -rotate-90 text-zinc-400" />
                  </Link>
                ))}
                <div className="pt-4 mt-4 border-t border-zinc-100 space-y-3">
                  <a
                    href="tel:+919812773410"
                    className="flex items-center justify-center gap-2 text-base font-bold text-[var(--color-brand-red)] py-3 bg-red-50 rounded-xl"
                  >
                    <Phone className="w-5 h-5" />
                    +91 9812773410
                  </a>
                  <Link
                    href="/quote"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center text-base font-bold text-white bg-[var(--color-brand-red)] py-3.5 rounded-xl shadow-[0_2px_8px_rgba(196,30,30,0.25)]"
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
