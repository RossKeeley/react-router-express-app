import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Profile from './components/Profile';
import About from './components/About';
import Contact from './components/Contact';
import './styles/main.css';

function App() {
  const [profile, setProfile] = useState("");

  return (
    <div className="App">
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={ <Home setProfile={setProfile} /> }>
          </Route>
            <Route path="/users/:username" element={ <Profile profile={profile} /> }></Route>
          <Route path="/about" element={ <About /> }></Route>
          <Route path="/contact" element={ <Contact /> }></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
