export default function ContactCTA() {
  return (
    <section id="contact" style={{ padding: '0 24px 80px' }}>
      <div
        style={{
          maxWidth: 1180,
          margin: '0 auto',
          background: '#16293a',
          borderRadius: 28,
          padding: 'clamp(48px, 7vw, 90px) clamp(28px, 6vw, 80px)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: -60,
            right: -40,
            width: 220,
            height: 220,
            borderRadius: '50%',
            background: 'rgba(217,142,95,0.16)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -70,
            left: -50,
            width: 240,
            height: 240,
            borderRadius: '50%',
            background: 'rgba(110,167,184,0.12)',
          }}
        />
        <div style={{ position: 'relative' }}>
          <h2
            style={{
              fontFamily: "'Newsreader', serif",
              fontWeight: 500,
              fontSize: 'clamp(30px, 4.6vw, 50px)',
              lineHeight: 1.08,
              letterSpacing: '-0.02em',
              color: '#f4f6f8',
              margin: 0,
              textWrap: 'balance',
            }}
          >
            Let’s build something stronger, together.
          </h2>
          <p style={{ fontSize: 18, color: '#aebccb', margin: '20px auto 0', maxWidth: '36em' }}>
            Reach out for a free, no-pressure conversation about your family, your school, or your community.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 16, marginTop: 38 }}>
            <a
              href="tel:6473023425"
              className="mb-cta-primary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 11,
                textDecoration: 'none',
                background: '#d98e5f',
                color: '#fff',
                fontSize: 17,
                fontWeight: 600,
                padding: '17px 30px',
                borderRadius: 999,
              }}
            >
              <span style={{ fontSize: 18 }}>☎</span> 647-302-3425
            </a>
            <a
              href="mailto:ekiomo@gmail.com"
              className="mb-cta-ghost"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 11,
                textDecoration: 'none',
                background: 'rgba(255,255,255,0.06)',
                color: '#f4f6f8',
                fontSize: 17,
                fontWeight: 600,
                padding: '17px 30px',
                borderRadius: 999,
                border: '1px solid rgba(255,255,255,0.22)',
              }}
            >
              <span style={{ fontSize: 16 }}>✉</span> ekiomo@gmail.com
            </a>
          </div>
          <p style={{ fontSize: 14, color: '#8194a5', margin: '28px 0 0' }}>
            Mary Eki Omorogbe · Founder &amp; Wellness Coach
          </p>
        </div>
      </div>
    </section>
  )
}
