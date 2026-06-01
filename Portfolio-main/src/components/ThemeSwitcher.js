import React, { useEffect, useState } from "react";
import { themes, applyTheme, getDefaultTheme, saveThemePreference } from "../themes";
import "./ThemeSwitcher.css";

function ThemeSwitcher() {
  const [currentTheme, setCurrentTheme] = useState(getDefaultTheme());

  useEffect(() => {
    applyTheme(themes[currentTheme]);
  }, [currentTheme]);

  const handleThemeChange = (themeName) => {
    setCurrentTheme(themeName);
    saveThemePreference(themeName);
  };

  return (
    <div className="theme-switcher">
      <div className="theme-switcher-label">Theme</div>
      <div className="theme-switcher-buttons">
        {Object.entries(themes).map(([key, theme]) => (
          <button
            key={key}
            className={`theme-btn ${currentTheme === key ? "active" : ""}`}
            onClick={() => handleThemeChange(key)}
            title={theme.name}
            aria-label={`Switch to ${theme.name} theme`}
          >
            <span className="theme-btn-dot" style={{
              background: theme.colors.primary
            }}></span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default ThemeSwitcher;
