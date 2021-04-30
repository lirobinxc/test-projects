const isArrayMatching = (arr) => {
  const string = arr.join('');
  if (string === 'XXX' || string === 'OOO') return true;
  return false;
};

export const isThereAWinner = (gameState) => {
  // Checks for row winners
  const rowStatus = gameState.map((row) => isArrayMatching(row));

  // Checks for column winners
  const colArr = [
    [gameState[0][0], gameState[1][0], gameState[2][0]],
    [gameState[0][1], gameState[1][1], gameState[2][2]],
    [gameState[0][2], gameState[1][2], gameState[2][2]],
  ];
  const columnStatus = colArr.map((col) => isArrayMatching(col));

  // Checks for diagonal winners
  const diagArr = [
    [gameState[0][0], gameState[1][1], gameState[2][2]],
    [gameState[0][2], gameState[1][1], gameState[2][0]],
  ];
  const diagonalStatus = diagArr.map((col) => isArrayMatching(col));

  // Log results
  console.log({ rowStatus, columnStatus, diagonalStatus });
  const results = [...rowStatus, ...columnStatus, ...diagonalStatus];

  return results.find((ele) => ele === true) !== undefined ? true : false;
};
