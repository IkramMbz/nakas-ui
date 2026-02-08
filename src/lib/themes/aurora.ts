import { Theme } from "../../types.js";

export const aurora: Theme = {
  name: "Aurora",
  author: "Ikram Mbechezi",
  authorUrl: "https://github.com/ikrammbz",
  light: {
    colors: {
      "primary-accent": "#9b6cff",
      "secondary-accent": "#d8b3ff",
      background: "#f7f2fc",
      "nega-background": "#1a0f1f",
      "bold-color": "#000000",
      "nega-bold-color": "#ffffff",
      "primary-color": "#32263a",
      "nega-primary-color": "#e3dbe3",
      "secondary-color": "#59455c",
      "nega-secondary-color": "#cbbfcc",
    },
  },
  dark: {
    colors: {
      "primary-accent": "#d8b3ff",
      "secondary-accent": "#9b6cff",
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
    body: "Lato",
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
