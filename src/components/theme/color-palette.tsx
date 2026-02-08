"use client";

import { Copy } from "lucide-react";
import { useContext } from "react";

import { ThemeContext } from "./theme-provider.js";
import BodyText from "../typography/body-text.js";

export const getContrastColor = (hexColor: string): string => {
  if (!hexColor) return "#000000";

  const color = hexColor.replace("#", "");

  const r = parseInt(color.substring(0, 2), 16);
  const g = parseInt(color.substring(2, 4), 16);
  const b = parseInt(color.substring(4, 6), 16);

  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  return brightness > 125 ? "#000000" : "#ffffff";
};

const ColorPalette = (): React.ReactElement | null => {
  const context = useContext(ThemeContext);
  if (!context) return null;

  const { effectiveMode } = context;

  const colors = context.currentTheme[effectiveMode].colors;

  return (
    <div className="color-palette">
      {Object.entries(colors).map(([key, value]) => (
        <div key={key} className="color-item">
          <div
            className="color-swatch"
            style={{
              backgroundColor: value,
              color: getContrastColor(value),
            }}
            onClick={() => navigator.clipboard.writeText(value)}
            title="Click to copy"
          >
            <Copy size={20} />
            <span>Copy</span>
          </div>

          <div className="color-info">
            <BodyText size="sm" style={{ color: colors["primary-color"] }}>
              {key}
            </BodyText>

            <BodyText size="sm" style={{ color: colors["primary-color"] }}>
              {value}
            </BodyText>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ColorPalette;
