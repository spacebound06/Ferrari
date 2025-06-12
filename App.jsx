import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home.jsx'
import Login from './Login.jsx'
import Register from './Register.jsx'
import Merch from './Merch.jsx'
import News from './News.jsx'
import Header from './Header.jsx'
import Racing from './Racing.jsx'
import TeamPage from './TeamPage.jsx'
import './App.css'

function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      <Header user={user} />
      <div style={{ paddingTop: '4.5rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/merch" element={<Merch />} />
          <Route path="/news" element={<News />} />
          <Route path="/racing" element={<Racing />} />
          <Route path="/login" element={<Login onLogin={setUser} />} />
          <Route path="/register" element={<Register onRegister={setUser} />} />
          <Route path="/team" element={<TeamPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
