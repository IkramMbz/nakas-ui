import { Theme } from "../../types.js";

export const neptune: Theme = {
  name: "Neptune",
  author: "Ikram Mbechezi",
  authorUrl: "https://github.com/ikrammbz",
  light: {
    colors: {
      "primary-accent": "#0450A7",
      "secondary-accent": "#6591FF",
      background: "#FBFCFF",
      "nega-background": "#141A28",
      "bold-color": "#0F1724",
      "nega-bold-color": "#F9FAFB",
      "primary-color": "#1B2335",
      "nega-primary-color": "#DCE3EB",
      "secondary-color": "#3D495E",
      "nega-secondary-color": "#C7D0DA",
    },
  },
  dark: {
    colors: {
      "primary-accent": "#82AAFE",
      "secondary-accent": "#268BEF",
      background: "#0F1724",
      "nega-background": "#F5F6FA",
      "bold-color": "#F2F6FF",
      "nega-bold-color": "#0E0F12",
      "primary-color": "#DCE3F1",
      "nega-primary-color": "#1A2233",
      "secondary-color": "#AEB8CC",
      "nega-secondary-color": "#2A3448",
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
  borderRadius: "56px",
  spacing: "4px",
  breakpoints: {
    sm: "40rem",
    md: "48rem",
    lg: "64rem",
    xl: "80rem",
    "2xl": "96rem",
  },
};
