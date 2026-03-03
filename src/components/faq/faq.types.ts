import type { ElementSize } from "@/lib/types";

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqStateOptions {
  faqs?: FaqItem[];
  size?: ElementSize;
  questionClassName?: string;
  answerClassName?: string;
  className?: string;
}

export interface FaqState {
  className: string;
  questionClassName: string;
  answerClassName: string;
}

export const DEFAULT_FAQ_OPTIONS: Required<FaqStateOptions> = {
  faqs: [],
  size: "md",
  questionClassName: "",
  answerClassName: "",
  className: "",
};
