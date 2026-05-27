import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#111111] text-zinc-400">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          {/* Brand */}
          <div className="space-y-5">
            <Link href="/" className="inline-block">
              <div className="bg-white rounded-lg p-2 inline-block">
                <Image src="/logo.png" alt="Durga Transport Services India Pvt Ltd" width={140} height={40} className="object-contain h-8 w-auto" />
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-zinc-500">
              India's Trusted Transport & Logistics Partner. Reliable transportation, freight movement, and logistics solutions across the nation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-300 mb-5">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {[
                { name: "About Us", href: "/about" },
                { name: "Our Fleet", href: "/fleet" },
                { name: "Industries", href: "/industries" },
                { name: "Contact Us", href: "/contact" },
                { name: "Get a Quote", href: "/quote" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-white transition-colors duration-200">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-300 mb-5">Services</h4>
            <ul className="space-y-3 text-sm">
              {[
                { name: "Truck Transportation", href: "/services/truck-transportation" },
                { name: "Trailer Transport", href: "/services/trailer-transportation" },
                { name: "Container Transport", href: "/services/container-transportation" },
                { name: "ODC Transportation", href: "/services/odc-transportation" },
                { name: "Logistics Services", href: "/services/logistics-services" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-white transition-colors duration-200">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-300 mb-5">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[var(--color-brand-red)] shrink-0 mt-0.5" />
                <span>Durga Transport Services India Pvt Ltd House, Near Nahar Maruti Suzuki Workshop, Dhankot, Gurugram, Haryana 122505</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[var(--color-brand-red)] shrink-0" />
                <a href="tel:+919812773410" className="hover:text-white transition-colors">+91 9812773410</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[var(--color-brand-red)] shrink-0" />
                <a href="mailto:info@durgatransport.com" className="hover:text-white transition-colors">info@durgatransport.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-600">
          <p>&copy; {currentYear} Durga Transport Services India Pvt Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <Link href="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
