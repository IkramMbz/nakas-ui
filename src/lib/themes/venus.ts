import { Theme } from "../../types.js";

export const venus: Theme = {
  name: "Venus",
  author: "Ikram Mbechezi",
  authorUrl: "https://github.com/ikrammbz",
  light: {
    colors: {
      "primary-accent": "#F55F15",
      "secondary-accent": "#FFB86C",
      background: "#FFF8F0",
      "nega-background": "#2B1F12",
      "bold-color": "#3A1F00",
      "nega-bold-color": "#FFFFFF",
      "primary-color": "#5A3C1F",
      "nega-primary-color": "#E6D6C2",
      "secondary-color": "#8C5E36",
      "nega-secondary-color": "#D9C4A6",
    },
  },
  dark: {
    colors: {
      "primary-accent": "#FFB86C",
      "secondary-accent": "#FF9F4C",
      background: "#2B1F12",
      "nega-background": "#FFF8F0",
      "bold-color": "#FFFFFF",
      "nega-bold-color": "#3A1F00",
      "primary-color": "#E6D6C2",
      "nega-primary-color": "#5A3C1F",
      "secondary-color": "#D9C4A6",
      "nega-secondary-color": "#8C5E36",
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
  borderRadius: "72px",
  spacing: "4px",
  breakpoints: {
    sm: "40rem",
    md: "48rem",
    lg: "64rem",
    xl: "80rem",
    "2xl": "96rem",
  },
};
