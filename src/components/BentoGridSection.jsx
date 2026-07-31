import React from 'react';
import { Smartphone, Code2, Bot, Layout } from 'lucide-react';
import HamsterLoader from './HamsterLoader';

import AnimatedStars from './AnimatedStars';

export default function BentoGridSection() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden' }}>
      <AnimatedStars transparent />
      <div className="container" style={{ paddingTop: '4rem', paddingBottom: '8rem', position: 'relative', zIndex: 1 }}>
        <div className="bg-glow-middle"></div>
      <div style={{ textAlign: 'center', marginBottom: '4rem', position: 'relative', zIndex: 1 }}>
        <h2 style={{ fontSize: 'clamp(2rem, 8vw, 3rem)', fontWeight: 'bold', color: '#fff', lineHeight: '1.2' }}>
          Todo lo que tu negocio necesita.<br />
          <span className="text-gradient">Nada de lo que no.</span>
        </h2>
      </div>

      <div className="bento-grid">

        {/* Card 1: MAIN (2x2) */}
        <div className="bento-card bento-main" style={{ '--hover-color': '0, 240, 255' }}>
          <div className="bento-content">
            <Layout className="bento-icon" size={32} color="var(--accent-blue)" />
            <h3>No te adaptes al software. Que él se adapte a ti.</h3>
            <p>Olvídate de procesos rígidos. Diseñamos plataformas web modulares que encajan perfectamente en la forma en que tú y tu equipo ya trabajan.</p>
          </div>
          {/* Abstract visual for modularity */}
          <div className="bento-visual">
            <div className="bento-modular-visual">
              <div className="mod-block top-left"></div>
              <div className="mod-block top-right"></div>
              <div className="mod-block bottom-wide"></div>
            </div>
          </div>
        </div>

        {/* Card 2: VERTICAL (1x2) */}
        <div className="bento-card bento-vertical" style={{ '--hover-color': '255, 51, 102' }}>
          <div className="bento-content">
            <Smartphone className="bento-icon" size={32} color="#ff3366" />
            <h3>Apps Móviles Nativas</h3>
            <p>Lleva tu negocio en el bolsillo con experiencias iOS y Android.</p>
          </div>
          <div className="bento-visual">
            <div className="bento-phone">
              <div className="phone-screen">
                <div className="phone-header"></div>
                <div className="phone-line"></div>
                <div className="phone-line short"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: WIDE (2x1) */}
        <div className="bento-card bento-wide" style={{ '--hover-color': '0, 168, 255' }}>
          <div className="bento-content bento-wide-content">
            <div style={{ flex: 1 }}>
              <Bot className="bento-icon" size={32} color="var(--accent-cyan)" />
              <h3>Automatización Inteligente</h3>
              <p>Eliminamos el trabajo manual. Conectamos tus sistemas y creamos bots que ahorran cientos de horas al mes en tareas repetitivas.</p>
            </div>
            <div className="hamster-wrapper">
              <HamsterLoader />
            </div>
          </div>
        </div>

        {/* Card 4: SMALL (1x1) */}
        <div className="bento-card bento-small" style={{ '--hover-color': '255, 189, 46' }}>
          <div className="bento-content">
            <Code2 className="bento-icon" size={32} color="#ffbd2e" />
            <h3>100% Código Propio</h3>
            <p>Sin licencias abusivas. El software es tuyo.</p>
          </div>
        </div>

      </div>
      </div>
    </section>
  );
}
