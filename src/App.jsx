import { Routes, Route } from 'react-router-dom'
import Home from './Home.jsx'
import Login from './Login.jsx'
import Register from './Register.jsx'
import Merch from './Merch.jsx'
import News from './News.jsx'
import Contact from './Contact.jsx'
import Header from './Header.jsx'
import Racing from './Racing.jsx'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <div style={{ paddingTop: '4.5rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/merch" element={<Merch />} />
          <Route path="/news" element={<News />} />
          <Route path="/racing" element={<Racing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </>
  )
}

export default App
