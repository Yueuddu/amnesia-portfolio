'use client'

import { useEffect, useState } from 'react'

interface FogParticle {
  id: number
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
}

export function FogEffect() {
  const [particles, setParticles] = useState<FogParticle[]>([])

  useEffect(() => {
    const particleCount = 15
    const newParticles: FogParticle[] = []

    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 100 + Math.random() * 200,
        speedX: (Math.random() - 0.5) * 0.02,
        speedY: (Math.random() - 0.5) * 0.02,
        opacity: 0.1 + Math.random() * 0.2
      })
    }

    setParticles(newParticles)

    const animate = () => {
      setParticles(prev =>
        prev.map(p => ({
          ...p,
          x: (p.x + p.speedX * 100 + 100) % 100,
          y: (p.y + p.speedY * 100 + 100) % 100
        }))
      )
      requestAnimationFrame(animate)
    }

    const rafId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafId)
  }, [])

  return (
    <div className="fog-effect">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="fog-effect__particle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity
          }}
        />
      ))}
    </div>
  )
}
