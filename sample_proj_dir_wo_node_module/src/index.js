//1. Import React and ReactDOM lib from node_modules and assign to local var
import React from 'react';
import ReactDOM from 'react-dom';

//2. Create a react component

// const App = function() {
//   return <div>Hi there!</div>;
// };

const App = () => {
  return <div>Hi there!</div>; //jsx
};

//3. Take the component and render it on screen

//call render function, pass in 2 arg
ReactDOM.render(
  //take created App component -> jsx
  <App />,
  document.querySelector('#root') //get ref to div of id=root in public/index.html
);
