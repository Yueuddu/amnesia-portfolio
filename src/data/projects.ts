import type { Project } from '@/types/project'

export const projects: Project[] = [
  {
    id: 'lovecraft-store',
    title: 'Книжный магазин Лавкрафта',
    slug: 'lovecraft-store',
    description: 'Атмосферный интернет-магазин книг в стиле Г.Ф. Лавкрафта с каталогом произведений ужасов и мистики.',
    shortDescription: 'Магазин книг в стиле Лавкрафта',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    imageUrl: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFhUXGBgYFxcYGBgdGBoaGB0XGhcaGRodHyggGhomGxgaITEiJSkrLi4uGB8zODMtNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAQIAwwMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAFBgMEAAECBwj/xABCEAABAgMFBQcCBAQFAwUBAAABAhEAAyEEBRIxQQZRYXGBEyKRobHB8DLRI0Lh8QcUUmIVJFNygjSywjNjkpOiFv/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDzaz22YkflyZt/MRblXpOkgp7hKgalAJ3Uemr5ZwNRJUVpKnL1yo0W79AxpoQyN54CAPWDalkhBkS33sK0YuC9fCLEjaCWAMdlBeqmDHu5NVnZ6wmSgWDPVm/eLvYHFUsoZnjAOdhviwrU65JT3h3SHIG8l2gxOtdhqR2IwhkupirVmCCBzNY8/IAQCHd+ApzOv3jdlnJ7qN7lROb1yOlIBxst8WTCt5UnHgH4eJOP6k0Bw4ci+/hBVMmyLC1GyLCksSAhOWhS7fCIEXhd8gWSzOkGbiSUqQO8d+henoIvXuuYMMsGctSkuA5wjCQcQU2T0Y7oCKVNuxJUVSJiQAr8o3GrBVC+hinZ/wDDcONBWAznEhSgK6hzq0Vb4vdSknGod5qEZNmfpSNP3hctG0jDBJAwkVo3eLPrUUgG+fYLCWONKsVaomB305/pECruu1KSVkgDuqJlzwQczkGhRRaJykuZicLYXdOOgBwjUbqcYknW6apCv80pYYAJJLlNAM6HlAOl2XZYZgdEyWEsSyytB4EPx9t8MNiutAASLVMendTaFBPQPlHl1kvAymlzE92ocZp3hsoabFYVGWZkuYVoIHeRTA2igwOQzgH2yXIjCRMWVg6TFCZ5qBaIFbC2AjCZCXP5kkpI5EANCzdt8YUlPaHEMgsnMaE68oyXelqmLmYpwYglIBYBuOYgCVr/AIe2QlIlicP9s4kP1eOB/DeRiYG0jiFpI5ZO0Q7QN/ImdLVgUwONCiMTFqqS2Ic4WrsvdSXUJi0lgFMSUE1rV68oBuH8KpTuJ0+lW7h/8Y5nfwvSo4lWia+8oSKDgICr2wnSk4UzVvyPedweY4ekELv/AIgTqhSSrUMS1A5cmAqWj+GdqCu7aJSkD6SpKkqbjhp1iOR/Dq3l37AhjUzFMdw+l68YLy/4hzZhZCC5UkMK55iuvHKHW1W+dJCFsJiGdSEpAWHoCCSxHCA8vOwFsQoPLQsaso57iGj07ZKZMk2eXKmy1Y0ghxUcNxfSC6bfLZJKSCqjUJHPdHK75kILFySahqht8AEmbebJSlKJiQpJBBwggg5EEVBBgC9t2rtEwYTOmYRkCqg6CnKJrPf81BZaQ4yJAPpQx0u60zP8A00n/AIj7R0N2zDnJlH/iPtAL9l7a2hRZKZa/8Agoj1EeibP20mYkJnSwhRydJY9Dn6R40bpmf4aT/xH2h12Y2rm2OYJc1RmyCQCkn8Mn+4f2n5oD3O0ywtJRhDBjXgY8d2u2Wmyz1oH01Kf8A4mnoFk2hJtCQqTMSoHcQfQ5iF3bHZaZ6TOk0mAZf1Dl80gPJ5RqIY9lJ2G0oHFQHiYXJ0lSCQoEEGihiB4xY2Smn2hH93uIB6fZ5gYR0M0RQs80MIlM2A7GaIjE2IjNIBW2hLxS1DgYR0oUQ27Ql4paRxEBJYpH6wF2bE0kV+3jEJl1584lCqHn9o2I0gJrMv8AqO74YU9pJOGW4yDjwI9oapv1eJN8S8VnmD+0n0gPKZ0s15e0VzSLO0JYqf8AqPpFQwH//Z',
    demoUrl: 'https://akniga.org/author/%D0%9B%D0%B0%D0%B2%D0%BA%D1%80%D0%B0%D1%84%D1%82%20%D0%93%D0%BE%D0%B2%D0%B0%D1%80%D0%B4/',
    githubUrl: 'https://github.com/NeZorinEgor/Bookstore-DB-',
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
    demoUrl: 'https://www.kinopoisk.ru/?utm_referrer=www.google.com',
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
