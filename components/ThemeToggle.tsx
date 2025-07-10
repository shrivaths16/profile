import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
// import { FaSun, FaMoon } from 'react-icons/fa6';

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Ensures the component is mounted on the client before rendering the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {/* {theme === 'dark' ? <FaSun /> : <FaMoon />} */}
      {theme === 'dark' ? <i className="fa-solid fa-sun"></i> : <i className="fa-solid fa-moon"></i>}
    </button>
  );
};

export default ThemeToggle;