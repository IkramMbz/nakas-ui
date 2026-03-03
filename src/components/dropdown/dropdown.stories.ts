import type { Meta, StoryObj } from "@storybook/html-vite";

import "./dropdown.css";
import { DEFAULT_DROPDOWN_OPTIONS } from "./dropdown.types";
import type { DropdownStateOptions, DropdownPlacement } from "./dropdown.types";
import { getDropdownState, getDropdownScriptContent } from "./dropdown.logic";
import { ELEMENT_SIZES } from "../../lib/types";
import type { ElementSize } from "../../lib/types";

type DropdownArgs = DropdownStateOptions & {
  trigger: string;
  content: string;
};

const renderBlock = (content: string, size?: ElementSize): string => {
  size = size ?? "md";

  return `<button
      class="cursor-pointer nakas-card nakas-text-${size}"
      style="padding:0.5rem;"
      type="button"
    >
      ${content}
    </button>
  `;
};

const renderDropdown = (args: Partial<DropdownArgs>): string => {
  const { trigger = "Open", content = "", size = "md", ...options } = args;
  const state = getDropdownState({ ...DEFAULT_DROPDOWN_OPTIONS, ...options });
  const uid = `dd-${Math.random().toString(36).slice(2, 7)}`;

  return `
    <div id="${uid}" class="${state.className} nakas-text-${size}">
      <div
        class="${state.triggerClassName} nakas-text-${size}"
        onclick="
          document.getElementById('${uid}').classList.contains('nakas-dropdown-open')
            ? window.closeDropdown('${uid}')
            : window.openDropdown('${uid}');
        "
      >
        ${trigger}
      </div>

      <div id="${uid}-menu" class="${state.menuClassName} nakas-text-${size}">
        ${content}
      </div>
    </div>

    <script>
      ${getDropdownScriptContent(uid)}
    </script>
  `;
};

const DEMO_CONTENT = `<div class="flex flex-col">
    <button class="nakas-dropdown-item" type="button">Profile</button>
    <button class="nakas-dropdown-item" type="button">Settings</button>
    <button class="nakas-dropdown-item nakas-dropdown-item-danger" type="button">Logout</button>
  </div>
`;

const meta: Meta<DropdownArgs> = {
  title: "UI/Dropdown",
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    placement: {
      control: { type: "select" },
      options: [
        "bottom-start",
        "bottom-end",
        "bottom-center",
      ] as DropdownPlacement[],
      description: "Menu placement relative to trigger",
      table: { defaultValue: { summary: "bottom-start" } },
    },
    size: {
      control: { type: "select" },
      options: ELEMENT_SIZES,
      description: "Trigger and item density size variant",
      table: { defaultValue: { summary: "md" } },
    },
    trigger: { control: "text", description: "Trigger element (HTML string)" },
    content: { control: "text", description: "Dropdown content (HTML string)" },
    className: { control: false, description: "Custom class of the element" },
  },
  render: (args) => renderDropdown(args),
};

export default meta;
type Story = StoryObj<DropdownArgs>;

export const Default: Story = {
  args: {
    size: "md",
    placement: "bottom-start",
    trigger: renderBlock("Open menu"),
    content: DEMO_CONTENT,
  },
};

export const PlacementEnd: Story = {
  name: "Placement — bottom-end",
  args: {
    size: "md",
    placement: "bottom-end",
    trigger: renderBlock("Aligned right"),
    content: DEMO_CONTENT,
  },
};

export const PlacementCenter: Story = {
  name: "Placement — bottom-center",
  args: {
    size: "md",
    placement: "bottom-center",
    trigger: renderBlock("Aligned center"),
    content: DEMO_CONTENT,
  },
};

export const AllSizes: Story = {
  name: "All Sizes",
  parameters: { controls: { disable: true } },
  render: () =>
    `<div style="display:flex;flex-direction:column;gap:2rem;align-items:flex-start;">
      ${ELEMENT_SIZES.map((s) =>
        renderDropdown({
          size: s,
          placement: "bottom-start",
          trigger: renderBlock(`Open ${s}-sized menu`, s),
          content: DEMO_CONTENT,
        })
      ).join("")}
    </div>`,
};
