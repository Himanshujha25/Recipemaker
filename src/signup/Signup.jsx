import React, { useState } from 'react';
import './Signup.css';

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic (e.g., API call)
    console.log('User Data:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', password: '' });
  };

  return (
    <div className="signup">
      <header className="navbar">
        <div className="navbar-logo">RecipeMaker</div>
        <nav className="navbar-links">
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/signup" className="active">Sign Up</a>
        </nav>
      </header>

      <section className="signup-form">
        <h1>Create Account</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
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
          <button type="submit" className="signup-btn">Sign Up</button>
        </form>
        <div className="footer-links">
          <a href="/signin" className="signin-link">Already have an account? Sign In</a>
         <div><a href="/forgot-password" className="forgot-password-link">Forgot Password?</a></div> 
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2024 RecipeMaker. All rights reserved.</p>
        <h3>Himanshu jha</h3>
      </footer>
    </div>
  );
}

export default Signup;
