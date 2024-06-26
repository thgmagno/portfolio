interface Insights {
  paragraph: string
}

interface SocialNetwork {
  social: string
  url: string
}

export interface Education {
  instituition: string
  degree: string
  duration: string
  started_at: string
  ended_at: string | null
  category: string
  document_url: string
}

interface ProjectImage {
  url: string
  imgix_url: string
}

export interface Project {
  title: string
  slug: string
  description: string
  project_image: ProjectImage
  project_url: string
  objective: string
}

interface Feature {
  slug: string
  metadata: {
    features: {
      title: string
      description: string
    }[]
  }
}

interface Technology {
  slug: string
  metadata: {
    technologies: {
      title: string
      url: string
    }[]
  }
}

export interface Post {
  slug: string
  metadata: {
    title: string
    content: string
    slug: string
    published_at: string
    tags: {
      tag: string
    }[]
  }
}

interface Metadata {
  full_name: string
  occupation_area: string
  image_profile: {
    url: string
    imgix_url: string
  }
  insights: Insights[]
  social_network: SocialNetwork[]
  education: Education[]
  projects: Project[]
  features: Feature[]
  technologies: Technology[]
  blog: Post[]
}

export interface CosmicObject {
  object: {
    metadata: Metadata
  }
}
