import React from 'react';
import AnimateContact from '../components/ui/AnimateContact';
import AnimatedStars from '../components/AnimatedStars';

export default function CompanyPage() {
  return (
    <div style={{ padding: '6rem 0', minHeight: '80vh', position: 'relative', zIndex: 1 }}>
      <AnimatedStars transparent />
      <div className="container">
        <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 800, textAlign: 'center', marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>
          Sobre <span className="text-gradient">Rocastack</span>
        </h1>
        <p style={{ textAlign: 'center', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto 4rem auto', fontSize: '1.125rem', lineHeight: '1.6' }}>
          Somos un equipo de ingenieros y diseñadores obsesionados con construir software de próxima generación. Transformamos problemas complejos en productos elegantes y altamente funcionales.
        </p>

        <div className="contact-grid">
          <AnimateContact
            image="/RocastackJuan.png"
            name="Juan Moreno"
            role="Full Stack Developer | Web & Mobile | AI"
            email="juan@rocastack.com"
            linkedinUrl="https://linkedin.com"
            githubUrl="https://github.com"
          />
          <AnimateContact
            image="/RocastackMaria.jpeg"
            name="Maria Gutierrez"
            role="Ingeniera Informática & Abogada | Compliance | Legaltech"
            email="maria@rocastack.com"
            linkedinUrl="https://linkedin.com"
            githubUrl="https://github.com"
          />
        </div>

      </div>
    </div>
  );
}
