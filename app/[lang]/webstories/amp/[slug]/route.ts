import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import readingTime from "reading-time"

const postsDirectory = path.join(process.cwd(), "content/posts")

interface Post {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
  tags: string[]
  readingTime: number
}

async function getPostBySlug(lang: string, slug: string): Promise<Post | null> {
  try {
    const langDirectory = path.join(postsDirectory, lang)

    if (!fs.existsSync(langDirectory)) {
      return null
    }

    const fullPath = path.join(langDirectory, `${slug}.md`)

    if (!fs.existsSync(fullPath)) {
      return null
    }

    const fileContents = fs.readFileSync(fullPath, "utf8")
    const matterResult = matter(fileContents)

    // Calculate reading time
    const stats = readingTime(matterResult.content)

    // Ensure tags is an array
    const tags = Array.isArray(matterResult.data.tags)
      ? matterResult.data.tags
      : matterResult.data.tags
        ? matterResult.data.tags.split(",").map((tag: string) => tag.trim())
        : []

    return {
      slug,
      title: matterResult.data.title || "Untitled Post",
      date: matterResult.data.date || new Date().toISOString().split("T")[0],
      excerpt: matterResult.data.excerpt || "",
      content: matterResult.content,
      tags,
      readingTime: Math.ceil(stats.minutes) || 1,
    }
  } catch (error) {
    console.error(`Error in getPostBySlug for language ${lang} and slug ${slug}:`, error)
    return null
  }
}

function generateWebStoryFromPost(post: Post) {
  // Split content into meaningful chunks
  const contentSections = post.content
    .split(/\n#{1,3}\s+/) // Split by headers
    .filter((section) => section.trim().length > 0)
    .map((section) => section.trim())

  const slides = []

  // Cover slide
  slides.push({
    id: `${post.slug}-cover`,
    type: "cover",
    title: post.title,
    subtitle: post.excerpt,
    image: `/placeholder.svg?height=640&width=360&text=${encodeURIComponent(post.title)}`,
  })

  // Content slides
  contentSections.slice(0, 8).forEach((section, index) => {
    // Check if section starts with a header
    const lines = section.split("\n").filter((line) => line.trim())
    const firstLine = lines[0]
    const isHeader = firstLine && (firstLine.startsWith("#") || firstLine.length < 50)

    const title = isHeader ? firstLine.replace(/^#+\s*/, "") : undefined
    const text = isHeader ? lines.slice(1).join("\n") : section

    // Clean up text
    const cleanText = text
      .replace(/\*\*(.*?)\*\*/g, "$1") // Remove bold markdown
      .replace(/\*(.*?)\*/g, "$1") // Remove italic markdown
      .replace(/`(.*?)`/g, "$1") // Remove code markdown
      .replace(/\[([^\]]+)\]$$[^)]+$$/g, "$1") // Remove links, keep text
      .trim()

    if (cleanText.length > 20) {
      // Only add if there's substantial content
      slides.push({
        id: `${post.slug}-content-${index}`,
        type: "content",
        title: title,
        text: cleanText,
        image: `/placeholder.svg?height=640&width=360&text=Slide ${index + 2}`,
      })
    }
  })

  // End slide
  slides.push({
    id: `${post.slug}-end`,
    type: "end",
    title: "Obrigado por ler!",
    subtitle: "Explore mais histórias",
    image: `/placeholder.svg?height=640&width=360&text=Obrigado`,
  })

  return slides
}

