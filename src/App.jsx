import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Packages from './components/Packages';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import PrivacyPolicy from './components/PrivacyPolicy';
import WhatsAppButton from './components/WhatsAppButton';
import RiskCalculator from './components/RiskCalculator';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [landingMode, setLandingMode] = useState('default');
  const [returningUser, setReturningUser] = useState(false);

  useEffect(() => {
    // 1. Check for Targeting Mode in URL (e.g., ?mode=speed)
    const params = new URLSearchParams(window.location.search);
    const mode = params.get('mode');
    if (mode && ['speed', 'agency'].includes(mode)) {
      setLandingMode(mode);
    }

    // 2. Check for Returning User
    const hasVisited = localStorage.getItem('tradeauditing_visited');
    if (hasVisited) {
      setReturningUser(true);
    } else {
      localStorage.setItem('tradeauditing_visited', 'true');
    }
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="app">
      {returningUser && (
        <div style={{
          backgroundColor: '#333',
          color: '#fff',
          textAlign: 'center',
          padding: '0.5rem',
          fontSize: '0.9rem'
        }}>
          👋 ¡Bienvenido de nuevo! ¿Listo para blindar tu operación hoy?
        </div>
      )}
      <Header />
      <Hero onCtaClick={openModal} mode={landingMode} />
      <TrustBar />
      <HowItWorks />
      <Features />
      <RiskCalculator />
      <Packages onPlanSelect={openModal} />
      <Footer onContactClick={openModal} onPrivacyClick={() => setIsPrivacyOpen(true)} />
      <WhatsAppButton />
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
      {isPrivacyOpen && <PrivacyPolicy onClose={() => setIsPrivacyOpen(false)} />}
    </div>
  );
}

export default App;
