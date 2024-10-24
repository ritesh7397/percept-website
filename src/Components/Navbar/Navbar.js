import React from 'react';
import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom';
import './Navbar.css'; // Make sure to add the CSS styling file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo on the top left */}
        <div className="navbar-logo">
          <img src={logo} alt="Logo" />
        </div>

        {/* Navigation links in the center */}
        <ul className="navbar-links">
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
