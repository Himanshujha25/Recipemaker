import React from 'react';
import './Vegan.css'; // Make sure this CSS file is created for styling
import Navbar from '../Navbar/Navbar';

function Vegan() {
  const recipes = [
    {
      id: 1,
      title: "Chickpea Salad",
      ingredients: ["Chickpeas", "Cucumber", "Tomatoes", "Lemon juice"],
      instructions: "Mix all ingredients in a bowl. Drizzle with lemon juice.",
      image: "src/assets/vegan/pexels-adriannacalvo-23384616.jpg"
    },
    {
      id: 2,
      title: "Tofu Stir Fry",
      ingredients: ["Tofu", "Mixed vegetables", "Soy sauce", "Sesame oil"],
      instructions: "Sauté tofu and vegetables in sesame oil. Add soy sauce and stir.",
      image: "src/assets/vegan/pexels-polina-tankilevitch-5848483.jpg"
    },
    {
      id: 3,
      title: "Vegan Pasta",
      ingredients: ["Pasta", "Tomato sauce", "Garlic", "Basil"],
      instructions: "Cook pasta and mix with tomato sauce, garlic, and basil.",
      image: "src/assets/vegan/pexels-nadin-sh-78971847-18411462.jpg"
    },
    {
      id: 4,
      title: "Vegetable Curry",
      ingredients: ["Mixed vegetables", "Coconut milk", "Curry powder"],
      instructions: "Cook vegetables, add coconut milk and curry powder. Simmer until done.",
      image: "src/assets/vegan/pexels-suvaiba-83082820-28579050.jpg"
    },
    {
      id: 5,
      title: "Avocado Toast",
      ingredients: ["Bread", "Avocado", "Salt", "Pepper"],
      instructions: "Mash avocado on toasted bread. Season with salt and pepper.",
      image: "src/assets/vegan/pexels-fotios-photos-1351238.jpg"
    }
  ];

  return (
    <div className="vegan-page">
      <Navbar />
      <h1>Vegan Recipes</h1>
      <div className="recipes">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <img src={recipe.image} alt={recipe.title} />
            <h2>{recipe.title}</h2>
            <p><strong>Ingredients:</strong> {recipe.ingredients.join(', ')}</p>
            <p><strong>Instructions:</strong> {recipe.instructions}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Vegan;
