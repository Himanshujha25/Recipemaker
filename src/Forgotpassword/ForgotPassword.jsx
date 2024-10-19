import React, { useState } from 'react';
import './ForgotPassword.css';

function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password reset logic (e.g., API call)
    console.log('Reset link sent to:', email);
    // Reset email field after submission
    setEmail('');
  };

  return (
    <div className="forgot-password">
      <header className="navbar">
        <div className="navbar-logo">RecipeMaker</div>
        <nav className="navbar-links">
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/signup">Sign Up</a>
          <a href="/signin">Sign In</a>
        </nav>
      </header>

      <section className="forgot-password-form">
        <h1>Forgot Password</h1>
        <p>Please enter your email address to receive a link to reset your password.</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="reset-btn">Send Reset Link</button>
        </form>
        <div className="footer-links">
          <a href="/signin" className="signin-link">Remembered your password? Sign In</a>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2024 RecipeMaker. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default ForgotPassword;
