import { CreatePostForm } from '@/components/CreatePostForm'
import { Title } from '@/components/common/Title'
import { Wrapper } from '@/components/common/Wrapper'

export default function page() {
  return (
    <Wrapper>
      <Title title="Inserir nova postagem" />
      <CreatePostForm />
    </Wrapper>
  )
}
