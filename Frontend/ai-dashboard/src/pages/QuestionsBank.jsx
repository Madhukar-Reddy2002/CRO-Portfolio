import { useState } from 'react'
import { questions } from '../data/questionsBank'
import QACard from '../components/QACard'
import FilterBar from '../components/FilterBar'
import { useTheme } from '../context/ThemeContext'

const CATEGORIES = ['All', 'Ideation', 'Form Optimization', 'Design', 'Testing', 'Client Management']

export default function QuestionsBank() {
  const [cat, setCat] = useState('All')
  const { theme } = useTheme()

  const filtered = questions.filter(q =>
    cat === 'All' || q.category === cat
  )

  return (
    <div style={{ padding: '48px 48px 60px', maxWidth: '860px' }}>
      <p style={{ color: '#10b981', fontSize: '11px', letterSpacing: '0.2em', marginBottom: '10px' }}>
        QUESTIONS BANK
      </p>
      <h1 style={{
        fontFamily: "'Syne', sans-serif",
        fontSize: 'clamp(26px, 4vw, 42px)',
        fontWeight: 800, letterSpacing: '-1.5px',
        color: theme.text, marginBottom: '6px',
      }}>
        Real Scenarios & Frameworks
      </h1>
      <p style={{ color: theme.textMuted, fontSize: '13px', marginBottom: '28px' }}>
        {questions.length} questions — click any card to expand
      </p>

      <div style={{ marginBottom: '28px' }}>
        <FilterBar active={cat} onChange={setCat} categories={CATEGORIES} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {filtered.map(q => <QACard key={q.id} {...q} />)}
        {filtered.length === 0 && (
          <p style={{ color: theme.textFaint, fontSize: '13px', padding: '40px 0', textAlign: 'center' }}>
            No questions in this category yet.
          </p>
        )}
      </div>
    </div>
  )
}