import React from "react";
import { Colors } from "../../models/Colors";
import WinStyle from "./WinStile";

const Win = (props: any) => {
  return (
    <WinStyle {...props}>
      <div>
        {props.currentPlayer?.color === Colors.BLACK ? "WHITE" : "BLACK"}
      </div>
      You Are Win!!!
    </WinStyle>
  );
};

export default Win;
