import React from "react"
import { notFound } from "next/navigation"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Schema, generateServiceSchema } from "@/components/seo/Schema"
import servicesData from "../../../../data/services.json"

interface PageProps {
  params: Promise<{ service: string }>
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    service: service.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params
  const service = servicesData.find((s) => s.slug === resolvedParams.service)
  
  if (!service) return {}
  
  return {
    title: `${service.title} in India | Durga Transport Services`,
    description: `Professional ${service.title.toLowerCase()} across India. Reliable, secure, and enterprise-grade logistics by Durga Transport Services India.`,
    alternates: {
      canonical: `https://www.durgatransport.com/services/${service.slug}`,
    },
  }
}

export default async function ServicePage({ params }: PageProps) {
  const resolvedParams = await params
  const service = servicesData.find((s) => s.slug === resolvedParams.service)
  
  if (!service) {
    notFound()
  }

  const schemaData = generateServiceSchema(
    service.title,
    `Professional ${service.title.toLowerCase()} across India by Durga Transport Services India.`
  )

  return (
    <>
      <Schema data={schemaData} />
      
      {/* Service Hero */}
      <section className="relative w-full py-24 md:py-32 bg-zinc-900 flex items-center">
        <div className="absolute inset-0 z-0 opacity-40">
           <Image
            src="/hero/main-hero.png"
            alt={service.title}
            fill
            className="object-cover grayscale"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-heading">
              {service.title}
            </h1>
            <p className="text-xl text-zinc-300">
              Enterprise-grade {service.title.toLowerCase()} tailored for your specific supply chain requirements.
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
                Comprehensive {service.title} Solutions
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none text-zinc-600 dark:text-zinc-400">
                <p>
                  At Durga Transport Services India, our <strong>{service.title.toLowerCase()}</strong> is designed to meet the rigorous demands of modern enterprise supply chains. We combine deep industry expertise with a robust national network to deliver exceptional reliability and speed.
                </p>
                <p>
                  Whether you are moving raw materials, finished goods, or specialized equipment, our modern fleet and experienced logistics professionals ensure that your cargo reaches its destination safely and on time. We utilize advanced tracking systems to provide real-time visibility and dedicated account management for personalized service.
                </p>
                
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mt-8 mb-4">Key Benefits of Our {service.title}</h3>
                <ul className="space-y-3 list-none p-0">
                  {[
                    "Pan India coverage with dedicated routes.",
                    "Real-time GPS tracking and dedicated support.",
                    "Highly maintained fleet ensuring minimal transit delays.",
                    "Customized solutions for complex freight.",
                    "Strict adherence to safety and compliance standards."
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
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white font-heading mb-4">Get a Quote</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                  Need {service.title.toLowerCase()}? Contact our logistics experts for a customized quote.
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
