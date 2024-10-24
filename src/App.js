
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home.js';
import About from './Components/About/About.js';
import Services from './Components/Services/Services.js';
import Contact from './Components/Contact/Contact.js';
import './App.css'; 
import Footer from './Components/Footer/Footer.js';

const MainPage = () => (
  <div>
    <Home />
    <About />
    <Services />
    <Contact />
  </div>
);

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
