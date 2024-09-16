import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState('mode1');

  const toggleMode = () => {
    setMode((prevMode) => {
      switch (prevMode) {
        case 'mode1':
          return 'mode2';
        case 'mode2':
          return 'mode3';
        case 'mode3':
          return 'mode1';
        default:
          return 'mode1';
      }
    });
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
