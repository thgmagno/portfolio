'use client'

import { PostType } from '@/lib/types'

interface Props {
  title: string
  post: PostType
}

export function Post({ title, post }: Props) {
  const createdAt = new Date(post.createdAt).toLocaleDateString('pt-br', {
    dateStyle: 'medium',
  })

  return (
    <div className="my-5 flex flex-col">
      <section className="my-5 flex flex-col space-y-5">
        <header>
          <h1 className="text-center text-lg font-medium">{title}</h1>
        </header>
        <main className="text-justify">
          <p>{post.content}</p>
        </main>
        <footer className="mx-auto text-sm text-stone-500">
          <span>{createdAt}</span>
        </footer>
      </section>
    </div>
  )
}
