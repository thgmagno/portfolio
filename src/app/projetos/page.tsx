import data from '@/data.json'
import { ReactNode } from 'react'
import { Project } from '@/components/Project'

export default function page() {
  const { projects } = data

  const Wrapper = ({ children }: { children: ReactNode }) => (
    <section className="mb-10 pr-5">{children}</section>
  )

  const Title = ({ title }: { title: string }) => (
    <b className="font-serif text-xl md:text-2xl">{title}</b>
  )

  return (
    <>
      <Wrapper>
        <Title title="Projetos" />
      </Wrapper>
      {projects.sort().map((project) => (
        <>
          <Project key={project.name} project={project} />
          <hr className="my-10 border-stone-600" />
        </>
      ))}
    </>
  )
}
