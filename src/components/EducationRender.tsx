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
  const itemsPerPage = 10

  const [filteredList, setFilteredList] = useState(education)
  const [currentPage, setCurrentPage] = useState(1)

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = filteredList.slice(indexOfFirstItem, indexOfLastItem)

  function handleChange(e: ChangeEvent<HTMLSelectElement>) {
    if (e.target.value.length) {
      setFilteredList(
        education.filter((item) => item.category === e.target.value),
      )
    } else {
      setFilteredList(education)
    }
    setCurrentPage(1)
  }

  function nextPage() {
    setCurrentPage((prevPage) => prevPage + 1)
  }

  function prevPage() {
    setCurrentPage((prevPage) => prevPage - 1)
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
      {currentItems
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
      <section className="flex justify-between text-sm text-stone-400">
        <button
          onClick={prevPage}
          className="hover:text-stone-300 active:scale-95 disabled:text-transparent"
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        <span className="cursor-default">
          Página {currentPage} de{' '}
          {Math.ceil(filteredList.length / itemsPerPage)}
        </span>
        <button
          onClick={nextPage}
          className="hover:text-stone-300 active:scale-95 disabled:text-transparent"
          disabled={indexOfLastItem >= filteredList.length}
        >
          Próxima
        </button>
      </section>
    </>
  )
}
