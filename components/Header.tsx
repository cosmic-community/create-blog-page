import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">📝</span>
            <span className="text-lg font-bold tracking-tight text-slate-900">
              The Blog
            </span>
          </Link>
          <nav className="flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
            >
              Home
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}