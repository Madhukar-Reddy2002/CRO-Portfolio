import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useTheme } from './context/ThemeContext'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import PromptSkills from './pages/PromptSkills'
import CROLearningPath from './pages/CROLearningPath'
import QuestionsBank from './pages/QuestionsBank'
import ClientChecklist from './pages/ClientChecklist'

export default function App() {
  const { theme } = useTheme()

  return (
    <BrowserRouter>
      <div style={{
        display: 'flex', minHeight: '100vh',
        background: theme.bg, color: theme.text,
        transition: 'background 0.3s, color 0.3s',
        position: 'relative',
      }}>
        {/* Gradient mesh background */}
        <div style={{
          position: 'fixed', inset: 0, zIndex: 0,
          background: theme.gradientMesh,
          pointerEvents: 'none',
          transition: 'background 0.3s',
        }} />

        <Sidebar />

        <main style={{
          flex: 1, overflowY: 'auto', position: 'relative', zIndex: 1,
          paddingTop: '0',
        }}>
          {/* Mobile top padding so content clears the fixed topbar */}
          <style>{`
            @media (max-width: 767px) {
              main > * { padding-top: 60px !important; }
            }
          `}</style>
          <Routes>
            <Route path="/"          element={<Home />} />
            <Route path="/prompts"   element={<PromptSkills />} />
            <Route path="/learning"  element={<CROLearningPath />} />
            <Route path="/questions" element={<QuestionsBank />} />
            <Route path="/checklist" element={<ClientChecklist />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}