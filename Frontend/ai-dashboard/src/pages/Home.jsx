import { Link } from 'react-router-dom'
import { FiZap, FiBook, FiHelpCircle, FiCheckSquare, FiArrowRight } from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext'

const modules = [
  { to: '/prompts',   icon: FiZap,         label: 'Prompt Skills',       desc: 'AI prompt templates — copy & reuse instantly', color: '#8b5cf6' },
  { to: '/learning',  icon: FiBook,         label: 'CRO Learning Path',   desc: 'Qual, quant, competitor analysis frameworks',  color: '#3b82f6' },
  { to: '/questions', icon: FiHelpCircle,   label: 'Questions Bank',      desc: 'Real scenarios, decisions, and frameworks',    color: '#10b981' },
  { to: '/checklist', icon: FiCheckSquare,  label: 'Client Checklist',    desc: 'Pre-engagement checklist for new clients',     color: '#f59e0b' },
]

export default function Home() {
  const { theme } = useTheme()
  return (
    <div style={{ padding: '60px', maxWidth: '900px' }}>
      <p style={{ color: theme.accent, fontSize: '12px', letterSpacing: '0.2em', marginBottom: '12px' }}>
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
      <p style={{ color: theme.textMuted, fontSize: '15px', marginBottom: '56px', maxWidth: '480px' }}>
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
                e.currentTarget.style.borderColor = theme.sidebarBorder
                e.currentTarget.style.background = theme.sidebarBg
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
                    color: theme.text, marginBottom: '6px',
                  }}>
                    {label}
                  </p>
                  <p style={{ color: theme.textMuted, fontSize: '13px', lineHeight: 1.5 }}>
                    {desc}
                  </p>
                </div>
                <FiArrowRight size={16} style={{ color: theme.textMuted, marginTop: '2px', flexShrink: 0 }} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}