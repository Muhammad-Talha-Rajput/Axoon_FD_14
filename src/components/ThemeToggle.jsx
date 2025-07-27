import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      setDarkMode(true);
    }
  }, []);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="fixed top-2 right-4 z-50 p-3 rounded-full
        bg-white/80 dark:bg-gray-800/90 
        text-gray-900 dark:text-gray-100 
        shadow-lg backdrop-blur-md 
        transition-all duration-500 ease-in-out"
      title="Toggle Dark Mode"
    >
      <span
        className={`inline-block text-xl transition-transform duration-500 ease-in-out ${
          darkMode ? "rotate-[360deg] scale-125" : "rotate-0 scale-100"
        }`}
      >
        {darkMode ? "☀️" : "🌙"}
      </span>
    </button>
  );
};

export default ThemeToggle;
