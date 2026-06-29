import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6 lg:px-8">
      <p className="text-6xl">📭</p>
      <h1 className="mt-6 text-3xl font-bold text-slate-900">Page Not Found</h1>
      <p className="mt-3 text-slate-600">
        Sorry, we couldn&apos;t find the page you were looking for.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
      >
        Back to Home
      </Link>
    </div>
  )
}