'use client'

import { AmnesiaButton } from '@/components/ui/AmnesiaButton'
import { useAudio } from '@/hooks/useAudio'
import './hero-section.scss'

interface HeroSectionProps {
  title: string
  subtitle: string
  ctaLabel?: string
  onCtaClick?: () => void
}

export function HeroSection({ title, subtitle, ctaLabel, onCtaClick }: HeroSectionProps) {
  const { play } = useAudio()

  return (
    <section className="hero-section">
      <div className="hero-section__content">
        <h1 className="hero-section__title heading-style">{title}</h1>
        <p className="hero-section__subtitle">{subtitle}</p>

        {ctaLabel && onCtaClick && (
          <AmnesiaButton
            onClick={() => {
              play('click')
              onCtaClick()
            }}
            variant="primary"
            size="large"
          >
            {ctaLabel}
          </AmnesiaButton>
        )}
      </div>
    </section>
  )
}
