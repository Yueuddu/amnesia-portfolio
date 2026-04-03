'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useAudio } from '@/hooks/useAudio'
import { useScrollLock } from '@/hooks/useScrollLock'
import { AmnesiaButton } from '@/components/ui/AmnesiaButton'
import './navigation.scss'

const navItems = [
  { label: 'Начать игру', href: '/' },
  { label: 'Обо мне', href: '/about' },
  { label: 'Проекты', href: '/projects' },
  { label: 'Контакты', href: '/contacts' }
]

export function Navigation() {
  const pathname = usePathname()
  const { play } = useAudio()
  const [isMenuOpen, setIsMenuOpen] = useScrollLock()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <>
      <button className="navigation__toggle" onClick={toggleMenu}>
        <span className="navigation__toggle-icon">
          {isMenuOpen ? '×' : '☰'}
        </span>
      </button>

      <nav className={`navigation ${isMenuOpen ? 'navigation--open' : ''}`}>
        <div className="navigation__content">
          <h2 className="navigation__title heading-style">Papakin</h2>
          
          <ul className="navigation__list">
            {navItems.map((item, index) => {
              const isActive = pathname === item.href
              return (
                <li key={item.href} className="navigation__item">
                  <Link
                    href={item.href}
                    className={`navigation__link ${isActive ? 'navigation__link--active' : ''}`}
                    onMouseEnter={() => play('hover')}
                    onClick={() => {
                      play('click')
                      setIsMenuOpen(false)
                    }}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>
          
          <div className="navigation__divider" />
          
          <div className="navigation__social">
            <a 
              href="https://github.com/VovlichenKOS" 
              target="_blank" 
              rel="noopener noreferrer"
              className="navigation__social-link"
              onMouseEnter={() => play('hover')}
            >
              GitHub
            </a>
            <a 
              href="https://t.me/Pampakin" 
              target="_blank" 
              rel="noopener noreferrer"
              className="navigation__social-link"
              onMouseEnter={() => play('hover')}
            >
              Telegram
            </a>
          </div>
          
          <p className="navigation__subtitle">
            Выбери свой путь...
          </p>
        </div>
      </nav>
    </>
  )
}
