import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'

import { Dice } from "./dice";

// initialize the Dice Box outside of the component
Dice.init().then(() => {
});


function App() {
  const [diceToRoll, setDiceToRoll] = useState("2d20");

  const rollDice = (notation) => {
    // trigger the dice roll
    Dice.show().roll(notation);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <input onChange={(event) => setDiceToRoll(event.target.value)} />
        <button onClick={() => rollDice(diceToRoll.split(/[ ,]+/).filter(val => !!val))}>Roll</button>
      </header>
    </div>
  );
}

export default App;
