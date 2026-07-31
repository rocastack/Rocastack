import React from 'react';

const AbstractCard = ({ title, subtitle, color, delay }) => {
  return (
    <div 
      className="abstract-3d-card"
      style={{
        position: 'relative',
        width: '280px',
        height: '400px',
        background: 'rgba(10, 10, 15, 0.4)',
        backdropFilter: 'blur(10px)',
        border: `1px solid rgba(255, 255, 255, 0.1)`,
        borderTop: `1px solid rgba(255, 255, 255, 0.3)`,
        borderLeft: `1px solid rgba(255, 255, 255, 0.2)`,
        borderRadius: '24px',
        padding: '2rem',
        boxShadow: `-20px 20px 40px rgba(0,0,0,0.5), inset 0 0 0 1px ${color}33`,
        display: 'flex',
        flexDirection: 'column',
        transform: 'perspective(1000px) rotateY(-25deg) rotateX(10deg)',
        transition: 'all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)',
        animation: `float 6s ease-in-out infinite ${delay}s`
      }}
    >
      {/* Top abstract pill */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '2rem' }}>
        <div style={{ width: '40px', height: '12px', background: color, borderRadius: '6px', opacity: 0.8 }}></div>
        <div style={{ width: '12px', height: '12px', background: 'rgba(255,255,255,0.2)', borderRadius: '50%' }}></div>
      </div>
      
      {/* Title block */}
      <h3 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem', lineHeight: '1.2' }}>{title}</h3>
      <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', marginBottom: '2rem' }}>{subtitle}</p>
      
      {/* Abstract content blocks */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div style={{ width: '100%', height: '60px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px dashed rgba(255,255,255,0.1)' }}></div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <div style={{ flex: 1, height: '40px', background: 'rgba(255,255,255,0.03)', borderRadius: '8px' }}></div>
          <div style={{ flex: 1, height: '40px', background: 'rgba(255,255,255,0.03)', borderRadius: '8px' }}></div>
        </div>
        <div style={{ width: '70%', height: '12px', background: 'rgba(255,255,255,0.05)', borderRadius: '6px', marginTop: 'auto' }}></div>
      </div>
    </div>
  );
};

import AnimatedStars from './AnimatedStars';

export default function AssemblySection() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', zIndex: 2 }}>
      <AnimatedStars transparent />
      <div className="container" style={{ padding: '8rem 0', position: 'relative', zIndex: 1 }}>
      <div className="bg-glow-middle"></div>
      
      <div style={{ textAlign: 'center', marginBottom: '5rem', position: 'relative', zIndex: 1 }}>    <h2 style={{ fontSize: 'clamp(2rem, 8vw, 3rem)', fontWeight: 'bold', color: '#fff' }}>
          Construimos desde cero,<br />
          <span className="text-gradient">pieza por pieza</span>
        </h2>
      </div>

      {/* 3D Cards Container */}
      <div className="assembly-grid">
        
        {/* Style tag for hover and float animation */}
        <style dangerouslySetInnerHTML={{__html: `
          .abstract-3d-card:hover {
            transform: perspective(1000px) rotateY(-15deg) rotateX(5deg) translateY(-20px) !important;
            z-index: 10;
            background: rgba(20, 20, 25, 0.6) !important;
            box-shadow: -30px 30px 50px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(255,255,255,0.2) !important;
          }
          @keyframes float {
            0%, 100% { top: 0px; }
            50% { top: -15px; }
          }
        `}} />

        <AbstractCard title="Estrategia & UX" subtitle="Mapeo de procesos" color="#ff5f56" delay={0} />
        <AbstractCard title="Arquitectura" subtitle="Diseño de sistemas" color="#ffbd2e" delay={0.5} />
        <AbstractCard title="Desarrollo" subtitle="Código a la medida" color="#00f0ff" delay={1} />
        <AbstractCard title="Despliegue" subtitle="Lanzamiento seguro" color="#00a8ff" delay={1.5} />
        
      </div>
      </div>
    </section>
  );
}
