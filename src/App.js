import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Mission from './Mission';
import Contact from './Contact';
import Gallery from './Gallery';

function App() {
  return (
    <div className="container">
      <div className="row">
        <Header />
        <Navbar />
      </div>
      <div className="row">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;