import { ReactNode } from 'react'
import data from '@/data.json'

export default function Education() {
  const { education } = data

  const Wrapper = ({ children }: { children: ReactNode }) => (
    <section className="mb-10 pr-5">{children}</section>
  )

  const Title = ({ title }: { title: string }) => (
    <b className="font-serif text-xl md:text-2xl">{title}</b>
  )

  return (
    <>
      <Wrapper>
        <Title title="Formação" />
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
      <button className="mx-auto w-full rounded border p-2 transition-colors duration-200 hover:bg-stone-600 md:w-fit">
        Baixar currículo em PDF
      </button>
    </>
  )
}
