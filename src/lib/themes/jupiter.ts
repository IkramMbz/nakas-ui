import { Theme } from "../../types.js";

export const jupiter: Theme = {
  name: "Jupiter",
  author: "Ikram Mbechezi",
  authorUrl: "https://github.com/ikrammbz",
  light: {
    colors: {
      "primary-accent": "#789cff",
      "secondary-accent": "#fff770",
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
      "primary-accent": "#fffa94",
      "secondary-accent": "#789cff",
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
