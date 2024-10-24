// Navbar.js
import React, { useState } from 'react';
import logo from "../../assets/logo.png"; // Adjust the path to your logo
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage the toggle

  const toggleNavbar = () => {
    setIsOpen(prevState => !prevState); // Toggle the state
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo on the top left */}
        <div className="navbar-logo">
          <img src={logo} alt="Logo" />
        </div>

        {/* Hamburger icon for mobile */}
        <div className="navbar-toggle" onClick={toggleNavbar}>
          
        </div>

        {/* Navigation links */}
        <ul className={`navbar-links ${isOpen ? 'show' : ''}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
