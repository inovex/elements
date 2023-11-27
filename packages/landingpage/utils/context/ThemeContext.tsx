import { ReactNode, createContext, useContext, useState } from 'react';
import { inDevEnvironment } from 'utils/in-dev-mode';

const ThemeContext = createContext({
  theme: 'inovex-elements-theme',
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState('inovex-elements-theme');

  const toggleTheme = () => {
    if (!inDevEnvironment) return;

    setTheme((current) =>
      current === 'inovex-elements-theme'
        ? 'inovex-elements-theme-dark'
        : 'inovex-elements-theme',
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
