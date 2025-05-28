import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Função para formatar datas
export function formatDate(dateString: string, locale = "en"): string {
  const date = new Date(dateString)

  const localeMap: Record<string, string> = {
    pt: "pt-BR",
    es: "es-ES",
    en: "en-US",
    fr: "fr-FR",
    de: "de-DE",
    it: "it-IT",
    fil: "fil-PH",
  }

  const targetLocale = localeMap[locale] || "en-US"

  return date.toLocaleDateString(targetLocale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

// Função para gerar RSS feed
export function generateRssFeed(posts: any[], siteUrl: string, language = "en"): string {
  const languageNames: Record<string, string> = {
    en: "English",
    pt: "Português",
    es: "Español",
    fr: "Français",
    de: "Deutsch",
    it: "Italiano",
    fil: "Filipino",
  }

  const langName = languageNames[language] || "English"

  const rssItems = posts
    .map(
      (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.excerpt}]]></description>
      <link>${siteUrl}/${language}/posts/${post.slug}/</link>
      <guid>${siteUrl}/${language}/posts/${post.slug}/</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    </item>
  `,
    )
    .join("")

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>LUZ CRUA - ${langName}</title>
    <description>A multilingual blog about faith, prayer, and spiritual growth</description>
    <link>${siteUrl}/${language}/</link>
    <atom:link href="${siteUrl}/rss/${language}/" rel="self" type="application/rss+xml"/>
    <language>${language}</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${rssItems}
  </channel>
</rss>`
}

// Função para calcular tempo de leitura
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200
  const words = content.trim().split(/\s+/).length
  return Math.ceil(words / wordsPerMinute)
}

// Função para gerar slug a partir do título
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Remove acentos
    .replace(/[^a-z0-9\s-]/g, "") // Remove caracteres especiais
    .trim()
    .replace(/\s+/g, "-") // Substitui espaços por hífens
    .replace(/-+/g, "-") // Remove hífens duplicados
}
