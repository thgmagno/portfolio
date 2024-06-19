'use client'

import { PostType } from '@/lib/types'
import { marked } from 'marked'

interface Props {
  post: PostType
}

export function Post({ post }: Props) {
  const createdAt = new Date(post.createdAt).toLocaleDateString('pt-br', {
    dateStyle: 'medium',
  })
  const html = marked.parse(post.content)

  return (
    <>
      <div className="mb-5 flex flex-col">
        <h1 className="font-serif md:text-2xl">{post.title}</h1>
        <span className="text-sm text-stone-500">{createdAt}</span>
      </div>
      <main
        className="markdown text-justify"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </>
  )
}
