import React from 'react';

const PrivacyPolicy = ({ onClose }) => {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.98)',
            zIndex: 2000,
            overflowY: 'auto',
            padding: '2rem'
        }}>
            <div style={{ maxWidth: '800px', margin: '0 auto', color: '#333' }}>
                <button
                    onClick={onClose}
                    style={{
                        position: 'fixed',
                        top: '2rem',
                        right: '2rem',
                        padding: '0.5rem 1rem',
                        background: 'var(--color-primary)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    Cerrar
                </button>
                <h1 style={{ color: 'var(--color-primary)', marginBottom: '2rem' }}>Aviso de Privacidad</h1>
                <p><strong>Última actualización: Diciembre 2025</strong></p>
                <br />
                <p>En TradeAuditing, la seguridad de tu información aduanera es nuestra prioridad.</p>
                <br />
                <h3>1. Datos que Recolectamos</h3>
                <p>Recolectamos información proporcionada voluntariamente (nombre, correo, empresa) y datos técnicos de los pedimentos subidos únicamente para fines de análisis.</p>
                <br />
                <h3>2. Uso de la Información</h3>
                <p>Tus documentos (Data Stage y PDFs) son procesados por nuestros algoritmos en servidores encriptados y se eliminan automáticamente cada 24 horas tras la generación del reporte.</p>
                <br />
                <h3>3. Seguridad</h3>
                <p>Cumplimos con estándares de encriptación bancaria y no compartimos tus datos con terceros sin tu consentimiento explícito.</p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
