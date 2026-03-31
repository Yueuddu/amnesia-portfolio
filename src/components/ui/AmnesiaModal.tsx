'use client'

import { ReactNode, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { AmnesiaButton } from './AmnesiaButton'
import { useScrollLock } from '@/hooks/useScrollLock'
import { cn } from '@/utils/helpers'

interface AmnesiaModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: ReactNode
  size?: 'small' | 'medium' | 'large'
}

export function AmnesiaModal({ isOpen, onClose, title, children, size = 'medium' }: AmnesiaModalProps) {
  const [, setIsScrollLocked] = useScrollLock()

  useEffect(() => {
    setIsScrollLocked(isOpen)
    
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      setIsScrollLocked(false)
    }
  }, [isOpen, onClose, setIsScrollLocked])

  if (!isOpen) return null

  return createPortal(
    <div className="amnesia-modal__overlay" onClick={onClose}>
      <div 
        className={cn('amnesia-modal', `amnesia-modal--${size}`)}
        onClick={e => e.stopPropagation()}
      >
        {title && (
          <div className="amnesia-modal__header">
            <h2 className="amnesia-modal__title heading-style">{title}</h2>
            <button className="amnesia-modal__close" onClick={onClose}>
              ×
            </button>
          </div>
        )}
        
        <div className="amnesia-modal__content">
          {children}
        </div>
        
        <div className="amnesia-modal__footer">
          <AmnesiaButton onClick={onClose} variant="primary">
            Закрыть
          </AmnesiaButton>
        </div>
      </div>
    </div>,
    document.body
  )
}