// Generate AMP-compatible Web Story HTML
function generateAMPWebStory(post: Post, slides: any[], lang: string): string {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://officialrawlight.com"

  return `<!DOCTYPE html>
<html ⚡ lang="${lang}">
<head>
  <meta charset="utf-8">
  <title>${post.title}</title>
  <link rel="canonical" href="${baseUrl}/${lang}/webstories/${post.slug}">
  <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
  <style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
  <script async src="https://cdn.ampproject.org/v0.js"></script>
  <script async custom-element="amp-story" src="https://cdn.ampproject.org/v0/amp-story-1.0.js"></script>
  <script async custom-element="amp-auto-ads" src="https://cdn.ampproject.org/v0/amp-auto-ads-0.1.js"></script>
  
  <!-- Metadata -->
  <meta name="description" content="${post.excerpt}">
  <meta property="og:type" content="article">
  <meta property="og:title" content="${post.title}">
  <meta property="og:description" content="${post.excerpt}">
  <meta property="og:url" content="${baseUrl}/${lang}/webstories/${post.slug}">
  <meta property="og:image" content="${baseUrl}/placeholder.svg?height=640&width=360&text=${encodeURIComponent(post.title)}">
  
  <!-- Web Story specific metadata -->
  <meta name="web-stories-replace-head-start">
  <meta name="web-stories-replace-head-end">
</head>
<body>
  <amp-auto-ads type="adsense" data-ad-client="ca-pub-8357117612559558"></amp-auto-ads>
  <amp-story standalone
    title="${post.title}"
    publisher="LUZ CRUA"
    publisher-logo-src="${baseUrl}/favicon.ico"
    poster-portrait-src="${baseUrl}/placeholder.svg?height=640&width=360&text=${encodeURIComponent(post.title)}">
    
    ${slides
      .map(
        (slide, index) => `
    <amp-story-page id="page-${index}">
      <amp-story-grid-layer template="fill">
        <amp-img src="${slide.image}"
          width="360" height="640"
          layout="responsive"
          alt="${slide.title || `Slide ${index + 1}`}">
        </amp-img>
      </amp-story-grid-layer>
      
      <amp-story-grid-layer template="vertical">
        ${
          slide.type === "cover"
            ? `
          <h1 animate-in="fade-in" animate-in-delay="0.5s">${slide.title}</h1>
          <p animate-in="fade-in" animate-in-delay="1s">${slide.subtitle}</p>
        `
            : slide.type === "content"
              ? `
          ${slide.title ? `<h2 animate-in="fade-in" animate-in-delay="0.5s">${slide.title}</h2>` : ""}
          <p animate-in="fade-in" animate-in-delay="1s">${slide.text}</p>
        `
              : `
          <h2 animate-in="fade-in" animate-in-delay="0.5s">${slide.title}</h2>
          <p animate-in="fade-in" animate-in-delay="1s">${slide.subtitle}</p>
        `
        }
      </amp-story-grid-layer>
    </amp-story-page>
    `,
      )
      .join("")}
    
  </amp-story>
</body>
</html>`
}

export async function GET(request: Request, { params }: { params: { lang: string; slug: string } }) {
  try {
    const post = await getPostBySlug(params.lang, params.slug)

    if (!post) {
      return new NextResponse("Web Story not found", { status: 404 })
    }

    const slides = generateWebStoryFromPost(post)
    const ampHtml = generateAMPWebStory(post, slides, params.lang)

    return new NextResponse(ampHtml, {
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "public, max-age=3600, s-maxage=3600",
      },
    })
  } catch (error) {
    console.error("Error generating AMP Web Story:", error)
    return new NextResponse("Internal Server Error", { status: 500 })
  }
}

export async function generateStaticParams() {
  const languages = ["en", "pt", "es", "de", "fr", "it", "fil"]
  const paths = []

  for (const lang of languages) {
    try {
      // Simple approach - just generate for known slugs
      const knownSlugs = ["how-to-pray-like-jesus", "importance-of-bible-reading", "finding-peace-in-chaos"]
      const langPaths = knownSlugs.map((slug) => ({
        lang: lang,
        slug: slug,
      }))
      paths.push(...langPaths)
    } catch (error) {
      console.error(`Error generating AMP WebStory paths for language ${lang}:`, error)
    }
  }

  return paths
}
