import { NextResponse } from "next/server"

export async function GET(request: Request, { params }: { params: { lang: string } }) {
  try {
    const lang = params.lang

    // Base URL for the site
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://officialrawlight.com"

    // Mock posts data for RSS
    const posts = [
      {
        slug: "how-to-pray-like-jesus",
        title: "How to Pray Like Jesus",
        date: new Date().toISOString(),
        excerpt: "Learn to pray as Jesus taught, with simplicity and power.",
        tags: ["prayer", "jesus", "faith"],
      },
      {
        slug: "importance-of-bible-reading",
        title: "The Importance of Bible Reading",
        date: new Date(Date.now() - 86400000).toISOString(),
        excerpt: "Discover how Bible reading can transform your spiritual life.",
        tags: ["bible", "spirituality", "faith"],
      },
      {
        slug: "finding-peace-in-chaos",
        title: "Finding Peace in a Chaotic World",
        date: new Date(Date.now() - 172800000).toISOString(),
        excerpt: "Practical strategies to find inner peace in today's hectic world.",
        tags: ["peace", "mindfulness", "spirituality"],
      },
    ]

    // Generate RSS feed items
    const feedItems = posts
      .map((post) => {
        return `
        <item>
          <title>${post.title}</title>
          <link>${baseUrl}/${lang}/posts/${post.slug}</link>
          <guid>${baseUrl}/${lang}/posts/${post.slug}</guid>
          <pubDate>${new Date(post.date).toUTCString()}</pubDate>
          <description><![CDATA[${post.excerpt}]]></description>
          <category>${post.tags.join("</category><category>")}</category>
        </item>
      `
      })
      .join("")

    // Create the RSS feed
    const feed = `<?xml version="1.0" encoding="UTF-8" ?>
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

    // Return the RSS feed
    return new NextResponse(feed, {
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": "public, max-age=3600, s-maxage=3600",
      },
    })
  } catch (error) {
    console.error("Error generating RSS feed:", error)
    return NextResponse.json({ error: "Failed to generate RSS feed" }, { status: 500 })
  }
}

// Add generateStaticParams to pre-generate RSS feeds for all languages
export function generateStaticParams() {
  return [
    { lang: "en" },
    { lang: "pt" },
    { lang: "es" },
    { lang: "de" },
    { lang: "fr" },
    { lang: "it" },
    { lang: "fil" },
  ]
}
