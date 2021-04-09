import React, { useState, useRef, useEffect } from 'react';

const PrevStateCounter = () => {
  const [counter, setCounter] = useState(0);

  const prevCounter = useRef(counter);
  useEffect(() => {
    prevCounter.current = counter;
  }, [counter]);

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
      <h3>Previous counter was {prevCounter.current}</h3>
    </div>
  );
};

export default PrevStateCounter;
