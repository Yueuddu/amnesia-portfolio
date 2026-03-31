import Link from 'next/link'
import { AmnesiaButton } from '@/components/ui/AmnesiaButton'
import './header.scss'

export function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Link href="/" className="header__logo">
          <span className="header__logo-text">VovlichenKOS</span>
        </Link>
        
        <nav className="header__nav">
          <Link href="/about" className="header__link">
            Обо мне
          </Link>
          <Link href="/projects" className="header__link">
            Проекты
          </Link>
          <Link href="/contacts" className="header__link">
            Контакты
          </Link>
        </nav>
        
        <AmnesiaButton asLink href="/contacts" size="small" variant="primary">
          Связаться
        </AmnesiaButton>
      </div>
    </header>
  )
}
