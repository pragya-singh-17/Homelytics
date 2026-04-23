import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import AIGeneration from './pages/AIGeneration'
import DragDropCustomize from './pages/DragDropCustomize'
import LayoutGenerator from './pages/LayoutGenerator'
//import Migration from './Migration';

function App() {
  return (
    <Router>
      <div className="min-h-screen" style={{ background: 'rgb(var(--bg-primary))' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          {/* <Route path="/" element={<Migration />} /> */}

          <Route path="/ai-generate" element={<AIGeneration />} />
          <Route path="/generate-layout" element={<LayoutGenerator />} />
          <Route path="/customize" element={<DragDropCustomize />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
