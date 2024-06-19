import data from '@/data.json'
import Link from 'next/link'
import { Wrapper } from '@/components/common/Wrapper'
import { Title } from '@/components/common/Title'

export default function Education() {
  const { education } = data

  return (
    <>
      <Wrapper>
        <div className="flex justify-between">
          <Title title="Formação" />
          <Link
            href="https://me-green-tau.vercel.app/"
            target="_blank"
            className="inline-flex gap-2 rounded border p-2 transition-colors duration-200 hover:bg-stone-600"
          >
            Currículo
          </Link>
        </div>
        {education.map((item) => (
          <div key={item.degree} className="my-5 flex flex-col text-start">
            <b>
              {item.degree} - {item.at}
            </b>
            <p className="font-light text-stone-300">
              {item.hours.toLocaleString()} horas
            </p>
          </div>
        ))}
      </Wrapper>
    </>
  )
}
