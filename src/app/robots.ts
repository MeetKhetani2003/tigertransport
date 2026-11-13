import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/'],
    },
<<<<<<< HEAD
    sitemap: 'https://www.durgatransport.com/sitemap.xml',
    host: 'https://www.durgatransport.com',
=======
    sitemap: 'https://www.durgatransportservices.in/sitemap.xml',
    host: 'https://www.durgatransportservices.in',
>>>>>>> 1ed6b99042eaf238a271fbddc642a84066cb9e78
  }
}
