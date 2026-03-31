import type { Metadata } from 'next'
import { AudioProvider } from '@/components/audio/AudioProvider'
import { Navigation } from '@/components/layout/Navigation'
import { BackgroundAmbient } from '@/components/audio/BackgroundAmbient'
import { VignetteOverlay } from '@/components/effects/VignetteOverlay'
import { FilmGrain } from '@/components/effects/FilmGrain'
import { ParticleSmoke } from '@/components/effects/ParticleSmoke'
import { defaultSEO } from '@/utils/seo'
import './globals.scss'
import '@/../styles/amnesia-theme.scss'
import '@/../styles/responsive/_mobile.scss'
import '@/../styles/responsive/_tablet.scss'
import '@/../styles/responsive/_desktop.scss'
import '@/../styles/components/_modal.scss'

export const metadata: Metadata = {
  ...defaultSEO,
  metadataBase: new URL('https://vovlichenkos.github.io')
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0a0a0a" />
      </head>
      <body>
        <AudioProvider>
          <div className="app">
            {/* Фоновые эффекты */}
            <div className="amnesia-background">
              <div className="amnesia-background__image" />
              <div className="amnesia-background__overlay" />
            </div>
            
            <ParticleSmoke />
            <FilmGrain />
            <VignetteOverlay />
            
            {/* Навигация */}
            <Navigation />
            
            {/* Фоновый звук */}
            <BackgroundAmbient />
            
            {/* Контент */}
            <main className="app__main">
              {children}
            </main>
          </div>
        </AudioProvider>
      </body>
    </html>
  )
}
