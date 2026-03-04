import { defineConfig, presetWind4, transformerDirectives, presetIcons } from "unocss";
import { NakasUIPreset } from "@nakas-ui/unocss";

export default defineConfig({
  presets: [
    NakasUIPreset(),
    presetWind4(),
    presetIcons({
      autoInstall: true,
    }),
  ],
  safelist: [
    "_nakas-p-xs",
    "_nakas-p-sm",
    "_nakas-p-md",
    "_nakas-p-lg",
    "_nakas-p-xl",
    "space-y-4",
  ],
  transformers: [transformerDirectives()],
});
