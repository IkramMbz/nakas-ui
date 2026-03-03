import type { Meta, StoryObj } from "@storybook/html-vite";

import { DEFAULT_SECTION_OPTIONS } from "./section.types";
import type { SectionStateOptions } from "./section.types";
import { getSectionState } from "./section.logic";

type SectionArgs = SectionStateOptions & { children: string };

const renderSection = (args: Partial<SectionArgs>): string => {
  const { children = "", ...options } = args;
  const state = getSectionState({ ...DEFAULT_SECTION_OPTIONS, ...options });
  return `<${state.tag} class="${state.className}">${children}</${state.tag}>`;
};

const meta: Meta<SectionArgs> = {
  title: "Layout/Section",
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
  argTypes: {
    flexDirection: {
      control: { type: "select" },
      options: ["row", "column"],
      description: "Flex direction",
      table: { defaultValue: { summary: "column" } },
    },
    displayGrid: {
      control: "boolean",
      description: "Use 2-column grid layout",
    },
    firstSection: { control: "boolean", description: "Adds extra top margin" },
    fullwidth: { control: "boolean", description: "Stretches to full width" },
    animated: { control: "boolean" },
    className: { control: false, description: "Custom class of the element" },
  },
  render: (args) => renderSection(args),
};

export default meta;
type Story = StoryObj<SectionArgs>;

const box = (label: string): string =>
  `<div class="nakas-card flex-1 p-4">${label}</div>`;

export const FlexRow: Story = {
  args: {
    flexDirection: "row",
    children: `${box("Column 1")} ${box("Column 2")}`,
  },
};

export const FlexCol: Story = {
  args: {
    flexDirection: "column",
    children: `
    <div class="flex flex-col gap-2">
      <h2 class="nakas-heading nakas-heading-md">Column 1</h2>
      <p class="opacity-70">A column-oriented section with centered content</p>
    </div>
      `,
  },
};

export const Grid: Story = {
  args: {
    displayGrid: true,
    children: `${box("Grid Item 1")} ${box("Grid Item 2")}`,
  },
};
