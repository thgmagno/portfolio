import { getCosmicData } from '@/actions'
import { Blog } from '@/components/blog'
import { Title } from '@/components/common/Title'
import { Wrapper } from '@/components/common/Wrapper'

export default async function BlogPage() {
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
      <Blog data={metadata.blog} />
    </Wrapper>
  )
}
