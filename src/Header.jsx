import { Link } from 'react-router-dom'
import ferrariLogo from './ferrari_W&B.jpg'

function Header() {
  return (
    <>
      <style>
        {`
          .header-link {
            color: white;
            text-decoration: none;
            font-weight: bold;
            font-family: 'Montserrat', Arial, sans-serif;
            transition: color 0.3s, border-bottom 0.3s;
            border-bottom: none;
            padding-bottom: 2px;
            font-size: 1.5rem;
          }
          .header-link:hover {
            color: #FFF200;
            text-decoration: underline;
            border-bottom: none;
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
          padding: '2rem 0',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontWeight: 'bold',
          fontFamily: "'Montserrat', Arial, sans-serif",
          color: 'white',
          zIndex: 1000,
        }}
      >
        <div style={{ position: 'absolute', left: '2rem', top: '50%', transform: 'translateY(-50%)', display: 'flex', alignItems: 'center' }}>
          <Link to="/">
            <img
              src={ferrariLogo}
              alt="Ferrari Logo"
              style={{
                height: '80px',
                width: '80px',
                objectFit: 'cover',
                borderRadius: '50%',
                background: 'white'
              }}
            />
          </Link>
        </div>
        <div style={{ display: 'flex', gap: '2.5rem', flex: 1, justifyContent: 'center', alignItems: 'center', fontSize: '1.5rem', fontFamily: "'Montserrat', Arial, sans-serif", fontWeight: 'bold' }}>
          <Link to="/" className="header-link">Home</Link>
          <Link to="/merch" className="header-link">Merch</Link>
          <Link to="/news" className="header-link">News</Link>
          <Link to="/racing" className="header-link">Racing</Link>
          <Link to="/contact" className="header-link">Contact</Link>
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
        </div>
      </nav>
    </>
  )
}

export default Header

// If you still get the error, double-check:
// 1. The file 'Ferrari-F1-Logo-1.png' exists in 'c:\Users\nayan.giri\Desktop\Website\MyProj\src\'.
// 2. The filename matches exactly, including capitalization and extension.
// 3. If the file is in 'public' instead of 'src', use <img src="/Ferrari-F1-Logo-1.png" ... /> instead of import.

//
// Example for using public folder (if you prefer):
// <img src="/Ferrari-F1-Logo-1.png" alt="Ferrari Logo" style={{ height: '48px', width: 'auto' }} />
//
