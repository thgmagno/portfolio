import * as actions from '@/actions'
import { ListPosts } from '@/components/ListPosts'
import { Post } from '@/components/Post'
import { Title } from '@/components/common/Title'
import { Wrapper } from '@/components/common/Wrapper'

export default async function Blog({
  searchParams,
}: {
  searchParams?: { post?: string }
}) {
  const posts = await actions.getPosts(searchParams?.post)

  if (!posts) return null

  return (
    <Wrapper>
      {searchParams?.post ? (
        <Post
          post={{
            title: String(Object.values(posts)[0]),
            content: String(Object.values(posts)[1]),
            createdAt: String(Object.values(posts)[2]),
          }}
        />
      ) : (
        <>
          <Title title="Blog pessoal" />
          {Object.entries(posts)
            .reverse()
            .map(([title, post]) => (
              <ListPosts key={title} title={title} post={post} />
            ))}
        </>
      )}
    </Wrapper>
  )
}
