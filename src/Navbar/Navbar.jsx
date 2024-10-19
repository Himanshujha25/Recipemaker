import React from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router for navigation
import './Navbar.css'; // Link to the CSS file for styling

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>RecipeMaker</h1>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/vegetarian">Vegetarian</Link></li>
        <li><Link to="/Nonvegetarian">Non-Vegetarian</Link></li>
        <li><Link to="/vegan">Vegan</Link></li>
        <li><Link to="/dessert">Dessert</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
