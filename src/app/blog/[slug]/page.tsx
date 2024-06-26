import * as actions from '@/actions'
import { Post } from '@/components/blog/Post'
import { Wrapper } from '@/components/common/Wrapper'
import { redirect } from 'next/navigation'

export default async function ViewPost({
  params,
}: {
  params: { slug: string }
}) {
  const { metadata } = await actions.getCosmicData().then((data) => data.object)

  const post = metadata.blog.find((post) => post.slug === params.slug)

  if (!post) redirect('/blog')

  return (
    <Wrapper>
      <Post post={post} />
    </Wrapper>
  )
}
