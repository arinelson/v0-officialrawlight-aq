import { getPost } from "@/lib/data"
import { notFound } from "next/navigation"

interface Props {
  params: {
    lang: string
    slug: string
  }
}

export async function generateStaticParams() {
  // TODO: Get all posts and return an array of objects with the slug and lang
  return [{ lang: "en", slug: "hello-world" }]
}

export async function generateMetadata({ params: { lang, slug } }: Props) {
  try {
    const post = await getPost(lang, slug)

    if (!post) {
      return {
        title: "Post not found",
      }
    }

    return {
      title: post.title,
      description: post.description,
    }
  } catch (error) {
    return {
      title: "Post not found",
    }
  }
}

export default async function PostPage({ params: { lang, slug } }: Props) {
  const post = await getPost(lang, slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="container max-w-3xl">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-500 mb-8">{post.date}</p>
      <div className="prose dark:prose-invert max-w-none mb-12" dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  )
}
