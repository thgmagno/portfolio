interface Props {
  post: {
    content: string
  }
}

export function Post({ post }: Props) {
  return (
    <div className="rounded-md border p-2">
      <h1>{post.content}</h1>
    </div>
  )
}
