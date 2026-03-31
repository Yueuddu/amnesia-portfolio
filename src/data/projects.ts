import type { Project } from '@/types/project'

export const projects: Project[] = [
  {
    id: 'lovecraft-store',
    title: 'Книжный магазин Лавкрафта',
    slug: 'lovecraft-store',
    description: 'Атмосферный интернет-магазин книг в стиле Г.Ф. Лавкрафта с каталогом произведений ужасов и мистики.',
    shortDescription: 'Магазин книг в стиле Лавкрафта',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    imageUrl: '/assets/images/projects/lovecraft-store.jpg',
    demoUrl: 'https://lovecraft-store.demo.com',
    githubUrl: 'https://github.com/VovlichenKOS/lovecraft-store',
    year: 2024,
    features: [
      'Каталог книг с фильтрацией по жанрам',
      'Система отзывов и рейтингов',
      'Корзина и оформление заказа',
      'Админ-панель для управления товарами'
    ]
  },
  {
    id: 'internet-forum',
    title: 'Интернет-Форум',
    slug: 'internet-forum',
    description: 'Современная платформа для обсуждений с тематическими разделами, системой репутации и модерацией.',
    shortDescription: 'Платформа для обсуждений',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'MySQL'],
    imageUrl: '/assets/images/projects/internet-forum.jpg',
    demoUrl: 'https://forum.demo.com',
    githubUrl: 'https://github.com/VovlichenKOS/internet-forum',
    year: 2023,
    features: [
      'Древовидная структура тем и комментариев',
      'Система репутации и достижений',
      'Модерация контента',
      'Уведомления в реальном времени'
    ]
  },
  {
    id: 'interactive-gallery',
    title: 'Интерактивная галерея',
    slug: 'interactive-gallery',
    description: 'Веб-приложение для просмотра и организации фотографий с поддержкой зума, слайдшоу и социальных функций.',
    shortDescription: 'Галерея с интерактивным просмотром',
    technologies: ['Vue.js', 'TypeScript', 'Firebase', 'Cloudinary'],
    imageUrl: '/assets/images/projects/interactive-gallery.jpg',
    demoUrl: 'https://gallery.demo.com',
    githubUrl: 'https://github.com/VovlichenKOS/interactive-gallery',
    year: 2024,
    features: [
      'Интерактивный просмотр с зумом',
      'Автоматические слайд-шоу',
      'Альбомы и теги',
      'Социальный шеринг'
    ]
  },
  {
    id: 'kinopoisk-mini',
    title: 'Кинопоиск-мини',
    slug: 'kinopoisk-mini',
    description: 'Упрощённая версия кинопоиска с каталогом фильмов, поиском, фильтрами и персональными рекомендациями.',
    shortDescription: 'Каталог фильмов с рекомендациями',
    technologies: ['React', 'Redux', 'TMDB API', 'SCSS'],
    imageUrl: '/assets/images/projects/kinopoisk-mini.jpg',
    demoUrl: 'https://kinopoisk-mini.demo.com',
    githubUrl: 'https://github.com/VovlichenKOS/kinopoisk-mini',
    year: 2023,
    features: [
      'Поиск и фильтрация фильмов',
      'Персональные рекомендации',
      'Избранные и просмотры',
      'Информация о актёрах и режиссёрах'
    ]
  }
]
