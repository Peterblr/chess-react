import styled from "styled-components";

const ButtonStyle = styled.div`
  padding: 8px;
  margin: 10px;
  color: white;
  background: rgba(100, 255, 128, 0.5);
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  box-sizing: border-box;
  &:hover {   
    background: rgba(100, 255, 128, 0.2);  
    transform: scale(1.2);   
    cursor: pointer; 
  } 
`;

export default ButtonStyle;
