import React from 'react';
import './Home.css'; // Ensure you create and link this CSS file

function Homepage() {
  return (
    <div className="homepage">
      {/* Navigation Bar */}
      <header className="navbar">
        <div className="navbar-logo">RecipeMaker</div>
        <nav className="navbar-links">
          <a href="about">About</a>
          <a href="#categories">Categories</a>
          <a href="contact">Contact</a>
          <a href="signup" className="signup-btn">Sign Up</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to RecipeMaker</h1>
          <p>
            Discover new and exciting recipes across categories like Vegan, Vegetarian, Non-Vegetarian, and Desserts!
          </p>
          <a href="#categories" className="cta-btn">Explore Recipes</a>
        </div> {/* Corrected the closing tag */}
      </section>

      {/* Categories Section */}
      <section id="categories" className="categories-section">
        <h2>Our Recipe Categories</h2>
        <div className="categories">
          {categories.map((category) => (
            <div className="category-card" key={category.id}>
              <a href={`/${category.link}`} aria-label={`View ${category.name} recipes`}>
                <img src={category.image} alt={category.name} />
                <h3>{category.name}</h3>
                <p>{category.description}</p>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section id="signup" className="cta-section">
        <h2>Join RecipeMaker Today!</h2>
        <p>Sign up to get access to personalized recipes and more!</p>
        <a href="signup" className="cta-btn">Get Started</a>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 RecipeMaker. All rights reserved.</p>
        <div><strong>Made by Himanshu Jha</strong></div>
      </footer>
    </div>
  );
}

// Categories data
const categories = [
  {
    id: 1,
    name: 'Vegetarian',
    link: 'vegetarian',
    image: 'src/assets/img/pexels-nano-erdozain-120534369-28895983.jpg', // Ensure this path is correct
    description: 'Fresh, plant-based recipes for your healthy lifestyle.',
  },
  {
    id: 2,
    name: 'Non-Vegetarian',
    link: 'NonVegetarian',
    image: 'src/assets/img/pexels-mouktik-joshi-98936055-9646843.jpg', // Ensure this path is correct
    description: 'Succulent meat dishes packed with flavor.',
  },
  {
    id: 3,
    name: 'Vegan',
    link: 'vegan',
    image: 'src/assets/img/pexels-markus-winkler-1430818-2862154.jpg', // Ensure this path is correct
    description: 'Pure vegan recipes made without animal products.',
  },
  {
    id: 4,
    name: 'Desserts',
    link: 'dessert',
    image: 'src/assets/img/pexels-photo-2373520.jpeg', // Ensure this path is correct
    description: 'Satisfy your sweet tooth with delicious desserts.',
  },
];

export default Homepage;
