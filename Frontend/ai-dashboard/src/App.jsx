import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import PromptSkills from './pages/PromptSkills'
import CROLearningPath from './pages/CROLearningPath'
import QuestionsBank from './pages/QuestionsBank'
import ClientChecklist from './pages/ClientChecklist'

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex', minHeight: '100vh' }}>
        <Sidebar />
        <main style={{ flex: 1, overflowY: 'auto' }}>
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