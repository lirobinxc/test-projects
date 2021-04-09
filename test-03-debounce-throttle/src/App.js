import React from 'react';
import DebouncedCounter from './components/DebouncedCounter';
import PrevStateCounter from './components/PrevStateCounter';

const App = () => {
  return (
    <div>
      <DebouncedCounter />
      {/* <PrevStateCounter /> */}
    </div>
  );
};

export default App;
