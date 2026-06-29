import Link from 'next/link'
import { BlogPost } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface PostCardProps {
  post: BlogPost
}

export default function PostCard({ post }: PostCardProps) {
  const title = getMetafieldValue(post.metadata?.title) || post.title
  const excerpt = getMetafieldValue(post.metadata?.excerpt)
  const author = getMetafieldValue(post.metadata?.author)
  const publishedDate = getMetafieldValue(post.metadata?.published_date)
  const featuredImage = post.metadata?.featured_image

  const formattedDate = publishedDate
    ? new Date(publishedDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : ''

  return (
    <article className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition-all duration-200 hover:shadow-lg">
      <Link href={`/posts/${post.slug}`} className="block">
        {featuredImage && featuredImage.imgix_url && (
          <div className="aspect-[16/9] overflow-hidden bg-slate-100">
            <img
              src={`${featuredImage.imgix_url}?w=800&h=450&fit=crop&auto=format,compress`}
              alt={title}
              width={400}
              height={225}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}
        <div className="p-6">
          <h2 className="text-xl font-bold leading-snug text-slate-900 transition-colors group-hover:text-brand-600">
            {title}
          </h2>
          {excerpt && (
            <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-600">
              {excerpt}
            </p>
          )}
          <div className="mt-4 flex items-center gap-3 text-xs text-slate-500">
            {author && <span className="font-medium text-slate-700">{author}</span>}
            {author && formattedDate && <span>&middot;</span>}
            {formattedDate && <span>{formattedDate}</span>}
          </div>
        </div>
      </Link>
    </article>
  )
}