import { useEffect, useState } from "react";
import "./ThemeToggle.css";

const ThemeToggle = () => {
  const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    document.body.className = dark ? "dark-theme" : "light-theme";
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <div className="theme-toggle" onClick={() => setDark(!dark)}>
      <div className={`toggle-circle ${dark ? "move" : ""}`}>
        {dark ? "🌙" : "☀️"}
      </div>
    </div>
  );
};

export default ThemeToggle;
