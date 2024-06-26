import { Education } from '@/lib/cosmic-types'
import { translateCategory } from '@/utils/TranslateCategory'
import { ChangeEvent } from 'react'

interface Props {
  data: Education[]
  handleChange: (e: ChangeEvent<HTMLSelectElement>) => void
}

export function SelectCategory({ data, handleChange }: Props) {
  const categoryOptions = Array.from(new Set(data.map((item) => item.category)))

  return (
    <section className="mt-3 inline-flex rounded border border-stone-700 px-2 py-1">
      <label className="text-stone-400">Filtrar por:</label>
      <select
        onChange={handleChange}
        className="bg-transparent px-2 outline-none"
      >
        <option value="">Todos</option>
        {categoryOptions.sort().map((category) => (
          <option key={category} value={category}>
            {translateCategory(category)}
          </option>
        ))}
      </select>
    </section>
  )
}
