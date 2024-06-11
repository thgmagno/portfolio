import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import { Navbar } from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Thiago Magno',
  description:
    'Conheça meu portfólio através deste site desenvolvido com NextJS',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-br"
      className="scrollbar-thumb-stone-900 scrollbar-track-stone-300"
    >
      <body
        className={`scrollbar-thin h-32 overflow-y-scroll ${GeistSans.variable} ${GeistMono.variable}`}
      >
        <main>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  )
}
