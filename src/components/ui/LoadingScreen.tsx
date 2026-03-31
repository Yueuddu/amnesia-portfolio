'use client'

import { useEffect, useState } from 'react'
import { AmnesiaButton } from './AmnesiaButton'

interface LoadingScreenProps {
  onComplete: () => void
  message?: string
}

export function LoadingScreen({ onComplete, message = 'Загрузка...' }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [dots, setDots] = useState('')

  useEffect(() => {
    const duration = 2000 // 2 секунды загрузка
    const interval = 50
    const increment = 100 / (duration / interval)

    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(onComplete, 500)
          return 100
        }
        return prev + increment
      })
    }, interval)

    // Анимация точек
    const dotsTimer = setInterval(() => {
      setDots(prev => (prev.length >= 3 ? '' : prev + '.'))
    }, 500)

    return () => {
      clearInterval(timer)
      clearInterval(dotsTimer)
    }
  }, [onComplete])

  return (
    <div className="loading-screen">
      <div className="loading-screen__content">
        <h1 className="loading-screen__title heading-style">AMNESIA</h1>
        
        <div className="loading-screen__bar">
          <div 
            className="loading-screen__progress" 
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <p className="loading-screen__message">
          {message}{dots}
        </p>
        
        <p className="loading-screen__tip">
          {progress < 50 ? 'Подготовка атмосферы...' : 'Загрузка воспоминаний...'}
        </p>
      </div>
      
      <style jsx>{`
        .loading-screen {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #0a0a0a;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
        }
        
        .loading-screen__content {
          text-align: center;
          max-width: 400px;
          padding: 40px;
        }
        
        .loading-screen__title {
          font-size: 3rem;
          color: #d4a574;
          margin-bottom: 40px;
          letter-spacing: 0.15em;
          text-shadow: 0 0 20px rgba(212, 165, 116, 0.3);
        }
        
        .loading-screen__bar {
          width: 100%;
          height: 4px;
          background: rgba(166, 124, 82, 0.3);
          margin-bottom: 20px;
          position: relative;
          overflow: hidden;
        }
        
        .loading-screen__progress {
          height: 100%;
          background: linear-gradient(90deg, #a67c52, #d4a574);
          transition: width 0.1s ease;
          box-shadow: 0 0 10px rgba(212, 165, 116, 0.5);
        }
        
        .loading-screen__message {
          font-size: 1.1rem;
          color: #c9b896;
          margin-bottom: 10px;
          font-style: italic;
        }
        
        .loading-screen__tip {
          font-size: 0.9rem;
          color: #5a5a5a;
        }
      `}</style>
    </div>
  )
}
