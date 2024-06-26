import { getCosmicData } from '@/actions'
import { ListPosts } from '@/components/ListPosts'
import { Title } from '@/components/common/Title'
import { Wrapper } from '@/components/common/Wrapper'

export default async function Blog() {
  const { metadata } = await getCosmicData().then((data) => data.object)

  if (!metadata.blog.length) {
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
      {metadata.blog
        .sort(
          (a, b) =>
            new Date(b.metadata.published_at).getTime() -
            new Date(a.metadata.published_at).getTime(),
        )
        .map((post) => (
          <ListPosts key={post.slug} post={post} />
        ))}
    </Wrapper>
  )
}
