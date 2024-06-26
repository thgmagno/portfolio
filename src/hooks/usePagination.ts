'use client'

import { Education } from '@/lib/cosmic-types'
import { ChangeEvent, useState } from 'react'

interface PaginationProps {
  data: Education[]
  itemsPerPage: number
}

interface UsePagination {
  currentPage: number
  currentItems: Education[]
  handleChange: (e: ChangeEvent<HTMLSelectElement>) => void
  prevPage: () => void
  nextPage: () => void
  pageTotal: number
  isFirstPage: boolean
  isLastPage: boolean
}

export function usePagination({
  data,
  itemsPerPage,
}: PaginationProps): UsePagination {
  const [filteredList, setFilteredList] = useState(data)
  const [currentPage, setCurrentPage] = useState(1)

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = filteredList
    .slice(indexOfFirstItem, indexOfLastItem)
    .sort((a, b) => Number(b.duration) - Number(a.duration))

  const pageTotal = Math.ceil(filteredList.length / itemsPerPage)
  const isFirstPage = currentPage === 1
  const isLastPage = indexOfLastItem >= filteredList.length

  function handleChange(e: ChangeEvent<HTMLSelectElement>) {
    if (e.target.value.length) {
      setFilteredList(data.filter((dt) => dt.category === e.target.value))
    } else {
      setFilteredList(data)
    }
    setCurrentPage(1)
  }

  function nextPage() {
    setCurrentPage((prevPage) => prevPage + 1)
  }

  function prevPage() {
    setCurrentPage((prevPage) => prevPage - 1)
  }

  return {
    handleChange,
    currentItems,
    currentPage,
    prevPage,
    nextPage,
    pageTotal,
    isFirstPage,
    isLastPage,
  }
}
