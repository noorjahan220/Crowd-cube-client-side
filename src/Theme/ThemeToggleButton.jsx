import { useContext } from 'react';
import { ThemeContext } from '../routes/ThemeProvider';

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className={`relative inline-flex items-center h-6 w-12 rounded-full transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-600' : 'bg-gray-300'}`}
    >
      <span className="sr-only">Toggle Dark Mode</span>
      <span
        className={`inline-block h-5 w-5 transform bg-white rounded-full transition-transform duration-300 ${theme === 'dark' ? 'translate-x-6' : 'translate-x-1'}`}
      />
    </button>
  );
};

export default ThemeToggleButton;
