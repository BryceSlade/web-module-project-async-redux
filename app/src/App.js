import logo from './logo.svg';
import React from 'react';
import './App.css';
import Joke from './components/Joke'

function App() {
  return (
    <div className="App">
      <h1>Get a Random Joke</h1>
      <Joke />
    </div>
  );
}

export default App;
