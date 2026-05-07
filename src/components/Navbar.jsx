import { useState, useEffect } from 'react'

const links = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('Home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const sections = links.map(l => document.getElementById(l.toLowerCase()))
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && window.scrollY >= sections[i].offsetTop - 120) {
          setActive(links[i])
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-3 bg-bg/90 backdrop-blur-xl border-b border-border' : 'py-6'}`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <div className="font-display font-bold text-xl">
          <span className="text-gradient">S</span>
          <span className="text-text">iva</span>
          <span className="text-gradient">.</span>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <button key={l} onClick={() => scrollTo(l)} className={`nav-link ${active === l ? 'active' : ''}`}>
              {l}
            </button>
          ))}
          <button
            onClick={() => scrollTo('Contact')}
            className="ml-4 px-5 py-2 rounded-full text-sm font-medium font-body border border-accent text-accent hover:bg-accent hover:text-bg transition-all duration-300"
          >
            Hire Me
          </button>
        </div>

        {/* Mobile */}
        <button className="md:hidden text-accent" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-0.5 bg-accent transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 bg-accent transition-all ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 bg-accent transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-surface/95 backdrop-blur-xl border-t border-border px-6 py-4">
          {links.map(l => (
            <button key={l} onClick={() => scrollTo(l)} className={`block w-full text-left py-3 nav-link text-base ${active === l ? 'active' : ''}`}>
              {l}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
