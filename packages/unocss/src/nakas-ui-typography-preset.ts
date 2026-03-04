import type { Preset } from "unocss";

export const NakasUITypographyPreset = (): Preset => {
  return {
    name: "nakas-ui-text-preset",
    shortcuts: {
      //#region Paragraph
      "_nakas-p": "font-(--font-family-body)",
      "_nakas-p-xs": "_nakas-p text-3/4",
      "_nakas-p-sm": "_nakas-p f-text-3.5/4 f-leading-5/6",
      "_nakas-p-md": "_nakas-p f-text-4/4.5 leading-7",
      "_nakas-p-lg": "_nakas-p text-4.5/5  f-leading-7/8 font-medium",
      "_nakas-p-xl": "_nakas-p text-6/9 ",
      //#endregion
      //#region Heading
      "_nakas-heading": "font-(--font-family-heading)",
      "_nakas-h6": "f-text-3/4 f-leading-4/5",
      "_nakas-h5": "f-text-5/6 f-leading-6/7",
      "_nakas-h4": "f-text-6/8 f-leading-8/10",
      "_nakas-h3": "f-text-7.5/10 f-leading-9/12",
      "_nakas-h2": "f-text-9/15 f-leading-10/20",
      "_nakas-h1": "f-text-12/18 f-leading-14/20",
      //#endregion
      //#region Anchor
      "_nakas-anchor":
        "text-(--color-primary) underline underline-offset-4 decoration-(--color-primary)/40 transition-all ease duration-300 hover:decoration-(--color-primary) hover:underline-offset-2 focus-visible:outline-none focus-visible:box-shadow-(0 0 0 2px --color-primary/40) focus-visible:rounded-0.5",
      //#endregion
    },
    preflights: [
      {
        getCSS: () => `
          p { @apply _nakas-p-md max-w-60ch; }
          p[size="xs"] { @apply _nakas-p-xs; }
          p[size="sm"] { @apply _nakas-p-sm; }
          p[size="lg"] { @apply _nakas-p-lg; }
          p[size="xl"] { @apply _nakas-p-xl; }
        `,
      },
      {
        getCSS: () => `
          h1, h2, h3, h4, h5, h6 { @apply _nakas-heading; }
          h1 { @apply _nakas-h1; }
          h2 { @apply _nakas-h2; }
          h3 { @apply _nakas-h3; }
          h4 { @apply _nakas-h4; }
          h5 { @apply _nakas-h5; }
          h6 { @apply _nakas-h6; }
        `,
      },
      {
        getCSS: () => `
        a { @apply _nakas-anchor; }
        a[target="_blank"]::after,
        ._nakas-anchor-external::after { 
          content: url(data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>); 
        }
      `,
      },
    ],
  };
};
