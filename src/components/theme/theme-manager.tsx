"use client";

import { useContext } from "react";

import ColorPalette from "./color-palette.js";
import ThemeActions from "./theme-actions.js";
import ThemeInfo from "./theme-info.js";
import ThemeModeToggler from "./theme-mode-toggler.js";
import { ThemeContext } from "./theme-provider.js";
import ThemeSwitcher from "./theme-switcher.js";
import ThemeTypography from "./theme-typography.js";
import { Heading } from "../typography/index.js";
import { Card } from "../ui/index.js";

const ThemeManager = (): React.ReactElement | null => {
  const context = useContext(ThemeContext);

  if (!context) return null;

  const { getAllThemes } = context;
  const allThemesLength = Object.keys(getAllThemes()).length;

  return (
    <>
      <div className="gap-8 grid lg:grid-cols-2">
        <ThemeActions />

        <Card backgroundColor="var(--color-bold-color)">
          <Heading type="h2" className="text-nega-primary-color">
            Sélection du thème ({allThemesLength})
          </Heading>

          <ThemeSwitcher />
        </Card>
      </div>

      <ThemeInfo />

      <div className="gap-8 grid lg:grid-cols-2">
        <Card>
          <div className="flex gap-8 items-center justify-between">
            <Heading type="h3">Couleurs</Heading>

            <ThemeModeToggler />
          </div>

          <ColorPalette />
        </Card>

        <Card>
          <Heading type="h3">Police d&apos;écriture</Heading>

          <ThemeTypography />
        </Card>
      </div>
    </>
  );
};

export default ThemeManager;
