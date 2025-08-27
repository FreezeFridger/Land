import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar';
import Home from './pages/home'
import Blog from './pages/blog'
import 'katex/dist/katex.min.css';

function App() {
  return (
    <Router>
      <div >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App