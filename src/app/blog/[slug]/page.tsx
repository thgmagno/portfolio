import * as actions from '@/actions'
import { Post } from '@/components/Post'
import { Wrapper } from '@/components/common/Wrapper'
import { redirect } from 'next/navigation'

export default async function ViewPost({
  params,
}: {
  params: { slug: string }
}) {
  const posts = await actions.getPostByTitle(decodeURIComponent(params.slug))

  if (!posts) redirect('/blog')

  return (
    <Wrapper>
      <Post
        post={{
          title: String(Object.values(posts)[0]),
          content: String(Object.values(posts)[1]),
          createdAt: String(Object.values(posts)[2]),
        }}
      />
    </Wrapper>
  )
}
