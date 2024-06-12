import * as actions from '@/actions'
import { Post } from '@/components/Post'

export default async function Blog() {
  const posts = await actions.getAllPosts()

  return (
    <div className="page">
      <section className="flex flex-col space-y-3">
        <h1 className="font-serif text-xl font-bold md:text-3xl">
          Leia meu blog
        </h1>
        {posts !== null &&
          Object.entries(posts).map(([title, content]) => (
            <Post key={title} post={content} />
          ))}
      </section>
    </div>
  )
}
