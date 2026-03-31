import { projects } from '@/data/projects'
import { AmnesiaCard } from '@/components/ui/AmnesiaCard'
import './projects-section.scss'

export function ProjectsGrid() {
  return (
    <section className="projects-section">
      <h2 className="projects-section__title heading-style">Проекты</h2>
      
      <div className="projects-section__grid">
        {projects.map((project, index) => (
          <div 
            key={project.id}
            className="projects-section__item"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <AmnesiaCard project={project} />
          </div>
        ))}
      </div>
    </section>
  )
}
