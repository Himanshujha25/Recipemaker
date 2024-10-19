import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Import your main component (App.jsx)
import './index.css'; // Import global styles

// Find the root element in the HTML where React will render the app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
