import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AIChatbots from './pages/AIChatbots'
import Automation from './pages/Automation'
import AIAgents from './pages/AIAgents'
import Home from './pages/Home' // We'll need to move the current App content to this component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ai-chatbots" element={<AIChatbots />} />
        <Route path="/automation" element={<Automation />} />
        <Route path="/ai-agents" element={<AIAgents />} />
      </Routes>
    </Router>
  )
}

export default App
