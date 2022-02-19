import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import axios from "axios";
import "./App.css";
import HomePage from "./components/HomePage";
import Game from "./components/Game/Game";
import Alert from "react-bootstrap/Alert";
import { cardStackGenerator } from "./CardGenerator/CardGenerator";
import SignUp from "./components/SignUp";
import Leaderboard from "./components/Leaderboard";

function App() {
  const [arr, setArr] = useState(cardStackGenerator());
  const [playerCards, setPlayerCards] = useState(arr.slice(26));
  const [opponentCards, setOpponentCards] = useState(arr.slice(0, 25));
  const [showMessage, setShowMessage] = useState(false);
  const [alertTitle, setAlertTitle] = useState("Oh snap! You got an error!");
  const [alertBody, setAlertBody] = useState("Check The Username or Password");
  const [variant, setVariant] = useState("danger");
  const [username, setUsername] = useState();
  const [kingdomLeaderboard, setKingdomLeaderboard] = useState([]);
  const [regionLeaderboard, setRegionLeaderboard] = useState([]);

  let history = createBrowserHistory();

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

  useEffect(() => {
    history.listen(() => {
      setShowMessage(false);
    });
    axios.get(`api/games/kingdoms`).then((res) => {
      setKingdomLeaderboard(res.data);
    });
    axios.get(`api/games/regions`).then((res) => {
      setRegionLeaderboard(res.data);
    });
  }, []);

  return (
    <div
      className="d-flex justify-content-center align-content-center user-select-none bg-dark flex-wrap text-center text-white"
      style={{ height: "100vh", width: "100vw" }}
    >
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              messageShow={messageShow}
              messageOn={setShowMessage}
              setUsername={setUsername}
            />
          }
        />
        <Route
          exact
          path="/game"
          element={
            <Game
              username={username}
              playerCards={playerCards}
              opponentCards={opponentCards}
              restartFunc={newArr}
              messageOn={setShowMessage}
              messageShow={messageShow}
            />
          }
        />
        <Route
          exact
          path="/signup"
          element={
            <SignUp messageShow={messageShow} messageOn={setShowMessage} />
          }
        />
        <Route
          exact
          path="/leaderboard"
          element={
            <Leaderboard
              kingdomLeaderboard={kingdomLeaderboard}
              regionLeaderboard={regionLeaderboard}
            />
          }
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
