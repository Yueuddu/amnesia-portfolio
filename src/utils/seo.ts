import { SITE_CONFIG } from './constants'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
}

export function generateSEO({
  title,
  description,
  keywords,
  image,
  url
}: SEOProps = {}) {
  const pageTitle = title ? `${title} | ${SITE_CONFIG.title}` : SITE_CONFIG.title
  const pageDescription = description || SITE_CONFIG.description
  const pageKeywords = keywords?.join(', ') || SITE_CONFIG.keywords.join(', ')
  const pageUrl = url || SITE_CONFIG.url
  const pageImage = image || '/og-image.jpg'

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: pageKeywords,
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: pageUrl,
      images: [{ url: pageImage }],
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [pageImage]
    }
  }
}

export const defaultSEO = generateSEO()
