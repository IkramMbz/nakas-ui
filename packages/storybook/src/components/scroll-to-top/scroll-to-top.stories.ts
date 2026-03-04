import type { Meta, StoryObj } from "@storybook/html-vite";

import { ELEMENT_SIZES } from "../../lib/types";
import { DEFAULT_SCROLL_TO_TOP_OPTIONS } from "./scroll-to-top.types";
import type { ScrollToTopStateOptions } from "./scroll-to-top.types";
import { getScrollToTopState } from "./scroll-to-top.logic";

type ScrollToTopArgs = ScrollToTopStateOptions & { children: string };

const ARROW_SVG = (size: number): string =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>`;

const renderScrollToTop = (args: Partial<ScrollToTopArgs>): string => {
  const { children, ...options } = args;
  const state = getScrollToTopState({
    ...DEFAULT_SCROLL_TO_TOP_OPTIONS,
    ...options,
  });

  return `
    <button
      class="${state.className}"
      type="button"
      onclick="window.scrollTo({ top: 0, behavior: 'smooth' })"
    >
      ${children || ARROW_SVG(state.iconSize)}
    </button>
  `;
};

const LongPageWrapper = (args: Partial<ScrollToTopArgs>): string => `
  <div class="p-8">
    <p>
      ${"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ".repeat(6)}
    </p>
    ${renderScrollToTop(args)}
  </div>
`;

const meta: Meta<ScrollToTopArgs> = {
  title: "UI/ScrollToTop",
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ELEMENT_SIZES,
      description: "Size of the button",
      table: { defaultValue: { summary: "md" } },
    },
    children: {
      control: "text",
      description:
        "Custom inner content (HTML string). Defaults to an arrow icon.",
    },
    className: { control: false, description: "Custom class of the element" },
  },
  render: (args) => LongPageWrapper(args),
};

export default meta;
type Story = StoryObj<ScrollToTopArgs>;

export const Default: Story = {
  args: { size: "md" },
};

export const CustomChildren: Story = {
  args: {
    size: "lg",
    children: `
      <div class="flex flex-col items-center gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
        <span class="text-xs">GO</span>
      </div>
    `,
  },
};
