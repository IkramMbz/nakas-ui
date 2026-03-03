import type { Meta, StoryObj } from "@storybook/html-vite";

import { DEFAULT_AURORA_OPTIONS } from "./aurora-background.types";
import type { AuroraStateOptions } from "./aurora-background.types";
import { getAuroraState } from "./aurora-background.logic";

type AuroraArgs = AuroraStateOptions & { children: string };

const renderAurora = (args: Partial<AuroraArgs>): string => {
  const { children = "", ...options } = args;
  const state = getAuroraState({ ...DEFAULT_AURORA_OPTIONS, ...options });

  return `
    <div class="h-[42vh] relative bg-black overflow-hidden">
      <div class="${state.className}">
        <div class="nakas-aurora-overlay" style="${state.overlayStyle}"></div>
        <div class="nakas-aurora" style="${state.auroraStyle}"></div>
        <div class="relative z-1 text-center text-white">
          ${children}
        </div>
      </div>
    </div>
  `;
};

const meta: Meta<AuroraArgs> = {
  title: "Commons/AuroraBackground",
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
  argTypes: {
    lowOpacity: { control: "boolean" },
    showRadialGradient: { control: "boolean" },
    children: { control: "text" },
    className: {
      control: false,
      description: "Custom class of the element",
    },
  },
  render: (args) => renderAurora(args),
};

export default meta;
type Story = StoryObj<AuroraArgs>;

export const Default: Story = {
  args: {
    lowOpacity: false,
    showRadialGradient: false,
    children: `<h1 class="nakas-heading-lg">Aurora Background</h1><p class="mt-2 opacity-70">Beautiful gradient effect</p>`,
  },
};

export const LowOpacity: Story = {
  args: {
    lowOpacity: true,
    showRadialGradient: false,
    children: `<h1 class="nakas-heading-lg">Low Opacity</h1>`,
  },
};

export const WithRadialGradient: Story = {
  args: {
    lowOpacity: false,
    showRadialGradient: true,
    children: `<h1 class="nakas-heading-lg">Radial Gradient</h1>`,
  },
};

export const NoChildren: Story = {
  args: { lowOpacity: false, showRadialGradient: false, children: "" },
};
