import { useState, useMemo } from 'react'
import { AnimatePresence } from 'framer-motion'
import PromptCard from '../components/PromptCard'
import SearchBar from '../components/SearchBar'
import FilterBar from '../components/FilterBar'
import { prompts } from '../data/prompts'
import { useTheme } from '../context/ThemeContext'

export default function PromptSkills() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  const { theme } = useTheme()

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
    <div style={{ padding: '48px 48px 60px', maxWidth: '1100px' }}>
      <p style={{ color: theme.accent, fontSize: '11px', letterSpacing: '0.2em', marginBottom: '10px' }}>
        PROMPT SKILLS
      </p>
      <h1 style={{
        fontFamily: "'Syne', sans-serif",
        fontSize: 'clamp(26px, 4vw, 44px)',
        fontWeight: 800, letterSpacing: '-1.5px',
        color: theme.text, marginBottom: '6px',
      }}>
        AI Prompt Library
      </h1>
      <p style={{ color: theme.textMuted, fontSize: '13px', marginBottom: '28px' }}>
        {prompts.length} prompts · click to copy
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
        <SearchBar value={search} onChange={setSearch} />
        <FilterBar active={activeCategory} onChange={setActiveCategory} />
      </div>

      <p style={{ color: theme.textFaint, fontSize: '11px', marginBottom: '20px', fontFamily: "'DM Mono'" }}>
        {filtered.length} result{filtered.length !== 1 ? 's' : ''}
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '16px',
      }}>
        <AnimatePresence>
          {filtered.length > 0
            ? filtered.map(p => <PromptCard key={p.id} {...p} />)
            : (
              <div style={{
                gridColumn: '1 / -1', textAlign: 'center',
                padding: '60px 0', color: theme.textFaint, fontSize: '13px',
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