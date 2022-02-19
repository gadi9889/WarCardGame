import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { createBrowserHistory } from "history";
import "./App.css";
import HomePage from "./components/HomePage";
import Game from "./components/Game/Game";
import Alert from "react-bootstrap/Alert";
import { cardStackGenerator } from "./CardGenerator/CardGenerator";
import SignUp from "./components/SignUp";

function App() {
  const [arr, setArr] = useState(cardStackGenerator());
  const [playerCards, setPlayerCards] = useState(arr.slice(26));
  const [opponentCards, setOpponentCards] = useState(arr.slice(0, 25));
  const [showMessage, setShowMessage] = useState(false);
  const [alertTitle, setAlertTitle] = useState("Oh snap! You got an error!");
  const [alertBody, setAlertBody] = useState("Check The Username or Password");
  const [variant, setVariant] = useState("danger");

  const newArr = () => {
    setArr(cardStackGenerator());
    setOpponentCards(arr.slice(0, 25));
    setPlayerCards(arr.slice(26));
  };

  const messageShow = (title, body, variant) => {
    setShowMessage(true);
    setAlertTitle(title);
    setAlertBody(body);
    setVariant(variant);
  };

  return (
    <div
      className="d-flex justify-content-center align-content-center user-select-none bg-dark flex-wrap text-center text-white"
      style={{ height: "100vh", width: "100vw" }}
    >
      <Routes>
        <Route
          exact
          path="/"
          element={
            <HomePage messageShow={messageShow} messageOn={setShowMessage} />
          }
        />
        <Route
          exact
          path="/game"
          element={
            <Game
              playerCards={playerCards}
              opponentCards={opponentCards}
              restartFunc={newArr}
              messageOff={setShowMessage}
              messageShow={messageShow}
            />
          }
        />
        <Route
          exact
          path="/signup"
          element={<SignUp messageShow={messageShow} />}
          messageOff={setShowMessage}
        />
      </Routes>
      {showMessage && (
        <Alert
          variant={variant}
          onClose={() => setShowMessage(false)}
          dismissible
          className="position-absolute top-0"
        >
          <Alert.Heading>{alertTitle}</Alert.Heading>
          <p>{alertBody}</p>
        </Alert>
      )}
    </div>
  );
}

export default App;
