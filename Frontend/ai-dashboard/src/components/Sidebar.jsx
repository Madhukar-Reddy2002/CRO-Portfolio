import { NavLink } from 'react-router-dom'
import {
  FiZap, FiBook, FiHelpCircle, FiCheckSquare, FiHome
} from 'react-icons/fi'

const NAV = [
  { to: '/',              icon: FiHome,        label: 'Home' },
  { to: '/prompts',       icon: FiZap,         label: 'Prompt Skills' },
  { to: '/learning',      icon: FiBook,        label: 'CRO Learning Path' },
  { to: '/questions',     icon: FiHelpCircle,  label: 'Questions Bank' },
  { to: '/checklist',     icon: FiCheckSquare, label: 'Client Checklist' },
]

export default function Sidebar() {
  return (
    <aside style={{
      width: '220px', flexShrink: 0,
      background: 'rgba(255,255,255,0.02)',
      borderRight: '1px solid rgba(255,255,255,0.06)',
      height: '100vh', position: 'sticky', top: 0,
      display: 'flex', flexDirection: 'column',
      padding: '28px 0',
      backdropFilter: 'blur(12px)',
    }}>
      {/* Logo */}
      <div style={{ padding: '0 20px 28px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <span style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 800, fontSize: '18px', color: '#f1f5f9',
          letterSpacing: '-0.5px',
        }}>
          CRO<span style={{ color: '#8b5cf6' }}>Kit</span>
        </span>
        <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '11px', marginTop: '4px' }}>
          Personal knowledge base
        </p>
      </div>

      {/* Nav */}
      <nav style={{ flex: 1, padding: '16px 12px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
        {NAV.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to} to={to} end={to === '/'}
            style={({ isActive }) => ({
              display: 'flex', alignItems: 'center', gap: '10px',
              padding: '9px 12px', borderRadius: '8px',
              textDecoration: 'none', fontSize: '13px',
              fontWeight: isActive ? 600 : 400,
              color: isActive ? '#c4b5fd' : 'rgba(255,255,255,0.45)',
              background: isActive ? 'rgba(139,92,246,0.12)' : 'transparent',
              transition: 'all 0.15s',
            })}
          >
            <Icon size={15} />
            {label}
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div style={{ padding: '16px 20px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <p style={{ color: 'rgba(255,255,255,0.2)', fontSize: '11px' }}>Madhukar Reddy</p>
        <p style={{ color: 'rgba(255,255,255,0.15)', fontSize: '10px', marginTop: '2px' }}>CRO → Automation Eng.</p>
      </div>
    </aside>
  )
}