import type React from "react"
import { getDictionary } from "@/lib/dictionaries"
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/posts-static"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import ShareButtons from "@/components/share-buttons"
import PostCard from "@/components/post-card"
import TagList from "@/components/tag-list"
import Image from "next/image"

// Local formatDate function
function formatDate(dateString: string, locale: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString(locale === "pt" ? "pt-BR" : locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export async function generateMetadata({
  params,
}: {
  params: { lang: string; slug: string }
}): Promise<Metadata> {
  const post = await getPostBySlug(params.lang, params.slug)
  const dict = await getDictionary(params.lang)
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://officialrawlight.com"

  if (!post) {
    return {}
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags.join(", "),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: ["LUZ CRUA"],
      tags: post.tags,
      url: `${baseUrl}/${params.lang}/posts/${params.slug}/`,
      images: [
        {
          url: `${baseUrl}/thumbnails/thumbnail-${params.lang}.png`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: params.lang,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [`${baseUrl}/thumbnails/thumbnail-${params.lang}.png`],
    },
    alternates: {
      canonical: `${baseUrl}/${params.lang}/posts/${params.slug}/`,
    },
  }
}

export async function generateStaticParams() {
  const languages = ["en", "pt", "es", "de", "fr", "it", "fil"]
  const paths = []

  for (const lang of languages) {
    try {
      const posts = await getAllPosts(lang)
      const langPaths = posts.map((post) => ({
        lang: lang,
        slug: post.slug,
      }))
      paths.push(...langPaths)
    } catch (error) {
      console.error(`Error generating paths for language ${lang}:`, error)
    }
  }

  return paths
}

export default async function PostPage({ params }: { params: { lang: string; slug: string } }) {
  const dict = await getDictionary(params.lang)
  const post = await getPostBySlug(params.lang, params.slug)
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://officialrawlight.com"

  if (!post) {
    notFound()
  }

  const relatedPosts = await getRelatedPosts(params.lang, post.slug, post.tags, 2)
  const postUrl = `${baseUrl}/${params.lang}/posts/${post.slug}/`

  return (
    <article className="max-w-3xl mx-auto">
      <div className="mb-8 space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">{post.title}</h1>
        <div className="flex items-center gap-4 text-muted-foreground">
          <time dateTime={post.date}>{formatDate(post.date, params.lang)}</time>
          <div className="text-sm">
            {dict.post?.readingTime || "Reading time"}: {post.readingTime} {dict.post?.minutes || "minutes"}
          </div>
        </div>
        <TagList tags={post.tags} lang={params.lang} />
      </div>

      {/* Featured image with proper alt text */}
      <div className="relative w-full h-[300px] mb-8 rounded-lg overflow-hidden">
        <Image
          src={`/thumbnails/thumbnail-${params.lang}.png`}
          alt={post.title}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, 1200px"
        />
      </div>

      <div className="prose dark:prose-invert max-w-none mb-12">
        <div
          dangerouslySetInnerHTML={{ __html: post.content }}
          className="
    [&_img]:w-full 
    [&_img]:h-auto 
    [&_img]:rounded-lg 
    [&_img]:my-6 
    [&_img]:shadow-md 
    [&_img]:object-cover 
    [&_img]:max-w-full
    [&_img]:block
    [&_img]:mx-auto
    [&_img]:opacity-100
    [&_img]:visible
    [&_img]:display-block
    [&_div]:w-full
    [&_div]:max-w-full
    [&_div]:mx-auto
    [&_div]:my-6
    [&_div[style*='position:relative']]:w-full
    [&_div[style*='position:relative']]:max-w-4xl
    [&_div[style*='position:relative']]:mx-auto
    [&_div[style*='position:relative']]:rounded-lg
    [&_div[style*='position:relative']]:overflow-hidden
    [&_div[style*='position:relative']]:shadow-md
    [&_div[style*='position:relative']_img]:w-full
    [&_div[style*='position:relative']_img]:h-full
    [&_div[style*='position:relative']_img]:object-cover
    [&_div[style*='position:relative']_img]:position-absolute
    [&_div[style*='position:relative']_img]:top-0
    [&_div[style*='position:relative']_img]:left-0
  "
          style={
            {
              "--tw-prose-body": "inherit",
              "--tw-prose-headings": "inherit",
            } as React.CSSProperties
          }
        />
      </div>

      <ShareButtons url={postUrl} title={post.title} dict={dict} lang={params.lang} />

      {relatedPosts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">{dict.post?.relatedPosts || "Related Posts"}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedPosts.map((relatedPost) => (
              <PostCard key={relatedPost.slug} post={relatedPost} lang={params.lang} dict={dict} />
            ))}
          </div>
        </div>
      )}
    </article>
  )
}
