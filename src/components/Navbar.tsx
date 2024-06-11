'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Navbar() {
  const pathname = usePathname()

  const Item = ({ title, href }: { title: string; href: string }) => {
    const isActive =
      (pathname === '/' && href === '/') ||
      (href !== '/' && pathname.includes(href))

    return (
      <li className="flex">
        <Link
          href={href}
          className={`w-full rounded px-4 py-1 text-sm md:py-2 ${isActive ? 'bg-stone-800' : ''}`}
        >
          {title}
        </Link>
      </li>
    )
  }

  return (
    <nav className="flex min-w-28 flex-col pl-1 font-mono text-sm md:min-w-40">
      <div className="flex justify-center p-5">
        <span className="font-serif text-4xl md:text-6xl">TM</span>
      </div>
      <ul className="flex flex-col space-y-3">
        <Item title="Início" href="/" />
        <Item title="Sobre mim" href="/sobre" />
        <Item title="Blog" href="/blog" />
      </ul>
    </nav>
  )
}
