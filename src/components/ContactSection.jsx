import React from 'react';
import { Phone, Mail, MapPin, Bot, Send } from 'lucide-react';

export default function ContactSection() {
  return (
    <section style={{ position: 'relative', width: '100%', padding: '4rem 0 2rem 0', zIndex: 1 }}>
      <div className="container">

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#fff', marginBottom: '1rem' }}>
            Chatea con nosotros
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
            Olvídate de los formularios aburridos. Inicia una conversación directa con nuestros expertos y cuéntanos cómo podemos ayudarte a escalar.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>

          {/* Left: Chat UI */}
          <div style={{
            background: '#0b141a', /* WhatsApp Dark Background */
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
            display: 'flex',
            flexDirection: 'column'
          }}>
            {/* Chat Header (WhatsApp style) */}
            <div style={{
              background: '#202c33',
              padding: '12px 20px',
              display: 'flex',
              alignItems: 'center',
              gap: '15px'
            }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#111827', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/logo.svg" alt="Rocastack" style={{ height: '30px', width: 'auto' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ color: '#e9edef', fontWeight: '500', fontSize: '1rem' }}>Rocastack WhatsApp</div>
                <div style={{ color: '#8696a0', fontSize: '0.8rem' }}>
                  en línea
                </div>
              </div>
            </div>

            {/* Chat Messages */}
            <div style={{ padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', background: '#0b141a', minHeight: '300px', backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '10px 10px' }}>

              {/* Message from Team (Received) */}
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', maxWidth: '85%' }}>
                <div style={{ background: '#202c33', padding: '10px 14px', borderRadius: '0 12px 12px 12px', color: '#e9edef', fontSize: '0.95rem', lineHeight: '1.4' }}>
                  ¡Hola! 👋 Vemos que estás listo para transformar tu negocio. ¿En qué podemos ayudarte a escalar hoy?
                </div>
              </div>

              {/* Message from User (Sent Preview) */}
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-end', alignSelf: 'flex-end', maxWidth: '85%', marginTop: '0.5rem' }}>
                <div style={{ background: '#005c4b', padding: '10px 14px', borderRadius: '12px 12px 0 12px', color: '#e9edef', fontSize: '0.95rem' }}>
                  Quiero llevar mi empresa al siguiente nivel. 🚀
                </div>
              </div>

            </div>

            {/* Chat Input (WhatsApp style) */}
            <div style={{ padding: '12px 15px', background: '#202c33', display: 'flex', gap: '10px', alignItems: 'center' }}>
              <div style={{ flex: 1, background: '#2a3942', borderRadius: '24px', padding: '12px 20px', color: '#8696a0', fontSize: '0.95rem' }}>
                Quiero llevar mi empresa al siguiente nivel...
              </div>
              {/* WhatsApp wa.me link */}
              <a href="https://wa.me/15551234567?text=Quiero%20llevar%20mi%20empresa%20al%20siguiente%20nivel.%20%F0%9F%9A%80" target="_blank" rel="noreferrer" style={{ display: 'inline-block' }}>
                <button style={{ background: '#00a884', color: '#ffffff', border: 'none', borderRadius: '50%', width: '45px', height: '45px', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'transform 0.2s ease' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                  <Send size={18} style={{ marginLeft: '-2px', marginTop: '2px' }} />
                </button>
              </a>
            </div>
          </div>

          {/* Right: Contact Info */}
          <div style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div className="contact-icon-wrapper">
                  <Phone size={24} color="#fff" />
                </div>
                <span style={{ fontSize: '1.2rem', color: '#fff', fontWeight: '500' }}>+1 (555) 123-4567</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div className="contact-icon-wrapper">
                  <Mail size={24} color="#fff" />
                </div>
                <span style={{ fontSize: '1.2rem', color: '#fff', fontWeight: '500' }}>hola@rocastack.com</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div className="contact-icon-wrapper">
                  <MapPin size={24} color="#fff" />
                </div>
                <span style={{ fontSize: '1.2rem', color: '#fff', fontWeight: '500' }}>Silicon Valley, CA</span>
              </div>

            </div>

            {/* Social Icons row (Inline SVGs to prevent lucide brand errors) */}
            <div style={{ display: 'flex', gap: '1.5rem', marginTop: '3.5rem' }}>
              <a href="#" className="social-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" className="social-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="social-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
