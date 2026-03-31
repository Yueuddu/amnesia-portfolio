export interface Project {
  id: string
  title: string
  slug: string
  description: string
  shortDescription: string
  technologies: string[]
  imageUrl: string
  demoUrl?: string
  githubUrl?: string
  year: number
  features?: string[]
}
