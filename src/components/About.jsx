import { useEffect, useRef } from 'react'

export default function About() {
  const ref = useRef()
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
    }, { threshold: 0.1 })
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="about" ref={ref} className="py-32 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5"
        style={{ background: 'radial-gradient(circle, #7B2FFF, transparent)' }} />

      <div className="max-w-6xl mx-auto">
        <div className="reveal mb-16">
          <span className="font-mono text-sm text-accent tracking-widest">01. WHO I AM</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-text mt-2">
            About <span className="text-gradient">Me</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Visual */}
          <div className="reveal reveal-delay-1 relative">
            <div className="relative w-full max-w-sm mx-auto">
              {/* Decorative frame */}
              <div className="absolute -inset-4 rounded-2xl border border-accent/20 animate-pulse-glow" />
              <div className="absolute -top-6 -right-6 w-24 h-24 blob bg-accent/10" />
              <div className="absolute -bottom-6 -left-6 w-20 h-20 blob bg-accent2/10" style={{ animationDelay: '-4s' }} />

              {/* Card */}
              <div className="relative bg-card border border-border rounded-2xl p-8">
                {/* Avatar placeholder with initials */}
                <div className="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl font-display font-bold text-bg"
                  style={{ background: 'linear-gradient(135deg, #00D4FF, #7B2FFF)' }}>
                  SP
                </div>
                <div className="text-center">
                  <h3 className="font-display font-bold text-xl text-text mb-1">Sivabharath S P</h3>
                  <p className="text-accent text-sm font-mono">React.js Developer</p>
                  <div className="mt-4 flex justify-center gap-3">
                    {['React', 'Redux', 'REST API'].map(t => (
                      <span key={t} className="skill-tag text-xs">{t}</span>
                    ))}
                  </div>
                </div>

                {/* Info rows */}
                <div className="mt-6 space-y-3 text-sm">
                  {[
                    { icon: '📍', label: 'Location', val: 'Bengaluru, KA' },
                    { icon: '🎓', label: 'Degree', val: 'B.E. Computer Science' },
                    { icon: '💼', label: 'Experience', val: '2+ Years Full-time' },
                    { icon: '⚡', label: 'Status', val: 'Immediate Joiner' },
                  ].map(r => (
                    <div key={r.label} className="flex items-center gap-3">
                      <span>{r.icon}</span>
                      <span className="text-muted">{r.label}:</span>
                      <span className="text-text font-medium">{r.val}</span>
                    </div>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-6 flex gap-3">
                  <a href="https://github.com/sivabharath23" target="_blank" rel="noopener noreferrer"
                    className="flex-1 py-2 rounded-lg border border-border text-center text-xs text-muted hover:border-accent hover:text-accent transition-all">
                    GitHub
                  </a>
                  <a href="https://linkedin.com/in/sivabharath-sp" target="_blank" rel="noopener noreferrer"
                    className="flex-1 py-2 rounded-lg border border-border text-center text-xs text-muted hover:border-accent2 hover:text-accent2 transition-all">
                    LinkedIn
                  </a>
                  <a href="mailto:sivabharath23@gmail.com"
                    className="flex-1 py-2 rounded-lg border border-border text-center text-xs text-muted hover:border-accent3 hover:text-accent3 transition-all">
                    Email
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Text */}
          <div className="reveal reveal-delay-2 space-y-6">
            <p className="text-muted leading-relaxed text-lg">
              I'm a React.js Developer with <span className="text-text font-medium">2+ years of full-time experience</span>, 
              promoted from Intern → Junior Developer → Developer within 12 months at a product-focused company. 
              I specialize in building <span className="text-accent">enterprise ERP systems</span>, billing platforms, and e-commerce solutions.
            </p>
            <p className="text-muted leading-relaxed">
              I've integrated <span className="text-accent font-medium">170+ REST APIs</span> across payment gateways, 
              inventory systems, and third-party services. My work has directly impacted systems serving 
              <span className="text-text font-medium"> 100+ daily users</span> with measurable results.
            </p>

            {/* Achievement bars */}
            <div className="space-y-4 pt-2">
              {[
                { label: 'Performance Optimization', val: 40, color: '#00D4FF' },
                { label: 'API Failure Reduction', val: 60, color: '#7B2FFF' },
                { label: 'System Uptime', val: 99, color: '#00FF88' },
                { label: 'Invoice Accuracy', val: 99, color: '#00D4FF' },
              ].map((b, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted font-mono">{b.label}</span>
                    <span className="font-mono" style={{ color: b.color }}>{b.val}%</span>
                  </div>
                  <div className="h-1.5 bg-border rounded-full overflow-hidden">
                    <div className="h-full rounded-full transition-all duration-1000"
                      style={{ width: `${b.val}%`, background: b.color, boxShadow: `0 0 10px ${b.color}` }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Languages */}
            <div className="pt-2">
              <p className="text-muted text-sm font-mono mb-3">Languages spoken:</p>
              <div className="flex gap-3">
                {[{ lang: 'Tamil', level: 'Native' }, { lang: 'English', level: 'Professional' }, { lang: 'Kannada', level: 'Working' }].map(l => (
                  <div key={l.lang} className="px-3 py-2 rounded-lg bg-surface border border-border text-center">
                    <div className="text-text text-sm font-medium">{l.lang}</div>
                    <div className="text-muted text-xs">{l.level}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
