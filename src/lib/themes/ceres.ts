import { Theme } from "../../types.js";

export const ceres: Theme = {
  name: "Cérès",
  author: "Ikram Mbechezi",
  authorUrl: "https://github.com/ikrammbz",
  light: {
    colors: {
      "primary-accent": "#000000",
      "secondary-accent": "#212121",
      background: "#FFFFFF",
      "nega-background": "#000000",
      "bold-color": "#000000",
      "nega-bold-color": "#FFFFFF",
      "primary-color": "#333333",
      "nega-primary-color": "#F5F5F5",
      "secondary-color": "#666666",
      "nega-secondary-color": "#E0E0E0",
    },
  },
  dark: {
    colors: {
      "primary-accent": "#FFFFFF",
      "secondary-accent": "#E0E0E0",
      background: "#000000",
      "nega-background": "#FFFFFF",
      "bold-color": "#FFFFFF",
      "nega-bold-color": "#000000",
      "primary-color": "#CCCCCC",
      "nega-primary-color": "#1A1A1A",
      "secondary-color": "#999999",
      "nega-secondary-color": "#2D2D2D",
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Arial",
  },
  fontProperties: {
    heading: {
      weight: "700",
      style: "normal",
      display: "swap",
    },
    body: {
      weight: "400",
      style: "normal",
      display: "swap",
    },
    sizeMultiplier: 1,
  },
  borderRadius: "16px",
  spacing: "4px",
  breakpoints: {
    sm: "40rem",
    md: "48rem",
    lg: "64rem",
    xl: "80rem",
    "2xl": "96rem",
  },
};
