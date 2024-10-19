import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Use Routes instead of Switch
import Homepage from "./home/Home"; // Ensure this matches your file name exactly
import AboutUs from "./About/AboutUs";
import Signup from "./signup/Signup"; 
import Signin from "./Signin/Signin"; // Import the Signin component
import ForgotPassword from "./Forgotpassword/ForgotPassword"; 
import Contact from "./Contactus/Contactus";
import Vegetarian from "./Vegetarian/Vegetarian";
import NonVegetarian from "./NonVegetarian/NonVegetarian";
import Vegan from "./Vegan/Vegan";
import Dessert from "./Dessert/Dessert";
import Navbar from "./Navbar/Navbar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutUs />} />
        {/* Add more routes as needed */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/vegetarian" element={<Vegetarian />} />
        <Route path="/Nonvegetarian" element={<NonVegetarian/>}/>
        <Route path="/vegan" element={<Vegan/>}/>
        <Route path="/Dessert" element={<Dessert/>}/>
        <Route path="/Navbar" element={<Navbar/>}/>
      </Routes>
    </Router>
  );
}

export default App;
