import { NavLink } from 'react-router-dom'
import { FiZap, FiBook, FiHelpCircle, FiCheckSquare, FiHome, FiSun, FiMoon, FiZap as FiNeon } from 'react-icons/fi'
import { useTheme, themes } from '../context/ThemeContext'
import { useState } from 'react'

const NAV = [
  { to: '/',              icon: FiHome,        label: 'Home' },
  { to: '/prompts',       icon: FiZap,         label: 'Prompt Skills' },
  { to: '/learning',      icon: FiBook,        label: 'CRO Learning' },
  { to: '/questions',     icon: FiHelpCircle,  label: 'Questions Bank' },
  { to: '/checklist',     icon: FiCheckSquare, label: 'Client Checklist' },
]

const THEME_ICONS = { dark: FiMoon, neon: FiNeon, solarized: FiSun }

export default function Sidebar() {
  const { theme, themeName, setThemeName } = useTheme()
  const [mobileOpen, setMobileOpen] = useState(false)

  const sidebarContent = (
    <div style={{
      width: '220px', flexShrink: 0,
      background: theme.sidebarBg,
      borderRight: `1px solid ${theme.sidebarBorder}`,
      height: '100vh',
      display: 'flex', flexDirection: 'column',
      padding: '28px 0',
      backdropFilter: 'blur(12px)',
      transition: 'background 0.3s',
    }}>
      {/* Logo */}
      <div style={{
        padding: '0 20px 24px',
        borderBottom: `1px solid ${theme.sidebarBorder}`,
      }}>
        <span style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 800, fontSize: '20px', color: theme.text,
          letterSpacing: '-0.5px',
        }}>
          CRO<span style={{ color: theme.accent }}>Kit</span>
        </span>
        <p style={{ color: theme.textFaint, fontSize: '11px', marginTop: '4px' }}>
          Personal knowledge base
        </p>
      </div>

      {/* Nav */}
      <nav style={{ flex: 1, padding: '16px 12px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
        {NAV.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to} to={to} end={to === '/'}
            onClick={() => setMobileOpen(false)}
            style={({ isActive }) => ({
              display: 'flex', alignItems: 'center', gap: '10px',
              padding: '10px 12px', borderRadius: '8px',
              textDecoration: 'none', fontSize: '13px',
              fontWeight: isActive ? 600 : 400,
              color: isActive ? theme.accentText : theme.textMuted,
              background: isActive ? theme.accentBg : 'transparent',
              transition: 'all 0.15s',
            })}
          >
            {({ isActive }) => (
              <>
                <Icon size={15} color={isActive ? theme.accentText : theme.textMuted} />
                <span>{label}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Theme switcher */}
      <div style={{
        padding: '16px 12px',
        borderTop: `1px solid ${theme.sidebarBorder}`,
      }}>
        <p style={{ color: theme.textFaint, fontSize: '10px', letterSpacing: '0.12em', marginBottom: '10px', paddingLeft: '4px' }}>
          THEME
        </p>
        <div style={{ display: 'flex', gap: '6px' }}>
          {Object.entries(themes).map(([key, t]) => {
            const Icon = THEME_ICONS[key]
            const active = themeName === key
            return (
              <button
                key={key}
                onClick={() => setThemeName(key)}
                title={t.name}
                style={{
                  flex: 1, padding: '7px 0',
                  borderRadius: '7px', border: `1px solid`,
                  borderColor: active ? t.accent : theme.border,
                  background: active ? t.accentBg : 'transparent',
                  color: active ? t.accent : theme.textFaint,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'all 0.15s',
                  fontSize: '11px', gap: '4px',
                  fontFamily: 'inherit',
                }}
              >
                <Icon size={12} />
              </button>
            )
          })}
        </div>
        <div style={{ marginTop: '14px', paddingLeft: '4px' }}>
          <p style={{ color: theme.textMuted, fontSize: '11px' }}>Madhukar Reddy</p>
          <p style={{ color: theme.textFaint, fontSize: '10px', marginTop: '2px' }}>CRO → Automation Eng.</p>
        </div>
      </div>
    </div>
  )

  return (
    <>
      {/* Desktop sidebar */}
      <div style={{ display: 'none' }} className="desktop-sidebar">
        {sidebarContent}
      </div>

      {/* Mobile top bar */}
      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
        background: theme.sidebarBg,
        borderBottom: `1px solid ${theme.sidebarBorder}`,
        backdropFilter: 'blur(12px)',
        padding: '12px 20px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }} className="mobile-topbar">
        <span style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 800, fontSize: '18px', color: theme.text,
        }}>
          CRO<span style={{ color: theme.accent }}>Kit</span>
        </span>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            background: 'none', border: `1px solid ${theme.border}`,
            color: theme.text, padding: '6px 12px', borderRadius: '6px',
            fontSize: '12px', fontFamily: 'inherit',
          }}
        >
          {mobileOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 199,
          background: 'rgba(0,0,0,0.5)',
        }} onClick={() => setMobileOpen(false)}>
          <div onClick={e => e.stopPropagation()} style={{
            position: 'absolute', top: 0, left: 0, bottom: 0,
            width: '240px', background: theme.bg,
            borderRight: `1px solid ${theme.sidebarBorder}`,
            paddingTop: '60px',
            display: 'flex', flexDirection: 'column',
          }}>
            <nav style={{ flex: 1, padding: '16px 12px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
              {NAV.map(({ to, icon: Icon, label }) => (
                <NavLink
                  key={to} to={to} end={to === '/'}
                  onClick={() => setMobileOpen(false)}
                  style={({ isActive }) => ({
                    display: 'flex', alignItems: 'center', gap: '10px',
                    padding: '12px', borderRadius: '8px',
                    textDecoration: 'none', fontSize: '14px',
                    fontWeight: isActive ? 600 : 400,
                    color: isActive ? theme.accentText : theme.textMuted,
                    background: isActive ? theme.accentBg : 'transparent',
                  })}
                >
                  {({ isActive }) => (
                    <>
                      <Icon size={16} color={isActive ? theme.accentText : theme.textMuted} />
                      <span>{label}</span>
                    </>
                  )}
                </NavLink>
              ))}
            </nav>
            <div style={{ padding: '16px 12px', borderTop: `1px solid ${theme.sidebarBorder}` }}>
              <p style={{ color: theme.textFaint, fontSize: '10px', letterSpacing: '0.12em', marginBottom: '10px' }}>THEME</p>
              <div style={{ display: 'flex', gap: '6px' }}>
                {Object.entries(themes).map(([key, t]) => {
                  const Icon = THEME_ICONS[key]
                  const active = themeName === key
                  return (
                    <button key={key} onClick={() => setThemeName(key)} title={t.name} style={{
                      flex: 1, padding: '8px 0', borderRadius: '7px',
                      border: `1px solid ${active ? t.accent : theme.border}`,
                      background: active ? t.accentBg : 'transparent',
                      color: active ? t.accent : theme.textFaint,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      transition: 'all 0.15s', fontFamily: 'inherit',
                    }}>
                      <Icon size={14} />
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Always-visible desktop sidebar via style tag */}
      <style>{`
        @media (min-width: 768px) {
          .desktop-sidebar { display: block !important; position: sticky; top: 0; height: 100vh; }
          .mobile-topbar { display: none !important; }
        }
        @media (max-width: 767px) {
          .desktop-sidebar { display: none !important; }
          .mobile-topbar { display: flex !important; }
        }
      `}</style>

      {/* Desktop render */}
      {/* <div className="desktop-sidebar" style={{ position: 'sticky', top: 0, height: '100vh' }}>
        {sidebarContent}
      </div> */}
    </>
  )
}