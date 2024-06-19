import * as actions from '@/actions'
import { ListPosts } from '@/components/ListPosts'
import { Post } from '@/components/Post'
import { Title } from '@/components/common/Title'
import { Wrapper } from '@/components/common/Wrapper'
import { Undo2 } from 'lucide-react'
import Link from 'next/link'

export default async function Blog({
  searchParams,
}: {
  searchParams?: { post?: string }
}) {
  const posts = await actions.getPosts(searchParams?.post)

  if (!posts) return null

  return (
    <Wrapper>
      <div className="flex justify-between">
        <Title title="Blog pessoal" />
        {searchParams?.post && (
          <Link
            href="/blog"
            className="inline-flex items-center rounded p-2 transition-colors duration-200 hover:bg-stone-600"
          >
            <Undo2 size={20} />
          </Link>
        )}
      </div>
      {searchParams?.post ? (
        <Post
          post={{
            title: String(Object.values(posts)[0]),
            content: String(Object.values(posts)[1]),
            createdAt: String(Object.values(posts)[2]),
          }}
        />
      ) : (
        Object.entries(posts)
          .reverse()
          .map(([title, post]) => (
            <ListPosts key={title} title={title} post={post} />
          ))
      )}
    </Wrapper>
  )
}
