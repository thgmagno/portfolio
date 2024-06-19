import Image from 'next/image'
import { EmailIcon } from './icons/EmailIcon'
import { LinkedinIcon } from './icons/LinkedinIcon'
import { GithubIcon } from './icons/GithubIcon'
import data from '@/data.json'

export function Profile() {
  const { profile, social } = data

  return (
    <section className="my-6 grid grid-cols-12">
      <div className="col-span-4 flex items-center justify-center">
        <Image
          src={profile.avatar}
          alt={`Imagem de ${profile.name}`}
          height={100}
          width={100}
          className="rounded-full"
        />
      </div>
      <div className="col-span-8 grid">
        <a target="_blank" href={social.email.href}>
          <span className="flex items-center gap-2">
            <EmailIcon />
            {social.email.address}
          </span>
        </a>
        <a target="_blank" href={social.github.href}>
          <span className="flex items-center gap-2">
            <GithubIcon />
            {social.github.username}
          </span>
        </a>
        <a target="_blank" href={social.linkedin.href}>
          <span className="flex items-center gap-2">
            <LinkedinIcon />
            {social.linkedin.username}
          </span>
        </a>
      </div>
    </section>
  )
}
