import * as actions from '@/actions'
import { ListPosts } from '@/components/ListPosts'
import { Title } from '@/components/common/Title'
import { Wrapper } from '@/components/common/Wrapper'

export default async function Blog() {
  const posts = await actions.getPosts()

  if (!posts) {
    return (
      <Wrapper>
        <Title title="Blog pessoal" />
        <p className="mt-10 cursor-default text-center text-sm text-stone-400">
          Nenhuma postagem encontrada.
        </p>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <Title title="Blog pessoal" />
      {Object.entries(posts)
        .reverse()
        .map(([title, post]) => (
          <ListPosts key={title} title={title} post={post} />
        ))}
    </Wrapper>
  )
}
