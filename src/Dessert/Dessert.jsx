import React from 'react';
import './Dessert.css'; // Create this CSS file for styling
import Navbar from '../Navbar/Navbar'; // Import the Navbar component

function Dessert() {
  const recipes = [
    {
      id: 1,
      title: "Chocolate Cake",
      ingredients: ["Flour", "Cocoa powder", "Sugar", "Eggs"],
      instructions: "Mix ingredients, pour into a pan, and bake for 30 minutes.",
      image: "src/assets/dessert/pexels-abhinavcoca-291528.jpg" // Updated online image link
    },
    {
      id: 2,
      title: "Fruit Salad",
      ingredients: ["Mixed fruits", "Honey", "Lime juice"],
      instructions: "Chop fruits and mix with honey and lime juice.",
      image: "src/assets/dessert/pexels-joshsorenson-1546896.jpg" // Updated online image link
    },
    {
      id: 3,
      title: "Ice Cream Sundae",
      ingredients: ["Ice cream", "Chocolate syrup", "Cherries"],
      instructions: "Scoop ice cream into a bowl and top with syrup and cherries.",
      image: "src/assets/dessert/pexels-herlina-widyastuti-111153833-14563020.jpg" // Updated online image link
    },
    {
      id: 4,
      title: "Cheesecake",
      ingredients: ["Cream cheese", "Sugar", "Crust", "Eggs"],
      instructions: "Mix cream cheese and sugar, pour into crust, and bake.",
      image: "src/assets/dessert/pexels-arunbabuthomas-14218065.jpg" // Updated online image link
    },
    {
      id: 5,
      title: "Brownies",
      ingredients: ["Butter", "Chocolate", "Sugar", "Flour"],
      instructions: "Melt butter and chocolate, mix in sugar and flour, bake.",
      image: "src/assets/dessert/pexels-anna-wlodarczyk-1284606-2451673.jpg" // Updated online image link
    }
  ];

  return (
    <div>
      <Navbar /> {/* Add Navbar component */}
      <div className="dessert-page">
        <h1>Dessert Recipes</h1>
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
    </div>
  );
}

export default Dessert;
