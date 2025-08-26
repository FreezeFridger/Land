import React from 'react';

const Navbar = () => {
  const navStyle: React.CSSProperties = {
    backgroundColor: '#f1f5f9',
    borderBottom: '1px solid #cbd5e1',
    position: 'sticky',
    width: '100%',        // force full width
    top: 0,
    zIndex: 50
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
    color: '#1e293b',
    textDecoration: 'none',
    transition: 'color 0.2s'
  };

  const navLinksStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '24px'
  };

  const linkStyle: React.CSSProperties = {
    color: '#475569',
    fontWeight: '500',
    textDecoration: 'none',
    transition: 'color 0.2s',
    position: 'relative',
    fontSize: '18px'
  };

  const separatorStyle: React.CSSProperties = {
    color: '#94a3b8'
  };

  return (
    <nav style={navStyle}>
      <div style={containerStyle}>
        {/* Logo/Brand */}
        <div>
          <a 
            href="/" 
            style={brandStyle}
            onMouseEnter={(e) => (e.target as HTMLAnchorElement).style.color = '#2563eb'}
            onMouseLeave={(e) => (e.target as HTMLAnchorElement).style.color = '#1e293b'}
          >
            Teiva Jabbour
          </a>
        </div>

        {/* Navigation Links */}
        <div style={navLinksStyle}>
          <a
            href="/"
            style={linkStyle}
            onMouseEnter={(e) => (e.target as HTMLAnchorElement).style.color = '#2563eb'}
            onMouseLeave={(e) => (e.target as HTMLAnchorElement).style.color = '#475569'}
          >
            Home
          </a>
          <span style={separatorStyle}>•</span>
          <a
            href="/blog"
            style={linkStyle}
            onMouseEnter={(e) => (e.target as HTMLAnchorElement).style.color = '#2563eb'}
            onMouseLeave={(e) => (e.target as HTMLAnchorElement).style.color = '#475569'}
          >
            Blog
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;