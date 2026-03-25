import { useState } from 'react'
import { clientChecklist } from '../data/clientChecklist'
import { FiCheckCircle, FiCircle } from 'react-icons/fi'

export default function ClientChecklist() {
  const total = clientChecklist.flatMap(s => s.items).length
  const [checked, setChecked] = useState({})

  const toggle = (id) => setChecked(prev => ({ ...prev, [id]: !prev[id] }))
  const checkedCount = Object.values(checked).filter(Boolean).length

  return (
    <div style={{ padding: '48px 60px', maxWidth: '820px' }}>
      <p style={{ color: '#f59e0b', fontSize: '12px', letterSpacing: '0.2em', marginBottom: '12px' }}>
        CLIENT CHECKLIST
      </p>
      <h1 style={{
        fontFamily: "'Syne', sans-serif",
        fontSize: 'clamp(28px, 4vw, 44px)',
        fontWeight: 800, letterSpacing: '-1.5px', marginBottom: '8px',
      }}>
        Pre-Engagement Checklist
      </h1>
      <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '14px', marginBottom: '8px' }}>
        Use before starting any new client engagement
      </p>

      {/* Progress */}
      <div style={{ marginBottom: '40px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
          <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '12px' }}>Progress</span>
          <span style={{ color: '#f59e0b', fontSize: '12px', fontFamily: "'DM Mono'" }}>
            {checkedCount} / {total}
          </span>
        </div>
        <div style={{ height: '4px', background: 'rgba(255,255,255,0.06)', borderRadius: '2px' }}>
          <div style={{
            height: '100%', borderRadius: '2px',
            background: 'linear-gradient(90deg, #f59e0b, #fbbf24)',
            width: `${(checkedCount / total) * 100}%`,
            transition: 'width 0.3s ease',
          }} />
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        {clientChecklist.map(section => (
          <div key={section.id}>
            <p style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700, fontSize: '16px',
              color: '#f1f5f9', marginBottom: '14px',
              paddingBottom: '10px',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
            }}>
              {section.section}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {section.items.map(item => (
                <div
                  key={item.id}
                  onClick={() => toggle(item.id)}
                  style={{
                    display: 'flex', alignItems: 'flex-start', gap: '12px',
                    padding: '12px 14px', borderRadius: '8px',
                    background: checked[item.id] ? 'rgba(245,158,11,0.06)' : 'rgba(255,255,255,0.02)',
                    border: `1px solid ${checked[item.id] ? 'rgba(245,158,11,0.2)' : 'rgba(255,255,255,0.05)'}`,
                    cursor: 'pointer', transition: 'all 0.15s',
                  }}
                >
                  {checked[item.id]
                    ? <FiCheckCircle size={16} color="#f59e0b" style={{ marginTop: '2px', flexShrink: 0 }} />
                    : <FiCircle size={16} color="rgba(255,255,255,0.2)" style={{ marginTop: '2px', flexShrink: 0 }} />
                  }
                  <span style={{
                    fontSize: '13px', lineHeight: 1.6,
                    color: checked[item.id] ? 'rgba(255,255,255,0.35)' : 'rgba(255,255,255,0.6)',
                    textDecoration: checked[item.id] ? 'line-through' : 'none',
                    transition: 'all 0.15s',
                  }}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}