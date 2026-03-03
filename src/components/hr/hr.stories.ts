import type { Meta, StoryObj } from "@storybook/html-vite";

import { getHrState } from "./hr.logic";

type HRArgs = Record<string, never>;

const renderHR = (): string => {
  const state = getHrState();
  return `<hr class="${state.className}" />`;
};

const meta: Meta<HRArgs> = {
  title: "UI/HR",
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  render: () => renderHR(),
};

export default meta;
type Story = StoryObj<HRArgs>;

export const Default: Story = {};

export const InContext: Story = {
  name: "In Context",
  parameters: { controls: { disable: true } },
  render: () => `
    <div style="width: 400px; display: flex; flex-direction: column; gap: 1rem; color: var(--color-primary-color);">
      <p>Content above the divider</p>
      ${renderHR()}
      <p>Content below the divider</p>
    </div>
  `,
};
