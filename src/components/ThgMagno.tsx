import Image from 'next/image'
import { EmailIcon } from './icons/EmailIcon'
import { LinkedinIcon } from './icons/LinkedinIcon'
import { GithubIcon } from './icons/GithubIcon'

export function ThgMagno() {
  return (
    <section className="flex">
      <div className="relative h-16 w-16 rounded-full md:h-28 md:w-28">
        <Image
          src="/images/thiago.jpg"
          alt="Imagem de thiago magno"
          style={{ objectFit: 'cover', borderRadius: '50%' }}
          fill
        />
      </div>
      <div className="flex flex-1 flex-col justify-center space-y-1 pl-1.5 md:space-y-3 md:pl-6">
        <a target="_blank" href="mailto:thgmgn@gmail.com">
          <span className="flex items-center gap-2 text-sm md:text-base">
            <EmailIcon />
            thgmgn@gmail.com
          </span>
        </a>
        <a target="_blank" href="https://github.com/thgmagno">
          <span className="flex items-center gap-2 text-sm md:text-base">
            <GithubIcon />
            thgmagno
          </span>
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/thgmagno/">
          <span className="flex items-center gap-2 text-sm md:text-base">
            <LinkedinIcon />
            thgmagno
          </span>
        </a>
      </div>
    </section>
  )
}
