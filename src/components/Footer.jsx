import React from 'react';

export default function Footer() {
  return (
    <footer className="footer" style={{ position: 'relative', zIndex: 1, padding: '2rem 0' }}>
      <div className="container">
        <div className="footer-bottom">
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <span>© 2026 Rocastack</span>
            <a href="#" className="footer-link">Términos y Condiciones</a>
            <a href="#" className="footer-link">Política de Privacidad</a>
          </div>

          <p style={{ maxWidth: '500px', textAlign: 'left', fontSize: '0.75rem', opacity: 0.7 }}>
            Rocastack provee servicios de desarrollo de software a medida, aplicaciones web y móviles, y productos tecnológicos propietarios. Todos los derechos reservados.
          </p>

          <div className="footer-links">
            <a href="#" className="footer-link">In</a>
            <a href="#" className="footer-link">X</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
