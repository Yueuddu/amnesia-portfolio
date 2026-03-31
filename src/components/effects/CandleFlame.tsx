'use client'

import { useEffect, useRef } from 'react'

export function CandleFlame() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = 200
    canvas.height = 300

    let animationId: number
    let time = 0

    const drawFlame = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const centerX = canvas.width / 2
      const baseY = canvas.height - 50

      // Градиент пламени
      const gradient = ctx.createRadialGradient(
        centerX,
        baseY - 80,
        0,
        centerX,
        baseY - 60,
        100
      )
      gradient.addColorStop(0, 'rgba(255, 200, 100, 0.9)')
      gradient.addColorStop(0.3, 'rgba(255, 150, 50, 0.6)')
      gradient.addColorStop(0.6, 'rgba(255, 100, 30, 0.3)')
      gradient.addColorStop(1, 'rgba(255, 50, 0, 0)')

      // Мерцание
      const flickerX = Math.sin(time * 0.1) * 5 + Math.sin(time * 0.3) * 3
      const flickerY = Math.cos(time * 0.15) * 8
      const scale = 1 + Math.sin(time * 0.2) * 0.1

      ctx.save()
      ctx.translate(centerX + flickerX, baseY + flickerY)
      ctx.scale(scale, scale)

      // Основная форма пламени
      ctx.beginPath()
      ctx.moveTo(0, 0)
      ctx.bezierCurveTo(-30, -60, -20, -120, 0, -150)
      ctx.bezierCurveTo(20, -120, 30, -60, 0, 0)
      ctx.fillStyle = gradient
      ctx.fill()

      // Внутреннее свечение
      const innerGradient = ctx.createRadialGradient(0, -80, 0, 0, -80, 40)
      innerGradient.addColorStop(0, 'rgba(255, 255, 200, 0.8)')
      innerGradient.addColorStop(1, 'rgba(255, 200, 100, 0)')

      ctx.beginPath()
      ctx.ellipse(0, -80, 15, 30, 0, 0, Math.PI * 2)
      ctx.fillStyle = innerGradient
      ctx.fill()

      ctx.restore()

      time += 0.05
      animationId = requestAnimationFrame(drawFlame)
    }

    drawFlame()

    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <div className="candle-flicker">
      <canvas ref={canvasRef} className="candle-flicker__canvas" />
      <div className="candle-flicker__flame" />
    </div>
  )
}
