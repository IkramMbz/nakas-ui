import { Theme } from "../../types.js";

export const lune: Theme = {
  name: "Lune",
  author: "Ikram Mbechezi",
  authorUrl: "https://github.com/ikrammbz",
  light: {
    colors: {
      "primary-accent": "#505066",
      "secondary-accent": "#3E4A5A",
      background: "#F5F6F8",
      "nega-background": "#121417",
      "bold-color": "#0E0F12",
      "nega-bold-color": "#F9FAFB",
      "primary-color": "#1E2126",
      "nega-primary-color": "#E3E6EB",
      "secondary-color": "#3A3F45",
      "nega-secondary-color": "#C9CDD3",
    },
  },
  dark: {
    colors: {
      "primary-accent": "#9BBAD6",
      "secondary-accent": "#D6D9DE",
      background: "#16181C",
      "nega-background": "#F5F6F8",
      "bold-color": "#F9FAFB",
      "nega-bold-color": "#0E0F12",
      "primary-color": "#E4E7EC",
      "nega-primary-color": "#1E2126",
      "secondary-color": "#C2C7CE",
      "nega-secondary-color": "#3A3F45",
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
    sizeMultiplier: 0.85,
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
