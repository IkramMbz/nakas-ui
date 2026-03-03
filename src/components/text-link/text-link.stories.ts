import type { Meta, StoryObj } from "@storybook/html-vite";

import { ELEMENT_SIZES } from "../../lib/types";
import type { TextLinkStateOptions } from "./text-link.types";
import { getTextLinkState } from "./text-link.logic";

const EXTERNAL_ICON = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>`;

type TextLinkArgs = TextLinkStateOptions & { children: string };

const renderTextLink = (args: Partial<TextLinkArgs>): string => {
  const { children = "Click me", ...options } = args;
  const state = getTextLinkState(options);
  const style = state.color ? ` style="color:${state.color}"` : "";

  return `<a href="${state.href}" class="${state.className}" ${state.target ? ` target="${state.target}"` : ""}${style}>
  ${children}${state.showExternalIcon ? ` ${EXTERNAL_ICON}` : ""}
</a>`;
};

const meta: Meta<TextLinkArgs> = {
  title: "Typography/TextLink",
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    href: { control: "text", description: "Link destination" },
    external: {
      control: "boolean",
      description: "Opens in new tab and shows external icon",
      table: { defaultValue: { summary: "false" } },
    },
    size: {
      control: { type: "select" },
      options: [undefined, ...ELEMENT_SIZES],
      description: "Text size (defaults to inherited)",
    },
    color: {
      control: { type: "color" },
      description: "Text color override",
    },
    children: { control: "text", description: "Link text" },
    className: {
      control: false,
      description: "Custom class of the element",
    },
  },
  render: (args) => renderTextLink(args),
};

export default meta;
type Story = StoryObj<TextLinkArgs>;

export const Default: Story = {
  args: { href: "#", children: "Click me" },
};

export const External: Story = {
  args: {
    href: "https://github.com/IkramMbz/nakas-ui",
    external: true,
    children: "GitHub",
  },
};

export const InParagraph: Story = {
  name: "In Paragraph",
  parameters: { controls: { disable: true } },
  render: () => `
    <p class="max-w-400">
      This is a paragraph with a
      ${renderTextLink({ href: "#", children: "regular link" })}
      and an
      ${renderTextLink({ href: "https://github.com/IkramMbz/nakas-ui", external: true, children: "external link" })}
      included.
    </p>
  `,
};

export const AllSizes: Story = {
  name: "All Sizes",
  parameters: { controls: { disable: true } },
  render: () => `
    <div class="flex flex-col gap-2">
      ${ELEMENT_SIZES.map((s) => renderTextLink({ size: s, children: `Link size ${s}` })).join("")}
    </div>
  `,
};
