import React, { useEffect, useRef, useState } from "react";
import { cardStackGenerator } from "../CardGenerator/CardGenerator";

export default function Game() {
    const [opponentCards, setOpponentCards] = useState();
    const [playerCards, setPlayerCards] = useState();

    const arr = cardStackGenerator()

    setOpponentCards(arr.slice(0,25))
    setPlayerCards(arr.slice(26))

    return (
        <div id="card-plane">
        <div id="card-opponent">
            <div>
            <h2 style={{ float: "left", margin: "10px", color: "black" }}>7</h2>
            </div>
        </div>

        <div id="card-player">
            <div>
            <h2 style={{ float: "left", margin: "10px", color: "black" }}>7</h2>
            </div>
        </div>
        </div>
    );
}
