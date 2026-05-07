import { useEffect, useRef, useState } from 'react'

const projects = [
  {
    title: 'Multi-Module ERP System',
    category: 'Enterprise',
    description: 'Full-scale ERP with 8 modules — Inventory, Procurement, Production, Sales, WMS, CRM. 50+ concurrent users, real-time stock sync, multilingual support.',
    highlights: ['50+ concurrent users', '99.2% uptime', '45% fewer stock errors', '50+ APIs'],
    stack: ['React.js', 'Redux', 'Context API', 'React Router', 'Tailwind CSS', 'Java REST APIs', 'MySQL', 'Vite'],
    color: '#00D4FF',
    icon: '🏭',
    featured: true,
  },
  {
    title: 'Retail & Restaurant Billing',
    category: 'Billing System',
    description: 'Complete billing solution with invoice generation, automated receipt printing, auto stock deduction, and payment gateway integration for 100+ daily users.',
    highlights: ['100+ daily users', '99%+ invoice accuracy', '90% fewer manual errors', '30+ APIs'],
    stack: ['React.js', 'React Router', 'Tailwind CSS', 'MySQL', 'Payment APIs'],
    color: '#7B2FFF',
    icon: '🧾',
    featured: true,
  },
  {
    title: 'Hotel & Event Booking Portal',
    category: 'Booking Platform',
    description: 'Slot-based booking system with real-time availability, dynamic pricing, and seamless payment/SMS/email integrations achieving 99.5% transaction success.',
    highlights: ['99.5% success rate', 'Real-time availability', 'Dynamic pricing', 'SMS + Email'],
    stack: ['React.js', 'Context API', 'Tailwind CSS', 'REST APIs', 'Axios'],
    color: '#00FF88',
    icon: '🏨',
    featured: true,
  },
  {
    title: 'E-Commerce Platform',
    category: 'E-Commerce',
    description: 'Full-featured product platform with advanced filtering for 500+ SKUs, shopping cart, checkout flow, and order tracking. Performance optimized by 45%.',
    highlights: ['500+ SKUs', '45% faster', '20% more conversions', 'Payment APIs'],
    stack: ['React.js', 'Redux', 'React Router', 'Tailwind CSS', 'REST APIs'],
    color: '#FFB800',
    icon: '🛒',
    featured: false,
  },
  {
    title: 'Engineering Calculator (M-Coil)',
    category: 'Tool',
    description: 'Specialized engineering calculation tool with dynamic formula logic and real-time input validation achieving 99.95% accuracy for coil calculations.',
    highlights: ['99.95% accuracy', 'Real-time validation', 'Dynamic formulas'],
    stack: ['React.js', 'Tailwind CSS', 'JavaScript'],
    color: '#00D4FF',
    icon: '🔧',
    featured: false,
  },
  {
    title: '25+ Static Websites',
    category: 'Web',
    description: 'Lead-generation websites with contact forms, email submissions, and Google reCAPTCHA integration for spam protection. Built for various business clients.',
    highlights: ['25+ delivered', 'reCAPTCHA integrated', 'SEO optimized', 'Responsive'],
    stack: ['React.js', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Tailwind CSS', 'jQuery', 'Google reCAPTCHA'],
    color: '#7B2FFF',
    icon: '🌐',
    featured: false,
  },
]

export default function Projects() {
  const ref = useRef()
  const [filter, setFilter] = useState('All')

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
    }, { threshold: 0.05 })
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const categories = ['All', 'Enterprise', 'Billing System', 'Booking Platform', 'E-Commerce', 'Tool', 'Web']
  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter)

  return (
    <section id="projects" ref={ref} className="py-32 px-6 bg-surface relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-50" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="reveal text-center mb-12">
          <span className="font-mono text-sm text-accent tracking-widest">04. WHAT I'VE BUILT</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-text mt-2">
            Key <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted mt-4 max-w-xl mx-auto">Production systems built and deployed for real businesses</p>
        </div>

        {/* Filter tabs */}
        <div className="reveal flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(c => (
            <button key={c} onClick={() => setFilter(c)}
              className={`px-4 py-2 rounded-full text-sm font-mono transition-all ${filter === c ? 'bg-accent text-bg font-bold' : 'border border-border text-muted hover:border-accent hover:text-accent'}`}>
              {c}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <div key={p.title}
              className={`reveal reveal-delay-${(i % 3) + 1} card-hover bg-card border border-border rounded-2xl p-6 flex flex-col ${p.featured ? 'ring-1' : ''}`}
              style={p.featured ? { ringColor: `${p.color}40` } : {}}>

              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                  style={{ background: `${p.color}15`, border: `1px solid ${p.color}30` }}>
                  {p.icon}
                </div>
                <div className="flex items-center gap-2">
                  {p.featured && (
                    <span className="px-2 py-0.5 rounded text-xs font-mono text-bg"
                      style={{ background: p.color }}>
                      Featured
                    </span>
                  )}
                  <span className="px-2 py-0.5 rounded text-xs font-mono border"
                    style={{ borderColor: `${p.color}30`, color: p.color }}>
                    {p.category}
                  </span>
                </div>
              </div>

              <h3 className="font-display font-bold text-lg text-text mb-2">{p.title}</h3>
              <p className="text-muted text-sm leading-relaxed mb-4 flex-1">{p.description}</p>

              {/* Highlights */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                {p.highlights.map(h => (
                  <div key={h} className="flex items-center gap-1.5 text-xs text-muted">
                    <span style={{ color: p.color }}>✓</span>
                    {h}
                  </div>
                ))}
              </div>

              {/* Stack */}
              <div className="flex flex-wrap pt-4 border-t border-border">
                {p.stack.slice(0, 4).map(s => (
                  <span key={s} className="skill-tag text-xs">{s}</span>
                ))}
                {p.stack.length > 4 && (
                  <span className="skill-tag text-xs">+{p.stack.length - 4}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
