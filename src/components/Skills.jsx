import { useEffect, useRef } from 'react'

const skillGroups = [
  {
    title: 'Frontend',
    icon: '⚛️',
    color: '#00D4FF',
    skills: ['React.js', 'JavaScript ES6+', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Responsive Design'],
  },
  {
    title: 'State & Routing',
    icon: '🔄',
    color: '#7B2FFF',
    skills: ['Redux', 'Redux Toolkit', 'Context API', 'React Router v6', 'useState', 'useEffect', 'useMemo', 'useCallback', 'useReducer'],
  },
  {
    title: 'API & Backend',
    icon: '🔌',
    color: '#00FF88',
    skills: ['REST APIs (170+)', 'Axios', 'Fetch API', 'Async/Await', 'JSON', 'PHP', 'Java CRUD APIs', 'Payment Gateways'],
  },
  {
    title: 'Build & Performance',
    icon: '⚡',
    color: '#FFB800',
    skills: ['Vite', 'Webpack', 'Code Splitting', 'Lazy Loading', 'React.memo', 'Caching', 'FCP Optimization'],
  },
  {
    title: 'Database & Tools',
    icon: '🗄️',
    color: '#00D4FF',
    skills: ['MySQL', 'SQL', 'Git', 'GitHub', 'Postman', 'VS Code', 'Chrome DevTools'],
  },
  {
    title: 'Other',
    icon: '🌐',
    color: '#7B2FFF',
    skills: ['WordPress', 'SEO Optimization', 'Google reCAPTCHA', 'Agile/Scrum', 'Multilingual Apps', 'Cross-Browser'],
  },
]

const marqueeSkills = ['React.js', 'Redux', 'REST APIs', 'Axios', 'Tailwind CSS', 'Vite', 'JavaScript', 'MySQL', 'Context API', 'React Router', 'TypeScript', 'Node.js', 'MongoDB', 'Git', 'Postman', 'PHP', 'Java']

export default function Skills() {
  const ref = useRef()
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
    }, { threshold: 0.1 })
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="skills" ref={ref} className="py-32 px-6 bg-surface relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-50" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="reveal text-center mb-16">
          <span className="font-mono text-sm text-accent tracking-widest">02. WHAT I KNOW</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-text mt-2">
            Tech <span className="text-gradient">Stack</span>
          </h2>
          <p className="text-muted mt-4 max-w-xl mx-auto">Tools and technologies I use to build production-grade applications</p>
        </div>

        {/* Marquee */}
        <div className="reveal mb-16 overflow-hidden py-4">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...marqueeSkills, ...marqueeSkills].map((s, i) => (
              <span key={i} className="inline-flex items-center gap-2 mx-4 text-muted font-mono text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Skill cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((g, i) => (
            <div key={i} className={`reveal reveal-delay-${(i % 3) + 1} card-hover bg-card border border-border rounded-2xl p-6`}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                  style={{ background: `${g.color}15`, border: `1px solid ${g.color}30` }}>
                  {g.icon}
                </div>
                <h3 className="font-display font-bold text-lg text-text">{g.title}</h3>
              </div>
              <div className="flex flex-wrap">
                {g.skills.map((s, j) => (
                  <span key={j} className="skill-tag" style={{ '--accent': g.color }}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Learning banner */}
        <div className="reveal mt-10 p-6 rounded-2xl border border-accent2/30 bg-accent2/5 flex flex-col sm:flex-row items-center gap-4">
          <div className="text-3xl">🚀</div>
          <div>
            <h4 className="font-display font-bold text-text mb-1">Currently Leveling Up</h4>
            <p className="text-muted text-sm">Actively learning <span className="text-accent2">Node.js</span>, <span className="text-accent">TypeScript</span>, and <span className="text-accent3">MongoDB</span> to become a full MERN stack developer.</p>
          </div>
          <div className="flex gap-2 ml-auto">
            {['Node.js', 'TypeScript', 'MongoDB'].map(t => (
              <span key={t} className="px-3 py-1 rounded-full border border-accent2/30 text-accent2 text-xs font-mono">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
