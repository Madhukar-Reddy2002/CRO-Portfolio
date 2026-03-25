import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiCopy, FiCheck } from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext'

const CATEGORY_COLORS = {
  'System Design': '#3b82f6',
  'Debugging':     '#ef4444',
  'CRO Insights':  '#f59e0b',
  'Learning':      '#10b981',
  'Automation':    '#8b5cf6',
}

export default function PromptCard({ title, category, content }) {
  const [copied, setCopied] = useState(false)
  const { theme } = useTheme()
  const accent = CATEGORY_COLORS[category] || '#8b5cf6'

  const handleCopy = async () => {
    await navigator.clipboard.writeText(content)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
      style={{
        background: theme.surface,
        border: `1px solid ${theme.border}`,
        borderRadius: '12px', padding: '22px',
        display: 'flex', flexDirection: 'column', gap: '14px',
        boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
        transition: 'border-color 0.2s, background 0.3s',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = `${accent}50`
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = theme.border
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px' }}>
        <h3 style={{
          fontSize: '14px', fontWeight: 600,
          color: theme.text, lineHeight: 1.4, flex: 1,
        }}>
          {title}
        </h3>
        <span style={{
          padding: '3px 9px', borderRadius: '999px', fontSize: '11px',
          fontWeight: 500, whiteSpace: 'nowrap', flexShrink: 0,
          background: `${accent}18`, color: accent,
          border: `1px solid ${accent}28`,
        }}>
          {category}
        </span>
      </div>

      <p style={{
        fontSize: '13px', color: theme.textMuted,
        lineHeight: 1.7, flex: 1,
        display: '-webkit-box',
        WebkitLineClamp: 4,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
      }}>
        {content}
      </p>

      <button onClick={handleCopy} style={{
        display: 'flex', alignItems: 'center', gap: '7px',
        alignSelf: 'flex-start', padding: '7px 14px', borderRadius: '7px',
        border: `1px solid ${copied ? '#10b981' : theme.border}`,
        background: copied ? 'rgba(16,185,129,0.12)' : theme.surface,
        color: copied ? '#10b981' : theme.textMuted,
        fontSize: '12px', fontWeight: 500, cursor: 'pointer',
        transition: 'all 0.2s', fontFamily: 'inherit',
      }}>
        {copied ? <FiCheck size={12} /> : <FiCopy size={12} />}
        {copied ? 'Copied!' : 'Copy'}
      </button>
    </motion.div>
  )
}