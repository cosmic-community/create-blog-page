// app/posts/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { getBlogPost, getBlogPosts, getMetafieldValue } from '@/lib/cosmic'
import { renderMarkdown } from '@/lib/markdown'

export const revalidate = 60

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = await getBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPost(slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  const title = getMetafieldValue(post.metadata?.title) || post.title
  const excerpt = getMetafieldValue(post.metadata?.excerpt)

  return {
    title,
    description: excerpt || undefined,
    other: {
      'cosmic-context': JSON.stringify({ object_id: post.id, object_type: post.type }),
    },
  }
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params
  const post = await getBlogPost(slug)

  if (!post) {
    notFound()
  }

  const title = getMetafieldValue(post.metadata?.title) || post.title
  const author = getMetafieldValue(post.metadata?.author)
  const publishedDate = getMetafieldValue(post.metadata?.published_date)
  const content = getMetafieldValue(post.metadata?.content) || post.content || ''
  const featuredImage = post.metadata?.featured_image

  const formattedDate = publishedDate
    ? new Date(publishedDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : ''

  const html = renderMarkdown(content)

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm font-medium text-brand-600 transition-colors hover:text-brand-700"
        >
          &larr; Back to all posts
        </Link>
      </div>

      <header className="mb-8">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl">
          {title}
        </h1>
        <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
          {author && <span className="font-medium text-slate-700">{author}</span>}
          {author && formattedDate && <span>&middot;</span>}
          {formattedDate && <span>{formattedDate}</span>}
        </div>
      </header>

      {featuredImage && featuredImage.imgix_url && (
        <div className="mb-10 overflow-hidden rounded-xl bg-slate-100">
          <img
            src={`${featuredImage.imgix_url}?w=1600&h=900&fit=crop&auto=format,compress`}
            alt={title}
            width={800}
            height={450}
            className="h-auto w-full object-cover"
          />
        </div>
      )}

      <div
        className="prose prose-slate max-w-none prose-headings:font-bold prose-a:text-brand-600 prose-img:rounded-lg"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </article>
  )
}