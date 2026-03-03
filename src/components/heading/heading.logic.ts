import { DEFAULT_HEADING_SIZE } from "./heading.types.js";
import type {
  HeadingState,
  HeadingStateOptions,
  HeadingType,
} from "./heading.types.js";

function cn(...classes: (string | false | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function getHeadingState(
  options: HeadingStateOptions = {}
): HeadingState {
  const { color, className } = options;
  const type: HeadingType = options.type ?? "h1";
  const size = options.size ?? DEFAULT_HEADING_SIZE[type];

  return {
    tag: type,
    className: cn("nakas-heading", `nakas-heading-${size}`, className),
    color: color,
  };
}
