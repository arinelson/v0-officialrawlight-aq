import type { MetadataRoute } from "next"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.rawlight.space/"
  const languages = ["en", "pt", "es", "de", "fr", "it", "fil"]

  // Base URLs for each language
  const languageUrls = languages.map((lang) => ({
    url: `${baseUrl}/${lang}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 1,
  }))

  // Known post slugs
  const knownSlugs = ["how-to-pray-like-jesus", "importance-of-bible-reading", "finding-peace-in-chaos", "por-que-arabes-e-judeus-brigam-ate-hoje-a-historia-biblica-por-tras-do-conflito"]

  // Generate post URLs for all languages
  const postUrls = languages.flatMap((lang) =>
    knownSlugs.map((slug) => ({
      url: `${baseUrl}/${lang}/posts/${slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  )

  // Generate WebStory URLs for all languages
  const webStoryUrls = languages.flatMap((lang) =>
    knownSlugs.map((slug) => ({
      url: `${baseUrl}/${lang}/webstories/${slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  )

  // Static pages for each language
  const staticPageUrls = languages.flatMap((lang) => {
    const pages = [
      { path: "/about", priority: 0.7 },
      { path: "/contact", priority: 0.7 },
      { path: "/privacy", priority: 0.3 },
      { path: "/terms", priority: 0.3 },
      { path: "/tags", priority: 0.6 },
      { path: "/search", priority: 0.6 },
      { path: "/posts", priority: 0.8 },
      { path: "/webstories", priority: 0.6 },
    ]

    return pages.map((page) => ({
      url: `${baseUrl}/${lang}${page.path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: page.priority,
    }))
  })

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    ...languageUrls,
    ...postUrls,
    ...webStoryUrls,
    ...staticPageUrls,
  ]
}
