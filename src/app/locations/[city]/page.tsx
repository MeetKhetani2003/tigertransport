import React from "react"
import { notFound } from "next/navigation"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MapPin, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Schema, generateLocalBusinessSchema } from "@/components/seo/Schema"
import citiesData from "../../../../data/cities.json"
import servicesData from "../../../../data/services.json"

interface PageProps {
  params: Promise<{ city: string }>
}

export async function generateStaticParams() {
  return citiesData.map((city: string) => ({
    city: city.toLowerCase(),
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params
  const citySlug = resolvedParams.city
  const city = citiesData.find((c: string) => c.toLowerCase() === citySlug)
  
  if (!city) return {}
  
  return {
    title: `Top Transport Company in ${city} | Logistics Services | Durga Transport Services India Pvt Ltd`,
    description: `Looking for reliable transport services in ${city}? Durga Transport Services India Pvt Ltd offers premium logistics, truck transportation, and freight solutions in ${city}.`,
    keywords: [
      `transport company in ${city.toLowerCase()}`,
      `logistics services in ${city.toLowerCase()}`,
      `freight forwarder ${city.toLowerCase()}`,
      `top transporters in ${city.toLowerCase()}`,
      `truck booking ${city.toLowerCase()}`,
      `cargo movement ${city.toLowerCase()}`
    ],
    alternates: {
      canonical: `https://www.durgatransport.com/locations/${citySlug}`,
    },
  }
}

export default async function CityPage({ params }: PageProps) {
  const resolvedParams = await params
  const citySlug = resolvedParams.city
  const city = citiesData.find((c: string) => c.toLowerCase() === citySlug)
  
  if (!city) {
    notFound()
  }

  const schemaData = generateLocalBusinessSchema(city)
  const topServices = servicesData.slice(0, 4)

  return (
    <>
      <Schema data={schemaData} />
      
      {/* City Hero */}
      <section className="relative w-full py-24 md:py-32 bg-zinc-900 flex items-center">
        <div className="absolute inset-0 z-0 opacity-40">
           <Image
            src="/hero/main-hero.png"
            alt={`Transport Services in ${city}`}
            fill
            className="object-cover grayscale"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-white/20 text-white/90 text-sm font-medium mb-2">
              <MapPin className="w-4 h-4 text-[var(--color-brand-red)]" />
              Location: {city}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-heading">
              Transport Company in {city}
            </h1>
            <p className="text-xl text-zinc-300">
              Premium logistics and freight movement services tailored for businesses and enterprises in {city}.
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
                Leading Logistics Services in {city}
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none text-zinc-600 dark:text-zinc-400">
                <p>
                  As a leading logistics provider, Durga Transport Services India Pvt Ltd is proud to offer our comprehensive transport solutions to businesses in <strong>{city}</strong>. We understand the unique supply chain dynamics of {city} and provide reliable, scalable, and secure freight movement.
                </p>
                <p>
                  Our pan-India network ensures that your cargo moves seamlessly from {city} to any destination across the country. With a large fleet of modern vehicles and advanced tracking technology, we guarantee the safety and timely delivery of your consignments.
                </p>
              </div>

              {/* Local Services Grid */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white font-heading mb-6">Our Services in {city}</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {topServices.map((service, idx) => (
                    <div key={idx} className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
                      <Truck className="w-8 h-8 text-[var(--color-brand-red)] mb-4" />
                      <h4 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">{service.title}</h4>
                      <Link 
                        href={`/services/${service.slug}/${citySlug}`}
                        className="text-sm font-bold text-[var(--color-brand-red)] hover:text-red-700 transition-colors inline-flex items-center"
                      >
                        Learn More <ArrowRight className="ml-1 w-4 h-4" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Sidebar CTA */}
            <div className="space-y-6">
              <div className="bg-zinc-50 dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-100 dark:border-zinc-800">
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white font-heading mb-4">Contact {city} Office</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                  Ready to optimize your transport operations in {city}? Connect with our regional experts.
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
