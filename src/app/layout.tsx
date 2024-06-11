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
    <html lang="pt-br">
      <body className={`${GeistSans.variable} ${GeistMono.variable}`}>
        <main>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  )
}
