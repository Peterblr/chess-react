import styled from "styled-components";

const CellStyle = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #c6ee7c;
  background-color: ${(props) => props.selected ? "red" : props.cell.color};  
 
  &:hover {
    background-color: ${(props) => props.selected ? "red" : "#8e98d814"}; 
    transform: scale(1.2);    
  }  

  img {
    width: 48px;
    height: 48px;
    position: relative;
  }   
`;

export default CellStyle;