import { useEffect, useRef } from 'react'

const experiences = [
  {
    role: 'Web Developer',
    company: 'Zymofar Dynamic Products',
    period: 'Jun 2024 – Present',
    badge: 'Current Role',
    badgeColor: '#00FF88',
    points: [
      'Integrated 100+ REST APIs using Axios — reduced API failures by 60%',
      'Architected multi-module ERP (Inventory, Procurement, Production, Sales, WMS, CRM) — 50+ concurrent users, 99.2% uptime',
      'Optimized app performance by 40% via Vite code splitting, lazy loading, React.memo',
      'Built 30+ reusable React components with Redux state management — cut dev time by 35%',
      'Engineered real-time inventory sync across 8 modules — reduced discrepancies by 45%',
      'Developed 25+ responsive static websites with reCAPTCHA integration',
    ],
    skills: ['React.js', 'Redux', 'Vite', 'Java APIs', 'MySQL'],
  },
  {
    role: 'Junior Web Developer',
    company: 'Zymofar Dynamic Products',
    period: 'Oct 2023 – May 2024',
    badge: 'Promoted in 4 months',
    badgeColor: '#00D4FF',
    points: [
      'Integrated 50+ REST APIs for payment processing, inventory, and third-party services',
      'Led frontend development for ERP modules — delivered 8+ production features',
      'Built Hotel & Event Booking Portals with slot-based logic — 99.5% transaction success',
      'Developed e-commerce platform with 500+ SKU catalog and order tracking',
      'Delivered Retail & Restaurant Billing system with 99%+ invoice accuracy',
    ],
    skills: ['React.js', 'Context API', 'React Router', 'Axios', 'Tailwind CSS'],
  },
  {
    role: 'Web Development Intern',
    company: 'Zymofar Dynamic Products',
    period: 'Jun 2023 – Sep 2023',
    badge: 'Converted to Full-time',
    badgeColor: '#7B2FFF',
    points: [
      'Integrated 20+ REST APIs for billing and inventory modules',
      'Contributed 12+ production UI components using React.js, HTML5, CSS3',
      'Resolved 20+ bugs through systematic testing and debugging',
    ],
    skills: ['React.js', 'HTML5', 'CSS3', 'JavaScript', 'REST APIs'],
  },
]

export default function Experience() {
  const ref = useRef()
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
    }, { threshold: 0.05 })
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="experience" ref={ref} className="py-32 px-6 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-5"
        style={{ background: 'radial-gradient(circle, #00D4FF, transparent)' }} />

      <div className="max-w-6xl mx-auto">
        <div className="reveal text-center mb-16">
          <span className="font-mono text-sm text-accent tracking-widest">03. WHERE I'VE WORKED</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-text mt-2">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted mt-4 max-w-xl mx-auto">
            All at <span className="text-accent font-medium">Zymofar Dynamic Products</span> — 
            promoted from Intern → Developer in <span className="text-accent3">12 months</span>
          </p>
        </div>

        <div className="relative pl-8 border-l-2 border-border max-w-4xl mx-auto">
          {experiences.map((exp, i) => (
            <div key={i} className={`reveal reveal-delay-${i + 1} relative mb-12 last:mb-0`}>
              {/* Timeline dot */}
              <div className="absolute -left-[41px] top-2 w-4 h-4 rounded-full border-2 border-bg flex items-center justify-center"
                style={{ background: exp.badgeColor, boxShadow: `0 0 15px ${exp.badgeColor}60` }}>
              </div>

              {/* Card */}
              <div className="card-hover bg-card border border-border rounded-2xl p-6 ml-4">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                  <div>
                    <h3 className="font-display font-bold text-xl text-text">{exp.role}</h3>
                    <p className="text-accent text-sm font-mono mt-0.5">{exp.company}</p>
                  </div>
                  <div className="flex flex-col items-start sm:items-end gap-2 shrink-0">
                    <span className="font-mono text-sm text-muted">{exp.period}</span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono"
                      style={{ background: `${exp.badgeColor}15`, color: exp.badgeColor, border: `1px solid ${exp.badgeColor}30` }}>
                      {exp.badge}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2 mb-4">
                  {exp.points.map((pt, j) => (
                    <li key={j} className="flex gap-2 text-sm text-muted">
                      <span className="text-accent mt-1 shrink-0">▸</span>
                      {pt}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap pt-2 border-t border-border">
                  {exp.skills.map(s => (
                    <span key={s} className="skill-tag">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
