import {
  DEFAULT_SCROLL_TO_TOP_OPTIONS,
  ICON_SIZES,
} from "./scroll-to-top.types.js";
import type {
  ScrollToTopState,
  ScrollToTopStateOptions,
} from "./scroll-to-top.types.js";

function cn(...classes: (string | false | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function getScrollToTopState(
  options: ScrollToTopStateOptions = {}
): ScrollToTopState {
  const resolved = { ...DEFAULT_SCROLL_TO_TOP_OPTIONS, ...options };

  return {
    className: cn(
      "nakas-stt-button nakas-btn btn-default",
      `nakas-stt-button-${resolved.size}`,
      resolved.className
    ),
    iconSize: ICON_SIZES[resolved.size],
  };
}
