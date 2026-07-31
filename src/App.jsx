import React from 'react'
import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import LandingPage from './pages/LandingPage'
import CompanyPage from './pages/CompanyPage'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import AnimatedStars from './components/AnimatedStars'

function App() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="app-container">
      <div className="bg-glow-top"></div>
      <div className="grid-bg"></div>

      <Navbar />
      
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/compania" element={<CompanyPage />} />
      </Routes>

      <div style={{ position: 'relative', paddingBottom: '2rem', zIndex: 1 }}>
        <AnimatedStars transparent />
        <div className="bg-glow-bottom" style={{ zIndex: 0, bottom: 0, height: '150vh' }}></div>
        {isHome && <ContactSection />}
        <Footer />
      </div>
    </div>
  )
}

export default App
