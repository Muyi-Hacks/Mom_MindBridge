const blocks = [
  {
    label: 'Our mission',
    labelColor: '#d98e5f',
    text: 'To build stronger minds, stronger families, and healthier communities through compassionate coaching, education, and wellness support.',
    bordered: false,
  },
  {
    label: 'Our vision',
    labelColor: '#6ea7b8',
    text: 'To become a trusted leader in family wellness and mental health coaching, helping families flourish across Canada, Nigeria, and beyond.',
    bordered: true,
  },
]

export default function MissionVision() {
  return (
    <section style={{ padding: '0 24px' }}>
      <div
        style={{
          maxWidth: 1180,
          margin: '0 auto',
          background: '#16293a',
          borderRadius: 28,
          padding: 'clamp(40px, 6vw, 72px)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 'clamp(36px, 5vw, 64px)',
        }}
      >
        {blocks.map((block) => (
          <div
            key={block.label}
            style={
              block.bordered
                ? { borderLeft: '1px solid rgba(255,255,255,0.14)', paddingLeft: 'clamp(0px, 5vw, 64px)' }
                : undefined
            }
          >
            <span
              style={{
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: block.labelColor,
              }}
            >
              {block.label}
            </span>
            <p
              style={{
                fontFamily: "'Newsreader', serif",
                fontWeight: 400,
                fontSize: 'clamp(22px, 2.6vw, 30px)',
                lineHeight: 1.32,
                color: '#f4f6f8',
                margin: '18px 0 0',
                textWrap: 'pretty',
              }}
            >
              {block.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
