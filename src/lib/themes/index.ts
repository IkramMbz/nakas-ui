// import aurora from "./aurora.json";
// import defaultTheme from "./default.json";
// import c137 from "./c-137.json";
// import jupiter from "./jupiter.json";
// import lune from "./lune.json";
// import mars from "./mars.json";
// import mercure from "./mercure.json";
// import nebula from "./nebula.json";
// import neptune from "./neptune.json";
// import ocean from "./ocean.json";
// import saturne from "./saturne.json";
// import sunset from "./sunset.json";
// import terre from "./terre.json";
// import venus from "./venus.json";

// export const themes: Record<string, Theme> = {
//     aurora: aurora as Theme,
//     default: defaultTheme as Theme,
//     "c-137": c137 as Theme,
//     jupiter: jupiter as Theme,
//     lune: lune as Theme,
//     mars: mars as Theme,
//     mercure: mercure as Theme,
//     nebula: nebula as Theme,
//     neptune: neptune as Theme,
//     ocean: ocean as Theme,
//     saturne: saturne as Theme,
//     sunset: sunset as Theme,
//     terre: terre as Theme,
//     venus: venus as Theme,
// };

import { Theme } from "../../types.js";
import { aurora } from "./aurora.js";
import { ceres } from "./ceres.js";
import { lune } from "./lune.js";
import { neptune } from "./neptune.js";
import { mars } from "./mars.js";
import { saturne } from "./saturne.js";
import { venus } from "./venus.js";

const defaultTheme = ceres;

export const themes: Record<string, Theme> = {
  aurora,
  default: defaultTheme,
  lune,
  mars,
  neptune,
  saturne,
  venus,
};
