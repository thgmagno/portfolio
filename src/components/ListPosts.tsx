'use client'

import { PostType } from '@/lib/types'
import Link from 'next/link'

interface Props {
  title: string
  post: PostType
}

export function ListPosts({ title, post }: Props) {
  const createdAt = new Date(post.createdAt).toLocaleDateString('pt-br', {
    dateStyle: 'medium',
  })

  return (
    <div className="my-5 flex flex-col">
      <Link href={`/blog/${encodeURIComponent(title)}`}>{title}</Link>
      <span className="text-sm text-stone-500">{createdAt}</span>
    </div>
  )
}
