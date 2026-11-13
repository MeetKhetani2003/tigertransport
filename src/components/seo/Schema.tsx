import React from "react"

interface SchemaProps {
  data: Record<string, any>
}

export function Schema({ data }: SchemaProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export function generateLocalBusinessSchema(city?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "LogisticsService",
    "name": "Durga Transport Services India Pvt Ltd",
    "image": "https://www.durgatransport.com/project-assets/logo.png",
    "@id": "https://www.durgatransport.com",
    "url": "https://www.durgatransport.com",
    "telephone": "+919812773410",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "DTS House, Near Nahar Maruti Suzuki Work Shop, Dhankot",
      "addressLocality": city || "Gurugram",
      "addressRegion": "Haryana",
      "postalCode": "122505",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 28.4595,
      "longitude": 76.9536
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    }
  }
}

export function generateServiceSchema(serviceName: string, serviceDescription: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "provider": {
      "@type": "Organization",
      "name": "Durga Transport Services India Pvt Ltd"
    },
    "description": serviceDescription
  }
}
