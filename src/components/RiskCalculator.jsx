import React, { useState } from 'react';

const RiskCalculator = () => {
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [answers, setAnswers] = useState({});

    const questions = [
        {
            id: 1,
            text: "¿Revisas manualmente cada campo del Data Stage contra el PDF?",
            options: [
                { text: "Sí, línea por línea (Alta prob. de error humano)", value: 30 },
                { text: "Hago un muestreo aleatorio", value: 50 },
                { text: "Tengo un sistema validor básico", value: 10 },
            ]
        },
        {
            id: 2,
            text: "¿Con qué frecuencia encuentras discrepancias en glosa?",
            options: [
                { text: "Rara vez (<1%)", value: 0 },
                { text: "Ocasionalmente (1-5%)", value: 20 },
                { text: "Frecuentemente (>5%)", value: 40 },
            ]
        },
        {
            id: 3,
            text: "¿Tu volumen de operaciones mensual supera los 50 pedimentos?",
            options: [
                { text: "Sí", value: 20 },
                { text: "No", value: 0 },
            ]
        }
    ];

    const handleOptionSelect = (questionId, value) => {
        setAnswers({ ...answers, [questionId]: value });
    };

    const calculateRisk = () => {
        const total = Object.values(answers).reduce((a, b) => a + b, 0);
        setScore(total);
        setShowResult(true);
    };

    const getRiskLevel = (score) => {
        if (score < 30) return { label: "Bajo", color: "#4CAF50", msg: "Tienes buen control, pero no bajes la guardia." };
        if (score < 60) return { label: "Medio", color: "#FFC107", msg: "Hay áreas vulnerables a multas del SAT." };
        return { label: "Alto Crítico", color: "#F44336", msg: "Tu operación está en riesgo inminente de auditoría y multas." };
    };

    const risk = getRiskLevel(score);

    return (
        <section id="calculator" style={{ padding: '4rem 1rem', backgroundColor: '#f8f9fa' }}>
            <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>
                    Calculadora de Riesgo de Multas
                </h2>
                <p style={{ marginBottom: '2rem', color: '#666' }}>
                    Responde 3 preguntas y descubre qué tan expuesto estás ante el SAT.
                </p>

                {!showResult ? (
                    <div style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', textAlign: 'left' }}>
                        {questions.map((q) => (
                            <div key={q.id} style={{ marginBottom: '2rem' }}>
                                <p style={{ fontWeight: '600', marginBottom: '1rem', fontSize: '1.1rem' }}>{q.id}. {q.text}</p>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                    {q.options.map((opt, idx) => (
                                        <label key={idx} style={{
                                            padding: '1rem',
                                            border: answers[q.id] === opt.value ? '2px solid var(--color-primary)' : '1px solid #eee',
                                            borderRadius: '8px',
                                            cursor: 'pointer',
                                            backgroundColor: answers[q.id] === opt.value ? '#f0f7ff' : '#fff',
                                            transition: 'all 0.2s ease'
                                        }}>
                                            <input
                                                type="radio"
                                                name={`q-${q.id}`}
                                                onChange={() => handleOptionSelect(q.id, opt.value)}
                                                style={{ marginRight: '10px' }}
                                            />
                                            {opt.text}
                                        </label>
                                    ))}
                                </div>
                            </div>
                        ))}
                        <button
                            onClick={calculateRisk}
                            disabled={Object.keys(answers).length < questions.length}
                            className="btn btn-primary"
                            style={{ width: '100%', marginTop: '1rem', opacity: Object.keys(answers).length < questions.length ? 0.5 : 1 }}
                        >
                            Calcular Mi Riesgo Gratis
                        </button>
                    </div>
                ) : (
                    <div style={{ backgroundColor: '#fff', padding: '3rem', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', animation: 'fadeIn 0.5s ease' }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Tu Nivel de Riesgo es:</h3>
                        <div style={{
                            fontSize: '3rem',
                            fontWeight: '800',
                            color: risk.color,
                            marginBottom: '1rem'
                        }}>
                            {risk.label}
                        </div>
                        <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#555' }}>
                            {risk.msg}
                        </p>
                        <div style={{ padding: '1.5rem', backgroundColor: '#f8f9fa', borderRadius: '8px', marginBottom: '2rem' }}>
                            <p style={{ marginBottom: '1rem', fontWeight: '500' }}>Evita riesgos blindando tu operación con IA.</p>
                            <button
                                className="btn btn-primary"
                                onClick={() => window.location.href = '#prices'} // Assuming this is linked to prices or modal
                            >
                                Ver Solución de Blindaje
                            </button>
                        </div>
                        <button
                            onClick={() => { setShowResult(false); setAnswers({}); }}
                            style={{ background: 'none', border: 'none', color: '#666', textDecoration: 'underline', cursor: 'pointer' }}
                        >
                            Volver a calcular
                        </button>
                    </div>
                )}
            </div>
            <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
        </section>
    );
};

export default RiskCalculator;
