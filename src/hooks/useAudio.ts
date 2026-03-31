'use client'

import { useState, useEffect, useCallback, useRef } from 'react'

interface UseAudioReturn {
  isPlaying: boolean
  isMuted: boolean
  volume: number
  play: (soundName?: string) => void
  pause: () => void
  toggleMute: () => void
  setVolume: (volume: number) => void
}

export function useAudio(): UseAudioReturn {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [volume, setVolumeState] = useState(0.3)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const soundsRef = useRef<Map<string, HTMLAudioElement>>(new Map())

  useEffect(() => {
    // Предзагрузка звуков
    const soundFiles = {
      ambient: '/assets/audio/ambient-darkness.mp3',
      hover: '/assets/audio/menu-hover.mp3',
      click: '/assets/audio/menu-click.mp3',
      transition: '/assets/audio/page-transition.mp3'
    }

    Object.entries(soundFiles).forEach(([name, src]) => {
      const audio = new Audio(src)
      audio.loop = name === 'ambient'
      audio.preload = 'auto'
      soundsRef.current.set(name, audio)
    })

    return () => {
      soundsRef.current.forEach(audio => {
        audio.pause()
        audio.src = ''
      })
    }
  }, [])

  useEffect(() => {
    soundsRef.current.forEach(audio => {
      audio.volume = isMuted ? 0 : volume
    })
  }, [isMuted, volume])

  const play = useCallback((soundName: string = 'ambient') => {
    const sound = soundsRef.current.get(soundName)
    if (sound) {
      sound.currentTime = 0
      sound.play().catch(() => {})
      setIsPlaying(true)
    }
  }, [])

  const pause = useCallback(() => {
    soundsRef.current.forEach(audio => {
      audio.pause()
    })
    setIsPlaying(false)
  }, [])

  const toggleMute = useCallback(() => {
    setIsMuted(prev => !prev)
  }, [])

  const setVolume = useCallback((newVolume: number) => {
    setVolumeState(Math.max(0, Math.min(1, newVolume)))
  }, [])

  return {
    isPlaying,
    isMuted,
    volume,
    play,
    pause,
    toggleMute,
    setVolume
  }
}
