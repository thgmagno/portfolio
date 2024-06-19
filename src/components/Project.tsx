import { ProjectType } from '@/lib/types'
import Image from 'next/image'
import Link from 'next/link'

export function Project({ project }: { project: ProjectType }) {
  return (
    <div className="mb-10 flex flex-col space-y-5 rounded-lg">
      <Image
        src={project.imageUrl}
        height={500}
        width={500}
        alt={`Imagem do projeto ${project.name}`}
        className="rounded-lg"
      />

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

      <section className="flex flex-col space-x-5">
        <label className="mb-5 text-lg font-bold text-stone-600">
          Características:
        </label>
        {project.features.map((feature) => {
          const hasSubdescription = feature.description.includes(
            '[sub-description]: ',
          )

          if (hasSubdescription) {
            const description = feature.description.split(
              '[sub-description]: ',
            )[0]

            const subdescriptions = feature.description
              .split('[sub-description]: ')[1]
              .split('/')

            return (
              <>
                <h2>
                  {feature.label} {description}
                </h2>
                <div className="mb-2.5">
                  {subdescriptions.map((sub, index) => (
                    <p key={index} className="mb-2.5">
                      {sub}
                    </p>
                  ))}
                </div>
              </>
            )
          }

          return (
            <>
              <h2 className="mb-2.5">
                {feature.label} {feature.description}
              </h2>
            </>
          )
        })}
      </section>

      <section className="flex flex-col space-y-5">
        <label className="text-lg font-bold text-stone-600">
          Tecnologias utilizadas:
        </label>
        <div className="grid grid-cols-4 gap-2">
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
