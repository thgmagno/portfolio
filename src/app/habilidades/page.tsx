import { ReactNode } from 'react'
import data from '@/data.json'

export default function Skills() {
  const { hardSkills, softSkills, language } = data

  const Wrapper = ({ children }: { children: ReactNode }) => (
    <section className="mb-10 pr-5">{children}</section>
  )

  const Title = ({ title }: { title: string }) => (
    <b className="font-serif text-xl md:text-2xl">{title}</b>
  )

  const Skill = ({ skill }: { skill: { label: string; level: number } }) => (
    <div className="my-3 flex justify-between">
      <span>{skill.label}</span>
      <div className="flex gap-2">
        {[...Array(5)].map((_, i) => (
          <span key={i}>
            {i < skill.level ? (
              <div className="h-4 w-4 rounded-full bg-neutral-200" />
            ) : (
              <div className="h-4 w-4 rounded-full bg-neutral-800" />
            )}
          </span>
        ))}
      </div>
    </div>
  )

  return (
    <>
      <Wrapper>
        <Title title="Habilidades técnicas" />
        {hardSkills.map((skill) => (
          <Skill key={skill.label} skill={skill} />
        ))}
      </Wrapper>

      <Wrapper>
        <Title title="Habilidades não técnicas" />
        {softSkills.map((skill) => (
          <Skill key={skill.label} skill={skill} />
        ))}
      </Wrapper>

      <Wrapper>
        <Title title="Idiomas" />
        {language.map((skill) => (
          <Skill key={skill.label} skill={skill} />
        ))}
      </Wrapper>
    </>
  )
}
