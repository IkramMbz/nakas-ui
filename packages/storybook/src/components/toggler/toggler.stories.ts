import type { Meta, StoryObj } from "@storybook/html-vite";

import { DEFAULT_TOGGLER_OPTIONS } from "./toggler.types";
import type { TogglerStateOptions } from "./toggler.types";
import { getTogglerState } from "./toggler.logic";

type TogglerArgs = TogglerStateOptions;

const renderToggler = (args: Partial<TogglerArgs>): string => {
  const state = getTogglerState({ ...DEFAULT_TOGGLER_OPTIONS, ...args });

  return `
    <button
      class="${state.className}"
      type="button"
      onclick="
        const thumb = this.querySelector('.nakas-toggler-thumb');
        this.classList.toggle('nakas-toggler-active');
        thumb.classList.toggle('nakas-toggler-thumb-active');
      "
    >
      <span class="${state.thumbClassName}">
        ${state.iconContent}
      </span>
    </button>
  `;
};

const meta: Meta<TogglerArgs> = {
  title: "UI/Toggler",
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: "boolean",
      description: "Current toggle state",
      table: { defaultValue: { summary: "false" } },
    },
    disabled: {
      control: "boolean",
      description: "Disables the toggler",
      table: { defaultValue: { summary: "false" } },
    },
    leftIcon: {
      control: false,
      description: "Icon shown when off (HTML string)",
    },
    rightIcon: {
      control: false,
      description: "Icon shown when on (HTML string)",
    },
    className: { control: false, description: "Custom class of the element" },
  },
  render: (args) => renderToggler(args),
};

export default meta;
type Story = StoryObj<TogglerArgs>;

export const Default: Story = {
  args: { value: false, disabled: false },
};

export const Active: Story = {
  args: { value: true },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const DisabledActive: Story = {
  args: { value: true, disabled: true },
};

export const WithIcons: Story = {
  args: {
    value: false,
    leftIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0d0d1a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V7h-5a8 8 0 0 0-5 2 8 8 0 0 0-5-2H2Z"/><path d="M6 11c1.5 0 3 .5 3 2-2 0-3 0-3-2Z"/><path d="M18 11c-1.5 0-3 .5-3 2 2 0 3 0 3-2Z"/></svg>`,
    rightIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0d0d1a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>`,
  },
};
