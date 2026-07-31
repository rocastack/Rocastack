import React from 'react';
import { Smartphone, Zap, Search } from 'lucide-react';

export default function FeaturesGrid() {
  return (
    <section className="container">
      <div className="features-header">
        <h2 className="section-title">Todo lo que necesitas.<br/>Nada de lo que no.</h2>
        <p className="section-text">
          El software a medida de Rocastack viene listo con las funciones que necesitas. Sin bloatware. Solo herramientas que hacen que cada tarea sea pan comido.
        </p>
      </div>
      
      <div className="features-grid">
        <div className="card">
          <div className="card-image-placeholder">
             <div className="abstract-ui" style={{ gridTemplateColumns: '1fr', padding: '10px' }}>
                <div className="abstract-chart" style={{ height: '100%', width: '100%' }}>
                  <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0,50 Q25,20 50,50 T100,50" fill="none" stroke="#00f0ff" strokeWidth="2" />
                    <circle cx="50" cy="50" r="4" fill="#00f0ff" />
                  </svg>
                </div>
             </div>
          </div>
          <div className="feature-icon-wrapper">
            <Search size={24} />
          </div>
          <h3 className="feature-title">Insights al alcance de tu mano</h3>
          <p className="feature-desc">Todos los datos de tu negocio en reportes visualmente atractivos, completos e interactivos.</p>
        </div>
        
        <div className="card">
          <div className="card-image-placeholder">
             {/* Mobile app mockup simulation */}
             <div style={{ width: '60px', height: '120px', border: '2px solid rgba(255,255,255,0.2)', borderRadius: '12px', background: '#111', padding: '5px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
                <div style={{ width: '100%', height: '10px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px' }}></div>
                <div style={{ width: '100%', height: '40px', background: 'rgba(0,240,255,0.1)', borderRadius: '4px', border: '1px solid var(--accent-blue)' }}></div>
                <div style={{ width: '100%', flex: 1, background: 'rgba(255,255,255,0.05)', borderRadius: '4px' }}></div>
             </div>
          </div>
          <div className="feature-icon-wrapper">
            <Smartphone size={24} />
          </div>
          <h3 className="feature-title">Gestionado desde tu escritorio</h3>
          <p className="feature-desc">Mantén el control total de tu negocio desde cualquier lugar con nuestras apps para iOS y Android. Los negocios no se detienen y tú tampoco.</p>
        </div>
        
        <div className="card">
          <div className="card-image-placeholder">
             {/* Notification alert simulation */}
             <div style={{ width: '80%', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', padding: '10px', display: 'flex', alignItems: 'center', gap: '10px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ff3366' }}></div>
                <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.2)', borderRadius: '3px' }}></div>
             </div>
          </div>
          <div className="feature-icon-wrapper">
            <Zap size={24} />
          </div>
          <h3 className="feature-title">Alertas de negocio avanzadas</h3>
          <p className="feature-desc">Las alertas personalizadas te mantienen informado sobre lo que más importa. Elige exactamente cuándo y cómo quieres ser notificado.</p>
        </div>
      </div>
    </section>
  );
}
