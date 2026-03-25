import { useState } from 'react'
import { questions } from '../data/questionsBank'
import QACard from '../components/QACard'
import FilterBar from '../components/FilterBar'
import SearchBar from '../components/SearchBar'

const CATEGORIES = ['All', 'Ideation', 'Form Optimization', 'Design', 'Testing', 'Client Management']

export default function QuestionsBank() {
  const [search, setSearch] = useState('')
  const [cat, setCat] = useState('All')

  const filtered = questions.filter(q => {
    const matchCat = cat === 'All' || q.category === cat
    const term = search.toLowerCase()
    const matchSearch = !term || q.question.toLowerCase().includes(term) || q.answer.toLowerCase().includes(term)
    return matchCat && matchSearch
  })

  return (
    <div style={{ padding: '48px 60px', maxWidth: '900px' }}>
      <p style={{ color: '#10b981', fontSize: '12px', letterSpacing: '0.2em', marginBottom: '12px' }}>
        QUESTIONS BANK
      </p>
      <h1 style={{
        fontFamily: "'Syne', sans-serif",
        fontSize: 'clamp(28px, 4vw, 44px)',
        fontWeight: 800, letterSpacing: '-1.5px',
        marginBottom: '8px',
      }}>
        Real Scenarios & Frameworks
      </h1>
      <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '14px', marginBottom: '36px' }}>
        {questions.length} questions across testing, forms, design, and client management
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
        <SearchBar value={search} onChange={setSearch} />
        <FilterBar active={cat} onChange={setCat} categories={CATEGORIES} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {filtered.map(q => <QACard key={q.id} {...q} />)}
      </div>
    </div>
  )
}