import Image from 'next/image'
import Link from 'next/link'
import { AmnesiaButton } from './AmnesiaButton'
import { cn } from '@/utils/helpers'
import type { Project } from '@/types/project'
import '@/../styles/components/_cards.scss'

interface AmnesiaCardProps {
  project: Project
  variant?: 'vertical' | 'horizontal'
  className?: string
}

export function AmnesiaCard({ project, variant = 'vertical', className }: AmnesiaCardProps) {
  return (
    <article className={cn('amnesia-card', `amnesia-card--${variant}`, className)}>
      <Image
        src={project.imageUrl}
        alt={project.title}
        width={variant === 'horizontal' ? 280 : 400}
        height={variant === 'horizontal' ? 180 : 200}
        className="amnesia-card__image"
        priority={false}
      />
      
      <div className="amnesia-card__content">
        <h3 className="amnesia-card__title">{project.title}</h3>
        <p className="amnesia-card__description">{project.shortDescription}</p>
        
        <div className="amnesia-card__tech">
          {project.technologies.slice(0, 4).map(tech => (
            <span key={tech} className="amnesia-card__tech-item">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="amnesia-card__actions">
          {project.githubUrl && (
            <AmnesiaButton asLink href={project.githubUrl} size="small">
              Код
            </AmnesiaButton>
          )}
          {project.demoUrl && (
            <AmnesiaButton asLink href={project.demoUrl} variant="primary" size="small">
              Демо
            </AmnesiaButton>
          )}
          <AmnesiaButton asLink href={`/projects/${project.slug}`} size="small">
            Подробнее
          </AmnesiaButton>
        </div>
      </div>
    </article>
  )
}
