import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Format date based on language
export function formatDate(date: string, lang: string): string {
  const dateObj = new Date(date)

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  }

  // Map language codes to locale codes
  const localeMap: Record<string, string> = {
    en: "en-US",
    pt: "pt-BR",
    es: "es-ES",
    de: "de-DE",
    fr: "fr-FR",
    it: "it-IT",
    fil: "fil-PH",
  }

  const locale = localeMap[lang] || "en-US"

  return dateObj.toLocaleDateString(locale, options)
}

// Generate RSS feed
export function generateRssFeed(posts: any[], lang: string, baseUrl: string): string {
  const feedItems = posts
    .map((post) => {
      return `
      <item>
        <title>${post.title}</title>
        <link>${baseUrl}/${lang}/posts/${post.slug}</link>
        <guid>${baseUrl}/${lang}/posts/${post.slug}</guid>
        <pubDate>${new Date(post.date).toUTCString()}</pubDate>
        <description><![CDATA[${post.excerpt || post.title}]]></description>
        <category>${post.tags?.join("</category><category>") || ""}</category>
      </item>
    `
    })
    .join("")

  return `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>LUZ CRUA</title>
      <link>${baseUrl}/${lang}</link>
      <description>Conexão profunda com Deus através dos ensinamentos de Jesus</description>
      <language>${lang}</language>
      <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
      <atom:link href="${baseUrl}/rss/${lang}.xml" rel="self" type="application/rss+xml" />
      ${feedItems}
    </channel>
  </rss>`
}
