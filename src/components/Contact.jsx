import { useEffect, useRef, useState } from 'react'

export default function Contact() {
  const ref = useRef()
  const [copied, setCopied] = useState('')

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
    }, { threshold: 0.1 })
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const copy = (text, label) => {
    navigator.clipboard.writeText(text)
    setCopied(label)
    setTimeout(() => setCopied(''), 2000)
  }

  const contacts = [
    {
      icon: '📧',
      label: 'Email',
      value: 'sivabharath23@gmail.com',
      href: 'mailto:sivabharath23@gmail.com',
      color: '#00D4FF',
      copy: 'sivabharath23@gmail.com',
    },
    {
      icon: '📞',
      label: 'Phone',
      value: '+91 9003793639',
      href: 'tel:+919003793639',
      color: '#00FF88',
      copy: '+919003793639',
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'linkedin.com/in/sivabharath-sp',
      href: 'https://linkedin.com/in/sivabharath-sp',
      color: '#7B2FFF',
    },
    {
      icon: '🐙',
      label: 'GitHub',
      value: 'github.com/sivabharath23',
      href: 'https://github.com/sivabharath23',
      color: '#00D4FF',
    },
  ]

  return (
    <section id="contact" ref={ref} className="py-32 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5"
        style={{ background: 'radial-gradient(circle, #00D4FF, transparent)' }} />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-5"
        style={{ background: 'radial-gradient(circle, #7B2FFF, transparent)' }} />

      <div className="max-w-5xl mx-auto">
        <div className="reveal text-center mb-16">
          <span className="font-mono text-sm text-accent tracking-widest">05. LET'S TALK</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-text mt-2">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted mt-4 max-w-lg mx-auto">
            I'm an <span className="text-accent3 font-medium">immediate joiner</span> actively looking for React.js Developer roles in Bengaluru and remote. 
            Let's connect!
          </p>
        </div>

        {/* Availability badge */}
        <div className="reveal flex justify-center mb-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-accent3/30 bg-accent3/5">
            <span className="w-3 h-3 rounded-full bg-accent3 animate-pulse" />
            <span className="text-accent3 font-mono text-sm font-medium">Available for Hire · Immediate Joiner · Open to Remote</span>
          </div>
        </div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {contacts.map((c, i) => (
            <div key={i} className={`reveal reveal-delay-${i + 1}`}>
              <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="block card-hover bg-card border border-border rounded-2xl p-5 text-center group">
                <div className="text-3xl mb-3">{c.icon}</div>
                <div className="text-muted text-xs font-mono mb-1">{c.label}</div>
                <div className="text-text text-sm font-medium break-all group-hover:text-accent transition-colors"
                  style={{ color: undefined }}>
                  {c.value}
                </div>
                {c.copy && (
                  <button onClick={(e) => { e.preventDefault(); copy(c.copy, c.label) }}
                    className="mt-3 text-xs font-mono px-3 py-1 rounded-full border border-border text-muted hover:border-accent hover:text-accent transition-all">
                    {copied === c.label ? '✓ Copied!' : 'Copy'}
                  </button>
                )}
              </a>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal text-center">
          <div className="bg-card border border-border rounded-2xl p-8 max-w-2xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 opacity-30"
              style={{ background: 'linear-gradient(135deg, rgba(0,212,255,0.05), rgba(123,47,255,0.05))' }} />
            <div className="relative z-10">
              <h3 className="font-display font-bold text-2xl text-text mb-3">Ready to build something great?</h3>
              <p className="text-muted mb-6 text-sm">
                Whether it's a React application, ERP system, or API integration — I'm ready to contribute from day one.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:sivabharath23@gmail.com"
                  className="px-8 py-3 rounded-full bg-accent text-bg font-display font-bold text-sm tracking-wider hover:scale-105 transition-all glow-blue">
                  EMAIL ME
                </a>
                <a href="https://linkedin.com/in/sivabharath-sp" target="_blank" rel="noopener noreferrer"
                  className="px-8 py-3 rounded-full border border-accent2 text-accent2 font-display font-medium text-sm tracking-wider hover:bg-accent2 hover:text-bg transition-all">
                  LINKEDIN
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-20 pt-8 border-t border-border">
        <p className="text-muted text-sm font-mono">
          Built with <span className="text-accent">React.js</span> + <span className="text-accent2">Tailwind CSS</span> by Sivabharath S P
        </p>
      </div>
    </section>
  )
}
