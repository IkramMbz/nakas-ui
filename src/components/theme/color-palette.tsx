"use client";

import { Copy } from "lucide-react";
import { useContext, useCallback, useMemo } from "react";

import { ThemeContext } from "./theme-provider.js";
import { toast } from "../toast/toast.js";
import { ToastProvider } from "../toast/toast-provider.js";
import BodyText from "../typography/body-text.js";
import ContrastIndicator from "./contrast-indicator.js";
import {
  checkContrastText,
  getContrastColor,
  hexToRgb,
} from "../../lib/colors-functions.js";

const EXCLUDE_KEYS = [
  "background",
  "nega-bold-color",
  "nega-primary-color",
  "nega-secondary-color",
];

const ColorPalette = (): React.ReactElement | null => {
  const context = useContext(ThemeContext);

  const handleCopy = useCallback(async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      toast.success({
        title: "Copié",
        description: "Code couleur copié dans le presse-papiers",
      });
    } catch {
      toast.error({
        title: "Erreur",
        description: "Impossible de copier la couleur",
      });
    }
  }, []);

  const colorEntries = useMemo(() => {
    if (!context) return [];

    const { effectiveMode, currentTheme } = context;
    const colors = currentTheme[effectiveMode].colors;
    const bgRgb = hexToRgb(colors["background"]);

    return Object.entries(colors).map(([key, value]) => {
      const colorRgb = hexToRgb(value);
      const textColor = getContrastColor(value);
      const textColorRgb = hexToRgb(textColor);

      return {
        key,
        value,
        bgContrast: checkContrastText(colorRgb, bgRgb), // Couleur vs Background
        textContrast: checkContrastText(textColorRgb, colorRgb), // Texte vs Couleur
        textColor,
        isExcluded: EXCLUDE_KEYS.includes(key),
      };
    });
  }, [context]);

  if (!context) return null;

  const primaryColor =
    context.currentTheme[context.effectiveMode].colors["primary-color"];

  return (
    <ToastProvider>
      <div className="color-palette">
        {colorEntries.map(
          ({ key, value, bgContrast, textContrast, textColor, isExcluded }) => (
            <div key={key} className="color-item">
              <BodyText size="sm" color={primaryColor} className="key">
                {key}
              </BodyText>

              <div
                className="color-swatch"
                style={{ backgroundColor: value, color: textColor }}
                onClick={() => handleCopy(value)}
                title="Cliquer pour copier"
              >
                <Copy size={20} />
                <span>{value}</span>
              </div>

              <div className="color-info">
                {isExcluded ? (
                  <BodyText size="sm" color={primaryColor}>
                    Contrast audit not required
                  </BodyText>
                ) : (
                  <>
                    <ContrastIndicator
                      title="Color on Background Contrast Audit:"
                      contrast={bgContrast}
                    />
                    <ContrastIndicator
                      title="Text on this Color Contrast Audit:"
                      contrast={textContrast}
                    />
                  </>
                )}
              </div>
            </div>
          )
        )}
      </div>
    </ToastProvider>
  );
};

export default ColorPalette;
