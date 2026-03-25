import { Link } from 'react-router-dom'
import { FiZap, FiBook, FiHelpCircle, FiCheckSquare, FiArrowRight } from 'react-icons/fi'

const modules = [
  { to: '/prompts',   icon: FiZap,         label: 'Prompt Skills',       desc: 'AI prompt templates — copy & reuse instantly', color: '#8b5cf6' },
  { to: '/learning',  icon: FiBook,         label: 'CRO Learning Path',   desc: 'Qual, quant, competitor analysis frameworks',  color: '#3b82f6' },
  { to: '/questions', icon: FiHelpCircle,   label: 'Questions Bank',      desc: 'Real scenarios, decisions, and frameworks',    color: '#10b981' },
  { to: '/checklist', icon: FiCheckSquare,  label: 'Client Checklist',    desc: 'Pre-engagement checklist for new clients',     color: '#f59e0b' },
]

export default function Home() {
  return (
    <div style={{ padding: '60px', maxWidth: '900px' }}>
      <p style={{ color: '#8b5cf6', fontSize: '12px', letterSpacing: '0.2em', marginBottom: '12px' }}>
        PERSONAL KNOWLEDGE BASE
      </p>
      <h1 style={{
        fontFamily: "'Syne', sans-serif",
        fontSize: 'clamp(32px, 4vw, 52px)',
        fontWeight: 800, letterSpacing: '-2px',
        lineHeight: 1.1, marginBottom: '16px',
      }}>
        CROKit
      </h1>
      <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '15px', marginBottom: '56px', maxWidth: '480px' }}>
        Everything you need to think, analyze, and execute CRO — in one place.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        {modules.map(({ to, icon: Icon, label, desc, color }) => (
          <Link key={to} to={to} style={{ textDecoration: 'none' }}>
            <div style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '14px', padding: '28px',
              transition: 'all 0.2s', cursor: 'pointer',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = `${color}40`
                e.currentTarget.style.background = `${color}08`
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
                e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
              }}
            >
              <div style={{
                width: '40px', height: '40px', borderRadius: '10px',
                background: `${color}15`, display: 'flex',
                alignItems: 'center', justifyContent: 'center',
                marginBottom: '16px',
              }}>
                <Icon size={18} color={color} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <p style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 700, fontSize: '16px',
                    color: '#f1f5f9', marginBottom: '6px',
                  }}>
                    {label}
                  </p>
                  <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '13px', lineHeight: 1.5 }}>
                    {desc}
                  </p>
                </div>
                <FiArrowRight size={16} style={{ color: 'rgba(255,255,255,0.2)', marginTop: '2px', flexShrink: 0 }} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}