import { getBlogPosts } from '@/lib/cosmic'
import PostCard from '@/components/PostCard'

export const revalidate = 60

export default async function HomePage() {
  const posts = await getBlogPosts()

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
          The Blog
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
          Insights, articles, and guidance on the topics that matter most.
        </p>
      </div>

      {posts.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-12 text-center">
          <p className="text-lg text-slate-500">No posts published yet. Check back soon!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  )
}