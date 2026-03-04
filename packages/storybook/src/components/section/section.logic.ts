import { DEFAULT_SECTION_OPTIONS } from "./section.types.js";
import type { SectionState, SectionStateOptions } from "./section.types.js";

function cn(...classes: (string | false | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function getSectionState(
  options: SectionStateOptions = {
    children: "<p>This is a section</p>",
  }
): SectionState {
  const resolved = { ...DEFAULT_SECTION_OPTIONS, ...options };
  const {
    fullwidth,
    displayGrid,
    firstSection,
    flexDirection,
    animated,
    className,
  } = resolved;

  return {
    tag: "section",
    className: cn(
      "nakas-section",
      displayGrid
        ? "nakas-section-grid"
        : flexDirection === "row"
          ? "nakas-section-row"
          : "nakas-section-col",
      fullwidth && "nakas-section-fullwidth",
      firstSection && "nakas-section-first",
      animated && "nakas-section-animated",
      className
    ),
  };
}
