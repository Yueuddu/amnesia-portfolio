export function MenuDivider() {
  return (
    <div 
      className="menu-divider"
      style={{
        height: '1px',
        background: 'linear-gradient(90deg, transparent 0%, #a67c52 20%, #a67c52 80%, transparent 100%)',
        margin: '20px 0',
        opacity: 0.5
      }}
    />
  )
}
