import React, { useEffect, useState } from "react";
import BoardComponents from "./components/board/BoardComponents";
import LostFigures from "./components/lostFigures/LostFigures";
import { GlobalStyle } from "./GlobalStyle";
import { Board } from "./models/Board";
import { Colors } from "./models/Colors";
import { Player } from "./models/Player";
import Timer from "./components/timer/Timer";
import AppStyle from "./AppStyle";
import Win from "./components/win/Win";

function App() {
  const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE));
  const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK));
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);
  const [board, setBoard] = useState(new Board());

  useEffect(() => {
    restart();
    setCurrentPlayer(whitePlayer);
  }, []);

  function restart() {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigures();
    setBoard(newBoard);
  }

  function swapPlayer() {
    setCurrentPlayer(
      currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer
    );
  }

  return (
    <AppStyle>
      <GlobalStyle />
      <Timer restart={restart} currentPlayer={currentPlayer} />      
      <BoardComponents
        board={board}
        setBoard={setBoard}
        currentPlayer={currentPlayer}
        swapPlayer={swapPlayer}
      />
      {board.lostWhiteFigures.length === 15 ? <Win currentPlayer={currentPlayer}/> : ""}
      {board.lostBlackFigures.length === 15 ? <Win currentPlayer={currentPlayer}/> : ""}
      <div>
        <LostFigures title="Black Figures" figures={board.lostBlackFigures} />
        <LostFigures title="White Figures" figures={board.lostWhiteFigures} />
      </div>
    </AppStyle>
  );
}

export default App;
