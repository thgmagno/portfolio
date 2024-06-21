import { redirect } from 'next/navigation'
import data from '@/data.json'
import Image from 'next/image'
import Link from 'next/link'
import { Title } from '@/components/common/Title'

export default async function ViewProject({
  params,
}: {
  params: { slug: string }
}) {
  const project = data.projects.filter(
    (project) => project.name === decodeURIComponent(params.slug),
  )[0]

  if (!project) redirect('/projetos')

  return (
    <div className="mb-10 flex flex-col space-y-3 rounded-lg">
      <Title title={`${project.name}`} />
      <p className="text-sm leading-relaxed">{project.description}</p>

      <Link
        href={project.link}
        target="_blank"
        title={`Visitar o projeto ${project.name}`}
        className="relative flex h-60 w-full overflow-hidden rounded-lg border-2 border-stone-600 hover:border-stone-300"
      >
        <Image
          src={project.imageUrl}
          layout="fill"
          objectFit="cover"
          alt={`Imagem do projeto ${project.name}`}
        />
      </Link>

      <div className="relative flex">
        <div className="mx-2 max-h-32 flex-1 -translate-y-2 border-b border-stone-700" />
        <p className="text-center text-xs text-stone-500">
          clique sobre a imagem para visitar o site
        </p>
        <div className="mx-2 max-h-32 flex-1 -translate-y-2 border-b border-stone-700" />
      </div>

      <label className="mb-5 text-lg text-stone-500">Objetivo:</label>
      <p className="text-sm leading-relaxed">{project.purpose}</p>

      <section className="flex flex-col">
        <label className="mb-5 text-lg text-stone-500">Características:</label>
        {project.features.map((feature) => {
          return (
            <p className="mb-2 font-thin leading-relaxed">
              <b>{feature.label}</b> {feature.description}
            </p>
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
              className="rounded border border-stone-700 px-2 py-0.5 text-sm hover:bg-stone-700"
            >
              {tec.label}
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
