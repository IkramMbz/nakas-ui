import type { Preset } from "unocss";

// PresetGlitchKidsMasterGrid v1.0.0-beta.1

export function presetGlitchKidsMasterGrid({ padding = 1.5, maxContainerWidth = 80 }) {
  return {
    name: "unocss-preset-glitchkids-master-grid",
    preflights: [
      {
        getCSS: () => {
          return `
            :root {
              --grid-margin: ${padding}rem;
              --grid-max-container-width: ${maxContainerWidth}rem;
            }
          `;
        },
      },
    ],
    rules: [
      [
        /master-grid-(\d+)/,
        ([_, colNumber]) => {
          return {
            display: "grid",
            "grid-template-columns": `
              minmax(var(--grid-margin, 1.5rem), 1fr)
              repeat(${colNumber}, minmax(0, calc( var(--grid-max-container-width) / ${colNumber}))) 
              minmax(var(--grid-margin, 1.5rem), 1fr)
              `,
          };
        },
      ],
      [
        "master-grid-container",
        {
          display: "grid",
          "grid-template-columns": "subgrid",
          "grid-column": "1 / -1",
        },
      ],
      [
        "master-grid-subgrid-container",
        {
          display: "grid",
          "grid-template-columns": "subgrid",
          "grid-column": "1 / -1",
        },
      ],
      [
        "master-grid-subgrid",
        {
          display: "grid",
          "grid-template-columns": "subgrid",
          "grid-column": "2 / -2",
          "column-gap": "24px",
        },
      ],
      [
        /master-grid-col-center-(\d+)/,
        ([_, colNumber]) => {
          return {
            "grid-column": `${colNumber} / -${colNumber}`,
          };
        },
      ],
      [
        "master-grid-container-full",
        {
          "grid-column": "2 / -2",
        },
      ],
    ],
  } satisfies Preset;
}
