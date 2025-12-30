import React from 'react';

const TrustBar = () => {
    return (
        <div style={{
            backgroundColor: '#f8f9fa',
            padding: '1rem 0',
            textAlign: 'center',
            borderTop: '1px solid #eee',
            borderBottom: '1px solid #eee'
        }}>
            <div className="container">
                <p style={{
                    fontSize: '0.9rem',
                    color: '#666',
                    fontWeight: '500',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
                }}>
                    <span role="img" aria-label="shield">🔒</span>
                    Datos procesados bajo estándares de seguridad de USA 🇺🇸. Privacidad garantizada.
                </p>
            </div>
        </div>
    );
};

export default TrustBar;
