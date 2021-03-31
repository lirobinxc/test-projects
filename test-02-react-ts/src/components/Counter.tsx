import React, { useState } from 'react';

const Counter: React.FC = () => {
  const [counter, setCounter] = useState(0);
  const [prev, setPrev] = useState(0);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setPrev(counter);
    setCounter(counter + 1);
  };

  console.log('Re-rendered');

  return (
    <div>
      <h2>You have clicked {counter} times</h2>
      <h3>The previous counter was {prev} </h3>
      <button onClick={handleClick}>Counter +</button>
    </div>
  );
};

export default Counter;
