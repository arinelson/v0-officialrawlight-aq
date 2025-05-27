"use client"

import { useState, useEffect } from "react"
import { notFound } from "next/navigation"
import WebStory from "@/components/web-story"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { generateWebStoryFromPost } from "@/lib/web-stories"

interface Post {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
  tags: string[]
  readingTime: number
}

interface WebStoryPageClientProps {
  params: { lang: string; slug: string }
}

export default function WebStoryPageClient({ params }: WebStoryPageClientProps) {
  const [post, setPost] = useState<Post | null>(null)
  const [dict, setDict] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadData() {
      try {
        // Load dictionary
        const dictModule = await import(`@/lib/dictionaries/${params.lang}.json`)
        setDict(dictModule.default)

        // Load post data via API
        const response = await fetch(`/api/${params.lang}/posts`)
        const posts = await response.json()
        const foundPost = posts.find((p: Post) => p.slug === params.slug)

        if (!foundPost) {
          notFound()
          return
        }

        setPost(foundPost)
      } catch (error) {
        console.error("Error loading WebStory data:", error)
        notFound()
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [params.lang, params.slug])

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    )
  }

  if (!post || !dict) {
    notFound()
    return null
  }

  const slides = generateWebStoryFromPost(post)

  return (
    <>
      {/* Fallback for non-JS users */}
      <noscript>
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
          <div className="max-w-md text-center">
            <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
            <p className="text-gray-600 mb-6">{post.excerpt}</p>
            <Button asChild>
              <Link href={`/${params.lang}/posts/${params.slug}`}>Read Full Article</Link>
            </Button>
          </div>
        </div>
      </noscript>

      {/* Web Story Component */}
      <WebStory slides={slides} title={post.title} onClose={() => window.history.back()} />
    </>
  )
}
