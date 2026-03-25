import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiCopy, FiCheck } from 'react-icons/fi'

const CATEGORY_COLORS = {
  'System Design': '#3b82f6',
  'Debugging':     '#ef4444',
  'CRO Insights':  '#f59e0b',
  'Learning':      '#10b981',
  'Automation':    '#8b5cf6',
}

export default function PromptCard({ title, category, content }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(content)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const accent = CATEGORY_COLORS[category] || '#8b5cf6'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '14px',
        padding: '24px',
        backdropFilter: 'blur(16px)',
        display: 'flex',
        flexDirection: 'column',
        gap: '14px',
        boxShadow: '0 4px 24px rgba(0,0,0,0.2)',
        transition: 'border-color 0.2s, box-shadow 0.2s',
        cursor: 'default',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = `${accent}40`
        e.currentTarget.style.boxShadow = `0 8px 32px rgba(0,0,0,0.3), 0 0 0 1px ${accent}20`
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
        e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.2)'
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px' }}>
        <h3 style={{
          fontSize: '15px', fontWeight: 600,
          color: '#f1f5f9', lineHeight: 1.4, flex: 1,
        }}>
          {title}
        </h3>
        <span style={{
          padding: '3px 10px', borderRadius: '999px', fontSize: '11px',
          fontWeight: 500, whiteSpace: 'nowrap', flexShrink: 0,
          background: `${accent}20`, color: accent,
          border: `1px solid ${accent}30`,
        }}>
          {category}
        </span>
      </div>

      {/* Content */}
      <p style={{
        fontSize: '13px', color: 'rgba(255,255,255,0.45)',
        lineHeight: 1.7, flex: 1,
        display: '-webkit-box',
        WebkitLineClamp: 4,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
      }}>
        {content}
      </p>

      {/* Copy Button */}
      <button
        onClick={handleCopy}
        style={{
          display: 'flex', alignItems: 'center', gap: '8px',
          alignSelf: 'flex-start',
          padding: '8px 16px', borderRadius: '8px',
          border: `1px solid ${copied ? '#10b981' : 'rgba(255,255,255,0.1)'}`,
          background: copied ? 'rgba(16,185,129,0.15)' : 'rgba(255,255,255,0.05)',
          color: copied ? '#10b981' : 'rgba(255,255,255,0.6)',
          fontSize: '12px', fontWeight: 500,
          cursor: 'pointer', transition: 'all 0.2s',
          fontFamily: 'inherit',
        }}
        onMouseEnter={e => {
          if (!copied) {
            e.currentTarget.style.background = `${accent}20`
            e.currentTarget.style.borderColor = `${accent}60`
            e.currentTarget.style.color = accent
          }
        }}
        onMouseLeave={e => {
          if (!copied) {
            e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
            e.currentTarget.style.color = 'rgba(255,255,255,0.6)'
          }
        }}
      >
        {copied ? <FiCheck size={13} /> : <FiCopy size={13} />}
        {copied ? 'Copied!' : 'Copy Prompt'}
      </button>
    </motion.div>
  )
}