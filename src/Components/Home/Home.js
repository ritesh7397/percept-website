import React from 'react';
import bg from "../../assets/bg.jpg"

import './Home.css'; // Add custom styling

const Home = () => {
  return (
    <div className="home">
      <img src={bg} alt="Banner" className="bg-img" />
      <h1>Welcome to Percept Infosystem Consultants</h1>
      <p>Percept Infosystem Consultants, is a IT & Edu Tech Company. Your one-stop solution for software,Website & Application 
        development, Drop Servicing, HR & IT training with guaranteed placement. Explore our comprehensive services designed
         to meet all your business needs..</p>
    </div>
  );
};

export default Home;
