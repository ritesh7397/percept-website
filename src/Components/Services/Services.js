import React from 'react';
import soft from "../../assets/soft.jpg"
import hr from "../../assets/hr.jpg";
import it from "../../assets/it.jpg"
import './Services.css'; // Add custom styling

const Services = () => {
  return (
    <div className="container">
    <div className="header">
      <h1>Our Services</h1>
    </div>
    <div className="content">
      <p>At Percept Infosystem Consultants, we offer a range of services to help businesses grow and succeed. From software development to HR services and IT training, we have the expertise and experience to meet your needs.</p>
      <div className="service-cards">
        <div className="service-card">
          <img src={soft} alt="Software Development" />
          <h2>Software Development</h2>
          <ul>
            <li>Custom Software Solutions</li>
            <li>Mobile and Web Applications</li>
            <li>Website Development</li>
          </ul>
        </div>
        <div className="service-card">
          <img src={it} alt="Drop Servicing" />
          <h2>Drop Servicing</h2>
          <ul>
            <li>Digital Marketing</li>
            <li>Graphic Design</li>
            <li>Content Creation</li>
          </ul>
        </div>
        <div className="service-card">
          <img src={hr} alt="HR Training" />
          <h2>HR Training</h2>
          <ul>
            <li>Human Resources Training</li>
            <li>HR Professional Training</li>
            <li>Recruitment</li>
            <li>Payroll</li>
            <li>Performance Management System</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Services;
