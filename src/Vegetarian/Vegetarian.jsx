import React from 'react';
import './Vegetarian.css'; // Create this CSS file for styling
import Navbar from '../Navbar/Navbar';

function Vegetarian() {
  const recipes = [
    {
      id: 1,
      title: "Vegetable Stir Fry",
      ingredients: ["Broccoli", "Carrots", "Bell peppers", "Soy sauce"],
      instructions: "Chop the vegetables. Stir-fry in a pan with soy sauce for 10 minutes.",
      image: "src/assets/veg/pexels-marta-dzedyshko-1042863-2067418.jpg" // Add the correct path to your images
    },
    {
      id: 2,
      title: "Chickpea Salad",
      ingredients: ["Chickpeas", "Cucumber", "Tomatoes", "Lemon juice", "Olive oil"],
      instructions: "Mix all the ingredients in a bowl and serve chilled.",
      image:  "src/assets/veg/pexels-adriannacalvo-23384616.jpg"  // Replace with your image path
    },
    {
      id: 3,
      title: "Caprese Salad",
      ingredients: ["Tomatoes", "Mozzarella cheese", "Basil", "Balsamic vinegar"],
      instructions: "Layer tomatoes, mozzarella, and basil. Drizzle with balsamic vinegar.",
      image: "src/assets/veg/pexels-nadin-sh-78971847-23645811.jpg" // Replace with your image path
    },
    {
      id: 4,
      title: "Vegetable Curry",
      ingredients: ["Potatoes", "Cauliflower", "Coconut milk", "Curry powder"],
      instructions: "Cook the vegetables in coconut milk and curry powder until tender.",
      image: "src/assets/veg/pexels-markus-winkler-1430818-18510422.jpg" // Replace with your image path
    },
    {
      id: 5,
      title: "Stuffed Bell Peppers",
      ingredients: ["Bell peppers", "Rice", "Black beans", "Cheese"],
      instructions: "Stuff the bell peppers with rice and black beans, top with cheese, and bake until the peppers are tender.",
      image: "src/assets/veg/pexels-polina-tankilevitch-3872370.jpg" // Replace with your image path
    },
    {
      id: 6,
      title: "Pasta Primavera",
      ingredients: ["Pasta", "Zucchini", "Carrots", "Cherry tomatoes", "Parmesan cheese"],
      instructions: "Cook the pasta, sauté the vegetables, and mix with parmesan cheese.",
      image: "src/assets/veg/pexels-cottonbro-4057736.jpg" // Replace with your image path
    },
    {
      id: 7,
      title: "Quinoa Bowl",
      ingredients: ["Quinoa", "Black beans", "Corn", "Avocado", "Lime"],
      instructions: "Cook quinoa and mix with black beans, corn, and avocado. Drizzle with lime juice.",
      image: "src/assets/veg/pexels-nano-erdozain-120534369-28841118.jpg" // Replace with your image path
    },
    {
      id: 8,
      title: "Mushroom Risotto",
      ingredients: ["Arborio rice", "Mushrooms", "Vegetable broth", "Parmesan cheese"],
      instructions: "Cook Arborio rice slowly with broth, adding mushrooms and finishing with parmesan.",
      image: "src/assets/veg/pexels-dacapture-19359972.jpg" // Replace with your image path
    },
    {
      id: 9,
      title: "Zucchini Noodles",
      ingredients: ["Zucchini", "Tomato sauce", "Basil", "Garlic"],
      instructions: "Spiralize the zucchini, sauté with garlic, and top with tomato sauce and basil.",
      image: "src/assets/veg/pexels-tima-miroshnichenko-6327625.jpg" // Replace with your image path
    }
  ];

  return (
    <div className="vegetarian-page">
      <Navbar/>
      <h1>Vegetarian Recipes</h1>
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

export default Vegetarian;
