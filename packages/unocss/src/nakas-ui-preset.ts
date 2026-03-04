import type { Preset } from "unocss";
import { NakasUITypographyPreset } from "./nakas-ui-typography-preset";
import { presetGlitchKidsMasterFluid } from "./master-fluid-preset";

export const NakasUIPreset = (): Preset => {
  return {
    name: "nakas-ui-preset",
    presets: [
      NakasUITypographyPreset(),
      presetGlitchKidsMasterFluid({}),
      presetGlitchKidsMasterFluid({}),
    ],
  };
};
