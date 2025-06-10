import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Home from './Home.jsx';
import Login from './Login.jsx';
import Register from './Register.jsx';
import Merch from './Merch.jsx';
import Header from './Header.jsx';
import Racing from './Racing.jsx';
import Team from './Team.jsx';
import './App.css';

function App() {
  const location = useLocation(); // Needed for AnimatePresence to detect route change

  return (
    <>
      <Header />
      <div style={{ paddingTop: '4.5rem' }}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/merch" element={<Merch />} />
            <Route path="/racing" element={<Racing />} />
            <Route path="/team" element={<Team />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </AnimatePresence>
      </div>
    </>
  );
}

export default App;
