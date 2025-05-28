import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import TagList from "@/components/tag-list"
import OptimizedImage from "@/components/optimized-image"

interface PostCardProps {
  post: {
    slug: string
    title: string
    date: string
    excerpt: string
    tags: string[]
    readingTime: number
  }
  lang: string
  dict: any
}

function formatDate(dateString: string, locale: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString(locale === "pt" ? "pt-BR" : locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

function getPostThumbnail(slug: string, lang: string): string {
  // Se for o post sobre Abraão, usar thumbnail específico
  if (slug.includes("why-do-arabs-and-jews-fight") || slug.includes("abraao") || slug.includes("conflict")) {
    switch (lang) {
      case "pt":
        return "/thumbnails/thumbnail-pt.png"
      case "es":
        return "/thumbnails/thumbnail-es.png"
      case "en":
        return "/thumbnails/thumbnail-en.png"
      default:
        return "/thumbnails/thumbnail-default.png"
    }
  }

  // Para outros posts, usar thumbnail padrão
  return "/thumbnails/thumbnail-default.png"
}

export default function PostCard({ post, lang, dict }: PostCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow">
      <div className="relative w-full h-40 overflow-hidden">
        <OptimizedImage
          src={getPostThumbnail(post.slug, lang)}
          alt={post.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardHeader className="pb-4">
        <div className="space-y-1">
          <Link href={`/${lang}/posts/${post.slug}`} className="inline-block">
            <h3 className="text-xl font-bold leading-tight hover:text-blue-500 transition-colors">{post.title}</h3>
          </Link>
          <div className="flex items-center text-sm text-muted-foreground">
            <time dateTime={post.date}>{formatDate(post.date, lang)}</time>
            <span className="mx-2">•</span>
            <span>
              {post.readingTime} {dict.post.minutes}
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
      </CardContent>
      <CardFooter className="pt-4 flex flex-col items-start gap-4">
        <TagList tags={post.tags} lang={lang} />
        <Link href={`/${lang}/posts/${post.slug}`} className="text-sm font-medium text-blue-500 hover:underline">
          {dict.post.readMore} →
        </Link>
      </CardFooter>
    </Card>
  )
}
