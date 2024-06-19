import * as actions from '@/actions'
import { Post } from '@/components/Post'
import { Title } from '@/components/common/Title'
import { Wrapper } from '@/components/common/Wrapper'

export default async function Blog() {
  const posts = await actions.getPosts()

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
