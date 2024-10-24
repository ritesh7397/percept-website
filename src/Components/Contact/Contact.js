import React from 'react';
import './Contact.css'; // Add custom styling

const Contact = () => {
  return (
    <div className="container">
    <h1>Contact Us</h1>
    <p>
      For any queries or information, feel free to contact us. Our team is
      always ready to assist you with your queries and provide you with the
      information you need.
    </p>
    <div className="contact-info">
      <div className="info-item">
        <h3>Address:</h3>
        <p>
          Percept Infosystem Consultants, 20/12 Akar Builders, Byramji
          Town, Near Dalal Nursing Home, Sadar, Nagpur
        </p>
      </div>
      <div className="info-item">
        <h3>Phone:</h3>
        <p>8208970766 / 7414977373</p>
      </div>
      <div className="info-item">
        <h3>Email:</h3>
        <p>
          <a href="mailto:hr@perceptinfosystems.co.in">
            hr@perceptinfosystems.co.in
          </a>
        </p>
      </div>
    </div>
  </div>
  );
};

export default Contact;
