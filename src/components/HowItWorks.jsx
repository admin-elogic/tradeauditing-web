import React from 'react';

const HowItWorks = () => {
    const steps = [
        {
            number: "01",
            title: "Sube tus Archivos",
            description: "Arrastra tus Data Stage y PDFs de Pedimentos. Nuestra plataforma acepta formatos estándar del SAT.",
            icon: "📂"
        },
        {
            number: "02",
            title: "Análisis IA en Tiempo Real",
            description: "Nuestros algoritmos cruzan más de 50 puntos de validación para detectar inconsistencias.",
            icon: "🤖"
        },
        {
            number: "03",
            title: "Recibe tu Reporte",
            description: "Obtén un PDF detallado con riesgos priorizados y sugerencias de corrección inmediatas.",
            icon: "📊"
        }
    ];

    return (
        <section className="section" style={{ backgroundColor: '#fff' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                        Auditoría completa en 3 pasos
                    </h2>
                    <p style={{ color: '#666', fontSize: '1.2rem' }}>
                        Sin instalaciones complejas. Resultados en minutos.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem',
                    position: 'relative'
                }}>
                    {steps.map((step, index) => (
                        <div key={index} style={{
                            textAlign: 'center',
                            padding: '2rem',
                            position: 'relative',
                            zIndex: 2
                        }}>
                            <div style={{
                                width: '80px',
                                height: '80px',
                                backgroundColor: 'var(--color-primary)',
                                color: '#fff',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '2rem',
                                margin: '0 auto 1.5rem',
                                border: '4px solid #eef2f6'
                            }}>
                                {step.icon}
                            </div>
                            <div style={{
                                fontSize: '4rem',
                                fontWeight: '900',
                                color: '#f0f4f8',
                                position: 'absolute',
                                top: '0',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                zIndex: -1,
                                opacity: 0.8
                            }}>
                                {step.number}
                            </div>
                            <h3 style={{ marginBottom: '1rem', marginTop: '1rem' }}>{step.title}</h3>
                            <p style={{ color: '#666' }}>{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
