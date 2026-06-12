import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import MissionVision from './components/MissionVision.jsx'
import Services from './components/Services.jsx'
import Process from './components/Process.jsx'
import About from './components/About.jsx'
import ContactCTA from './components/ContactCTA.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div
      style={{
        fontFamily: "'Hanken Grotesk', system-ui, sans-serif",
        color: '#1f2933',
        background: '#f4f6f8',
        WebkitFontSmoothing: 'antialiased',
        lineHeight: 1.6,
        overflowX: 'hidden',
      }}
    >
      <Nav />
      <Hero />
      <MissionVision />
      <Services />
      <Process />
      <About />
      <ContactCTA />
      <Footer />
    </div>
  )
}
