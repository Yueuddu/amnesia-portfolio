import type { Experience } from '@/types/experience'

export const experience: Experience[] = [
  {
    id: 'freelance',
    position: 'Frontend Разработчик',
    company: 'Фриланс',
    period: '2022 — 2026',
    description: 'Разработка веб-приложений и сайтов для различных клиентов. Создание современных интерфейсов с использованием React, Next.js и TypeScript.',
    technologies: ['React', 'Next.js', 'TypeScript', 'SCSS', 'Tailwind'],
    achievements: [
      'Разработано 15+ проектов различной сложности',
      'Внедрение современных практик разработки',
      'Оптимизация производительности приложений'
    ]
  },
  {
    id: 'pet-projects',
    position: 'Pet-проекты',
    company: 'Личные проекты',
    period: '2022 — 2026',
    description: 'Разработка собственных проектов для изучения новых технологий и совершенствования навыков.',
    technologies: ['Vue.js', 'Node.js', 'PostgreSQL', 'Firebase'],
    achievements: [
      'Создание портфолио проектов',
      'Изучение fullstack-разработки',
      'Участие в open-source сообществах'
    ]
  }
]
