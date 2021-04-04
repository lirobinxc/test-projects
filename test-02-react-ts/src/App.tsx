import React, { useState } from 'react';
import UserSearchRefs from './refs-examples/UserSearchRefs';

export const ThemeContext = React.createContext<
  React.CSSProperties | undefined
>(undefined);

const App = () => {
  const [isDark, setIsDark] = useState(false);

  const theme: React.CSSProperties = {
    backgroundColor: isDark ? 'black' : 'beige',
    color: isDark ? 'red' : 'brown',
  };

  console.log('rerender');

  return (
    <div style={theme}>
      <h1>React with Typescript</h1>
      <h2>{isDark ? 'Dark Mode' : 'Light Mode'}</h2>
      <button onClick={() => setIsDark(!isDark)}>
        {isDark ? 'Change to Light Mode' : 'Change to Dark Mode'}
      </button>
      <ThemeContext.Provider value={theme}>
        <UserSearchRefs />
      </ThemeContext.Provider>
    </div>
  );
};

export default App;
