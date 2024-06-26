import { Wrapper } from '@/components/common/Wrapper'
import { Title } from '@/components/common/Title'
import React from 'react'
import { getCosmicData } from '@/actions'
import { Project } from '@/components/project'

export default async function page() {
  const { metadata } = await getCosmicData().then((data) => data.object)

  return (
    <>
      <Wrapper>
        <Title title="Projetos" />
        {metadata.projects.sort().map((project) => (
          <React.Fragment key={project.title}>
            <Project project={project} />
            <hr className="my-10 border-stone-600 last:border-none" />
          </React.Fragment>
        ))}
      </Wrapper>
    </>
  )
}
