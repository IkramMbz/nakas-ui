import type { Meta, StoryObj } from "@storybook/html-vite";

import { HEADING_SIZES, HEADING_TYPES } from "./heading.types";
import type { HeadingStateOptions } from "./heading.types";
import { getHeadingState } from "./heading.logic";

type HeadingArgs = HeadingStateOptions & { children: string };

const renderHeading = (args: Partial<HeadingArgs>): string => {
  const { children = "The quick brown fox", ...options } = args;
  const state = getHeadingState(options);
  const style = state.color ? ` style="color:${state.color}"` : "";
  return `<${state.tag} class="${state.className}"${style}>${children}</${state.tag}>`;
};

const meta: Meta<HeadingArgs> = {
  title: "Typography/Heading",
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      options: HEADING_TYPES,
      description: "HTML heading element",
    },
    size: {
      control: { type: "select" },
      options: [undefined, ...HEADING_SIZES],
      description: "Size override (defaults to type's natural size)",
    },
    color: {
      control: { type: "color" },
      description: "Text color",
    },
    children: { control: "text" },
    className: {
      control: false,
      description: "Custom class of the element",
    },
  },
};

export default meta;
type Story = StoryObj<HeadingArgs>;

export const H1: Story = {
  args: { type: "h1", children: "This is a Heading 1" },
  render: renderHeading,
};
export const H2: Story = {
  args: { type: "h2", children: "This is a Heading 2" },
  render: renderHeading,
};
export const H3: Story = {
  args: { type: "h3", children: "This is a Heading 3" },
  render: renderHeading,
};
export const H4: Story = {
  args: { type: "h4", children: "This is a Heading 4" },
  render: renderHeading,
};
export const H5: Story = {
  args: { type: "h5", children: "This is a Heading 5" },
  render: renderHeading,
};
export const H6: Story = {
  args: { type: "h6", children: "This is a Heading 6" },
  render: renderHeading,
};

export const AllHeadings: Story = {
  name: "All Headings",
  parameters: { controls: { disable: true } },
  render: () => `
    <div class="flex flex-col gap-2">
      ${HEADING_TYPES.map((t) => renderHeading({ type: t, children: `Heading ${t.toUpperCase()}` })).join("")}
    </div>
  `,
};

export const AllSizes: Story = {
  name: "All Sizes",
  parameters: { controls: { disable: true } },
  render: () => `
    <div class="flex flex-col gap-2">
      ${HEADING_SIZES.map((s) => renderHeading({ type: "h2", size: s, children: `nakas-heading-${s}` })).join("")}
    </div>
  `,
};
