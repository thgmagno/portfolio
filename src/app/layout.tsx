import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

import './globals.css'
import { Navbar } from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Thiago Magno',
  description:
    'Conheça meu portfólio através deste site desenvolvido com NextJS',
}

const montserrat = Montserrat({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`mx-auto grid w-full max-w-3xl grid-cols-12 px-3 pb-20 pt-10 ${montserrat.className}`}
      >
        <Navbar />
        <main className="col-span-12 pt-5 text-justify font-sans md:col-span-9 md:px-2">
          {children}
        </main>
      </body>
    </html>
  )
}
