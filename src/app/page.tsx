import data from '@/data.json'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const { profile, social } = data

  return (
    <>
      <header className="mb-6 flex items-center">
        <Image
          src={profile.avatar}
          alt={`Imagem de ${profile.name}`}
          height={100}
          width={100}
          className="mr-5 rounded-full ring-2 ring-neutral-300"
        />
        <article className="flex flex-col space-y-2.5 font-serif">
          <h1 className="text-3xl md:text-5xl">{profile.name}</h1>
          <span className="leading-relaxed text-stone-500">
            Desenvolvedor Web
          </span>
        </article>
      </header>
      <main className="flex flex-col space-y-3">
        <p className="font-bold leading-relaxed">
          Hello World. <span className="wave">👋</span>
        </p>
        {profile.insights.map((insight, index) => (
          <p key={index} className="leading-relaxed">
            {insight}
          </p>
        ))}
      </main>
      <footer className="my-12 grid grid-cols-3">
        <Link href={social.email.href} target="_blank" className="flex gap-2">
          <ArrowUpRight /> E-mail
        </Link>
        <Link href={social.github.href} target="_blank" className="flex gap-2">
          <ArrowUpRight /> Github
        </Link>
        <Link
          href={social.linkedin.href}
          target="_blank"
          className="flex gap-2"
        >
          <ArrowUpRight /> Linkedin
        </Link>
      </footer>
    </>
  )
}
