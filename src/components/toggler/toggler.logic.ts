import { DEFAULT_TOGGLER_OPTIONS } from "./toggler.types.js";
import type { TogglerState, TogglerStateOptions } from "./toggler.types.js";

function cn(...classes: (string | false | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function getTogglerState(
  options: TogglerStateOptions = {}
): TogglerState {
  const resolved = { ...DEFAULT_TOGGLER_OPTIONS, ...options };
  const { value, disabled, leftIcon, rightIcon, className } = resolved;

  return {
    className: cn(
      "nakas-toggler",
      value && "nakas-toggler-active",
      disabled && "nakas-toggler-disabled",
      className
    ),
    thumbClassName: cn(
      "nakas-toggler-thumb",
      value && "nakas-toggler-thumb-active"
    ),
    iconContent: value ? rightIcon : leftIcon,
  };
}
