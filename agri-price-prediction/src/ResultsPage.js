import React from 'react';
import { Line } from 'react-chartjs-2';
import './ResultsPage.css'; // Importing the CSS file for styling

function ResultsPage() {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Actual Prices',
        data: [20, 25, 30, 28, 35],
        borderColor: '#004d00', // Dark Green
        fill: false,
      },
      {
        label: 'Predicted Prices',
        data: [22, 27, 32, 29, 34],
        borderColor: '#a0522d', // Brown
        fill: false,
      },
    ],
  };

  return (
    <div className="results">
      <h2>Results and Analysis</h2>
      <Line data={data} />
      <p>This graph compares the actual market prices with the predicted prices. The close alignment between the two showcases the model's effectiveness in forecasting price trends.</p>
    </div>
  );
}

export default ResultsPage;





