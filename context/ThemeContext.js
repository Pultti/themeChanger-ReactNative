import { createContext } from 'react';

export const ThemeContext = createContext({
    isDarkMode: false, // default value
    toggleTheme: () => {}, // placeholder for the toggle function
  });