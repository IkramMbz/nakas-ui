import type { Meta, StoryObj } from "@storybook/html-vite";

import type { DialogStateOptions } from "./dialog.types";

type DialogArgs = DialogStateOptions;

const renderDialog = (args: Partial<DialogArgs>): string => {
  const resolved = {
    children: "This is a dialog",
    label: "Dialog Title",
    ...args,
  };

  const uid = `dlg-${Math.random().toString(30).slice(2, 7)}`;

  return `
    <div class="flex items-center justify-center min-h-[200px]">
      <button
        class="nakas-btn nakas-btn-secondary nakas-btn-md"
        type="button"
        onclick="
          const el = document.getElementById('${uid}');
          el.classList.remove('hidden');
          requestAnimationFrame(() => el.classList.add('is-open'));
        "
      >
        Open Dialog
      </button>
    </div>

    <div
      id="${uid}"
      class="dialog-overlay hidden"
      onclick="
        this.classList.remove('is-open');
        this.classList.add('hidden');
      "
    >
      <div class="dialog-wrapper">
        <div
          class="nakas-card flex-col"
          onclick="event.stopPropagation();"
        >
          <div class="dialog-header">
            <p class="dialog-label">${resolved.label ?? ""}</p>

            <button
              class="nakas-close"
              type="button"
              onclick="
                const el = document.getElementById('${uid}');
                el.classList.remove('is-open');
                el.classList.add('hidden');
              "
            >
              <svg class="nakas-close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>

          ${resolved.children ?? ""}
        </div>
      </div>
    </div>
  `;
};

const meta: Meta<DialogArgs> = {
  title: "UI/Dialog",
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
  argTypes: {
    children: { control: "text" },
    label: { control: "text" },
    className: { control: false, description: "Custom class of the element" },
  },
  render: (args) => renderDialog(args),
};

export default meta;
type Story = StoryObj<DialogArgs>;

export const Default: Story = {
  args: {
    label: "Custom Dialog",
    children: `<h2 class="nakas-heading-md">My great dialog pop-up !</h2><p class="opacity-70">Here's a nice dialog</p>`,
  },
};
