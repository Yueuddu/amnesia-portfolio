'use client'

import { ButtonHTMLAttributes, forwardRef } from 'react'
import { useAudio } from '@/hooks/useAudio'
import { cn } from '@/utils/helpers'
import '@/../styles/components/_buttons.scss'

interface AmnesiaButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'primary' | 'blood'
  size?: 'small' | 'medium' | 'large'
  asLink?: boolean
  href?: string
}

export const AmnesiaButton = forwardRef<HTMLButtonElement, AmnesiaButtonProps>(
  ({ className, variant = 'default', size = 'medium', children, asLink, href, onClick, ...props }, ref) => {
    const { play } = useAudio()

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      play('click')
      onClick?.(e)
    }

    const classes = cn(
      'amnesia-button',
      {
        'amnesia-button--primary': variant === 'primary',
        'amnesia-button--blood': variant === 'blood',
        'amnesia-button--small': size === 'small',
        'amnesia-button--large': size === 'large'
      },
      className
    )

    if (asLink && href) {
      return (
        <a href={href} className={classes} onMouseEnter={() => play('hover')}>
          {children}
        </a>
      )
    }

    return (
      <button
        ref={ref}
        className={classes}
        onClick={handleClick}
        onMouseEnter={() => play('hover')}
        {...props}
      >
        {children}
      </button>
    )
  }
)

AmnesiaButton.displayName = 'AmnesiaButton'
