import React from 'react';

type HomeProps = {
  darkMode?: boolean;
};

const Home = ({ darkMode = false }: HomeProps) => {
  const heroSectionStyle: React.CSSProperties = {
    padding: '80px 48px',
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    gap: '64px',
    minHeight: '70vh'
  };

  const textContentStyle: React.CSSProperties = {
    flex: '1',
    paddingRight: '32px'
  };

  const textStyle: React.CSSProperties = {
    fontSize: '18px',
    color: darkMode ? '#f1f5f9' : '#000000',
    lineHeight: '1.8',
    marginBottom: '40px',
    textAlign: 'left'
  };

  if (window.innerWidth <= 768) {
    heroSectionStyle.flexDirection = 'column';
    heroSectionStyle.padding = '40px 24px';
    textContentStyle.paddingRight = '0';
  }

  return (
    <section style={heroSectionStyle}>
      <div style={textContentStyle}>
        <p style={textStyle}>!</p>
      </div>
    </section>
  );
};

export default Home;
