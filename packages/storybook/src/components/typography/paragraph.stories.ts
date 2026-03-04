import type { Meta, StoryObj } from "@storybook/html-vite";

import { ELEMENT_SIZES, type ElementSize } from "../../lib/types";

type BodyTextArgs = { size: ElementSize; children: string };

const meta: Meta<BodyTextArgs> = {
  title: "Typography/Paragraph",
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ELEMENT_SIZES,
      type: "string",
      description: "Text size variant",
      table: { defaultValue: { summary: "md" } },
      children: "This is body text",
    },
  },
};

export default meta;
type Story = StoryObj<BodyTextArgs>;

export const Default: Story = {
  args: { size: "md" },
  render: ({ children, size }) => `<p size="${size}">${children}</p>`,
};

export const AllSizes: Story = {
  name: "All Sizes",
  render: ({ children }) => `
    <div style="display: flex; flex-direction: column; gap: 1rem">
      ${ELEMENT_SIZES.map((size) => `<p size="${size}">${children}</p>`).join("")}
    </div>
  `,
};
