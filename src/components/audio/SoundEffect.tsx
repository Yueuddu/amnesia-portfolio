'use client'

import { useAudioContext } from './AudioProvider'

interface SoundEffectProps {
  sound: 'hover' | 'click' | 'transition'
  children: React.ReactNode
  trigger?: 'hover' | 'click' | 'both'
}

export function SoundEffect({ sound, children, trigger = 'both' }: SoundEffectProps) {
  const { play } = useAudioContext()

  const handleHover = () => {
    if (trigger === 'hover' || trigger === 'both') {
      play(sound)
    }
  }

  const handleClick = () => {
    if (trigger === 'click' || trigger === 'both') {
      play(sound)
    }
  }

  return (
    <span
      onMouseEnter={trigger === 'hover' || trigger === 'both' ? handleHover : undefined}
      onClick={trigger === 'click' || trigger === 'both' ? handleClick : undefined}
    >
      {children}
    </span>
  )
}
