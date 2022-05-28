import React from "react";
import { AvailableStyle } from "./AvalibaleStyle";
import CellStyle from "./CellStyle";

const CellComponent = (props: any) => {
  return (
    <CellStyle 
      {...props} 
      onClick={() => props.click(props.cell)}
      style={{background: props.cell.available && props.cell.figure ? 'green' : ''}}
    >    
      {props.cell.available && !props.cell.figure && <AvailableStyle/>}  
      {props.cell.figure?.logo && <img src={props.cell.figure.logo} alt=""/>}
    </CellStyle>
  );
};

export default CellComponent;
