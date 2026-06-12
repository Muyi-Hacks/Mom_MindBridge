import { services } from '../data.jsx'

export default function Services() {
  return (
    <section id="services" style={{ padding: 'clamp(72px, 9vw, 120px) 24px' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div style={{ maxWidth: 640 }}>
          <span
            style={{
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#2d5a86',
            }}
          >
            What we offer
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
            Practical support for every part of family life
          </h2>
          <p style={{ fontSize: 17, color: '#4a5965', margin: '18px 0 0' }}>
            From one-on-one coaching to school-wide workshops, each program gives families real tools they
            can use right away.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 22,
            marginTop: 48,
          }}
        >
          {services.map((service) => (
            <div
              key={service.title}
              className="mb-card"
              style={{
                background: '#fff',
                border: '1px solid #e4eaef',
                borderRadius: 22,
                padding: 34,
              }}
            >
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 50,
                  height: 50,
                  borderRadius: 14,
                  background: service.iconBg,
                }}
              >
                {service.icon}
              </span>
              <h3
                style={{
                  fontFamily: "'Newsreader', serif",
                  fontWeight: 600,
                  fontSize: 24,
                  color: '#16293a',
                  margin: '22px 0 4px',
                }}
              >
                {service.title}
              </h3>
              <p style={{ fontSize: 14, color: '#6a7884', margin: '0 0 18px' }}>{service.lead}</p>

              {service.items && (
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 11,
                  }}
                >
                  {service.items.map((item) => (
                    <li key={item} style={{ display: 'flex', gap: 11, fontSize: 15, color: '#3a4754' }}>
                      <span style={{ color: service.accent, flex: 'none' }}>✓</span> {item}
                    </li>
                  ))}
                </ul>
              )}

              {service.tags && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: 13.5,
                        color: '#3a4754',
                        background: '#f4f6f8',
                        border: '1px solid #e4eaef',
                        padding: '7px 13px',
                        borderRadius: 999,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
