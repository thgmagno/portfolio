import { CreatePostForm } from '@/components/CreatePostForm'

export default function page() {
  return (
    <div className="page">
      <h1 className="font-serif text-xl font-bold md:text-3xl">
        Inserir nova postagem
      </h1>
      <CreatePostForm />
    </div>
  )
}
