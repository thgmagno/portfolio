'use client'

import { usePagination } from '@/hooks/usePagination'
import type { Education as EducationType } from '@/lib/cosmic-types'
import Link from 'next/link'
import { SelectCategory } from './SelectCategory'

interface EducationProps {
  education: EducationType[]
}

export function Education({ education }: EducationProps) {
  const {
    handleChange,
    currentItems,
    currentPage,
    prevPage,
    nextPage,
    pageTotal,
    isFirstPage,
    isLastPage,
  } = usePagination({ data: education, itemsPerPage: 10 })

  return (
    <>
      <SelectCategory data={education} handleChange={handleChange} />
      {currentItems.map((item) => (
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
          disabled={isFirstPage}
        >
          Anterior
        </button>
        <span className="cursor-default">
          Página {currentPage} de {pageTotal}
        </span>
        <button
          onClick={nextPage}
          className="hover:text-stone-300 active:scale-95 disabled:text-transparent"
          disabled={isLastPage}
        >
          Próxima
        </button>
      </section>
    </>
  )
}
