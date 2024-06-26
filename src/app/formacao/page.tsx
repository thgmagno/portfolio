import Link from 'next/link'
import { Wrapper } from '@/components/common/Wrapper'
import { Title } from '@/components/common/Title'
import { getCosmicData } from '@/actions'
import { Education } from '@/components/education'

export default async function EducationPage() {
  const { metadata } = await getCosmicData().then((data) => data.object)

  return (
    <>
      <Wrapper>
        <div className="flex items-center justify-between">
          <Title title="Formação" />
          <Link
            href="https://me-green-tau.vercel.app/"
            target="_blank"
            className="inline-flex gap-2 rounded border p-2 transition-colors duration-200 hover:bg-stone-600"
          >
            Currículo
          </Link>
        </div>
        <Education education={metadata.education} />
      </Wrapper>
    </>
  )
}
