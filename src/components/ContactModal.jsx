import React, { useState } from 'react';

const ContactModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        phone: ''
    });
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const response = await fetch("https://formsubmit.co/ajax/audit@tradeauditing.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    _subject: "Nuevo Lead - TradeAuditing",
                    name: formData.name,
                    company: formData.company,
                    email: formData.email,
                    message: "Solicitud de Demo / Auditoría"
                })
            });

            if (response.ok) {
                setStatus('success');
                // We do not close the modal immediately, we show the Success Card
                setFormData({ name: '', company: '', email: '', phone: '' });
                // onClose(); 
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
            console.error(error);
        }
    };

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(10, 25, 47, 0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            backdropFilter: 'blur(5px)'
        }}
            onClick={onClose}
        >
            <div style={{
                backgroundColor: '#fff',
                padding: '3rem',
                borderRadius: '12px',
                width: '90%',
                maxWidth: '500px',
                position: 'relative',
                boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
            }}
                onClick={e => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '1rem',
                        right: '1rem',
                        background: 'none',
                        border: 'none',
                        fontSize: '1.5rem',
                        cursor: 'pointer',
                        color: '#666'
                    }}
                >
                    ×
                </button>

                {status === 'success' ? (
                    <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                        <div style={{
                            fontSize: '4rem',
                            color: '#4CAF50',
                            marginBottom: '1rem',
                            animation: 'scaleIn 0.5s ease'
                        }}>
                            ✓
                        </div>
                        <h2 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>¡Solicitud Recibida!</h2>
                        <p style={{ color: '#666', marginBottom: '2rem' }}>
                            Un experto de nuestro equipo te contactará en breve al correo proporcionado.
                        </p>
                        <button
                            onClick={onClose}
                            className="btn btn-primary"
                        >
                            Entendido
                        </button>
                    </div>
                ) : (
                    <>
                        <h2 style={{ textAlign: 'center', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>
                            Solicitar Demo
                        </h2>
                        <p style={{ textAlign: 'center', color: '#666', marginBottom: '2rem' }}>
                            Déjanos tus datos y te enviaremos el acceso.
                        </p>

                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '600' }}>Nombre Completo</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: '1px solid #ddd' }}
                                    value={formData.name}
                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '600' }}>Agencia / Empresa</label>
                                <input
                                    type="text"
                                    name="company"
                                    required
                                    style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: '1px solid #ddd' }}
                                    value={formData.company}
                                    onChange={e => setFormData({ ...formData, company: e.target.value })}
                                />
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '600' }}>Correo Electrónico</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: '1px solid #ddd' }}
                                    value={formData.email}
                                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary"
                                style={{ marginTop: '1rem', opacity: status === 'submitting' ? 0.7 : 1 }}
                                disabled={status === 'submitting'}
                            >
                                {status === 'submitting' ? 'Enviando...' : 'Enviar Solicitud'}
                            </button>
                            {status === 'error' && <p style={{ color: 'red', fontSize: '0.8rem', textAlign: 'center' }}>Hubo un error. Intenta de nuevo.</p>}
                        </form>
                    </>
                )}
            </div>
            <style>{`
                @keyframes scaleIn {
                    from { transform: scale(0); opacity: 0; }
                    to { transform: scale(1); opacity: 1; }
                }
            `}</style>
        </div>
    );
};

export default ContactModal;
