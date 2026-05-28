import { MetadataRoute } from 'next'
import servicesData from '../../data/services.json'
import industriesData from '../../data/industries.json'

const BASE_URL = 'https://www.durgatransport.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/services',
    '/fleet',
    '/industries',
    '/quote',
    '/contact',
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  const serviceRoutes = servicesData.map((service) => ({
    url: `${BASE_URL}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9, // High priority for individual service pages
  }))

  const industryRoutes = industriesData.map((industry) => ({
    url: `${BASE_URL}/industries/${industry.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }))

  return [...routes, ...serviceRoutes, ...industryRoutes]
}
