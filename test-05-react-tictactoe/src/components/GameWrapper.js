import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Box from './Box';
import { isThereAWinner } from '../utilities/gameLogic';
import Banner from './Banner';
import globalTheme from '../utilities/globalTheme';
import Button from './Button';

/* ======= COMPONENT ======= */
const StyledGameWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  #game-board {
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-template-rows: repeat(3, auto);
    justify-content: center;
    justify-items: stretch;
    grid-gap: 0;
  }
  #current-player {
    visibility: ${(props) => (props.playerVisible ? '' : 'hidden')};
    text-align: center;
    font-size: 2rem;
    span {
      font-weight: bold;
      color: ${globalTheme.back2};
    }
  }
`;

/* ======= COMPONENT ======= */
const GameWrapper = () => {
  const initialState = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
  const [gameState, setGameState] = useState(initialState);
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [winner, setWinner] = useState(null);
  const [isInputDisabled, setIsInputDisabled] = useState(false);
  const [turnCounter, setTurnCounter] = useState(0);

  // Checks for a winner after each turn
  useEffect(() => {
    if (isThereAWinner(gameState)) {
      setWinner(currentPlayer === 'X' ? 'O' : 'X');
      setIsInputDisabled(true);
    } else if (turnCounter === 9 && winner === null) {
      setWinner('TIE');
    }
  }, [gameState, currentPlayer, turnCounter, winner]);

  // useEffect(() => {}, [winner]);

  const handleClick = (e) => {
    if (isInputDisabled) return; // Checks to see if all input is disabled

    const id = e.target.id;
    const idArr = id.split('-');
    const targetRow = idArr[0];
    const targetColumn = idArr[1];
    console.log(`Clicked ${id}`);

    if (gameState[targetRow][targetColumn]) return; // Prevents input if box is already checked

    const newGameState = gameState.map((row, rowIndex) => {
      if (rowIndex === Number(targetRow)) {
        return row.map((col, colIndex) => {
          if (colIndex === Number(targetColumn)) {
            return currentPlayer;
          } else return col;
        });
      } else return row;
    });
    setGameState(newGameState);
    setTurnCounter(turnCounter + 1);
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  };

  const resetGame = () => {
    setGameState(initialState);
    setCurrentPlayer('X');
    setWinner(null);
    setIsInputDisabled(false);
    setTurnCounter(0);
  };

  return (
    <>
      <StyledGameWrapper playerVisible={!winner}>
        <p id="current-player">
          The current player is: <span>{currentPlayer}</span>
        </p>
        <div id="game-board">
          {gameState.map((arr, arrIndex) => {
            return arr.map((box, boxIndex) => {
              return (
                <Box
                  key={`${arrIndex}-${boxIndex}`}
                  id={`${arrIndex}-${boxIndex}`}
                  handleClick={handleClick}
                  value={box}
                />
              );
            });
          })}
        </div>
        {winner && (
          <div>
            <Banner text="The winner is " player={winner} />
          </div>
        )}
        <Button name="Reset" handleClick={resetGame}></Button>
      </StyledGameWrapper>
    </>
  );
};

export default GameWrapper;
