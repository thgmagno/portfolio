export type PostType = {
  title: string
  content: string
  createdAt: string
}

export type ProjectType = {
  name: string
  description: string
  features: {
    label: string
    description: string
  }[]
  tecnologies: {
    label: string
    href: string
  }[]
  link: string
  imageUrl: string
}
