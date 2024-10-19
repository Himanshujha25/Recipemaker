import React, { useState } from 'react';
import './Signin.css';

function Signin() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-in logic (e.g., API call)
    console.log('User Data:', formData);
    // Reset form after submission
    setFormData({ email: '', password: '' });
  };

  return (
    <div className="signin">
      <header className="navbar">
        <div className="navbar-logo">RecipeMaker</div>
        <nav className="navbar-links">
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/signup">Sign Up</a>
          <a href="/signin" className="active">Sign In</a>
        </nav>
      </header>

      <section className="signin-form">
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="signin-btn">Sign In</button>
        </form>
        <div className="footer-links">
          <a href="/signup" className="signup-link">Don't have an account? Sign Up</a>
          <div><a href="/forgot-password" className="forgot-password-link">Forgot Password?</a></div>
          
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2024 RecipeMaker. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Signin;
