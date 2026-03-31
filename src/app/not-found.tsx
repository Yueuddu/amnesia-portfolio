import Link from 'next/link'
import { AmnesiaButton } from '@/components/ui/AmnesiaButton'
import { generateSEO } from '@/utils/seo'
import type { Metadata } from 'next'
import './not-found.scss'

const seo = generateSEO({
  title: 'Страница не найдена',
  description: '404 - Страница не найдена в лабиринте воспоминаний'
})

export const metadata: Metadata = seo

export default function NotFound() {
  return (
    <div className="not-found-page">
      <div className="not-found-page__content">
        <h1 className="not-found-page__title heading-style">404</h1>
        <p className="not-found-page__subtitle">
          Эта страница потеряна во тьме...
        </p>
        <p className="not-found-page__description">
          Похоже, ты забрёл слишком глубоко в лабиринт воспоминаний. 
          Здесь нет ничего, кроме пустоты и отчаяния.
        </p>
        
        <Link href="/">
          <AmnesiaButton variant="primary" size="large">
            Вернуться назад
          </AmnesiaButton>
        </Link>
      </div>
    </div>
  )
}
