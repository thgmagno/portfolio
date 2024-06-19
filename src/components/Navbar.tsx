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
      <li>
        <Link
          href={href}
          className={`flex justify-center rounded p-2 text-sm md:justify-start md:text-base ${isActive ? 'bg-stone-800 text-neutral-200' : ''}`}
          target={targetBlank ? '_blank' : '_self'}
        >
          {title}
        </Link>
      </li>
    )
  }

  return (
    <nav className="col-span-12 md:col-span-3">
      <div className="my-5 hidden items-center justify-center md:flex">
        <span className="cursor-default font-serif text-5xl">TM</span>
      </div>
      <ul className="grid grid-cols-5 items-center md:grid-cols-1 md:px-2">
        <Item title="Início" href="/" />
        <Item title="Formação" href="/formacao" />
        <Item title="Habilidades" href="/habilidades" />
        <Item title="Projetos" href="/projetos" />
        <Item title="Blog" href="/blog" />
      </ul>
    </nav>
  )
}
