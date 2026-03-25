import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext'

const CATEGORY_COLORS = {
  'Ideation':          '#f59e0b',
  'Form Optimization': '#10b981',
  'Design':            '#8b5cf6',
  'Testing':           '#3b82f6',
  'Client Management': '#ef4444',
}

export default function QACard({ question, context, answer, category }) {
  const [open, setOpen] = useState(false)
  const { theme } = useTheme()
  const accent = CATEGORY_COLORS[category] || '#8b5cf6'

  return (
    <div style={{
      background: theme.surface,
      border: `1px solid ${open ? accent + '35' : theme.border}`,
      borderRadius: '11px', overflow: 'hidden',
      transition: 'border-color 0.2s, background 0.3s',
    }}>
      <button onClick={() => setOpen(!open)} style={{
        width: '100%', padding: '18px 20px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
        gap: '16px', background: 'none', border: 'none',
        cursor: 'pointer', textAlign: 'left',
      }}>
        <div style={{ flex: 1 }}>
          <span style={{
            display: 'inline-block', padding: '2px 9px',
            borderRadius: '999px', fontSize: '11px',
            background: `${accent}15`, color: accent,
            border: `1px solid ${accent}22`, marginBottom: '9px',
          }}>
            {category}
          </span>
          <p style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: '14px', fontWeight: 600,
            color: theme.text, lineHeight: 1.5,
          }}>
            {question}
          </p>
          {context && (
            <p style={{
              fontSize: '12px', color: theme.textFaint,
              marginTop: '5px', lineHeight: 1.6, fontStyle: 'italic',
            }}>
              {context}
            </p>
          )}
        </div>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          style={{ flexShrink: 0, marginTop: '2px' }}
        >
          <FiChevronDown style={{ color: theme.textFaint }} size={16} />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
          >
            <div style={{
              padding: '16px 20px 20px',
              borderTop: `1px solid ${theme.border}`,
            }}>
              <div style={{
                fontSize: '13px', color: theme.textMuted,
                lineHeight: 1.9, whiteSpace: 'pre-wrap',
              }}>
                {answer}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}