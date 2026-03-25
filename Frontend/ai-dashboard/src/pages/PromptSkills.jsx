import { useState, useMemo } from 'react'
import { AnimatePresence } from 'framer-motion'
import PromptCard from '../components/PromptCard'
import SearchBar from '../components/SearchBar'
import FilterBar from '../components/FilterBar'
import { prompts } from '../data/prompts'

export default function PromptSkills() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = useMemo(() => {
    return prompts.filter(p => {
      const matchesCategory = activeCategory === 'All' || p.category === activeCategory
      const q = search.toLowerCase()
      const matchesSearch = !q ||
        p.title.toLowerCase().includes(q) ||
        p.content.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      return matchesCategory && matchesSearch
    })
  }, [search, activeCategory])

  return (
    <div style={{ padding: '100px 60px 60px', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Page Header */}
      <div style={{ marginBottom: '48px' }}>
        <p style={{
          color: '#8b5cf6', fontSize: '12px',
          letterSpacing: '0.2em', marginBottom: '12px',
          fontFamily: "'DM Mono', monospace",
        }}>
          PROMPT SKILLS
        </p>
        <h1 style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: 'clamp(32px, 5vw, 52px)',
          fontWeight: 800, letterSpacing: '-2px',
          lineHeight: 1.1, marginBottom: '16px',
          color: '#f1f5f9',
        }}>
          AI Prompt Library
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '15px' }}>
          {prompts.length} prompts · Click to copy instantly
        </p>
      </div>

      {/* Controls */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
        <SearchBar value={search} onChange={setSearch} />
        <FilterBar active={activeCategory} onChange={setActiveCategory} />
      </div>

      {/* Results count */}
      <p style={{
        color: 'rgba(255,255,255,0.25)', fontSize: '12px',
        marginBottom: '24px', fontFamily: "'DM Mono', monospace",
      }}>
        {filtered.length} result{filtered.length !== 1 ? 's' : ''}
      </p>

      {/* Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
        gap: '20px',
      }}>
        <AnimatePresence>
          {filtered.length > 0
            ? filtered.map(p => <PromptCard key={p.id} {...p} />)
            : (
              <div style={{
                gridColumn: '1 / -1', textAlign: 'center',
                padding: '80px 0', color: 'rgba(255,255,255,0.2)',
              }}>
                No prompts found for "{search}"
              </div>
            )
          }
        </AnimatePresence>
      </div>
    </div>
  )
}