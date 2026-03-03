import type { Meta, StoryObj } from "@storybook/html-vite";

import { ELEMENT_SIZES } from "../../lib/types";
import { DEFAULT_SELECT_OPTIONS } from "./select.types";
import type { SelectStateOptions, SelectOption } from "./select.types";
import { getSelectState } from "./select.logic";

type SelectArgs = SelectStateOptions & { options: SelectOption[] };

const FRUITS: SelectOption[] = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "orange", label: "Orange" },
  { value: "grape", label: "Grape" },
  { value: "strawberry", label: "Strawberry" },
];

const renderSelect = (args: Partial<SelectArgs>): string => {
  const { options = FRUITS, ...stateArgs } = args;
  const resolved = { ...DEFAULT_SELECT_OPTIONS, ...stateArgs };
  const state = getSelectState(resolved);

  const optionElements = options
    .map(
      (o) =>
        `<option value="${o.value}"${o.disabled ? " disabled" : ""}${resolved.value === o.value ? " selected" : ""}>${o.label}</option>`
    )
    .join("");

  return `
    <div class="${state.wrapperClassName}">
      ${
        resolved.label
          ? `<label class="nakas-select-label nakas-text-${resolved.size}">${resolved.label}${resolved.required ? ' <span class="nakas-select-required">*</span>' : ""}</label>`
          : ""
      }
      <div class="nakas-select-control nakas-card">
        <select
          class="${state.selectClassName}"
          ${state.isDisabled ? "disabled" : ""}
          ${resolved.required ? "required" : ""}
        >
          ${resolved.placeholder ? `<option value="" disabled${!resolved.value ? " selected" : ""}>${resolved.placeholder}</option>` : ""}
          ${optionElements}
        </select>
        <svg class="nakas-select-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
      ${state.hasError ? `<span class="nakas-select-error-msg nakas-text-xs">${resolved.error}</span>` : ""}
    </div>
  `;
};

const meta: Meta<SelectArgs> = {
  title: "UI/Select",
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ELEMENT_SIZES,
      description: "Size variant",
      table: { defaultValue: { summary: "md" } },
    },
    label: { control: "text", description: "Label above the select" },
    placeholder: { control: "text", description: "Placeholder option text" },
    required: { control: "boolean" },
    disabled: { control: "boolean" },
    error: { control: "text", description: "Error message" },
    value: { control: "text", description: "Pre-selected value" },
    className: { control: false, description: "Custom class of the element" },
  },
  render: (args) => renderSelect(args),
};

export default meta;
type Story = StoryObj<SelectArgs>;

export const Default: Story = {
  args: { placeholder: "Choose a fruit…" },
};

export const WithLabel: Story = {
  args: { label: "Favourite fruit", placeholder: "Choose a fruit…" },
};

export const Required: Story = {
  args: {
    label: "Favourite fruit",
    placeholder: "Choose a fruit…",
    required: true,
  },
};

export const WithError: Story = {
  args: {
    label: "Favourite fruit",
    placeholder: "Choose…",
    error: "Please select a fruit",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled select",
    placeholder: "Choose a fruit…",
    disabled: true,
  },
};

export const WithPreselected: Story = {
  args: { label: "Favourite fruit", value: "banana" },
};

export const WithDisabledOption: Story = {
  args: {
    label: "Favourite fruit",
    placeholder: "Choose a fruit…",
    options: [
      { value: "apple", label: "Apple" },
      { value: "banana", label: "Banana (unavailable)", disabled: true },
      { value: "orange", label: "Orange" },
    ],
  },
};

export const AllSizes: Story = {
  name: "All Sizes",
  parameters: { controls: { disable: true } },
  render: () => `
    <div class="flex flex-col gap-4 w-[280px]">
      ${ELEMENT_SIZES.map((s) => renderSelect({ size: s, placeholder: s.toUpperCase() })).join("")}
    </div>
  `,
};
