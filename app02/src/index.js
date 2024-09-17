import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const items = [ 
  "2 lb salmon",
  "5 sprigs fresh rosemary", 
  "2 tablespoons olive oil", 
  "2 small lemons",
  "1 teaspoon kosher salt", 
  "4 cloves of chopped garlic"
  ];
root.render(
  <React.StrictMode>
    <App items={items} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
