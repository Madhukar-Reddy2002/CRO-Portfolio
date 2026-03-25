import { FiSearch } from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext'

export default function SearchBar({ value, onChange }) {
  const { theme } = useTheme()
  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: '520px' }}>
      <FiSearch style={{
        position: 'absolute', left: '14px', top: '50%',
        transform: 'translateY(-50%)',
        color: theme.textFaint, fontSize: '15px', pointerEvents: 'none',
      }} />
      <input
        type="text"
        placeholder="Search..."
        value={value}
        onChange={e => onChange(e.target.value)}
        style={{
          width: '100%', padding: '11px 14px 11px 40px',
          background: theme.inputBg,
          border: `1px solid ${theme.inputBorder}`,
          borderRadius: '9px', color: theme.text,
          fontSize: '13px', outline: 'none',
          backdropFilter: 'blur(10px)',
          transition: 'border-color 0.2s, background 0.3s',
          fontFamily: 'inherit',
        }}
        onFocus={e => e.target.style.borderColor = theme.accent}
        onBlur={e => e.target.style.borderColor = theme.inputBorder}
      />
    </div>
  )
}