import React, { useState, useEffect } from 'react'
import { Dice } from '../../libs/dice';

// initialize the Dice Box outside of the component
Dice.init().then(() => {
});


export const DiceRoller = () => {
    const diceRollerId = "dice-roller"
    useEffect(() => {
        const diceCanvas = document.getElementById("dice-box");
        if(diceCanvas) {
            document.getElementById(diceRollerId)?.appendChild(diceCanvas);

        }
    }, [])

    const [diceToRoll, setDiceToRoll] = useState("1d4 2d20");

    const rollDice = (notation) => {
      // trigger the dice roll
      Dice.show().roll(notation);
    };


    return (
        <div>
            <div
                style={{
                    width: 600,
                    height: 300
                }}
                id={diceRollerId}>
            </div>
            <input defaultValue={diceToRoll} onChange={(event) => setDiceToRoll(event.target.value)} />
            <button onClick={() => rollDice(diceToRoll.split(/[ ,]+/).filter(val => !!val))}>Roll</button>
        </div>
    )
}