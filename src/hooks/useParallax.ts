'use client'

import { useEffect, useState } from 'react'

interface ParallaxOptions {
  speed?: number
  axis?: 'x' | 'y' | 'both'
}

export function useParallax(options: ParallaxOptions = {}): { x: number; y: number } {
  const { speed = 0.5, axis = 'both' } = options
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleScroll = () => {
      const newX = axis === 'x' || axis === 'both' ? window.scrollX * speed : 0
      const newY = axis === 'y' || axis === 'both' ? window.scrollY * speed : 0
      
      setPosition({ x: newX, y: newY })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed, axis])

  return position
}
