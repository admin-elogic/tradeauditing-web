import React from 'react';

const Header = () => {
  return (
    <header style={{ padding: '1.5rem 0', borderBottom: '1px solid #eee' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img src="/logo.png" alt="TradeAuditing Logo" style={{ height: '100px', width: 'auto' }} />
          <div style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--color-primary)', letterSpacing: '-0.5px' }}>
            Trade Auditing
          </div>
        </div>
        <nav>
          {/* Optional nav items could go here */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
