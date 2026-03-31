import type { Metadata } from 'next'
import { AboutSection } from '@/components/sections/AboutSection'
import { SkillsSection } from '@/components/sections/SkillsSection'
import { ExperienceSection } from '@/components/sections/ExperienceSection'
import { generateSEO } from '@/utils/seo'
import './about-page.scss'

const seo = generateSEO({
  title: 'Обо мне',
  description: 'Информация о разработчике: навыки, опыт работы, технологии. Стаж работы с 2022 по 2026 год.'
})

export const metadata: Metadata = seo

export default function AboutPage() {
  return (
    <div className="about-page">
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
    </div>
  )
}
