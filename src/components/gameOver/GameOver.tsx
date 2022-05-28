import React from "react";
import { Colors } from "../../models/Colors";
import GameOverStyle from "./GameOverStyle";

const GameOver = (props: any) => {
  return (
    <GameOverStyle {...props}>
          Time Is Up
          <div>
            {props.currentPlayer?.color === Colors.WHITE ? "WHITE" : "BLACK"}
          </div>
          Game Over
        </GameOverStyle>
  );
};

export default GameOver;

