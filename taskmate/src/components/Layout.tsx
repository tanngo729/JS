import { PropsWithChildren } from 'react'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen">
      <header className="bg-white border-b">
        <div className="container-app py-4 flex items-center justify-between">
          <h1 className="text-xl font-semibold">TaskMate</h1>
          <a
            className="text-sm text-blue-600 hover:underline"
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            Docs
          </a>
        </div>
      </header>
      <main className="container-app py-6">{children}</main>
    </div>
  )
}

