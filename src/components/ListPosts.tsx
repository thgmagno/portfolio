'use client'

import { Post } from '@/lib/cosmic-types'
import Link from 'next/link'

export function ListPosts({ post }: { post: Post }) {
  const dateFormatted = new Date(post.metadata.published_at).toLocaleDateString(
    'pt-br',
    {
      dateStyle: 'medium',
    },
  )

  return (
    <div className="my-5 flex flex-col">
      <Link href={`/blog/${post.slug}`}>{post.metadata.title}</Link>
      <span className="text-sm text-stone-500">{dateFormatted}</span>
    </div>
  )
}
