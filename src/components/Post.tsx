interface Props {
  post: {
    content: string
  }
}

export function Post({ post }: Props) {
  return (
    <div>
      <h1>{post.content}</h1>
    </div>
  )
}
