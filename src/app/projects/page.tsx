import type { Metadata } from 'next'
import { ProjectsGrid } from '@/components/sections/ProjectsGrid'
import { generateSEO } from '@/utils/seo'
import './projects-page.scss'

const seo = generateSEO({
  title: 'Проекты',
  description: 'Портфолио проектов: Книжный магазин Лавкрафта, Интернет-Форум, Интерактивная галерея, Кинопоиск-мини.'
})

export const metadata: Metadata = seo

export default function ProjectsPage() {
  return (
    <div className="projects-page">
      <ProjectsGrid />
    </div>
  )
}
