import data from '@/data.json'
import { Wrapper } from '@/components/common/Wrapper'
import { Title } from '@/components/common/Title'
import { Skill } from '@/components/common/Skill'

export default function Skills() {
  const { hardSkills, softSkills, language } = data

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
