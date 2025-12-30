import React from 'react';

const Footer = ({ onContactClick, onPrivacyClick }) => {
    return (
        <footer style={{ backgroundColor: 'var(--color-primary)', color: '#fff', padding: '4rem 0', textAlign: 'center' }}>
            <div className="container">
                <h2 style={{ color: '#fff', marginBottom: '1.5rem', fontSize: '2rem' }}>
                    ¿Listo para blindar tu operación?
                </h2>
                <button onClick={onContactClick} className="btn" style={{
                    backgroundColor: '#fff',
                    color: 'var(--color-primary)',
                    fontSize: '1.1rem',
                    padding: '1rem 2rem'
                }}>
                    Hablar con un experto en Houston
                </button>
                <div style={{ marginTop: '3rem', fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)' }}>
                    © {new Date().getFullYear()} TradeAuditing. All rights reserved.
                    <br />
                    <button onClick={onPrivacyClick} style={{
                        background: 'none',
                        border: 'none',
                        color: 'inherit',
                        textDecoration: 'underline',
                        cursor: 'pointer',
                        fontSize: 'inherit',
                        marginTop: '0.5rem'
                    }}>
                        Aviso de Privacidad
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
