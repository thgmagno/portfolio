import { getCosmicData } from '@/actions'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  const { metadata } = await getCosmicData().then((data) => data.object)

  return (
    <>
      <header className="mb-6 flex items-center">
        <Image
          src={metadata.image_profile.url}
          alt={`Imagem de ${metadata.full_name}`}
          height={100}
          width={100}
          className="mr-5 rounded-full ring-2 ring-neutral-300"
        />
        <article className="flex flex-col space-y-2.5 font-serif">
          <h1 className="text-3xl md:text-5xl">{metadata.full_name}</h1>
          <span className="leading-relaxed text-stone-500">
            {metadata.occupation_area}
          </span>
        </article>
      </header>
      <main className="flex flex-col space-y-3">
        <p className="font-bold leading-relaxed">
          Hello World. <span className="wave">👋</span>
        </p>
        {metadata.insights.map((insight, index) => (
          <p key={index} className="leading-relaxed">
            {insight.paragraph}
          </p>
        ))}
      </main>
      <footer className="my-12 grid grid-cols-3">
        {metadata.social_network.map((social) => (
          <Link
            key={social.social}
            href={
              social.url.includes('gmail.com')
                ? `mailto:${social.url}`
                : social.url
            }
            className="flex gap-1"
          >
            <ArrowUpRight /> {social.social}
          </Link>
        ))}
      </footer>
    </>
  )
}
