import type { Meta, StoryObj } from "@storybook/html-vite";

import type { CountUpStateOptions } from "./count-up.types";
import { getCountUpScriptContent, getCountUpState } from "./count-up.logic";

type CountUpArgs = CountUpStateOptions;

const renderCountUp = (args: Partial<CountUpArgs>): string => {
  const state = getCountUpState(args);
  const { className = "" } = args;
  const uid = `cu-${Math.random().toString(36).slice(2, 7)}`;

  return `
    <div class="flex flex-col gap-2 items-center text-xl">
      <span id="${uid}"class="${className}">${state.startValue}</span>
      <button
        class="bg-transparent cursor-pointer text-md text-black hover:scale-99 hover:opacity-60"
        type="button"
        onclick="runCountUp('${uid}',${state.startValue},${state.endValue},${state.durationMs},${state.useSeparator},${state.delayMs})"
      >Replay</button>
    </div>

    <script>
      ${getCountUpScriptContent(uid, state)}
    </script>
  `;
};

const meta: Meta<CountUpArgs> = {
  title: "UI/CountUp",
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    from: { control: "number", description: "Start value" },
    to: { control: "number", description: "End value" },
    duration: {
      control: "number",
      description: "Animation duration in seconds",
    },
    delay: { control: "number", description: "Start delay in seconds" },
    direction: {
      control: { type: "select" },
      options: ["up", "down"],
      description: "Count direction",
    },
    separator: {
      control: "text",
      description:
        "Thousands separator (any truthy value enables locale formatting)",
    },
    className: { control: false, description: "Custom class of the element" },
  },
  render: (args) => renderCountUp(args),
};

export default meta;
type Story = StoryObj<CountUpArgs>;

export const Default: Story = { args: { from: 0, to: 100, duration: 2 } };
export const WithDelay: Story = {
  args: { from: 0, to: 500, duration: 3, delay: 1 },
};
export const CountDown: Story = {
  args: { from: 100, to: 0, direction: "down", duration: 2 },
};
export const WithSeparator: Story = {
  args: { from: 0, to: 1000000, duration: 3, separator: "," },
};
export const FastAnimation: Story = {
  args: { from: 0, to: 50, duration: 0.5 },
};
export const SlowAnimation: Story = { args: { from: 0, to: 200, duration: 5 } };
