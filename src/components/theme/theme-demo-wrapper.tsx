"use client";

import { Moon, Sun } from "lucide-react";
import React, { useContext } from "react";

import BodyText from "../typography/body-text.js";
import { ThemeContext } from "./theme-provider.js";
import Toggler from "../ui/toggler.js";

type ThemeDemoWrapperProps = {
  label: string;
  children?: React.ReactNode;
};

function ThemeDemoWrapper({
  label,
  children,
}: ThemeDemoWrapperProps): React.ReactElement | null {
  const context = useContext(ThemeContext);
  if (!context) return null;

  const { currentMode, toggleMode, isHydrated } = context;

  if (!isHydrated) return null;

  const { effectiveMode } = context;
  const colors = context.currentTheme[effectiveMode].colors;

  return (
    <div
      className="nakas-tdw"
      style={{
        backgroundColor: colors.background,
        color: colors["primary-color"],
      }}
    >
      <div className="nakas-tdw-header">
        <BodyText
          size="xl"
          className="nakas-tdw-title"
          style={{
            color: colors["primary-color"],
          }}
        >
          {label}
        </BodyText>

        <Toggler
          value={currentMode === "light"}
          onChange={toggleMode}
          leftIcon={<Sun size={20} className="text-bold-color" />}
          rightIcon={<Moon size={20} className="text-bold-color" />}
          backgroundColor={colors["nega-background"]}
          color={colors["nega-bold-color"]}
          trackClassName="bg-accent"
          thumbClassName="bg-nega-bold-color"
        />
      </div>

      {children && children}
    </div>
  );
}

export default ThemeDemoWrapper;
