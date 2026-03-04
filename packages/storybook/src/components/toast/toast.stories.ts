import type { Meta, StoryObj } from "@storybook/html-vite";

import "./toast.css";
import { TOAST_TYPES, DEFAULT_TOAST_OPTIONS } from "./toast.types";
import type { ToastStateOptions, ToastType } from "./toast.types";
import { getToastScriptContent, getToastState } from "./toast.logic";

type ToastArgs = ToastStateOptions;

const renderToast = (args: Partial<ToastStateOptions>): string => {
  const resolved = { ...DEFAULT_TOAST_OPTIONS, ...args };
  const state = getToastState(resolved);
  const uid = `toast-${Math.random().toString(36).slice(2, 7)}`;

  const ICONS: Record<ToastType, string> = {
    success: `<svg class="nakas-toast-icon nakas-toast-icon-success" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
    error: `<svg class="nakas-toast-icon nakas-toast-icon-error" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>`,
    info: `<svg class="nakas-toast-icon nakas-toast-icon-info" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`,
    loading: `<svg class="nakas-toast-icon nakas-toast-icon-loading" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>`,
  };

  const toast = `
    <div id="${uid}" class="${state.className}">
      ${ICONS[resolved.type]}
      <div class="nakas-toast-text">
        <p class="nakas-toast-title">${resolved.title}</p>
        ${state.hasDescription ? `<p class="nakas-toast-description">${resolved.description}</p>` : ""}
      </div>
      <button class="nakas-close" type="button" onclick="
        const el = document.getElementById('${uid}');
        el.style.transition = 'opacity 300ms ease';
        el.style.opacity = '0';
        setTimeout(() => el.remove(), 300);
      ">
        <svg class="nakas-close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
  `;

  return state.autoDismiss
    ? toast + `<script>${getToastScriptContent(uid, state.duration)}</script>`
    : toast;
};

const meta: Meta<ToastArgs> = {
  title: "UI/Toast",
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      options: TOAST_TYPES,
      description: "Toast type",
      table: { defaultValue: { summary: "success" } },
    },
    title: { control: "text", description: "Toast title" },
    description: { control: "text", description: "Optional description" },
    infiniteDuration: {
      control: "boolean",
      description: "Keep visible indefinitely vs auto-dismiss",
      table: { defaultValue: { summary: "false" } },
    },
    duration: {
      control: "number",
      description: "Auto-dismiss delay in ms",
      table: { defaultValue: { summary: "4000" } },
    },
    className: { control: false, description: "Custom class of the element" },
  },
  render: (args) => renderToast(args),
};

export default meta;
type Story = StoryObj<ToastArgs>;

export const Success: Story = {
  args: {
    type: "success",
    title: "Success!",
    description: "Your changes have been saved.",
  },
};

export const Error: Story = {
  args: {
    type: "error",
    title: "Error!",
    description: "Something went wrong.",
  },
};

export const Info: Story = {
  args: {
    type: "info",
    title: "Info!",
    description: "Here's something you should know.",
  },
};

export const Loading: Story = {
  args: { type: "loading", title: "Loading…", infiniteDuration: true },
};

export const AutoDismiss: Story = {
  args: {
    type: "success",
    title: "Saved!",
    description: "This will dismiss after 10 seconds.",
    duration: 10000,
  },
};

export const Persistent: Story = {
  args: {
    type: "error",
    title: "Critical error",
    description: "Requires manual dismissal.",
    infiniteDuration: true,
  },
};

export const AllTypes: Story = {
  name: "All Types",
  parameters: { controls: { disable: true } },
  render: () => `
    <div class="flex flex-col gap-2">
      ${renderToast({ type: "success", title: "Success!", description: "Your changes have been saved.", infiniteDuration: true })}
      ${renderToast({ type: "error", title: "Error!", description: "Something went wrong.", infiniteDuration: true })}
      ${renderToast({ type: "info", title: "Info!", description: "Here's something you should know.", infiniteDuration: true })}
      ${renderToast({ type: "loading", title: "Loading…", infiniteDuration: true })}
    </div>
  `,
};
