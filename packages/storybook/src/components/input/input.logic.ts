import { DEFAULT_INPUT_OPTIONS } from "./input.types.js";
import type { InputState, InputStateOptions } from "./input.types.js";

function cn(...classes: (string | false | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function getInputState(options: InputStateOptions = {}): InputState {
  const resolved = { ...DEFAULT_INPUT_OPTIONS, ...options };
  const { error, disabled, size, className } = resolved;

  return {
    inputClassName: cn(
      "nakas-input nakas-card nakas-text",
      `nakas-input-${size}`,
      `nakas-text-${size}`,
      error && "nakas-input-error",
      disabled && "nakas-input-disabled",
      className
    ),
    wrapperClassName: "nakas-input-wrapper",
    hasError: Boolean(error),
    isDisabled: Boolean(disabled),
  };
}
