import { ProjectType } from '@/lib/types'
import Image from 'next/image'
import Link from 'next/link'

export function Project({ project }: { project: ProjectType }) {
  return (
    <div className="mb-10 mt-5 flex flex-col space-y-5 rounded-lg">
      <div className="relative flex h-60 w-full">
        <Image
          src={project.imageUrl}
          layout="fill"
          objectFit="cover"
          alt={`Imagem do projeto ${project.name}`}
          className="rounded-lg border-2 border-stone-600 shadow"
        />
      </div>

      <section className="flex items-center justify-between">
        <div className="mr-6 flex-1 text-start">
          <h1 className="font-serif text-2xl">{project.name}</h1>
          <p className="text-sm">{project.description}</p>
        </div>
        <Link
          href={project.link}
          target="_blank"
          className="min-w-20 rounded border p-2 transition-colors duration-200 hover:bg-stone-600"
        >
          Acessar
        </Link>
      </section>

      <section className="flex flex-col">
        <label className="mb-5 text-lg text-stone-500">Características:</label>
        {project.features.map((feature) => {
          return (
            <h2 className="mb-2.5 font-thin">
              <b>{feature.label}</b> {feature.description}
            </h2>
          )
        })}
      </section>

      <section className="flex flex-col space-y-5">
        <label className="text-lg text-stone-500">
          Tecnologias utilizadas:
        </label>
        <div className="grid grid-cols-3 gap-2 md:grid-cols-4">
          {project.tecnologies.sort().map((tec) => (
            <Link
              key={tec.label}
              href={tec.href}
              target="_blank"
              className="rounded border border-stone-500 bg-stone-600 px-2 py-0.5 text-sm"
            >
              {tec.label}
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
