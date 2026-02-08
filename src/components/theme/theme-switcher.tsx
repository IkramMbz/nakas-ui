"use client";

import clsx from "clsx";
import { Check, Palette } from "lucide-react";
import { useContext } from "react";

import { ThemeContext } from "./theme-provider.js";
import Button from "../ui/button.js";

const ThemeSwitcher = (): React.ReactElement | null => {
  const context = useContext(ThemeContext);
  if (!context) return null;

  const { currentTheme, effectiveMode, switchTheme, getAllThemes } = context;

  const allThemes = getAllThemes();

  return (
    <div className="theme-switcher">
      {Object.entries(allThemes).map(([key, theme]) => (
        <Button
          key={key}
          onClick={() => switchTheme(key)}
          className={clsx(
            "theme-switcher-button",
            currentTheme.name === theme.name && "theme-switcher-button-active"
          )}
          variant="primary"
          backgroundColor={theme[effectiveMode].colors["primary-accent"]}
          color={theme[effectiveMode].colors["nega-bold-color"]}
        >
          <div className="theme-switcher-button-content">
            <Palette size={20} />
            <span className="theme-switcher-button-name">{theme.name}</span>
          </div>

          {currentTheme.name === theme.name && <Check size={20} />}
        </Button>
      ))}
    </div>
  );
};

export default ThemeSwitcher;
