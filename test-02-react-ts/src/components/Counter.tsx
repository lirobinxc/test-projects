import React, { useState, useRef } from 'react';

const Counter: React.FC = () => {
  const countRef = useRef(0);

  const handle = () => {
    countRef.current++;
    console.log(`Clicked ${countRef.current} times`);
  };

  console.log('I rendered!');

  return <button onClick={handle}>Click me</button>;
};

export default Counter;
