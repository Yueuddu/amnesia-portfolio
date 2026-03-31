'use client'

import { useEffect, useRef } from 'react'
import { useAudioContext } from './AudioProvider'

export function BackgroundAmbient() {
  const { isPlaying, isMuted } = useAudioContext()
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    audioRef.current = new Audio('/assets/audio/ambient-darkness.mp3')
    audioRef.current.loop = true
    audioRef.current.volume = isMuted ? 0 : 0.3

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.src = ''
      }
    }
  }, [])

  useEffect(() => {
    if (!audioRef.current) return

    if (isMuted) {
      audioRef.current.volume = 0
    } else {
      audioRef.current.volume = 0.3
    }
  }, [isMuted])

  useEffect(() => {
    if (!audioRef.current) return

    const playAudio = async () => {
      try {
        await audioRef.current?.play()
      } catch (err) {
        // Автовоспроизведение заблокировано браузером
        console.log('Autoplay blocked, waiting for user interaction')
      }
    }

    const handleInteraction = () => {
      playAudio()
      document.removeEventListener('click', handleInteraction)
      document.removeEventListener('keydown', handleInteraction)
    }

    document.addEventListener('click', handleInteraction)
    document.addEventListener('keydown', handleInteraction)

    return () => {
      document.removeEventListener('click', handleInteraction)
      document.removeEventListener('keydown', handleInteraction)
    }
  }, [])

  return null
}
