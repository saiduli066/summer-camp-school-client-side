import { useState, useEffect } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    document.documentElement.classList.remove("theme-light", "theme-dark"); 
    document.documentElement.classList.add("theme-" + theme); 
  }, [theme]);

  return [theme, toggleTheme];
};
