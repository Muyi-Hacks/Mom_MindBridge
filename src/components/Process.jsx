import { steps } from '../data.jsx'

export default function Process() {
  return (
    <section id="process" style={{ background: '#eaeff3', padding: 'clamp(72px, 9vw, 120px) 24px' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div style={{ maxWidth: 600 }}>
          <span
            style={{
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#2d5a86',
            }}
          >
            How it works
          </span>
          <h2
            style={{
              fontFamily: "'Newsreader', serif",
              fontWeight: 500,
              fontSize: 'clamp(30px, 4.4vw, 46px)',
              lineHeight: 1.08,
              letterSpacing: '-0.02em',
              color: '#16293a',
              margin: '16px 0 0',
            }}
          >
            Getting started is simple
          </h2>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 22,
            marginTop: 48,
          }}
        >
          {steps.map((step) => (
            <div
              key={step.num}
              style={{ background: '#fff', border: '1px solid #e4eaef', borderRadius: 22, padding: 34 }}
            >
              <span
                style={{
                  fontFamily: "'Newsreader', serif",
                  fontSize: 40,
                  fontWeight: 500,
                  color: step.color,
                  lineHeight: 1,
                }}
              >
                {step.num}
              </span>
              <h3
                style={{
                  fontFamily: "'Newsreader', serif",
                  fontWeight: 600,
                  fontSize: 22,
                  color: '#16293a',
                  margin: '16px 0 8px',
                }}
              >
                {step.title}
              </h3>
              <p style={{ fontSize: 15, color: '#4a5965', margin: 0 }}>{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
