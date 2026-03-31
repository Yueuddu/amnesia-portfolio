'use client'

import { useState } from 'react'
import { AmnesiaMenu } from '@/components/ui/AmnesiaMenu'
import { LoadingScreen } from '@/components/ui/LoadingScreen'
import { HeroSection } from '@/components/sections/HeroSection'
import { NAVIGATION_ITEMS } from '@/utils/constants'
import './home-page.scss'

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true)
  const [gameStarted, setGameStarted] = useState(false)

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />
  }

  if (!gameStarted) {
    return (
      <div className="home-page">
        <AmnesiaMenu 
          items={NAVIGATION_ITEMS.map(item => ({
            label: item.label,
            href: item.href,
            active: false
          }))}
          title="AMNESIA"
        />
      </div>
    )
  }

  return (
    <HeroSection
      title="Добро пожаловать"
      subtitle="Путешествие через тьму кода и воспоминаний"
      ctaLabel="Начать игру"
      onCtaClick={() => setGameStarted(true)}
    />
  )
}
