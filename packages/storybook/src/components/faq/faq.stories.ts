import type { Meta, StoryObj } from "@storybook/html-vite";

import { ELEMENT_SIZES } from "../../lib/types";
import { getFaqState } from "./faq.logic";
import { DEFAULT_FAQ_OPTIONS } from "./faq.types";
import type { FaqItem, FaqStateOptions } from "./faq.types";

const SAMPLE_FAQS: FaqItem[] = [
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day money-back guarantee on all products. If you're not satisfied, contact our support team for a full refund.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Standard shipping takes 5-7 business days. Express shipping is available and takes 2-3 business days.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes, we ship to over 100 countries worldwide. Shipping costs and delivery times vary by location.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order ships, you'll receive a tracking number via email. You can use this to track your package on our website.",
  },
];

type FaqArgs = FaqStateOptions;

const renderFaq = (args: Partial<FaqArgs>): string => {
  const resolved = { ...DEFAULT_FAQ_OPTIONS, ...args };
  const faqs = resolved.faqs.length ? resolved.faqs : SAMPLE_FAQS;
  const uid = `faq-${Math.random().toString(36).slice(2, 7)}`;
  const state = getFaqState(resolved);

  const items = faqs
    .map(
      (faq, i) => `
    <div class="faq-item">
      <div
        class="faq-question-wrapper nakas-card"
        onclick="
          const answer = document.getElementById('${uid}-ans-${i}');
          const icon = document.getElementById('${uid}-icon-${i}');
          const isOpen = answer.classList.contains('faq-answer-open');
          answer.classList.toggle('faq-answer-open', !isOpen);
          answer.classList.toggle('faq-answer-closed', isOpen);
          icon.classList.toggle('faq-icon-open', !isOpen);
        "
        role="button"
        tabindex="0"
      >
        <span class="${state.questionClassName}">${faq.question}</span>
        <svg id="${uid}-icon-${i}" class="faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </div>
      <div
        id="${uid}-ans-${i}"
        class="nakas-card faq-answer faq-answer-closed ${state.className} ${state.answerClassName}"
      >
        ${faq.answer}
      </div>
    </div>
  `
    )
    .join("");

  return `<div class="nakas-faq-container">${items}</div>`;
};

const meta: Meta<FaqArgs> = {
  title: "Commons/FaqSection",
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    faqs: { description: "Array of FAQ items" },
    size: {
      control: { type: "select" },
      options: ELEMENT_SIZES,
      description: "Text size",
      table: { defaultValue: { summary: "md" } },
    },
    questionClassName: {
      control: "text",
      description: "Custom class for question container",
    },
    answerClassName: {
      control: "text",
      description: "Custom class for answer container",
    },
    className: {
      control: false,
      description: "Custom class of the element",
    },
  },
  render: (args) => renderFaq(args),
};

export default meta;
type Story = StoryObj<FaqArgs>;

export const Default: Story = { args: { faqs: SAMPLE_FAQS } };

export const SingleFaq: Story = {
  name: "Single FAQ",
  args: { faqs: [SAMPLE_FAQS[0]] },
};

export const ManyFaqs: Story = {
  name: "Many FAQs",
  args: {
    faqs: [
      ...SAMPLE_FAQS,
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards, PayPal, and Apple Pay.",
      },
      {
        question: "Is my data secure?",
        answer:
          "Yes, we use industry-standard encryption to protect your personal information.",
      },
    ],
  },
};

export const Sizes: Story = {
  name: "All Sizes",
  parameters: { controls: { disable: true } },
  render: () => `
    <div class="flex flex-col gap-4 min-w-lg">
      ${ELEMENT_SIZES.map(
        (s) => `
        <div>
          <p class="nakas-text-${s} opacity-50 mb-2 uppercase">${s}</p>
          ${renderFaq({ size: s, faqs: [SAMPLE_FAQS[0]] })}
        </div>
      `
      ).join("")}
    </div>
  `,
};
