import type { Meta, StoryObj } from "@storybook/html-vite";

import { type ElementSize } from "../../lib/types";

type TextLinkArgs = { children: string; external: boolean; size: ElementSize; href: string };

const renderTextLink = (args: Partial<TextLinkArgs>): string => {
  return `<a href="${args.href}"  ${args?.external ? ` target="_blank"` : ""}>
  ${args.children}
</a>`;
};

const meta: Meta<TextLinkArgs> = {
  title: "Typography/Anchor",
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    href: { control: "text", description: "Link destination" },
    external: {
      control: "boolean",
      defaultValue: false,
      description: "Opens in new tab and shows external icon",
      table: { defaultValue: { summary: "false" } },
    },
    children: { control: "text", description: "Link text" },
  },
  args: {
    external: false,
  },
  render: (args) => renderTextLink(args),
};

export default meta;
type Story = StoryObj<TextLinkArgs>;

export const Default: Story = {
  args: { href: "#", children: "Click me" },
};

export const External: Story = {
  args: {
    href: "https://github.com/IkramMbz/nakas-ui",
    external: true,
    children: "GitHub",
  },
};

export const InParagraph: Story = {
  name: "In Paragraph",
  parameters: { controls: { disable: true } },
  render: () => `
    <p class="max-w-400">
      This is a paragraph with a <a>Link</a> and an <a target="_blank">Extenral Link</a> included.
    </p>
  `,
};

export const AllSizes: Story = {
  name: "All Sizes",
  parameters: { controls: { disable: true } },
  render: () => `
    <div style="display: flex; gap: 1rem; flex-direction: column;">
      <a class="_nakas-p-xs">Click me</a>
      <a class="_nakas-p-sm">Click me</a>
      <a class="_nakas-p-md">Click me</a>
      <a class="_nakas-p-lg">Click me</a>
      <a class="_nakas-p-xl">Click me</a>
    </div>
  `,
};
