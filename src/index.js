import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Import createStore
import { createStore } from 'redux';

// Declare our reducer for our store
const reducer = (state=0, action) => {
  console.log("Current State and Action: ", state, action);

  switch (action.type) {
    case "INCREASE":
      console.log(`I am increasing the state from ${state} to ${state + 1}`);
      return state + 1;
    case "DECREASE":
      console.log(`I am decreasing the state from ${state} to ${state - 1}`);
      return state - 1;
    default:
      return state;
  }
}

// Create a store with our reducer as an argument
const store = createStore(reducer)

store.dispatch({type: "INCREASE"})
store.dispatch({type: "DECREASE"})

const renderFunction = () => ReactDOM.render(<App store={store}/>, document.getElementById('root'));

store.subscribe(renderFunction)
renderFunction()
