import React from 'react';
import Homepic from '../assets/Cropped Versailles Pic.png';


const Home = () => {
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

  const imageContainerStyle: React.CSSProperties = {
    flex: '0 0 300px', // Made smaller (was 400px)
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  const placeholderImageStyle: React.CSSProperties = {
    width: '300px',      // Made smaller (was 945px)
    height: '450px',     // Made smaller (was 1500px)
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '18px',
  };


  const headingStyle: React.CSSProperties = {
    fontSize: '52px',
    fontWeight: 'bold',
    color: '#0f172a',
    marginBottom: '20px',
    lineHeight: '1.2'
  };

  

  const descriptionStyle: React.CSSProperties = {
    fontSize: '18px',
    color: '#000000',
    lineHeight: '1.8',
    marginBottom: '40px',
    textAlign: 'left'
  };

  const buttonContainerStyle: React.CSSProperties = {
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap'
  };

  

  const secondaryButtonStyle: React.CSSProperties = {
    padding: '14px 32px',
    backgroundColor: 'transparent',
    color: '#2563eb',
    fontWeight: '600',
    borderRadius: '8px',
    border: '2px solid #2563eb',
    cursor: 'pointer',
    transition: 'all 0.2s',
    fontSize: '16px'
  };

  const socialLinksStyle: React.CSSProperties = {
    marginTop: '40px',
    display: 'flex',
    gap: '20px'
  };

  {/*const socialLinkStyle: React.CSSProperties = {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#f1f5f9',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#475569',
    textDecoration: 'none',
    transition: 'all 0.2s',
    fontSize: '20px'
  };*/}

  // Mobile responsive styles
  const mobileBreakpoint = window.innerWidth <= 768;
  
  if (mobileBreakpoint) {
    heroSectionStyle.flexDirection = 'column';
    heroSectionStyle.padding = '40px 24px';
    textContentStyle.paddingRight = '0';
    imageContainerStyle.flex = '1';
    headingStyle.fontSize = '36px';
    placeholderImageStyle.width = '250px';  // Adjusted for mobile
    placeholderImageStyle.height = '300px'; // Adjusted for mobile
  }

  return (
    <section style={heroSectionStyle}>
      {/* Text Content - Left Side */}
      <div style={textContentStyle}>

        <p style={descriptionStyle}>
          Hi, I'm Teiva Jabbour, a master's student at Cambridge Part III Math. I did my undergrad at St Andrews.
        </p>

        <p style={descriptionStyle}>

          The intention behind this website is to collect some of my projects and thoughts. I plan (a key word) on keeping a blog 
          about my Part III experience as an external student, as I definitely would have found such a thing useful in the past!

        </p>

        <p style={descriptionStyle}>

          My mathematical interests are varied. Most of my advanced work has been in algebra and topology - my 2025 summer project 
          (with the fantastic Collin Bleak!) was investigating certain Thompson-like groups. However, I'm also interested in fractal geometry, number theory,
          and special function theory (I like integrals).

        </p>

        <p style={descriptionStyle}>

          I also like programming, mathematically and otherwise. My Project Euler username is my first name, and I've
          done some full stack dev that I'll probably show off here at some point.

          I plan on pivoting to machine learning after Part III.

        </p>

        <p style={descriptionStyle}>

          If you'd like to contact me, please write to: tj382 (at) cam.ac.uk

        </p>


        
        {/* Call to Action Buttons */}
        <div style={buttonContainerStyle}>
        <a href="./Teiva_Jabbour_CV.pdf" download="Teiva_Jabbour_CV.pdf">
          <button 
            style={secondaryButtonStyle}
            onMouseEnter={(e) => {
              (e.target as HTMLButtonElement).style.backgroundColor = '#2563eb';
              (e.target as HTMLButtonElement).style.color = 'white';
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLButtonElement).style.backgroundColor = 'transparent';
              (e.target as HTMLButtonElement).style.color = '#2563eb';
            }}
          >
            Download CV
          </button>
          </a>
        </div>

        {/* Social Links */}
        <div style={socialLinksStyle}>
          {/*<a 
            href="https://github.com" 
            style={socialLinkStyle}
            onMouseEnter={(e) => {
              (e.target as HTMLAnchorElement).style.backgroundColor = '#2563eb';
              (e.target as HTMLAnchorElement).style.color = 'white';
              (e.target as HTMLAnchorElement).style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLAnchorElement).style.backgroundColor = '#f1f5f9';
              (e.target as HTMLAnchorElement).style.color = '#475569';
              (e.target as HTMLAnchorElement).style.transform = 'translateY(0)';
            }}
          >
            GH
          </a>
          <a 
            href="https://linkedin.com" 
            style={socialLinkStyle}
            onMouseEnter={(e) => {
              (e.target as HTMLAnchorElement).style.backgroundColor = '#0077b5';
              (e.target as HTMLAnchorElement).style.color = 'white';
              (e.target as HTMLAnchorElement).style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLAnchorElement).style.backgroundColor = '#f1f5f9';
              (e.target as HTMLAnchorElement).style.color = '#475569';
              (e.target as HTMLAnchorElement).style.transform = 'translateY(0)';
            }}
          >
            LI
          </a>*/}
          
        </div>
      </div>

      {/* Image Container - Right Side */}
      <div style={imageContainerStyle}>
        <div style={placeholderImageStyle}>
          
          <img 
            src={Homepic} 
            alt="Teiva Jabbour"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover', 
              borderRadius: '20px',
              transform: 'translateY(-100px)' // Move up by 20px, adjust as needed
            }}
          />
          
        </div>
      </div>
    </section>
  );
};

export default Home;