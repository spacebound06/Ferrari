import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import ferrariLogo from './ferrari_black.jpg'

// Accept user prop
function Header({ user }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>
        {`
          .header-link {
            color: white;
            text-decoration: none;
            font-weight: bold;
            font-family: 'Montserrat', Arial, sans-serif;
            transition: color 0.2s, border-bottom 0.2s, transform 0.18s;
            border-bottom: none;
            padding-bottom: 2px;
            font-size: 1.5rem;
          }
          .header-link:hover {
            color: white;
            text-decoration: none;
            border-bottom: none;
            transform: scale(1.08);
            background: none;
          }
        `}
      </style>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          background: '#DC0000',
          padding: scrolled ? '0.1rem 0' : '1rem 0',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          fontWeight: 'bold',
          fontFamily: "'Montserrat', Arial, sans-serif",
          color: 'white',
          zIndex: 1000,
          transition: 'padding 0.5s cubic-bezier(.4,0,.2,1)'
        }}
      >
        <div style={{
          position: 'relative',
          marginLeft: '1.5rem',
          display: 'flex',
          alignItems: 'center'
        }}>
          <Link to="/">
            <img
              src={ferrariLogo}
              alt="Ferrari Logo"
              style={{
                height: scrolled ? '50px' : '90px',
                width: scrolled ? '50px' : '90px',
                objectFit: 'contain',
                borderRadius: '0',
                background: 'none',
                border: 'none',
                marginTop: '0',
                transition: 'height 0.5s cubic-bezier(.4,0,.2,1), width 0.5s cubic-bezier(.4,0,.2,1)'
              }}
            />
          </Link>
        </div>
        <div style={{
          display: 'flex',
          gap: '2.5rem',
          alignItems: 'center',
          fontSize: '1.5rem',
          fontFamily: "'Montserrat', Arial, sans-serif",
          fontWeight: 'bold',
          marginLeft: '3.5rem',
          flex: 1
        }}>
          <Link to="/" className="header-link">Home</Link>
          <Link to="/merch" className="header-link">Collections</Link>
          <Link to="/racing" className="header-link">Racing</Link>
          <Link to="/team" className="header-link">Team</Link>
        </div>
        <div style={{
          position: 'absolute',
          right: '4rem',
          top: '50%',
          transform: 'translateY(-50%)',
          display: 'flex',
          alignItems: 'center',
          fontSize: '1.5rem'
        }}>
          {user && user.username ? (
            <span className="header-link" style={{ cursor: "default" }}>{user.username}</span>
          ) : (
            <>
              <Link
                to="/login"
                className="header-link"
                style={{
                  marginRight: '0.5rem'
                }}
              >
                Login
              </Link>
              <span style={{ color: 'white', fontWeight: 'bold' }}>/</span>
              <Link
                to="/register"
                className="header-link"
                style={{
                  marginLeft: '0.5rem'
                }}
              >
                Register
              </Link>
            </>
          )}
        </div>
      </nav>
    </>
  )
}

export default Header
