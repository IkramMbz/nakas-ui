import type { Meta, StoryObj } from "@storybook/html-vite";

import type { CardStateOptions } from "./card.types";
import { getCardState } from "./card.logic";

type CardArgs = CardStateOptions & { children: string };

const DEFAULT_CHILDREN = `<h2>Welcome</h2><p class="opacity-70">Here's a nice card</p>`;

const renderCard = (args: Partial<CardArgs>): string => {
  const { children = DEFAULT_CHILDREN, ...options } = args;
  const state = getCardState(options);
  const inner = options.loading ? "" : children;
  return `<div class="p-2 min-w-lg"><div class="${state.className}" style="${state.style}">${inner}</div></div>`;
};

const meta: Meta<CardArgs> = {
  title: "UI/Card",
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    loading: { control: "boolean", description: "Skeleton loading state" },
    flexDirection: {
      control: { type: "select" },
      options: ["row", "column"],
      table: { defaultValue: { summary: "column" } },
    },
    backgroundColor: {
      control: "color",
      description: "Override background color (default: --bold-color)",
    },
    fullWidth: { control: "boolean", description: "Full width" },
    children: { control: false },
    className: { control: false, description: "Custom class of the element" },
  },
  render: (args) => renderCard(args),
};

export default meta;
type Story = StoryObj<CardArgs>;

export const Default: Story = { args: {} };

export const Skeleton: Story = { args: { loading: true } };

export const Row: Story = {
  args: { flexDirection: "row" },
  render: (args) => renderCard({ ...args, flexDirection: "row" }),
};

export const FullWidth: Story = {
  args: { fullWidth: true },
  parameters: { layout: "fullscreen" },
  render: (args) => `<div class="p-8">${renderCard(args)}</div>`,
};
