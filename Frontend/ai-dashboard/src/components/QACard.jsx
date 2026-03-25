import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'

const CATEGORY_COLORS = {
  'Ideation':          '#f59e0b',
  'Form Optimization': '#10b981',
  'Design':            '#8b5cf6',
  'Testing':           '#3b82f6',
  'Client Management': '#ef4444',
}

export default function QACard({ question, context, answer, category }) {
  const [open, setOpen] = useState(false)
  const accent = CATEGORY_COLORS[category] || '#8b5cf6'

  return (
    <div style={{
      background: 'rgba(255,255,255,0.03)',
      border: `1px solid ${open ? accent + '30' : 'rgba(255,255,255,0.07)'}`,
      borderRadius: '12px',
      overflow: 'hidden',
      transition: 'border-color 0.2s',
    }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%', padding: '20px 24px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
          gap: '16px', background: 'none', border: 'none',
          cursor: 'pointer', textAlign: 'left',
        }}
      >
        <div style={{ flex: 1 }}>
          <span style={{
            display: 'inline-block',
            padding: '2px 10px', borderRadius: '999px', fontSize: '11px',
            background: `${accent}15`, color: accent,
            border: `1px solid ${accent}25`,
            marginBottom: '10px',
          }}>
            {category}
          </span>
          <p style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: '15px', fontWeight: 600,
            color: '#f1f5f9', lineHeight: 1.5,
          }}>
            {question}
          </p>
          {context && (
            <p style={{
              fontSize: '12px', color: 'rgba(255,255,255,0.3)',
              marginTop: '6px', lineHeight: 1.6, fontStyle: 'italic',
            }}>
              Context: {context}
            </p>
          )}
        </div>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          style={{ flexShrink: 0, marginTop: '4px' }}
        >
          <FiChevronDown style={{ color: 'rgba(255,255,255,0.3)' }} />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div style={{
              padding: '0 24px 24px',
              borderTop: `1px solid rgba(255,255,255,0.05)`,
              paddingTop: '20px',
            }}>
              <div style={{
                fontSize: '13px', color: 'rgba(255,255,255,0.55)',
                lineHeight: 1.9,
                whiteSpace: 'pre-wrap',
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