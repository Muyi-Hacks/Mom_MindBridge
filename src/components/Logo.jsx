export default function Logo({ fontSize = 21, label = 'MindBridge' }) {
  return (
    <a
      href="#top"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 11,
        textDecoration: 'none',
        color: '#1f2933',
      }}
    >
      <span style={{ position: 'relative', width: 30, height: 22, display: 'inline-block', flex: 'none' }}>
        <span
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: 22,
            height: 22,
            borderRadius: '50%',
            background: '#2d5a86',
          }}
        />
        <span
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            width: 22,
            height: 22,
            borderRadius: '50%',
            background: '#d98e5f',
            mixBlendMode: 'multiply',
          }}
        />
      </span>
      <span style={{ fontFamily: "'Newsreader', serif", fontSize, fontWeight: 600, letterSpacing: '-0.01em' }}>
        {label}
      </span>
    </a>
  )
}
