import React, { FC, useEffect, useState } from "react";
import CellComponent from "../cell/CellComponent";
import { Cell } from "../../models/Cell";
import { Colors } from "../../models/Colors";
import { BoardStyle } from "./BoardStyle";

const BoardComponents = (props: any) => {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

  function click(cell: Cell) {
    if (
      selectedCell &&
      selectedCell !== cell &&
      selectedCell.figure?.canMove(cell)
    ) {
      selectedCell.moveFigure(cell);
      props.swapPlayer();
      setSelectedCell(null);
      updateBoard();
    } else {
      if (cell.figure?.color === props.currentPlayer?.color) {
        setSelectedCell(cell);
      }
    }
  }

  useEffect(() => {
    hightlightCells();
  }, [selectedCell]);

  function hightlightCells() {
    props.board.hightlightCells(selectedCell);
    updateBoard();
  }

  function updateBoard() {
    const newBoard = props.board.getCopyBoard();
    props.setBoard(newBoard);
  }

  

  return (
    <div>
      <BoardStyle>
        {props.board.cells.map(
          (row: any[], index: React.Key | null | undefined) => (
            <React.Fragment key={index}>
              {row.map((cell) => (
                <CellComponent
                  cell={cell}
                  key={cell.id}
                  selected={
                    cell.x === selectedCell?.x && cell.y === selectedCell?.y
                  }
                  click={click}
                />
              ))}
            </React.Fragment>
          )
        )}
      </BoardStyle>
    </div>
  );
};

export default BoardComponents;
