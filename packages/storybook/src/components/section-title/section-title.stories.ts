import type { Meta, StoryObj } from "@storybook/html-vite";

import { DEFAULT_SECTION_TITLE_OPTIONS } from "./section-title.types";
import type { SectionTitleStateOptions } from "./section-title.types";
import { getSectionTitleState } from "./section-title.logic";

const STAR_ICON = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`;

type SectionTitleArgs = SectionTitleStateOptions;

const renderSectionTitle = (args: Partial<SectionTitleArgs>): string => {
  const resolved = { ...DEFAULT_SECTION_TITLE_OPTIONS, ...args };
  const state = getSectionTitleState(resolved);

  return `
    <div class="${state.className}">
      <div class="${state.wrapperClassName}">
        ${
          state.hasLabel
            ? `<span class="${state.btnClassName}">
              ${resolved.appIcon}
              ${resolved.label}
            </span>`
            : ""
        }
        <h2 class="nakas-heading nakas-heading-md">${resolved.heading}</h2>
        ${
          state.hasDescription
            ? `<p class="nakas-text nakas-text-md opacity-70">${resolved.description}</p>`
            : ""
        }
      </div>
      ${
        state.hasButton
          ? `<a href="${resolved.buttonHref}" class="nakas-section-link-btn">
            ${resolved.buttonLabel}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>`
          : ""
      }
    </div>
  `;
};

const meta: Meta<SectionTitleArgs> = {
  title: "Layout/SectionTitle",
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "Small badge label above the heading",
    },
    heading: { control: "text", description: "Main heading text" },
    description: { control: "text", description: "Subtitle or description" },
    buttonLabel: {
      control: "text",
      description: "CTA button text (empty = hidden)",
    },
    buttonHref: { control: "text" },
    flexRow: {
      control: "boolean",
      description: "Row layout — heading left, button right",
    },
    appIcon: { control: false },
    className: { control: false, description: "Custom class of the element" },
  },
  render: (args) => renderSectionTitle(args),
};

export default meta;
type Story = StoryObj<SectionTitleArgs>;

export const Default: Story = {
  args: { heading: "Section Title" },
};

export const WithDescription: Story = {
  args: {
    heading: "Features Overview",
    description:
      "Discover the powerful features that make our product stand out",
  },
};

export const WithLabel: Story = {
  args: {
    label: "New",
    heading: "Latest Updates",
    description: "Check out what's new in our latest release",
  },
};

export const WithButton: Story = {
  args: {
    heading: "Get Started",
    description: "Begin your journey with us today",
    buttonLabel: "Sign Up",
    buttonHref: "#",
  },
};

export const WithIcon: Story = {
  args: {
    label: "Featured",
    appIcon: STAR_ICON,
    heading: "Premium Content",
    description: "Exclusive content for our premium members",
  },
};

export const FlexRow: Story = {
  args: {
    flexRow: true,
    heading: "Side by Side",
    description: "This layout arranges content horizontally",
    buttonLabel: "View All",
  },
};
