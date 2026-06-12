export default function Hero() {
  return (
    <section id="top" style={{ padding: '148px 24px 80px' }}>
      <div
        style={{
          maxWidth: 1180,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))',
          gap: 'clamp(40px, 6vw, 80px)',
          alignItems: 'center',
        }}
      >
        <div style={{ animation: 'mbFadeUp 0.7s ease both' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: '#2d5a86',
              background: '#e3ecf3',
              padding: '7px 14px',
              borderRadius: 999,
            }}
          >
            Coaching · Workshops · Wellness
          </span>
          <h1
            style={{
              fontFamily: "'Newsreader', serif",
              fontWeight: 500,
              fontSize: 'clamp(40px, 6vw, 68px)',
              lineHeight: 1.04,
              letterSpacing: '-0.02em',
              margin: '24px 0 0',
              color: '#16293a',
              textWrap: 'balance',
            }}
          >
            Building stronger minds,{' '}
            <em style={{ fontStyle: 'italic', color: '#2d5a86' }}>stronger families.</em>
          </h1>
          <p
            style={{
              fontSize: 'clamp(17px, 2vw, 19px)',
              color: '#4a5965',
              maxWidth: '30em',
              margin: '24px 0 0',
            }}
          >
            We help parents, children, and families build emotional resilience, communicate better, and
            thrive — through compassionate coaching, education, and wellness support.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 34 }}>
            <a
              href="tel:6473023425"
              className="mb-cta-primary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                textDecoration: 'none',
                background: '#d98e5f',
                color: '#fff',
                fontSize: 16,
                fontWeight: 600,
                padding: '15px 26px',
                borderRadius: 999,
                boxShadow: '0 10px 24px -10px rgba(217,142,95,0.7)',
              }}
            >
              <span style={{ fontSize: 17 }}>☎</span> Call 647-302-3425
            </a>
            <a
              href="mailto:ekiomo@gmail.com"
              className="mb-cta-outline"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                textDecoration: 'none',
                background: '#fff',
                color: '#1f2933',
                fontSize: 16,
                fontWeight: 600,
                padding: '15px 26px',
                borderRadius: 999,
                border: '1px solid #cdd8e0',
              }}
            >
              Email Mary
            </a>
          </div>
          <p style={{ display: 'flex', alignItems: 'center', gap: 9, fontSize: 14, color: '#6a7884', marginTop: 26 }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#6ea7b8', display: 'inline-block' }} />
            Supporting families across Canada, Nigeria &amp; beyond
          </p>
        </div>

        <div style={{ position: 'relative', animation: 'mbFadeUp 0.8s ease both' }}>
          <div
            style={{
              aspectRatio: '4 / 5',
              borderRadius: 24,
              overflow: 'hidden',
              backgroundColor: '#dde6ec',
              border: '1px solid #cdd8e0',
              boxShadow: '0 30px 60px -30px rgba(22,41,58,0.4)',
            }}
          >
            <img
              src="/images/family.png"
              alt="A warm, candid family moment"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
          <div
            style={{
              position: 'absolute',
              bottom: -22,
              left: -22,
              background: '#fff',
              border: '1px solid #e2e9ee',
              borderRadius: 18,
              padding: '16px 20px',
              boxShadow: '0 18px 40px -22px rgba(22,41,58,0.45)',
              maxWidth: 220,
            }}
          >
            <p
              style={{
                fontFamily: "'Newsreader', serif",
                fontSize: 26,
                lineHeight: 1,
                color: '#2d5a86',
                margin: 0,
                fontWeight: 600,
              }}
            >
              Calm, practical tools
            </p>
            <p style={{ fontSize: 13, color: '#6a7884', margin: '7px 0 0' }}>for everyday family life</p>
          </div>
        </div>
      </div>
    </section>
  )
}
