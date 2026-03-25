import { useTheme } from '../context/ThemeContext'

export default function FilterBar({ active, onChange, categories }) {
  const { theme } = useTheme()
  const cats = categories || ['All', 'System Design', 'Debugging', 'CRO Insights', 'Learning', 'Automation']

  return (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      {cats.map(cat => {
        const isActive = active === cat
        return (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            style={{
              padding: '7px 16px', borderRadius: '999px',
              border: `1px solid ${isActive ? theme.accent : theme.border}`,
              background: isActive ? theme.accentBg : 'transparent',
              color: isActive ? theme.accentText : theme.textMuted,
              fontSize: '12px', cursor: 'pointer',
              transition: 'all 0.15s', fontFamily: 'inherit',
              fontWeight: isActive ? 600 : 400,
            }}
          >
            {cat}
          </button>
        )
      })}
    </div>
  )
}