import React from 'react';

const Features = () => {
    const features = [
        {
            title: "Cruce Automático",
            desc: "Valida Montos, Pesos, Incoterms y Fracciones.",
            icon: "⚡"
        },
        {
            title: "Alertas de Riesgo",
            desc: "Semáforo de cumplimiento antes de pagar el pedimento.",
            icon: "⚠️"
        },
        {
            title: "Privacidad Total",
            desc: "Borrados de archivos cada 24h.",
            icon: "🛡️"
        }
    ];

    return (
        <section className="section" style={{ backgroundColor: '#fff' }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {features.map((f, index) => (
                        <div key={index} style={{
                            padding: '2rem',
                            borderRadius: '8px',
                            border: '1px solid #eee',
                            transition: 'transform 0.3s ease',
                            cursor: 'default'
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{f.icon}</div>
                            <h3 style={{ marginBottom: '0.5rem', fontSize: '1.5rem' }}>{f.title}</h3>
                            <p style={{ color: '#666' }}>{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
