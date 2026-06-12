import { useState } from 'react'
import Logo from './Logo.jsx'

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'How it works' },
  { href: '#about', label: 'About' },
]

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: 'rgba(244,246,248,0.82)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        borderBottom: '1px solid #dde5ea',
      }}
    >
      <nav
        style={{
          maxWidth: 1180,
          margin: '0 auto',
          padding: '0 24px',
          height: 72,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 24,
        }}
      >
        <Logo />

        <div data-desktop-nav style={{ display: 'flex', alignItems: 'center', gap: 34 }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{ textDecoration: 'none', color: '#3a4754', fontSize: 15, fontWeight: 500 }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:6473023425"
            className="mb-btn-primary"
            style={{
              textDecoration: 'none',
              background: '#d98e5f',
              color: '#fff',
              fontSize: 15,
              fontWeight: 600,
              padding: '10px 20px',
              borderRadius: 999,
              whiteSpace: 'nowrap',
            }}
          >
            Book a call
          </a>
        </div>

        <button
          data-hamburger
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Menu"
          aria-expanded={menuOpen}
          style={{
            display: 'none',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 5,
            width: 42,
            height: 42,
            border: '1px solid #dde5ea',
            borderRadius: 10,
            background: '#fff',
            cursor: 'pointer',
            padding: 0,
          }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{ display: 'block', width: 18, height: 2, background: '#1f2933', margin: '0 auto', borderRadius: 2 }}
            />
          ))}
        </button>
      </nav>

      {/* mobile menu */}
      <div
        style={{
          display: menuOpen ? 'flex' : 'none',
          flexDirection: 'column',
          padding: '8px 24px 22px',
          borderTop: '1px solid #dde5ea',
          background: 'rgba(244,246,248,0.96)',
        }}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={closeMenu}
            style={{
              textDecoration: 'none',
              color: '#1f2933',
              fontSize: 17,
              fontWeight: 500,
              padding: '13px 0',
              borderBottom: '1px solid #e4eaef',
            }}
          >
            {link.label}
          </a>
        ))}
        <a
          href="tel:6473023425"
          onClick={closeMenu}
          style={{
            textDecoration: 'none',
            textAlign: 'center',
            background: '#d98e5f',
            color: '#fff',
            fontSize: 16,
            fontWeight: 600,
            padding: 14,
            borderRadius: 12,
            marginTop: 16,
          }}
        >
          Book a call
        </a>
      </div>
    </header>
  )
}
