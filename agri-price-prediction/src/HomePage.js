import React from 'react';
import './HomePage.css'; // Importing the CSS file for styling
import agritradingImage from './assets/agritrading.jfif'; // Updated image path
import farmerImage from './assets/farmer.jpg'; // Updated image path

function HomePage() {
  return (
    <div className="home">
      <header>
        <h1>Agri Price Prediction</h1>
      </header>
      <section className="problem">
        <h2>The Problem</h2>
        <p>Fluctuating prices of agri-horticulture commodities such as pulses and vegetables create significant challenges for farmers and traders, leading to financial instability and food wastage. The unpredictability in prices is influenced by various factors, including weather patterns, market demand, and supply chain dynamics.</p>
        <img src={agritradingImage} alt="Agricultural Trading" className="responsive-image" />
      </section>
      <section className="solution">
        <h2>Our Solution</h2>
        <p>To address this challenge, we have developed an AI/ML-based predictive model that analyzes historical data, weather conditions, and market trends to forecast future prices. This model empowers farmers and traders to make informed decisions, stabilize markets, and ensure fair pricing, ultimately contributing to food security and economic stability in the agriculture sector.</p>
        <img src={farmerImage} alt="Farmer with AI Solution" className="responsive-image" />
        <button onClick={() => window.location.href = '/dashboard'}>Explore the Model</button>
      </section>
    </div>
  );
}

export default HomePage;











