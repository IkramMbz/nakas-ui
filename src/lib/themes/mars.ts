import { Theme } from "../../types.js";

export const mars: Theme = {
  name: "Mars",
  author: "Ikram Mbechezi",
  authorUrl: "https://github.com/ikrammbz",
  light: {
    colors: {
      "primary-accent": "#d14e32",
      "secondary-accent": "#ffb098",
      background: "#f9ebe8",
      "nega-background": "#18110f",
      "bold-color": "#000000",
      "nega-bold-color": "#ffffff",
      "primary-color": "#3a2e2b",
      "nega-primary-color": "#e3dcdc",
      "secondary-color": "#5b4b47",
      "nega-secondary-color": "#c6c1c1",
    },
  },
  dark: {
    colors: {
      "primary-accent": "#ffb098",
      "secondary-accent": "#d14e32",
      background: "#181818",
      "nega-background": "#f8f8f8",
      "bold-color": "#ffffff",
      "nega-bold-color": "#000000",
      "primary-color": "#e6e6e6",
      "nega-primary-color": "#212121",
      "secondary-color": "#c4c4c4",
      "nega-secondary-color": "#363636",
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
  borderRadius: "32px",
  spacing: "4px",
  breakpoints: {
    sm: "40rem",
    md: "48rem",
    lg: "64rem",
    xl: "80rem",
    "2xl": "96rem",
  },
};
