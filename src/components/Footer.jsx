import Logo from './Logo.jsx'

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid #dde5ea', padding: '44px 24px' }}>
      <div
        style={{
          maxWidth: 1180,
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 20,
        }}
      >
        <Logo fontSize={19} label="MindBridge Coaching & Wellness" />
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 22, fontSize: 14 }}>
          <a href="tel:6473023425" style={{ textDecoration: 'none', color: '#4a5965' }}>
            647-302-3425
          </a>
          <a href="mailto:ekiomo@gmail.com" style={{ textDecoration: 'none', color: '#4a5965' }}>
            ekiomo@gmail.com
          </a>
          <span style={{ color: '#94a2ad' }}>© {new Date().getFullYear()} MindBridge</span>
        </div>
      </div>
    </footer>
  )
}
