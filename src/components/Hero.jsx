import { useState, useEffect } from 'react'

const roles = ['React.js Developer', 'Frontend Engineer', 'API Integration Specialist', 'ERP Systems Builder']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIndex((roleIndex + 1) % roles.length)
    }
    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIndex])

  useEffect(() => {
    const onMove = (e) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid noise">
      {/* Cursor glow */}
      <div className="cursor-glow" style={{ left: mousePos.x, top: mousePos.y }} />

      {/* Animated blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 blob opacity-20"
        style={{ background: 'radial-gradient(circle, #00D4FF, #7B2FFF)' }} />
      <div className="absolute bottom-20 right-10 w-96 h-96 blob opacity-15"
        style={{ background: 'radial-gradient(circle, #7B2FFF, #00FF88)', animationDelay: '-3s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5"
        style={{ background: 'radial-gradient(circle, #00D4FF, transparent)' }} />

      {/* Floating code snippets */}
      <div className="absolute top-32 right-16 font-mono text-xs text-accent/20 hidden lg:block animate-float" style={{ animationDelay: '-1s' }}>
        {'const dev = () => {'}
        <br />{'  return <React />;'}
        <br />{'}'}
      </div>
      <div className="absolute bottom-40 left-16 font-mono text-xs text-accent2/20 hidden lg:block animate-float" style={{ animationDelay: '-3s' }}>
        {'// 170+ APIs integrated'}
        <br />{'// 99.2% uptime'}
        <br />{'// immediate joiner ✓'}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent3/30 bg-accent3/5 text-accent3 text-sm font-mono mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-accent3 animate-pulse" />
          Available for Hire · Immediate Joiner
        </div>

        <h1 className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl leading-none mb-6 animate-slide-up">
          <span className="block text-text">Sivabharath</span>
          <span className="block text-gradient mt-2">S P</span>
        </h1>

        <div className="h-12 flex items-center justify-center mb-6">
          <span className="font-display text-xl md:text-2xl text-muted">
            {displayed}<span className="typewriter-cursor" />
          </span>
        </div>

        <p className="text-muted text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-body">
          Building enterprise ERP systems & billing platforms with React.js. 
          <span className="text-accent"> 170+ REST APIs</span> integrated. 
          <span className="text-accent2"> 3 years</span> of production experience. 
          Based in <span className="text-accent3">Bengaluru</span>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a
            href="mailto:sivabharath23@gmail.com"
            className="group relative px-8 py-4 rounded-full bg-accent text-bg font-display font-bold text-sm tracking-wider overflow-hidden transition-all duration-300 hover:scale-105 glow-blue"
          >
            <span className="relative z-10">GET IN TOUCH</span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent2 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            href="https://github.com/sivabharath23"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full border border-border text-muted font-display font-medium text-sm tracking-wider hover:border-accent hover:text-accent transition-all duration-300 hover:scale-105"
          >
            VIEW GITHUB
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {[
            { num: '3+', label: 'Years Experience' },
            { num: '170+', label: 'APIs Integrated' },
            { num: '99.2%', label: 'Uptime Achieved' },
            { num: '40%', label: 'Performance Boost' },
          ].map((s, i) => (
            <div key={i} className="stat-card">
              <div className="font-display font-extrabold text-2xl text-gradient-blue mb-1">{s.num}</div>
              <div className="text-muted text-xs font-mono">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted text-xs font-mono animate-bounce">
        <span>scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-muted to-transparent" />
      </div>
    </section>
  )
}
