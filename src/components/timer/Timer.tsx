import React, { useEffect, useRef, useState } from "react";
import { Colors } from "../../models/Colors";
import GameOver from "../gameOver/GameOver";
import GameOverStyle from "../gameOver/GameOverStyle";
import ButtonStyle from "./ButtonStyle";
import TimerStyle from "./TimerStyle";

const Timer = (props: any) => {
  const [blackTime, setBlackTime] = useState(120);
  const [whiteTime, setWhiteTime] = useState(120);
  const timer = useRef<null | ReturnType<typeof setInterval>>(null);

  useEffect(() => {
    startTimer();
    setWhiteTime(120);
    setBlackTime(120);
  }, [props.currentPlayer]);

  function startTimer() {
    if (timer.current) {
      clearInterval(timer.current);
    }

    const callback =
      props.currentPlayer?.color === Colors.WHITE
        ? decrementWhiteTimer
        : decrementBlackTimer;
    timer.current = setInterval(callback, 1000);
  }

  function decrementBlackTimer() {
    setBlackTime((prev) => prev - 1);
  }

  function decrementWhiteTimer() {
    setWhiteTime((prev) => prev - 1);
  }

  const handleRestart = () => {
    setWhiteTime(120);
    setBlackTime(120);
    props.restart();
  };

  return (
    <TimerStyle>
      <h3>
        Player:{" "}
        {props.currentPlayer?.color === Colors.WHITE ? "WHITE" : "BLACK"}
      </h3>
      <div>
        <ButtonStyle onClick={handleRestart}>Restart Game</ButtonStyle>
      </div>
      <h2>Black - {blackTime > 0 ? blackTime : "0"}</h2>
      <h2>White - {whiteTime > 0 ? whiteTime : "0"}</h2>
      {whiteTime < 1 || blackTime < 1 ? (
        <GameOver/>
      ) : (
        ""
      )}
    </TimerStyle>
  );
};

export default Timer;
