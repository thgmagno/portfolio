'use client'

import { Education } from '@/lib/cosmic-types'
import Link from 'next/link'
import { ChangeEvent, useState } from 'react'

interface EducationProps {
  education: Education[]
}

export function EducationRender({ education }: EducationProps) {
  const itemsPerPage = 10

  const [filteredList, setFilteredList] = useState(education)
  const [currentPage, setCurrentPage] = useState(1)

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = filteredList.slice(indexOfFirstItem, indexOfLastItem)

  const categoryOptions = Array.from(
    new Set(education.map((item) => item.category)),
  )

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
          {categoryOptions.sort().map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </section>
      {currentItems
        .sort((a, b) => Number(b.duration) - Number(a.duration))
        .map((item) => (
          <div
            key={item.degree}
            className="my-5 flex flex-col items-start text-start"
          >
            <Link
              href={item.document_url}
              target={item.document_url === '#' ? '_self' : '_blank'}
              className={`${item.document_url === '#' ? 'cursor-default' : 'hover:underline'}`}
            >
              <b>
                {item.degree} - {item.instituition}
              </b>
            </Link>
            <p className="cursor-default font-light text-stone-300">
              {item.duration} horas
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
