import { projects } from '@/data/projects'
import { notFound } from 'next/navigation'
import { AmnesiaButton } from '@/components/ui/AmnesiaButton'
import { generateSEO } from '@/utils/seo'
import type { Metadata } from 'next'
import Link from 'next/link'
import './project-page.scss'

interface ProjectPageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  return projects.map(project => ({
    slug: project.slug
  }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = projects.find(p => p.slug === params.slug)
  
  if (!project) {
    return generateSEO({ title: 'Проект не найден' })
  }
  
  return generateSEO({
    title: project.title,
    description: project.description
  })
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find(p => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="project-page">
      <article className="project-page__article">
        <div className="project-page__image-wrapper">
          <div className="project-page__image-placeholder">
            {project.title}
          </div>
        </div>
        
        <div className="project-page__content">
          <div className="project-page__header">
            <h1 className="project-page__title heading-style">{project.title}</h1>
            <span className="project-page__year">{project.year}</span>
          </div>
          
          <p className="project-page__description">{project.description}</p>
          
          <div className="project-page__section">
            <h2 className="project-page__section-title">Технологии</h2>
            <div className="project-page__tech">
              {project.technologies.map(tech => (
                <span key={tech} className="project-page__tech-item">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          {project.features && project.features.length > 0 && (
            <div className="project-page__section">
              <h2 className="project-page__section-title">Особенности</h2>
              <ul className="project-page__features">
                {project.features.map((feature, index) => (
                  <li key={index} className="project-page__feature">
                    <span className="project-page__bullet">›</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          <div className="project-page__actions">
            {project.demoUrl && (
              <AmnesiaButton asLink href={project.demoUrl} variant="primary" size="large">
                Посмотреть демо
              </AmnesiaButton>
            )}
            {project.githubUrl && (
              <AmnesiaButton asLink href={project.githubUrl} size="large">
                Исходный код
              </AmnesiaButton>
            )}
            <Link href="/projects">
              <AmnesiaButton size="large">
                Назад к проектам
              </AmnesiaButton>
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}
