import { Theme } from "../../types.js";

export const mars: Theme = {
  name: "Mars",
  author: "Ikram Mbechezi",
  authorUrl: "https://github.com/ikrammbz",
  light: {
    colors: {
      "primary-accent": "#D92A27",
      "secondary-accent": "#FF6F4C",
      background: "#FFF5F0",
      "nega-background": "#2B0F08",
      "bold-color": "#4A1F00",
      "nega-bold-color": "#FFFFFF",
      "primary-color": "#7A3320",
      "nega-primary-color": "#E6CFC5",
      "secondary-color": "#A14C36",
      "nega-secondary-color": "#D9BEB2",
    },
  },
  dark: {
    colors: {
      "primary-accent": "#FF6F4C",
      "secondary-accent": "#D43B3E",
      background: "#2B0F08",
      "nega-background": "#FFF5F0",
      "bold-color": "#FFFFFF",
      "nega-bold-color": "#4A1F00",
      "primary-color": "#E6CFC5",
      "nega-primary-color": "#7A3320",
      "secondary-color": "#D9BEB2",
      "nega-secondary-color": "#A14C36",
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
