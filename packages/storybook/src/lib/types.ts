export const ELEMENT_SIZES = ["xs", "sm", "md", "lg", "xl"] as const;

export type ElementSize = (typeof ELEMENT_SIZES)[number];

type FontDisplay = "auto" | "block" | "swap" | "fallback" | "optional";

interface FontProperties {
  weight: string;
  style: string;
  display: FontDisplay;
}

export interface ThemeColors {
  "primary-accent": string;
  "secondary-accent": string;
  background: string;
  "nega-background": string;
  "bold-color": string;
  "nega-bold-color": string;
  "primary-color": string;
  "nega-primary-color": string;
  "secondary-color": string;
  "nega-secondary-color": string;
}

export interface Theme {
  name: string;
  author?: string;
  authorUrl?: string;
  light: { colors: ThemeColors };
  dark: { colors: ThemeColors };
  fonts: { heading: string; body: string };
  fontProperties: {
    heading: FontProperties;
    body: FontProperties;
    sizeMultiplier?: number;
  };
  borderRadius: string;
  spacing: string;
}

export type ThemeMode = "light" | "dark";

export const COLOR_KEYS: (keyof ThemeColors)[] = [
  "primary-accent",
  "secondary-accent",
  "background",
  "nega-background",
  "bold-color",
  "nega-bold-color",
  "primary-color",
  "nega-primary-color",
  "secondary-color",
  "nega-secondary-color",
];
