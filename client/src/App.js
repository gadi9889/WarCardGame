import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import Game from "./components/Game";

function App() {
  return (
    <div
      className="d-flex justify-content-center align-content-center user-select-none bg-dark flex-wrap text-center text-white"
      style={{ height: "100vh", width: "100vw" }}
    >
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/game" element={<Game />} />
      </Routes>
    </div>
  );
}

export default App;
