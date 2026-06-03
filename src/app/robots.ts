import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/'],
    },
    sitemap: 'https://www.durgatransportservices.in/sitemap.xml',
    host: 'https://www.durgatransportservices.in',
  }
}
