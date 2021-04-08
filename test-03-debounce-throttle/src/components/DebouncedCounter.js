import React, { useState, useRef, useCallback } from 'react';
import _ from 'lodash';

let timer;

const DebouncedCounter = () => {
  const [counter, setCounter] = useState(0);
  const debounceLeading = useRef((func, wait = 5000) => {
    // `let timer` must be placed outside the function in the global scope so React doesn't reinitiate it
    return (...args) => {
      if (!timer) func(...args);
      clearTimeout(timer);
      timer = setTimeout(() => {
        timer = undefined;
      }, wait);
    };
  }, []);

  const debounce = (func, wait = 5000) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      setTimeout(() => {
        console.log(`📣 args ~`, args);
        func(...args);
      }, wait);
    };
  };

  const handleClick = debounce((...args) => {
    const sum = args.reduce((prev, cur) => prev + cur);
    setCounter(counter + sum);
  });
  const handleClickLeading = debounceLeading.current(
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
