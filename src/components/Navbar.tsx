'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface ItemProps {
  title: string
  href: string
  targetBlank?: boolean
}

export function Navbar() {
  const pathname = usePathname()

  const Item = ({ title, href, targetBlank }: ItemProps) => {
    const isActive =
      (pathname === '/' && href === '/') ||
      (href !== '/' && pathname.includes(href))

    return (
      <li className="flex min-w-28">
        <Link
          href={href}
          className={`w-full rounded px-4 py-1 text-sm md:py-2 ${isActive ? 'bg-stone-800' : ''}`}
          target={targetBlank ? '_blank' : '_self'}
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
      <ul className="no-scrollbar flex w-full overflow-scroll md:flex-col">
        <Item title="Início" href="/" />
        <Item title="Sobre mim" href="/sobre" />
        <Item title="Projetos" href="/projetos" />
        <Item title="Blog" href="/blog" />
        <Item
          title="Currículo"
          href="https://me-green-tau.vercel.app/"
          targetBlank
        />
      </ul>
    </nav>
  )
}
