import { redirect } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Title } from '@/components/common/Title'
import { getCosmicData } from '@/actions'

export default async function ViewProject({
  params,
}: {
  params: { slug: string }
}) {
  const { metadata } = await getCosmicData().then((data) => data.object)

  const project = metadata.projects.find(
    (project) => project.slug === params.slug,
  )

  if (!project) redirect('/projetos')

  const features = metadata.features
    .filter((item) => item.slug === project.slug)
    .flatMap((feature) => feature.metadata.features)

  const technologies = metadata.technologies
    .filter((item) => item.slug === project.slug)
    .flatMap((tech) => tech.metadata.technologies)

  return (
    <div className="mb-10 flex flex-col space-y-3 rounded-lg">
      <Title title={`${project.title}`} />
      <p className="text-sm leading-relaxed">{project.description}</p>

      <Link
        href={project.project_url}
        target="_blank"
        title={`Visitar o projeto ${project.title}`}
        className="relative flex h-60 w-full overflow-hidden rounded-lg border-2 border-stone-600 hover:border-stone-300"
      >
        <Image
          src={project.project_image.url}
          layout="fill"
          objectFit="cover"
          alt={`Imagem do projeto ${project.title}`}
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
      <p className="text-sm leading-relaxed">{project.objective}</p>

      <section className="flex flex-col">
        <label className="mb-5 text-lg text-stone-500">Características:</label>
        {features.map((feature) => (
          <p key={feature.title} className="mb-3 font-thin leading-relaxed">
            <b>{feature.title}</b>: {feature.description}
          </p>
        ))}
      </section>

      <section className="flex flex-col space-y-5">
        <label className="text-lg text-stone-500">
          Tecnologias utilizadas:
        </label>
        <div className="grid grid-cols-3 gap-2 md:grid-cols-4">
          {technologies.sort().map((tech) => (
            <Link
              key={tech.title}
              href={tech.url}
              target="_blank"
              className="rounded border border-stone-700 px-2 py-0.5 text-sm hover:bg-stone-700"
            >
              {tech.title}
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
