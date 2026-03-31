'use client'

import { useEffect, useState } from 'react'

export function useScrollLock(): [boolean, (locked: boolean) => void] {
  const [isLocked, setIsLocked] = useState(false)

  useEffect(() => {
    if (isLocked) {
      document.body.classList.add('scroll-locked')
      document.body.style.overflow = 'hidden'
    } else {
      document.body.classList.remove('scroll-locked')
      document.body.style.overflow = ''
    }

    return () => {
      document.body.classList.remove('scroll-locked')
      document.body.style.overflow = ''
    }
  }, [isLocked])

  return [isLocked, setIsLocked]
}
