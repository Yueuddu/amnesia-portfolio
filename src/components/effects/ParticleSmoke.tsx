'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  id: number
  x: number
  y: number
  vx: number
  vy: number
  size: number
  life: number
}

export function ParticleSmoke() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Particle[] = []
    let animationId: number
    let time = 0

    const createParticle = (): Particle => ({
      id: Math.random(),
      x: Math.random() * canvas.width,
      y: canvas.height + 50,
      vx: (Math.random() - 0.5) * 0.5,
      vy: -0.5 - Math.random() * 0.5,
      size: 20 + Math.random() * 40,
      life: 1
    })

    const drawParticle = (p: Particle) => {
      const gradient = ctx.createRadialGradient(
        p.x,
        p.y,
        0,
        p.x,
        p.y,
        p.size
      )
      gradient.addColorStop(0, `rgba(100, 100, 100, ${p.life * 0.15})`)
      gradient.addColorStop(1, 'rgba(50, 50, 50, 0)')

      ctx.beginPath()
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
      ctx.fillStyle = gradient
      ctx.fill()
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Создаём новые частицы
      if (time % 10 === 0 && particles.length < 30) {
        particles.push(createParticle())
      }

      // Обновляем и рисуем частицы
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy
        p.life -= 0.003
        p.size += 0.1

        if (p.life <= 0 || p.y < -50) {
          particles.splice(i, 1)
          continue
        }

        drawParticle(p)
      }

      time++
      animationId = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="smoke-particles"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 9
      }}
    />
  )
}
