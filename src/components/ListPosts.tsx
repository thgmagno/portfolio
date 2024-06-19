'use client'

import { PostType } from '@/lib/types'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface Props {
  title: string
  post: PostType
}

export function ListPosts({ title, post }: Props) {
  const pathname = usePathname()

  const createdAt = new Date(post.createdAt).toLocaleDateString('pt-br', {
    dateStyle: 'medium',
  })

  return (
    <div className="my-5 flex flex-col">
      <Link href={{ pathname, query: { post: title } }}>{title}</Link>
      <span className="text-sm text-stone-500">{createdAt}</span>
    </div>
  )
}
