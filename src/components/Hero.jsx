import React from 'react';

const Hero = ({ onCtaClick, mode = 'default' }) => {
    const content = {
        default: {
            title: "Evita Multas del SAT con Auditoría de Pedimentos por IA.",
            subtitle: "Detecta errores entre Facturas y Pedimentos en segundos. Tecnología de validación desarrollada en Houston, TX."
        },
        speed: {
            title: "Audita tus Pedimentos en Segundos, no en Días.",
            subtitle: "Automatiza la glosa y validación. Reduce tu tiempo operativo en un 90% con Inteligencia Artificial."
        },
        agency: {
            title: "La Ventaja Competitiva para tu Agencia Aduanal.",
            subtitle: "Ofrece 'Cero Errores' a tus clientes. Blindaje automático para todas tus operaciones de comercio exterior."
        }
    };

    const currentContent = content[mode] || content.default;

    return (
        <section className="section" style={{ textAlign: 'center', padding: '8rem 0 6rem' }}>
            <div className="container">
                <span style={{
                    display: 'inline-block',
                    padding: '0.5rem 1rem',
                    borderRadius: '50px',
                    backgroundColor: '#e0f2fe',
                    color: '#0284c7',
                    fontWeight: '600',
                    marginBottom: '1.5rem',
                    fontSize: '0.9rem',
                    letterSpacing: '0.5px'
                }}>
                    {mode === 'speed' ? '⚡️ Máxima Velocidad' : (mode === 'agency' ? '🚀 Para Agencias Aduanales' : '🛡️ Tecnología Anti-Risk')}
                </span>
                <h1 className="animate-fade-in" style={{
                    fontSize: '3.5rem',
                    marginBottom: '1.5rem',
                    maxWidth: '900px',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                }}>
                    {currentContent.title}
                </h1>
                <p className="animate-fade-in" style={{
                    fontSize: '1.25rem',
                    color: '#555',
                    marginBottom: '2.5rem',
                    maxWidth: '700px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    animationDelay: '0.2s'
                }}>
                    {currentContent.subtitle}
                </p>
                <div className="animate-fade-in" style={{ animationDelay: '0.4s', marginBottom: '4rem' }}>
                    <button onClick={onCtaClick} className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '1.2rem 2.5rem' }}>
                        Solicitar Auditoría Gratis
                    </button>
                    <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
                        <span style={{ color: '#25D366', marginRight: '5px' }}>●</span>
                        Respuesta inmediata vía WhatsApp
                    </p>
                </div>

                <div className="animate-fade-in" style={{
                    animationDelay: '0.6s',
                    marginTop: '2rem',
                    position: 'relative',
                    maxWidth: '1000px',
                    margin: '0 auto',
                    padding: '0 1rem' // Mobile padding safety
                }}>
                    <div style={{
                        borderRadius: '12px',
                        overflow: 'hidden',
                        boxShadow: '0 20px 50px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.05)',
                        backgroundColor: '#fff'
                    }}>
                        <picture>
                            <source srcSet="/hero-dashboard.webp" type="image/webp" />
                            <img
                                src="/hero-dashboard.png"
                                alt="TradeAuditing Data Dashboard"
                                loading="eager"
                                fetchpriority="high"
                                style={{ width: '100%', height: 'auto', display: 'block' }}
                            />
                        </picture>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
