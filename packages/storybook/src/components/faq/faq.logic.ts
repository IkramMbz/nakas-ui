import { cn } from "../../lib/utils";
import type { FaqState, FaqStateOptions } from "./faq.types";

export function getFaqState(options: FaqStateOptions = {}): FaqState {
  const {
    size = "md",
    questionClassName = "",
    answerClassName = "",
    className = "",
  } = options;

  return {
    className: cn("nakas-text", `nakas-text-${size}`, className),
    questionClassName: cn(
      "nakas-text",
      `nakas-text-${size}`,
      questionClassName
    ),
    answerClassName: cn("nakas-text", `nakas-text-${size}`, answerClassName),
  };
}
