import React, { useEffect, useRef, useState } from "react";
import { cardStackGenerator } from "../../CardGenerator/CardGenerator";
import Card from "./Card";

export default function Game() {
    const arr = cardStackGenerator()

    const [opponentCards, setOpponentCards] = useState(arr.slice(0,25));
    const [playerCards, setPlayerCards] = useState(arr.slice(26));

    return (
        <div id="card-plane">
            <div id="card-opponent">
                <div>
                    <Card cards={opponentCards} />
                </div>
            </div>

            <div id="card-player">
                <div>
                    <Card cards={playerCards} />
                </div>
            </div>
        </div>
    );
}
