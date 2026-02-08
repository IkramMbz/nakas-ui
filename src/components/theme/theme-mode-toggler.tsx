"use client";

import { Sun, Moon } from "lucide-react";
import { useContext } from "react";

import { ThemeContext } from "./theme-provider.js";
import Toggler from "../ui/toggler.js";

const ThemeModeToggler = (): React.ReactElement | null => {
  const context = useContext(ThemeContext);
  if (!context) return null;

  const { currentMode, toggleMode, isHydrated } = context;

  if (!isHydrated) return null;

  return (
    <Toggler
      value={currentMode === "light"}
      onChange={toggleMode}
      leftIcon={<Sun size={20} className="text-bold-color" />}
      rightIcon={<Moon size={20} className="text-bold-color" />}
      trackClassName="bg-accent"
      thumbClassName="bg-nega-bold-color"
    />
  );
};

export default ThemeModeToggler;
