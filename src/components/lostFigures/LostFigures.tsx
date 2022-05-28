import React from "react";
import LostFiguresStyle from "./LostFiguresStyle";

const LostFigures = (props: any) => {
  return (
    <LostFiguresStyle {...props}>
      {props.title}:
      {props.figures.map(
        (figure: {
          id: React.Key | null | undefined;
          name:
            | string
            | number
            | boolean
            | React.ReactElement<any, string | React.JSXElementConstructor<any>>
            | React.ReactFragment
            | React.ReactPortal
            | null
            | undefined;
          logo: string | undefined;
        }) => (
          <div key={figure.id}>
            {figure.logo && <img width={20} height={20} src={figure.logo} />}
          </div>
        )
      )}
    </LostFiguresStyle>
  );
};

export default LostFigures;
