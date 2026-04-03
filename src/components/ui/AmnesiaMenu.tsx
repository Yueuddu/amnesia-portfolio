'use client'

import Link from 'next/link'
import { useAudio } from '@/hooks/useAudio'
import '@/../styles/components/_menu.scss'

interface MenuItem {
  label: string
  href: string
  active?: boolean
}

interface AmnesiaMenuProps {
  items: MenuItem[]
  title?: string
}

export function AmnesiaMenu({ items, title = 'Papakin' }: AmnesiaMenuProps) {
  const { play } = useAudio()

  return (
    <nav className="amnesia-menu">
      <h1 className="amnesia-menu__title heading-style">{title}</h1>
      
      <ul className="amnesia-menu__list">
        {items.map((item, index) => (
          <li 
            key={item.href} 
            className={`amnesia-menu__item ${item.active ? 'amnesia-menu__item--active' : ''}`}
          >
            <Link
              href={item.href}
              className={`amnesia-menu__link ${item.active ? 'amnesia-menu__link--active' : ''}`}
              onMouseEnter={() => play('hover')}
              onClick={() => play('click')}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {item.label}
            </Link>
          </li>
        ))}
        
        <li className="amnesia-menu__item amnesia-menu__item--divider" />
        
        <li className="amnesia-menu__item">
          <Link
            href="/contacts"
            className="amnesia-menu__link"
            onMouseEnter={() => play('hover')}
            onClick={() => play('click')}
          >
            Связаться
          </Link>
        </li>
      </ul>
      
      <p className="amnesia-menu__subtitle">
        Выбери свой путь...
      </p>
    </nav>
  )
}
