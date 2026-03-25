import { useState } from 'react'
import { learningPath } from '../data/learningPath'
import { motion } from 'framer-motion'

export default function CROLearningPath() {
  const allTopics = learningPath.flatMap(s => s.topics)
  const [active, setActive] = useState(allTopics[0].id)
  const current = allTopics.find(t => t.id === active)

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      {/* Doc nav */}
      <div style={{
        width: '240px', flexShrink: 0, overflowY: 'auto',
        borderRight: '1px solid rgba(255,255,255,0.06)',
        padding: '28px 12px',
      }}>
        <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '11px', letterSpacing: '0.15em', padding: '0 8px', marginBottom: '16px' }}>
          CRO LEARNING PATH
        </p>
        {learningPath.map(section => (
          <div key={section.id} style={{ marginBottom: '24px' }}>
            <p style={{
              color: 'rgba(255,255,255,0.35)', fontSize: '11px',
              fontWeight: 600, letterSpacing: '0.1em',
              padding: '0 8px', marginBottom: '6px',
            }}>
              {section.section.toUpperCase()}
            </p>
            {section.topics.map(topic => (
              <button key={topic.id} onClick={() => setActive(topic.id)} style={{
                width: '100%', textAlign: 'left', padding: '8px',
                borderRadius: '6px', border: 'none', cursor: 'pointer',
                fontSize: '13px',
                color: active === topic.id ? '#c4b5fd' : 'rgba(255,255,255,0.45)',
                background: active === topic.id ? 'rgba(139,92,246,0.12)' : 'transparent',
                fontFamily: 'inherit', transition: 'all 0.15s',
              }}>
                {topic.title}
              </button>
            ))}
          </div>
        ))}
      </div>

      {/* Content */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '48px 60px' }}>
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <h1 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: '32px', fontWeight: 800,
            letterSpacing: '-1px', marginBottom: '28px',
            color: '#f1f5f9',
          }}>
            {current.title}
          </h1>
          <div style={{
            color: 'rgba(255,255,255,0.6)',
            fontSize: '14px', lineHeight: 2,
            whiteSpace: 'pre-wrap', maxWidth: '680px',
          }}>
            {current.content}
          </div>
        </motion.div>
      </div>
    </div>
  )
}