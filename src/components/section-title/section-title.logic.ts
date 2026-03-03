import { DEFAULT_SECTION_TITLE_OPTIONS } from "./section-title.types.js";
import type {
  SectionTitleState,
  SectionTitleStateOptions,
} from "./section-title.types.js";

function cn(...classes: (string | false | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function getSectionTitleState(
  options: SectionTitleStateOptions = {}
): SectionTitleState {
  const resolved = { ...DEFAULT_SECTION_TITLE_OPTIONS, ...options };
  const { flexRow, buttonLabel, label, description, btnClassName, className } =
    resolved;

  return {
    className: cn(
      "nakas-section-title",
      flexRow && "nakas-section-title-row",
      className
    ),
    btnClassName: cn("nakas-btn w-fit", btnClassName),
    wrapperClassName: "nakas-section-title-content",
    hasLabel: Boolean(label),
    hasDescription: Boolean(description),
    hasButton: Boolean(buttonLabel),
  };
}
