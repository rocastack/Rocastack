import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="navbar container">
      <Link to="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '0.1rem', cursor: 'pointer', textDecoration: 'none' }}>
        <img src="/logo.svg" alt="Rocastack Logo" style={{ height: '50px', width: 'auto', display: 'block' }} />
        <span style={{ color: '#ffffff', fontSize: '1.5rem', fontWeight: '700', letterSpacing: '-0.01em' }}>ocastack</span>
      </Link>

      <button
        className="mobile-menu-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      <div className={`nav-links ${isOpen ? 'mobile-open' : ''}`}>
        <a href="/#services" className="nav-item" onClick={() => setIsOpen(false)}>Servicios</a>
        <a href="/#products" className="nav-item" onClick={() => setIsOpen(false)}>Productos</a>
        <Link to="/compania" className="nav-item" onClick={() => setIsOpen(false)}>Compañía</Link>
      </div>

    </nav>
  );
}
