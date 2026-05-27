import React from "react"
import { notFound } from "next/navigation"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Schema, generateServiceSchema } from "@/components/seo/Schema"
import servicesData from "../../../../../data/services.json"
import citiesData from "../../../../../data/cities.json"

interface PageProps {
  params: Promise<{ service: string; city: string }>
}

export async function generateStaticParams() {
  const params: { service: string; city: string }[] = []
  
  servicesData.forEach((service) => {
    citiesData.forEach((city: string) => {
      params.push({
        service: service.slug,
        city: city.toLowerCase(),
      })
    })
  })
  
  return params
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params
  const serviceSlug = resolvedParams.service
  const citySlug = resolvedParams.city
  
  const service = servicesData.find((s) => s.slug === serviceSlug)
  const city = citiesData.find((c: string) => c.toLowerCase() === citySlug)
  
  if (!service || !city) return {}
  
  return {
    title: `${service.title} in ${city} | Top Logistics Services | Durga Transport Services India Pvt Ltd`,
    description: `Looking for ${service.title.toLowerCase()} in ${city}? Durga Transport Services India Pvt Ltd provides premium, secure, and enterprise-scale logistics solutions in ${city}.`,
    keywords: [
      `${service.title.toLowerCase()} in ${city.toLowerCase()}`,
      `hire ${service.title.toLowerCase()} company in ${city.toLowerCase()}`,
      `best ${service.title.toLowerCase()} near me`,
      `transport services for ${service.title.toLowerCase()} in ${city.toLowerCase()}`,
      `commercial ${service.title.toLowerCase()}`,
      "logistics",
      "transportation"
    ],
    alternates: {
      canonical: `https://www.durgatransport.com/services/${serviceSlug}/${citySlug}`,
    },
  }
}

export default async function ServiceCityPage({ params }: PageProps) {
  const resolvedParams = await params
  const serviceSlug = resolvedParams.service
  const citySlug = resolvedParams.city
  
  const service = servicesData.find((s) => s.slug === serviceSlug)
  const city = citiesData.find((c: string) => c.toLowerCase() === citySlug)
  
  if (!service || !city) {
    notFound()
  }

  const schemaData = generateServiceSchema(
    `${service.title} in ${city}`,
    `Professional ${service.title.toLowerCase()} in ${city} by Durga Transport Services India Pvt Ltd.`
  )

  return (
    <>
      <Schema data={schemaData} />
      
      {/* Hero Section */}
      <section className="relative w-full py-24 md:py-32 bg-zinc-900 flex items-center">
        <div className="absolute inset-0 z-0 opacity-40">
           <Image
            src="/hero/main-hero.png"
            alt={`${service.title} in ${city}`}
            fill
            className="object-cover grayscale"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-white/20 text-white/90 text-sm font-medium mb-2">
              <MapPin className="w-4 h-4 text-[var(--color-brand-red)]" />
              Serving: {city}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-heading">
              {service.title} in {city}
            </h1>
            <p className="text-xl text-zinc-300">
              Premium, reliable, and secure {service.title.toLowerCase()} tailored for enterprises operating in {city}.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <h2 className="text-3xl font-bold text-zinc-900 dark:text-white font-heading">
                Specialized {service.title} in {city}
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none text-zinc-600 dark:text-zinc-400">
                <p>
                  Durga Transport Services India Pvt Ltd delivers industry-leading <strong>{service.title.toLowerCase()}</strong> to businesses and enterprises in <strong>{city}</strong>. Our robust operations in {city} ensure that your logistics requirements are met with unparalleled precision, speed, and safety.
                </p>
                <p>
                  Recognized as a top logistics partner, we provide end-to-end support for all your freight movement needs in and around {city}. Our dedicated local fleet and experienced logistics personnel are equipped to handle complex supply chain challenges efficiently.
                </p>
                
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mt-8 mb-4">Why Choose Us in {city}?</h3>
                <ul className="space-y-3 list-none p-0">
                  {[
                    `Deep local expertise and strong network in ${city}.`,
                    "State-of-the-art vehicles ensuring cargo safety.",
                    "Dedicated account manager for enterprise clients.",
                    "Real-time visibility and advanced tracking systems.",
                    "Strict compliance with regional transport regulations."
                  ].map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[var(--color-brand-red)] shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Sidebar CTA */}
            <div className="space-y-6">
              <div className="bg-zinc-50 dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-100 dark:border-zinc-800">
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white font-heading mb-4">Get Transport Quote</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                  Need {service.title.toLowerCase()} in {city}? Contact us for a fast, competitive quote.
                </p>
                <div className="space-y-4">
                  <Button size="lg" className="w-full bg-[var(--color-brand-red)] hover:bg-red-700 h-14" asChild>
                    <Link href="/quote">Request Quote <ArrowRight className="ml-2 w-4 h-4" /></Link>
                  </Button>
                  <Button size="lg" variant="outline" className="w-full h-14" asChild>
                    <a href="tel:+919812773410">Call +91 9812773410</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
