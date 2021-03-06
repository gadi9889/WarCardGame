import anime from "animejs";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Card from "./Card";

export default function Game({
  playerCards,
  opponentCards,
  restartFunc,
  messageOn,
  messageShow,
  username,
}) {
  const [playerCard, setPlayerCard] = useState(
    playerCards[playerCards.length - 1]
  );
  const [opponentCard, setOpponentCard] = useState(
    opponentCards[opponentCards.length - 1]
  );
  const [playerScore, setPlayerScore] = useState(0);
  const [opponentScore, setOpponentScore] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState("rgba(0,0,0,0)");
  const [buttonText, setButtonText] = useState("Hit");

  const animationOpponent = useRef(null);
  const animationPlayer = useRef(null);
  const animationBackground = useRef(null);

  let navigate = useNavigate();
  // let cardImg = [
  //     [img.C2,img.C3,img.C4,img.C5,img.C6,img.C7,img.C8,img.C9,img.C10,img.CJ,img.CQ,img.CK,img.CA],
  //     [img.D2,img.D3,img.D4,img.D5,img.D6,img.D7,img.D8,img.D9,img.D10,img.DJ,img.DQ,img.DK,img.DA],
  //     [img.H2,img.H3,img.H4,img.H5,img.H6,img.H7,img.H8,img.H9,img.H10,img.HJ,img.HQ,img.HK,img.HA],
  //     [img.S2,img.S3,img.S4,img.S5,img.S6,img.S7,img.S8,img.S9,img.S10,img.SJ,img.SQ,img.SK,img.SA]
  // ]

  const hitHandle = () => {
    if (opponentCards.length != 0) {
      animationPlayer.current.restart();
      animationOpponent.current.restart();

      setPlayerCard(playerCards.pop());
      setOpponentCard(opponentCards.pop());
    } else if (buttonText == "Hit") {
      let title;
      let body;
      let varinat;
      if (playerScore < opponentScore) {
        title = "We Lost The War!";
        body = "Our kingdom suffered a great loss. We will come back stronger!";
        varinat = "danger";

        axios
          .post(`/api/games/loss`, {
            name: username,
          })
          .catch((err) => console.log(err));
      } else if (playerScore > opponentScore) {
        title = "We Won The War!";
        body = "We have defeated the enemy and made our region stronger";
        varinat = "success";

        axios
          .post(`/api/games/win`, {
            name: username,
          })
          .catch((err) => console.log(err));
      } else {
        title = "We Made A Truce With The Opponent";
        body = "Our forces have depleted. A truce was our only option";
        varinat = "secondary";
      }
      setButtonText("Again?");
      messageShow(title, body, varinat);
    } else {
      setButtonText("Hit");
      setPlayerScore(0);
      setOpponentScore(0);
      animationPlayer.current.restart();
      animationOpponent.current.restart();
      messageOn(false);
      restartFunc();
    }
  };

  useEffect(async () => {
    animationOpponent.current = anime({
      autoplay: false,
      targets: "#card-opponent",
      opacity: [0, 1],
      keyframes: [
        { translateY: "30vh" },
        { translateX: 320, translateY: 50, rotate: "-0.25turn" },
      ],
      duration: 2000,
      easing: "easeOutInQuad",
    });
    animationPlayer.current = anime({
      autoplay: false,
      targets: "#card-player",
      opacity: [0, 1],
      keyframes: [
        { translateY: "-30vh" },
        { translateX: -320, translateY: -60, rotate: "-0.25turn" },
      ],
      duration: 2000,
      easing: "easeOutInQuad",
    });
    anime({
      targets: "#hit-button",
      opacity: [0, 1],
      scale: [0, 1],
      duration: 1000,
    });
    animationBackground.current = anime({
      targets: "#card-plane",
      easing: "linear",
      autoplay: false,
      background: backgroundColor,
      duration: 2000,
    });
  });

  useEffect(async () => {
    if (playerCard.value > opponentCard.value) {
      setPlayerScore(playerScore + 1);
      await setBackgroundColor("rgba(255,0,0,0.3)");
    } else if (playerCard.value < opponentCard.value) {
      setOpponentScore(opponentScore + 1);
      await setBackgroundColor("rgba(0,0,0,0.3)");
    } else {
      await setBackgroundColor("rgba(0,0,0,0)");
    }
    animationBackground.current.restart();
  }, [playerCard]);

  return (
    <div id="card-plane">
      <div id="card-opponent">
        <div>
          <Card card={opponentCard} />
        </div>
        <h2>{opponentScore}</h2>
      </div>

      <div>
        <Button id="hit-button" onClick={() => hitHandle()}>
          {buttonText}
        </Button>
        <br />
        <Button
          id="leaderboard-button"
          onClick={() => navigate("/leaderboard")}
        >
          Hall Of Fame
        </Button>
      </div>

      <div id="card-player">
        <h2>{playerScore}</h2>
        <div id="player">
          <Card card={playerCard} id={"player"} />
        </div>
      </div>
    </div>
  );
}
