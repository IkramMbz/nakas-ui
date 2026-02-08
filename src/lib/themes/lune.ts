import { Theme } from "../../types.js";

export const lune: Theme = {
  name: "Lune",
  author: "Ikram Mbechezi",
  authorUrl: "https://github.com/ikrammbz",
  light: {
    colors: {
      "primary-accent": "#5a5a5a",
      "secondary-accent": "#889baf",
      background: "#f8f8f8",
      "nega-background": "#181818",
      "bold-color": "#000000",
      "nega-bold-color": "#ffffff",
      "primary-color": "#212121",
      "nega-primary-color": "#e6e6e6",
      "secondary-color": "#363636",
      "nega-secondary-color": "#c4c4c4",
    },
  },
  dark: {
    colors: {
      "primary-accent": "#7c96af",
      "secondary-accent": "#757575",
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
    sizeMultiplier: 0.85,
  },
  borderRadius: "8px",
  spacing: "4px",
  breakpoints: {
    sm: "40rem",
    md: "48rem",
    lg: "64rem",
    xl: "80rem",
    "2xl": "96rem",
  },
};
