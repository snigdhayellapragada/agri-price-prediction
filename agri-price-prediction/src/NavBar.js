import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Importing the CSS file for styling

function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/results">Results</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
