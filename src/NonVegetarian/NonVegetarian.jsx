// NonVegetarian.js
import React from 'react';
import './NonVegetarian.css'; // Ensure this CSS file is included
import Navbar from '../Navbar/Navbar'; // Make sure to import the Navbar component

function NonVegetarian() {
  const recipes = [
    {
      id: 1,
      title: "Grilled Chicken",
      ingredients: ["Chicken breasts", "Olive oil", "Garlic", "Rosemary"],
      instructions: "Marinate the chicken with olive oil and herbs. Grill for 20 minutes.",
      image: "src/assets/non veg/pexels-harry-dona-2338407.jpg" // Update with the correct path
    },
    {
      id: 2,
      title: "Beef Tacos",
      ingredients: ["Ground beef", "Taco shells", "Cheese", "Lettuce"],
      instructions: "Cook the beef, fill taco shells, and top with cheese and lettuce.",
      image: "src/assets/non veg/pexels-cristian-rojas-7613555.jpg"
    },
    {
      id: 3,
      title: "Fish Curry",
      ingredients: ["Fish fillets", "Coconut milk", "Spices", "Onion"],
      instructions: "Cook onion, add spices, and stir in fish and coconut milk. Simmer until done.",
      image: "src/assets/non veg/pexels-khanniru-8684077.jpg"
    },
    {
      id: 4,
      title: "Pork Chops",
      ingredients: ["Pork chops", "Salt", "Pepper", "Olive oil"],
      instructions: "Season pork chops with salt and pepper. Sear in a hot pan until cooked.",
      image: "src/assets/non veg/pexels-vladimir-sladek-127740023-10165695.jpg"
    },
    {
      id: 5,
      title: "Shrimp Fried Rice",
      ingredients: ["Shrimp", "Rice", "Vegetables", "Soy sauce"],
      instructions: "Sauté shrimp and vegetables, add cooked rice, and soy sauce. Mix well.",
      image: "src/assets/non veg/pexels-ehioma-osih-109764575-11743998.jpg"
    }
  ];

  return (
    <div className="non-vegetarian-page">
      <Navbar />
      <h1>Non-Vegetarian Recipes</h1>
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

export default NonVegetarian;
