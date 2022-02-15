import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import Game from "./components/Game/Game";
import { cardStackGenerator } from "./CardGenerator/CardGenerator";

function App() {
  const [arr, setArr] = useState(cardStackGenerator())

  const [playerCards, setPlayerCards] = useState((arr.slice(26)));
  const [opponentCards, setOpponentCards] = useState((arr.slice(0,25)));

  return (
    <div
      className="d-flex justify-content-center align-content-center user-select-none bg-dark flex-wrap text-center text-white"
      style={{ height: "100vh", width: "100vw" }}
    >
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/game" element={<Game playerCards={playerCards} opponentCards={opponentCards} />} />
      </Routes>
    </div>
  );
}

export default App;
