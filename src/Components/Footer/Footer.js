// src/Components/Footer/Footer.js
import React from 'react';
import './Footer.css'; // Ensure you import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3>About Us</h3>
            <p>
              We are a leading IT company providing innovative solutions to help businesses thrive in the digital world. Our mission is to deliver excellence and create value through technology.
            </p>
          </div>
          <div className="col-md-4">
            <h3>Quick Links</h3>
            <ul className="quick-links">
              <li><a href="/">Home</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3>Follow Us</h3>
            <ul className="social-links">
              <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Copyright © 2024 Percept Infosysytem. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
