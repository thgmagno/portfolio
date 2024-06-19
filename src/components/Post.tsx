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
    <div className="my-5 flex flex-col">
      <section className="my-5 flex flex-col space-y-5">
        <header>
          <h1 className="text-center text-lg font-medium">{post.title}</h1>
        </header>
        <main
          className="markdown text-justify"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <footer className="mx-auto text-sm text-stone-500">
          <span>{createdAt}</span>
        </footer>
      </section>
    </div>
  )
}
