'use client'

import { useEffect, useState } from 'react'

interface LightFlickerProps {
  children: React.ReactNode
  intensity?: 'low' | 'medium' | 'high'
}

export function LightFlicker({ children, intensity = 'medium' }: LightFlickerProps) {
  const [brightness, setBrightness] = useState(1)

  useEffect(() => {
    const intensities = {
      low: { min: 0.95, max: 1 },
      medium: { min: 0.85, max: 1 },
      high: { min: 0.7, max: 1 }
    }

    const { min, max } = intensities[intensity]

    const flicker = () => {
      const random = min + Math.random() * (max - min)
      setBrightness(random)

      const nextFlicker = 50 + Math.random() * 200
      setTimeout(flicker, nextFlicker)
    }

    const timeoutId = setTimeout(flicker, 100)
    return () => clearTimeout(timeoutId)
  }, [intensity])

  return (
    <div
      style={{
        filter: `brightness(${brightness})`,
        transition: 'filter 0.1s ease'
      }}
    >
      {children}
    </div>
  )
}
