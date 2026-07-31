import React from 'react';
import { Sparkles, BarChart2, Activity, PieChart } from 'lucide-react';
import AnimatedStars from './AnimatedStars';

export default function HeroSection() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden' }}>
      <AnimatedStars transparent />
      <div className="hero container">
        <div className="hero-content">
          <h1 className="hero-title">
          Software a la <span className="highlight-word">medida</span><br />
          <span className="text-gradient">para tu negocio</span>
        </h1>

        <p className="hero-subtitle">
          ¿Tus sistemas actuales te limitan? Desarrollamos plataformas web, aplicaciones móviles y sistemas internos personalizados que resuelven los problemas técnicos más complejos de tu empresa.
        </p>

        <button className="btn-primary">Cuentanos tu idea</button>
      </div>

      <div className="hero-visual">
        <div className="mockup-container">
          <div className="mockup-image-wrapper" style={{ background: 'transparent', border: 'none', boxShadow: 'none', display: 'flex', justifyContent: 'center' }}>
            <div className="mockup-inner" style={{ background: 'transparent', overflow: 'visible', width: '100%', maxWidth: '800px', display: 'block' }}>
              <img
                src="/loquiero_transparent.webp"
                alt="UI Wireframe"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  transform: 'scale(1.5)',
                  /* Invert colors to dark mode, shift hue slightly for neon blue accent */
                  filter: 'invert(1) hue-rotate(170deg) brightness(1.2) contrast(1.1) drop-shadow(0 25px 50px rgba(0,240,255,0.15))'
                }}
              />
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
