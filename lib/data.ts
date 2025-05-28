import { getAllPosts as getStaticPosts } from "./posts-static"

export interface Post {
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  readingTime: number
  tags: string[]
  language: string
  thumbnail?: string
}

// Re-export da função principal
export const getAllPosts = getStaticPosts

// Função para buscar um post específico
export async function getPost(slug: string, lang: string): Promise<Post | null> {
  const posts = await getAllPosts(lang)
  return posts.find((post) => post.slug === slug) || null
}

// Função para buscar posts por idioma
export async function getPostsByLanguage(lang: string): Promise<Post[]> {
  return await getAllPosts(lang)
}

// Função para buscar posts por tag
export async function getPostsByTag(tag: string, lang: string): Promise<Post[]> {
  const posts = await getAllPosts(lang)
  return posts.filter((post) => post.tags.includes(tag))
}

// Função para buscar posts relacionados
export async function getRelatedPosts(currentSlug: string, lang: string, limit = 3): Promise<Post[]> {
  const posts = await getAllPosts(lang)
  const currentPost = posts.find((post) => post.slug === currentSlug)

  if (!currentPost) return []

  // Buscar posts com tags similares
  const relatedPosts = posts
    .filter((post) => post.slug !== currentSlug && post.tags.some((tag) => currentPost.tags.includes(tag)))
    .slice(0, limit)

  // Se não houver posts relacionados suficientes, pegar os mais recentes
  if (relatedPosts.length < limit) {
    const recentPosts = posts.filter((post) => post.slug !== currentSlug).slice(0, limit - relatedPosts.length)

    relatedPosts.push(...recentPosts)
  }

  return relatedPosts.slice(0, limit)
}
