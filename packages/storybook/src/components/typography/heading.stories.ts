import type { Meta, StoryObj } from "@storybook/html-vite";

const headings = ["h1", "h2", "h3", "h4", "h5", "h6"] as const;
type HeadingArgs = { children: string; heading: (typeof headings)[number] };

const renderHeading = (args: Partial<HeadingArgs>): string => {
  console.log(args);
  return `<${args.heading}>${args.children}</${args.heading}>`;
};

const meta: Meta<HeadingArgs> = {
  title: "Typography/Heading",
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    heading: {
      control: { type: "select" },
      options: headings,
      type: "string",
      description: "Size override (defaults to type's natural size)",
    },
    children: {
      control: { type: "text" },
      description: "Text content",
      defaultValue: "This is a heading",
      type: "string",
    },
  },
  args: {
    children: "This is a heading",
  },
};

export default meta;
type Story = StoryObj<HeadingArgs>;

export const Heading: Story = {
  name: "Heading",
  render: (args) => renderHeading(args),
};

export const AllSizes: Story = {
  name: "All Sizes",
  parameters: {},
  argTypes: {
    heading: {
      control: { disable: true },
    },
  },
  render: ({ children }) => `
    <div style="display: flex; flex-direction: column; gap: 1rem">
      ${headings.map((h) => renderHeading({ heading: h, children })).join("")}
    </div>
  `,
};
