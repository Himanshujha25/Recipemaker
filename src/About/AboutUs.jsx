// AboutUs.jsx
import React from 'react';
import './AboutUs.css';
import { FaInstagram, FaTwitter } from 'react-icons/fa';
import Navbar from '../Navbar/Navbar';

function AboutUs() {
  return (
    <div className="about-us">
      <Navbar />
      <section className="hero-section">
        <h1>About Us</h1>
        <p>
          Welcome to RecipeMaker! We are passionate about bringing you the best recipes from around the world. 
          Our mission is to inspire home cooks of all skill levels to create delicious meals with ease.
        </p>
        <p>
          At RecipeMaker, we believe that cooking should be fun and accessible to everyone. 
          Our team is dedicated to curating a diverse range of recipes that cater to all dietary preferences, 
          including vegetarian, vegan, and non-vegetarian options. We aim to provide step-by-step guides, 
          tips, and tricks to help you create culinary masterpieces in your own kitchen.
        </p>
        <h2>Connect with Us!</h2>
        <div className="social-media">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="social-icon" />
          </a>
        </div>
      </section>
      <footer className="footer">
        <p>&copy; 2024 RecipeMaker. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default AboutUs;
