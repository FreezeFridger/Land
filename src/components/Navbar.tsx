import React from 'react';
import { Link } from 'react-router-dom';

type NavbarProps = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

const Navbar = ({ darkMode, toggleDarkMode }: NavbarProps) => {
  const navStyle: React.CSSProperties = {
    backgroundColor: darkMode ? '#1e293b' : '#f1f5f9',
    borderBottom: darkMode ? '1px solid #475569' : '1px solid #cbd5e1',
    position: 'sticky',
    width: '100%',
    top: 0,
    zIndex: 50,
    transition: 'background-color 0.3s, border-color 0.3s'
  };

  const containerStyle: React.CSSProperties = {
    padding: '24px 48px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0 auto'
  };

  const brandStyle: React.CSSProperties = {
    fontSize: '28px',
    fontWeight: '700',
    color: darkMode ? '#f1f5f9' : '#1e293b',
    textDecoration: 'none',
    transition: 'color 0.2s'
  };

  const navLinksStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '24px'
  };

  const linkStyle: React.CSSProperties = {
    color: darkMode ? '#cbd5e1' : '#475569',
    fontWeight: '500',
    textDecoration: 'none',
    transition: 'color 0.2s',
    position: 'relative',
    fontSize: '18px'
  };

  const separatorStyle: React.CSSProperties = {
    color: darkMode ? '#64748b' : '#94a3b8'
  };

  const toggleButtonStyle: React.CSSProperties = {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '8px',
    transition: 'background-color 0.2s',
    backgroundColor: darkMode ? '#334155' : '#e2e8f0',
    width: '40px',
    height: '40px'
  };

  const toggleIconStyle: React.CSSProperties = {
    fontSize: '20px',
    color: darkMode ? '#fbbf24' : '#475569',
    transition: 'transform 0.3s'
  };

  return (
    <nav style={navStyle}>
      <div style={containerStyle}>
        <div>
          <Link
            to="/"
            style={brandStyle}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#2563eb')}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.color = darkMode ? '#f1f5f9' : '#1e293b')}
          >
            Teiva Jabbour
          </Link>
        </div>

        <div style={navLinksStyle}>
          <Link
            to="/"
            style={linkStyle}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#2563eb')}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.color = darkMode ? '#cbd5e1' : '#475569')}
          >
            Home
          </Link>
          <span style={separatorStyle}>•</span>
          <button
            onClick={toggleDarkMode}
            style={toggleButtonStyle}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = darkMode ? '#475569' : '#cbd5e1')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = darkMode ? '#334155' : '#e2e8f0')}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <span style={toggleIconStyle}>{darkMode ? '☀️' : '🌙'}</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
