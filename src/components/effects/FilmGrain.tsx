'use client'

import { useEffect, useRef } from 'react'

export function FilmGrain() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    let animationId: number

    const drawGrain = () => {
      const imageData = ctx.createImageData(canvas.width, canvas.height)
      const data = imageData.data

      for (let i = 0; i < data.length; i += 4) {
        const grain = (Math.random() - 0.5) * 30
        data[i] = grain     // R
        data[i + 1] = grain // G
        data[i + 2] = grain // B
        data[i + 3] = 20    // Alpha (низкая прозрачность)
      }

      ctx.putImageData(imageData, 0, 0)
      animationId = requestAnimationFrame(drawGrain)
    }

    drawGrain()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="film-grain"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 30,
        opacity: 0.08
      }}
    />
  )
}
