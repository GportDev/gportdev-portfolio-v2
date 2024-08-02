import { MetadataRoute } from 'next'

function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.gportdev.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}

export default sitemap
