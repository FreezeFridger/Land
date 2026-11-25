import { useState, useEffect } from 'react'
import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar';
import Home from './pages/home'

declare global {
  interface Window {
    plausible?: (event: string, opts?: { props?: Record<string, string | number> }) => void;
  }
}

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('darkMode');
    if (saved !== null) return saved === 'true';
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString());
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    const next = !darkMode;
    setDarkMode(next);
    window.plausible?.('Dark Mode', { props: { mode: next ? 'dark' : 'light' } });
  };

  return (
    <Router>
      <div>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
