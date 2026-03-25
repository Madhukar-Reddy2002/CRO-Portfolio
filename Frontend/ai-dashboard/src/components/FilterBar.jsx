export default function FilterBar({ active, onChange, categories }) {
  const cats = categories || ['All', 'System Design', 'Debugging', 'CRO Insights', 'Learning', 'Automation']

  return (
    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
      {cats.map(cat => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          style={{
            padding: '8px 18px',
            borderRadius: '999px',
            border: '1px solid',
            borderColor: active === cat ? '#8b5cf6' : 'rgba(255,255,255,0.1)',
            background: active === cat
              ? 'rgba(139,92,246,0.2)'
              : 'rgba(255,255,255,0.03)',
            color: active === cat ? '#c4b5fd' : 'rgba(255,255,255,0.45)',
            fontSize: '13px',
            cursor: 'pointer',
            transition: 'all 0.2s',
            fontFamily: 'inherit',
            backdropFilter: 'blur(8px)',
          }}
          onMouseEnter={e => {
            if (active !== cat) {
              e.currentTarget.style.borderColor = 'rgba(139,92,246,0.4)'
              e.currentTarget.style.color = 'rgba(255,255,255,0.7)'
            }
          }}
          onMouseLeave={e => {
            if (active !== cat) {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
              e.currentTarget.style.color = 'rgba(255,255,255,0.45)'
            }
          }}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}