export const SITE_CONFIG = {
  title: 'VovlichenKOS | Портфолио Разработчика',
  description: 'Персональное портфолио веб-разработчика. Проекты на React, Next.js, TypeScript. Стаж работы: 2022-2026.',
  keywords: [
    'веб-разработчик',
    'frontend',
    'react',
    'next.js',
    'typescript',
    'портфолио',
    'VovlichenKOS'
  ],
  author: 'VovlichenKOS',
  url: 'https://vovlichenkos.github.io/amnesia-portfolio',
  social: {
    github: 'https://github.com/VovlichenKOS',
    telegram: '@Pampakin'
  }
}

export const NAVIGATION_ITEMS = [
  { label: 'Начать игру', href: '/', icon: 'play' },
  { label: 'Обо мне', href: '/about', icon: 'profile' },
  { label: 'Проекты', href: '/projects', icon: 'folder' },
  { label: 'Контакты', href: '/contacts', icon: 'mail' },
] as const

export const SOCIAL_LINKS = [
  { name: 'GitHub', url: 'https://github.com/VovlichenKOS', icon: 'github' },
  { name: 'Telegram', url: 'https://t.me/Pampakin', icon: 'telegram' },
  { name: 'VK', url: 'https://vk.com/vovlichenkos', icon: 'vk' },
] as const

export const WORK_PERIOD = {
  start: 2022,
  end: 2026,
  label: '2022 — 2026'
}
