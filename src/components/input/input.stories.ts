import type { Meta, StoryObj } from "@storybook/html-vite";

import { ELEMENT_SIZES } from "../../lib/types";
import { DEFAULT_INPUT_OPTIONS } from "./input.types";
import type { InputStateOptions } from "./input.types";
import { getInputState } from "./input.logic";

type InputArgs = InputStateOptions;

const renderInput = (args: Partial<InputArgs>): string => {
  const resolved = { ...DEFAULT_INPUT_OPTIONS, ...args };
  const state = getInputState(resolved);

  return `
    <div class="${state.wrapperClassName}">
      ${
        resolved.label
          ? `<label class="nakas-input-label nakas-text-${resolved.size}">${resolved.label}${resolved.required ? ' <span class="nakas-input-required">*</span>' : ""}</label>`
          : ""
      }
      <input
        class="${state.inputClassName}"
        type="${resolved.type}"
        placeholder="${resolved.placeholder}"
        value="${resolved.value}"
        ${state.isDisabled ? "disabled" : ""}
      />
      ${state.hasError ? `<span class="nakas-input-error-msg nakas-text-xs">${resolved.error}</span>` : ""}
    </div>
  `;
};

const meta: Meta<InputArgs> = {
  title: "UI/Input",
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ELEMENT_SIZES,
      description: "Input height variant",
      table: { defaultValue: { summary: "md" } },
    },
    type: {
      control: { type: "select" },
      options: ["text", "email", "password", "number", "tel", "url"],
      description: "HTML input type",
      table: { defaultValue: { summary: "text" } },
    },
    label: { control: "text" },
    placeholder: { control: "text" },
    value: { control: "text" },
    error: { control: "text" },
    required: { control: "boolean" },
    disabled: { control: "boolean" },
    className: { control: false, description: "Custom class of the element" },
  },
  render: (args) => renderInput(args),
};

export default meta;
type Story = StoryObj<InputArgs>;

export const Default: Story = {
  args: { placeholder: "Enter text…", size: "md" },
};

export const WithLabel: Story = {
  args: { label: "Email", placeholder: "your@email.com", type: "email" },
};

export const Required: Story = {
  args: { label: "Username", placeholder: "Enter username", required: true },
};

export const WithError: Story = {
  args: {
    label: "Email",
    placeholder: "your@email.com",
    error: "Please enter a valid email address",
    value: "invalid-email",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Input",
    placeholder: "Can't type here",
    disabled: true,
  },
};

export const Password: Story = {
  args: { label: "Password", type: "password", placeholder: "Enter password" },
};

export const AllSizes: Story = {
  name: "All Sizes",
  parameters: { controls: { disable: true } },
  render: () => `
    <div class="flex flex-col gap-4 items-center">
      ${ELEMENT_SIZES.map((s) =>
        renderInput({ size: s, placeholder: s.toUpperCase() })
      ).join("")}
    </div>
  `,
};
