import { Project as ProjectType } from '@/lib/cosmic-types'
import Image from 'next/image'
import Link from 'next/link'

export function Project({ project }: { project: ProjectType }) {
  return (
    <div className="mb-10 mt-5 flex flex-col space-y-5 rounded-lg">
      <div className="relative flex h-60 w-full overflow-hidden rounded-lg border-2 border-stone-600">
        <Image
          src={project.project_image.url}
          layout="fill"
          objectFit="cover"
          alt={`Imagem do projeto ${project.title}`}
        />
      </div>

      <section className="flex items-center justify-between">
        <div className="mr-6 flex-1 text-start">
          <h1 className="font-serif text-2xl">{project.title}</h1>
          <p className="text-sm">
            {project.description.slice(0, 140).concat('...')}
          </p>
        </div>
        <Link
          href={`/projetos/${project.slug}`}
          className="flex items-center rounded border border-stone-700 px-2 py-1 text-sm hover:bg-stone-700"
        >
          Saiba mais
        </Link>
      </section>
    </div>
  )
}
