import './App.css';
import React from 'react';

function App({items}) {
  return React.createElement(
   "ul",
   {className: "ingredients"},
    items.map((ingredient, i)=>
      React.createElement("li",{key: i},ingredient)
    )
  )
}

export default App;
