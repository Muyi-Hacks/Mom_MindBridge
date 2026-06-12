export default function About() {
  return (
    <section id="about" style={{ padding: 'clamp(72px, 9vw, 120px) 24px' }}>
      <div
        style={{
          maxWidth: 1180,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'clamp(40px, 6vw, 80px)',
          alignItems: 'center',
        }}
      >
        <div style={{ position: 'relative' }}>
          <div
            style={{
              aspectRatio: '1 / 1',
              borderRadius: 24,
              overflow: 'hidden',
              backgroundColor: '#dde6ec',
              border: '1px solid #cdd8e0',
              maxWidth: 420,
            }}
          >
            <img
              src="/images/mary.png"
              alt="Portrait of Mary Eki Omorogbe"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        </div>
        <div>
          <span
            style={{
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#2d5a86',
            }}
          >
            Meet your coach
          </span>
          <h2
            style={{
              fontFamily: "'Newsreader', serif",
              fontWeight: 500,
              fontSize: 'clamp(30px, 4vw, 42px)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: '#16293a',
              margin: '16px 0 0',
            }}
          >
            Mary Eki Omorogbe
          </h2>
          <p style={{ fontSize: 15, fontWeight: 600, color: '#d98e5f', margin: '6px 0 0', letterSpacing: '0.02em' }}>
            Founder &amp; Wellness Coach
          </p>
          <p style={{ fontSize: 17, color: '#4a5965', margin: '22px 0 0', maxWidth: '34em', textWrap: 'pretty' }}>
            Mary founded MindBridge to give families the kind of practical, compassionate support that makes a
            real difference at home. She works alongside parents, young people, and schools to build emotional
            resilience, stronger relationships, and the everyday tools families need to thrive.
          </p>
          <p style={{ fontSize: 17, color: '#4a5965', margin: '16px 0 0', maxWidth: '34em', textWrap: 'pretty' }}>
            Her work spans communities in Canada, Nigeria, and beyond — meeting families where they are, with
            warmth and without judgment.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 30 }}>
            <a
              href="tel:6473023425"
              className="mb-btn-primary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                textDecoration: 'none',
                background: '#d98e5f',
                color: '#fff',
                fontSize: 16,
                fontWeight: 600,
                padding: '14px 24px',
                borderRadius: 999,
              }}
            >
              <span style={{ fontSize: 17 }}>☎</span> Book a call with Mary
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
