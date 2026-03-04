import type { Meta, StoryObj } from "@storybook/html-vite";

import { DEFAULT_ERROR_BLOCK_OPTIONS } from "./error-block.types";
import type { ErrorBlockStateOptions } from "./error-block.types";
import {
  getErrorBlockScriptContent,
  getErrorBlockState,
} from "./error-block.logic";

const ALERT_ICON = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0;"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`;

type ErrorBlockArgs = ErrorBlockStateOptions;

const renderErrorBlock = (args: Partial<ErrorBlockArgs>): string => {
  const resolved = { ...DEFAULT_ERROR_BLOCK_OPTIONS, ...args };
  const state = getErrorBlockState(resolved);
  const uid = `err-${Math.random().toString(36).slice(2, 7)}`;

  const block = `
    <div
      id="${uid}"
      class="${state.className}"
    >
      ${resolved.showIcon ? ALERT_ICON : ""}
      <span>${resolved.error}</span>
    </div>
  `;

  if (state.autoDismiss) {
    return `
      ${block}
      <script>
        ${getErrorBlockScriptContent(uid, state.duration)}
      </script>
    `;
  }

  return block;
};

const meta: Meta<ErrorBlockArgs> = {
  title: "UI/ErrorBlock",
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    error: { control: "text", description: "Error message to display" },
    showIcon: {
      control: "boolean",
      description: "Show the alert icon",
      table: { defaultValue: { summary: "true" } },
    },
    infiniteDuration: {
      control: "boolean",
      description: "Keep visible indefinitely vs auto-dismiss",
      table: { defaultValue: { summary: "true" } },
    },
    duration: {
      control: "number",
      description: "Auto-dismiss delay in ms (when infiniteDuration is false)",
      table: { defaultValue: { summary: "5000" } },
    },
  },
  render: (args) => renderErrorBlock(args),
};

export default meta;
type Story = StoryObj<ErrorBlockArgs>;

export const Default: Story = {
  args: { error: "An error occurred", infiniteDuration: true },
};

export const WithoutIcon: Story = {
  args: {
    error: "Error without icon",
    showIcon: false,
    infiniteDuration: true,
  },
};

export const LongMessage: Story = {
  args: {
    error:
      "This is a longer error message that demonstrates how the component handles multiple lines of text and wraps appropriately.",
    infiniteDuration: true,
  },
};

export const AutoDismiss: Story = {
  args: {
    error: "This error will dismiss after 9 seconds",
    infiniteDuration: false,
    duration: 9000,
  },
};
