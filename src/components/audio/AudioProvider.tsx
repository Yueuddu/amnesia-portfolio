'use client'

import { createContext, useContext, ReactNode } from 'react'
import { useAudio } from '@/hooks/useAudio'

interface AudioContextType {
  isPlaying: boolean
  isMuted: boolean
  volume: number
  play: (soundName?: string) => void
  pause: () => void
  toggleMute: () => void
  setVolume: (volume: number) => void
}

const AudioContext = createContext<AudioContextType | null>(null)

interface AudioProviderProps {
  children: ReactNode
}

export function AudioProvider({ children }: AudioProviderProps) {
  const audio = useAudio()

  return (
    <AudioContext.Provider value={audio}>
      {children}
    </AudioContext.Provider>
  )
}

export function useAudioContext() {
  const context = useContext(AudioContext)
  if (!context) {
    throw new Error('useAudioContext must be used within AudioProvider')
  }
  return context
}
