import type { Meta, StoryObj } from "@storybook/html-vite";

import { ELEMENT_SIZES } from "../../lib/types";
import { DEFAULT_BODY_TEXT_OPTIONS } from "./body-text.types";
import type { BodyTextStateOptions } from "./body-text.types";
import { getBodyTextState } from "./body-text.logic";

type BodyTextArgs = BodyTextStateOptions & { children: string };

const renderBodyText = (args: Partial<BodyTextArgs>): string => {
  const { children = "This is body text with default styling", ...options } =
    args;
  const state = getBodyTextState({ ...DEFAULT_BODY_TEXT_OPTIONS, ...options });
  return `<${state.tag} class="${state.className}" style="${state.style}">${children}</${state.tag}>`;
};

const meta: Meta<BodyTextArgs> = {
  title: "Typography/BodyText",
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ELEMENT_SIZES,
      description: "Text size variant",
      table: { defaultValue: { summary: "md" } },
    },
    type: {
      control: { type: "select" },
      options: ["p", "span"],
      description: "HTML element type",
      table: { defaultValue: { summary: "p" } },
    },
    color: { control: "color", description: "Override text color" },
    fullWidth: {
      control: "boolean",
      description: "Full width",
      table: { defaultValue: { summary: "false" } },
    },
    children: { control: "text" },
    className: {
      control: false,
      description: "Custom class of the element",
    },
  },
  render: (args) => renderBodyText(args),
};

export default meta;
type Story = StoryObj<BodyTextArgs>;

export const Default: Story = {
  args: { children: "This is body text with default styling" },
};

export const Paragraph: Story = {
  args: {
    type: "p",
    children:
      "This is a paragraph of text that demonstrates the default paragraph styling.",
  },
};

export const Span: Story = {
  args: { type: "span", children: "This is a span element" },
};

export const WithColor: Story = {
  args: {
    color: "var(--color-accent)",
    children: "This text uses the accent color",
  },
};

export const AllSizes: Story = {
  name: "All Sizes",
  parameters: { controls: { disable: true } },
  render: () => `
    <div class="flex flex-col gap-2">
      ${ELEMENT_SIZES.map((s) =>
        renderBodyText({
          size: s,
          children: `${s.toUpperCase()} — The quick brown fox jumps over the lazy dog`,
        })
      ).join("")}
    </div>
  `,
};
