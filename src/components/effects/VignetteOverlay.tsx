export function VignetteOverlay() {
  return (
    <div 
      className="vignette-overlay"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 20,
        background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0, 0, 0, 0.6) 70%, rgba(0, 0, 0, 0.9) 100%)'
      }}
    />
  )
}
