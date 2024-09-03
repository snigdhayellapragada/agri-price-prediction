import React, { useState } from 'react';
import './Dashboard.css'; // Importing the CSS file for styling

function Dashboard() {
  const [crop, setCrop] = useState('');
  const [region, setRegion] = useState('');
  const [season, setSeason] = useState('');
  const [weather, setWeather] = useState('');
  const [demand, setDemand] = useState('');
  const [prediction, setPrediction] = useState('');

  const handlePrediction = () => {
    // Logic to call prediction API or simulate prediction
    setPrediction('Predicted price: ₹XX/kg'); // Replace with real prediction
  };

  return (
    <div className="dashboard">
      <h2>Price Prediction Model</h2>
      <form>
        <input type="text" value={crop} onChange={(e) => setCrop(e.target.value)} placeholder="Crop Type" required />
        <input type="text" value={region} onChange={(e) => setRegion(e.target.value)} placeholder="Region" required />
        <input type="text" value={season} onChange={(e) => setSeason(e.target.value)} placeholder="Season" required />
        <input type="number" value={weather} onChange={(e) => setWeather(e.target.value)} placeholder="Weather (°C)" required />
        <input type="number" value={demand} onChange={(e) => setDemand(e.target.value)} placeholder="Market Demand" required />
        <button type="button" onClick={handlePrediction}>Predict Price</button>
      </form>
      {prediction && <p className="prediction">{prediction}</p>}
    </div>
  );
}

export default Dashboard;





