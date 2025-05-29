import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(dateString: string, locale = "en"): string {
  const date = new Date(dateString)

  const localeMap: Record<string, string> = {
    en: "en-US",
    pt: "pt-BR",
    es: "es-ES",
    de: "de-DE",
    fr: "fr-FR",
    it: "it-IT",
    fil: "en-US", // Filipino uses English format
  }

  return date.toLocaleDateString(localeMap[locale] || "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export function generateRssFeed(posts: any[], lang: string, baseUrl: string): string {
  const rssItems = posts
    .map(
      (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.excerpt}]]></description>
      <link>${baseUrl}/${lang}/posts/${post.slug}/</link>
      <guid>${baseUrl}/${lang}/posts/${post.slug}/</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    </item>`,
    )
    .join("")

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>LUZ CRUA - ${lang.toUpperCase()}</title>
    <description>Conexão profunda com Deus</description>
    <link>${baseUrl}/${lang}</link>
    <language>${lang}</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${rssItems}
  </channel>
</rss>`
}

export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200
  const words = content.split(/\s+/).length
  return Math.ceil(words / wordsPerMinute)
}

export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .trim()
}
