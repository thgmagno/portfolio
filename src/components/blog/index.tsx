'use client'

import { Post } from '@/lib/cosmic-types'
import { ListPosts } from '@/components/blog/ListPosts'

export function Blog({ data }: { data: Post[] }) {
  return (
    <>
      {data
        .sort(
          (a, b) =>
            new Date(b.metadata.published_at).getTime() -
            new Date(a.metadata.published_at).getTime(),
        )
        .map((post) => (
          <ListPosts key={post.slug} post={post} />
        ))}
    </>
  )
}
