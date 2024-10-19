import React from 'react';
import './Contactus.css'; // Ensure to create and link this CSS file

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We would love to hear from you! Get in touch with us for any inquiries, feedback, or suggestions.</p>
      </div>

      <div className="contact-container">
        <div className="contact-form">
          <h2>Send us a message</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>

        <div className="contact-info">
          <h2>Our Contact Details</h2>
          <p><strong>Email:</strong> RecipeMaker@gmail.com</p>
          <p><strong>Phone:</strong> +91 8810249704</p>
          <p><strong>Address:</strong> 123-G,Indirapuram,Ghaziabad,UttarPradesh,201014</p>

          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="https://facebook.com">Facebook</a>
            <a href="https://twitter.com">Twitter</a>
            <a href="https://instagram.com">Instagram</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
