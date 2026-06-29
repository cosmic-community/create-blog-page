export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-slate-500">
            &copy; {year} The Blog. All rights reserved.
          </p>
          <p className="text-sm text-slate-500">
            Built with Next.js &amp; Cosmic
          </p>
        </div>
      </div>
    </footer>
  )
}