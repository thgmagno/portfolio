'use client'

import Link from 'next/link'
import { ChangeEvent, useState } from 'react'

interface EducationProps {
  education: {
    degree: string
    at: string
    category: string
    hours: number
    link: string
  }[]
}

export function EducationRender({ education }: EducationProps) {
  const [filteredList, setFilteredList] = useState(education)

  function handleChange(e: ChangeEvent<HTMLSelectElement>) {
    if (e.target.value.length) {
      setFilteredList(
        education.filter((item) => item.category === e.target.value),
      )
    } else {
      setFilteredList(education)
    }
  }

  return (
    <>
      <section className="mt-3 inline-flex rounded border border-stone-700 px-2 py-1">
        <label className="text-stone-400">Filtrar por:</label>
        <select
          onChange={handleChange}
          className="bg-transparent px-2 outline-none"
        >
          <option value="">Todos</option>
          <option value="front-end">Front-end</option>
          <option value="back-end">Back-end</option>
          <option value="full-stack">Full-stack</option>
          <option value="fundamentals">Fundamentos</option>
          <option value="tools">Ferramentas</option>
        </select>
      </section>
      {filteredList
        .sort((a, b) => b.hours - a.hours)
        .map((item) => (
          <div
            key={item.degree}
            className="my-5 flex flex-col items-start text-start"
          >
            <Link
              href={item.link}
              target={item.link === '#' ? '_self' : '_blank'}
              className={`${item.link === '#' ? 'cursor-default' : 'hover:underline'}`}
            >
              <b>
                {item.degree} - {item.at}
              </b>
            </Link>
            <p className="cursor-default font-light text-stone-300">
              {item.hours} horas
            </p>
          </div>
        ))}
    </>
  )
}
