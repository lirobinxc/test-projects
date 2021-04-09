import React, { useState, useRef } from 'react';

let timer;
const DebouncedCounter = () => {
  const [counter, setCounter] = useState(0);

  const debounceLeading = (func, wait = 1000) => {
    return (...args) => {
      if (!timer) func(...args);
      clearTimeout(timer);
      timer = setTimeout(() => {
        timer = undefined;
      }, wait);
    };
  };

  const debounce = (func, wait = 1000) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func(...args);
      }, wait);
    };
  };

  const handleClick = debounce((...args) => {
    const sum = args.reduce((prev, cur) => prev + cur);
    setCounter(counter + sum);
  });
  const handleClickLeading = debounceLeading(
    (...args) => {
      const sum = args.reduce((prev, cur) => prev + cur);
      setCounter(counter + sum);
    },
    1000,
    { leading: true }
  );

  return (
    <div>
      <h2>Debounced Counter: {counter}</h2>
      <button onClick={() => handleClick(1)}>Debounced +</button>
      <button onClick={() => handleClickLeading(1)}>
        Debounced w/ Leading +
      </button>
    </div>
  );
};

export default DebouncedCounter;
