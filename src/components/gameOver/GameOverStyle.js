import styled from "styled-components";

const GameOverStyle = styled.div`
    color: white;
    background: rgba(8, 8, 8, 0.7);
    width: 40vw;
    height:80vh;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    box-sizing: border-box;  
    position: absolute; 
    z-index: 1;
    font-size: 100px; 
    margin-left: 55vw;
`;

export default GameOverStyle;