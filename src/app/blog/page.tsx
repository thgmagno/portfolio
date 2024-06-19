import * as actions from '@/actions'
import { Post } from '@/components/Post'
import { ReactNode } from 'react'

export default async function Blog() {
  const posts = await actions.getAllPosts()

  const Wrapper = ({ children }: { children: ReactNode }) => (
    <section className="mb-10 pr-5">{children}</section>
  )

  const Title = ({ title }: { title: string }) => (
    <b className="font-serif text-xl md:text-2xl">{title}</b>
  )

  return (
    <Wrapper>
      <Title title="Blog pessoal" />
      {posts &&
        Object.entries(posts).map(([title, content]) => (
          <Post key={title} post={content} />
        ))}
    </Wrapper>
  )
}
