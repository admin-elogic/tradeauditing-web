import React from 'react';

const Packages = ({ onPlanSelect }) => {
    const plans = [
        {
            name: "Piloto Gratuito",
            features: ["Auditoría de 3 documentos", "Reporte de riesgos PDF"],
            buttonText: "Iniciar Prueba",
            highlight: false
        },
        {
            name: "Plan Profesional",
            features: ["Validación ilimitada", "Conexión API o Correo", "Soporte Prioritario"],
            buttonText: "Solicitar Cotización",
            highlight: true
        },
        {
            name: "Plan Corporativo",
            features: ["Para Alto Volumen (+10k ops)", "Auditoría de Anexo 24", "Servidor Dedicado"],
            buttonText: "Contactar Ventas",
            highlight: false
        }
    ];

    return (
        <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
            <div className="container">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem' }}>
                    Planes diseñados para Agencias y Exportadores.
                </h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {plans.map((plan, index) => (
                        <div key={index} style={{
                            backgroundColor: '#fff',
                            padding: '2.5rem',
                            borderRadius: '12px',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                            border: plan.highlight ? '2px solid var(--color-primary)' : '1px solid #eee',
                            position: 'relative',
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                            {plan.highlight && (
                                <div style={{
                                    position: 'absolute',
                                    top: '-12px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    backgroundColor: 'var(--color-primary)',
                                    color: '#fff',
                                    padding: '4px 12px',
                                    borderRadius: '20px',
                                    fontSize: '0.8rem',
                                    fontWeight: '600'
                                }}>
                                    RECOMENDADO
                                </div>
                            )}
                            <h3 style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>{plan.name}</h3>
                            <ul style={{ listStyle: 'none', marginBottom: '2rem', flex: 1 }}>
                                {plan.features.map((feature, i) => (
                                    <li key={i} style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#555' }}>
                                        <span style={{ color: 'green' }}>✓</span> {feature}
                                    </li>
                                ))}
                            </ul>
                            <button onClick={onPlanSelect} className={plan.highlight ? "btn btn-primary" : "btn btn-outline"} style={{ width: '100%' }}>
                                {plan.buttonText}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Packages;
