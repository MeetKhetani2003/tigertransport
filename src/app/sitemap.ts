import { MetadataRoute } from 'next'
import servicesData from '../../data/services.json'
import industriesData from '../../data/industries.json'
import citiesData from '../../data/cities.json'

const BASE_URL = 'https://www.durgatransport.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/services',
    '/fleet',
    '/locations',
    '/industries',
    '/quote',
    '/contact',
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1.0 : 0.9,
  }))

  const serviceRoutes = servicesData.map((service) => ({
    url: `${BASE_URL}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const industryRoutes = industriesData.map((industry) => ({
    url: `${BASE_URL}/industries/${industry.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const locationRoutes = citiesData.map((city: string) => ({
    url: `${BASE_URL}/locations/${city.toLowerCase()}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const serviceByCityRoutes: MetadataRoute.Sitemap = []
  
  for (const service of servicesData) {
    for (const city of citiesData) {
      serviceByCityRoutes.push({
        url: `${BASE_URL}/services/${service.slug}/${city.toLowerCase()}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      })
    }
  }

  return [...routes, ...serviceRoutes, ...industryRoutes, ...locationRoutes, ...serviceByCityRoutes]
}
