import { DEFAULT_BODY_TEXT_OPTIONS } from "./body-text.types.js";
import type { BodyTextState, BodyTextStateOptions } from "./body-text.types.js";

function cn(...classes: (string | false | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function getBodyTextState(
  options: BodyTextStateOptions = {}
): BodyTextState {
  const resolved = { ...DEFAULT_BODY_TEXT_OPTIONS, ...options };
  const { size, type, color, fullWidth, className } = resolved;

  return {
    tag: type,
    className: cn(
      "nakas-text",
      `nakas-text-${size}`,
      fullWidth && "w-full",
      className
    ),
    style: color ? `color: ${color};` : "",
  };
}
