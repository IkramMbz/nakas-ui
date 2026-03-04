import type { Meta, StoryObj } from "@storybook/html-vite";

import { ELEMENT_SIZES } from "../../lib/types";
import type { ElementSize } from "../../lib/types";
import { getButtonState } from "./button.logic";
import { BUTTON_VARIANTS, DEFAULT_BUTTON_OPTIONS } from "./button.types";
import type { ButtonVariant } from "./button.types";

type ButtonArgs = {
  variant: NonNullable<ButtonVariant>;
  size: ElementSize;
  label: string;
  loading: boolean;
  disabled: boolean;
  fullWidth: boolean;
  className: string;
};

const renderButton = (args: Partial<ButtonArgs>): string => {
  const {
    variant,
    size,
    label = "Button",
    loading,
    disabled,
    fullWidth,
  } = {
    ...DEFAULT_BUTTON_OPTIONS,
    ...args,
  };

  const state = getButtonState({
    variant,
    size,
    loading,
    disabled,
    fullWidth,
  });

  return `
    <button
      class="${state.className}"
      ${state.isDisabled ? "disabled" : ""}
      type="button"
    >
      ${
        loading
          ? `<svg class="animate-spin inline-block mr-2" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
               <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
           </svg>`
          : ""
      }
      ${label}
    </button>
  `;
};

const renderPreview = (args: Partial<ButtonArgs>): string => {
  return `
    <div class="flex items-center justify-center" style="min-width: 540px;">
      ${renderButton(args)}
    </div>
  `;
};

const meta: Meta<ButtonArgs> = {
  title: "UI/Button",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: BUTTON_VARIANTS,
      description: "Visual style of the button",
      table: { defaultValue: { summary: "primary" } },
    },
    size: {
      control: { type: "select" },
      options: ELEMENT_SIZES,
      description: "Size of the button",
      table: { defaultValue: { summary: "md" } },
    },
    label: {
      control: "text",
      description: "Text displayed inside the button",
    },
    loading: {
      control: "boolean",
      description: "Shows a spinner and disables interaction",
      table: { defaultValue: { summary: "false" } },
    },
    disabled: {
      control: "boolean",
      description: "Disables the button",
      table: { defaultValue: { summary: "false" } },
    },
    fullWidth: {
      control: "boolean",
      description: "Stretches button to container width",
      table: { defaultValue: { summary: "false" } },
    },
    className: {
      control: false,
      description: "Custom class of the element",
    },
  },
  render: (args) => renderPreview(args),
};

export default meta;
type Story = StoryObj<ButtonArgs>;

export const Playground: Story = {
  args: {
    variant: "primary",
    size: "md",
    label: "Button",
    loading: false,
    disabled: false,
    fullWidth: false,
  },
};

export const AllVariants: Story = {
  name: "All Variants",
  parameters: { controls: { disable: true } },
  render: () => `
    <div class="flex flex-wrap gap-4 items-center">
      ${BUTTON_VARIANTS.map((v) =>
        renderButton({
          variant: v,
          label: v.charAt(0).toUpperCase() + v.slice(1),
        })
      ).join("")}
    </div>
  `,
};

export const Sizes: Story = {
  parameters: { controls: { disable: true } },
  render: () => `
    <div class="flex flex-col items-start gap-4">
      ${ELEMENT_SIZES.map((s) =>
        renderButton({ size: s, label: s.toUpperCase() })
      ).join("")}
    </div>
  `,
};

export const Loading: Story = {
  args: { ...Playground.args, loading: true, label: "Loading..." },
};

export const Disabled: Story = {
  args: { ...Playground.args, disabled: true, label: "Disabled" },
};

export const FullWidth: Story = {
  render: () => `
    <div style="min-width: 540px;">
      ${renderButton({ fullWidth: true, label: "Full Width Button" })}
    </div>
  `,
};
