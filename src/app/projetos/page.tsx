import data from '@/data.json'
import { Project } from '@/components/Project'
import { Wrapper } from '@/components/common/Wrapper'
import { Title } from '@/components/common/Title'
import React from 'react'

export default function page() {
  const { projects } = data
  return (
    <>
      <Wrapper>
        <Title title="Projetos" />
        {projects.sort().map((project) => (
          <React.Fragment key={project.name}>
            <Project project={project} />
            <hr className="my-10 border-stone-600" />
          </React.Fragment>
        ))}
      </Wrapper>
    </>
  )
}
