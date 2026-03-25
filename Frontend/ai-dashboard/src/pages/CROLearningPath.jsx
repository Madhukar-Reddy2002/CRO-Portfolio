import { useState } from 'react'
import { motion } from 'framer-motion'
import { learningPath } from '../data/learningPath'
import { useTheme } from '../context/ThemeContext'

export default function CROLearningPath() {
  const allTopics = learningPath.flatMap(s => s.topics)
  const [active, setActive] = useState(allTopics[0].id)
  const { theme } = useTheme()
  const current = allTopics.find(t => t.id === active)

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>

      {/* Doc nav panel */}
      <div style={{
        width: '230px', flexShrink: 0, overflowY: 'auto',
        borderRight: `1px solid ${theme.sidebarBorder}`,
        padding: '24px 10px',
        background: theme.sidebarBg,
        transition: 'background 0.3s',
      }}>
        {learningPath.map(section => (
          <div key={section.id} style={{ marginBottom: '20px' }}>

            {/* Section heading — clearly NOT a link */}
            <p style={{
              color: theme.accent,
              fontSize: '10px', fontWeight: 700,
              letterSpacing: '0.14em', textTransform: 'uppercase',
              padding: '0 10px', marginBottom: '6px', marginTop: '4px',
              opacity: 0.8,
            }}>
              {section.section}
            </p>

            {/* Topic links */}
            {section.topics.map(topic => {
              const isActive = active === topic.id
              return (
                <button
                  key={topic.id}
                  onClick={() => setActive(topic.id)}
                  style={{
                    width: '100%', textAlign: 'left',
                    padding: '8px 10px', borderRadius: '7px',
                    border: 'none', cursor: 'pointer',
                    fontSize: '13px', lineHeight: 1.4,
                    color: isActive ? theme.accentText : theme.textMuted,
                    background: isActive ? theme.accentBg : 'transparent',
                    fontFamily: 'inherit',
                    transition: 'all 0.15s',
                    borderLeft: isActive ? `2px solid ${theme.accent}` : '2px solid transparent',
                    fontWeight: isActive ? 600 : 400,
                  }}
                  onMouseEnter={e => {
                    if (!isActive) e.currentTarget.style.color = theme.text
                  }}
                  onMouseLeave={e => {
                    if (!isActive) e.currentTarget.style.color = theme.textMuted
                  }}
                >
                  {topic.title}
                </button>
              )
            })}
          </div>
        ))}
      </div>

      {/* Content panel */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '44px 56px 60px' }}>
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.18 }}
        >
          <h1 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: 'clamp(22px, 3vw, 32px)',
            fontWeight: 800, letterSpacing: '-0.8px',
            marginBottom: '28px', color: theme.text,
            lineHeight: 1.2,
          }}>
            {current.title}
          </h1>
          <div style={{
            fontSize: '14px', color: theme.textMuted,
            lineHeight: 2, whiteSpace: 'pre-wrap',
            maxWidth: '660px',
          }}>
            {current.content}
          </div>
        </motion.div>
      </div>
    </div>
  )
}