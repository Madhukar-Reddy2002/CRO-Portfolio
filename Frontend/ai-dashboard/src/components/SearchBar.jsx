import { FiSearch } from 'react-icons/fi'

export default function SearchBar({ value, onChange }) {
  return (
    <div style={{
      position: 'relative', width: '100%', maxWidth: '520px',
    }}>
      <FiSearch style={{
        position: 'absolute', left: '16px', top: '50%',
        transform: 'translateY(-50%)',
        color: 'rgba(255,255,255,0.3)', fontSize: '16px',
        pointerEvents: 'none',
      }} />
      <input
        type="text"
        placeholder="Search prompts..."
        value={value}
        onChange={e => onChange(e.target.value)}
        style={{
          width: '100%',
          padding: '12px 16px 12px 44px',
          background: 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '10px',
          color: '#fff',
          fontSize: '14px',
          outline: 'none',
          backdropFilter: 'blur(10px)',
          transition: 'border-color 0.2s',
          fontFamily: 'inherit',
        }}
        onFocus={e => e.target.style.borderColor = 'rgba(139,92,246,0.6)'}
        onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
      />
    </div>
  )
}