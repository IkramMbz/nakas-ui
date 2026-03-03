import { DEFAULT_SELECT_OPTIONS } from "./select.types.js";
import type { SelectState, SelectStateOptions } from "./select.types.js";

function cn(...classes: (string | false | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function getSelectState(options: SelectStateOptions = {}): SelectState {
  const resolved = { ...DEFAULT_SELECT_OPTIONS, ...options };
  const { error, disabled, size, className } = resolved;

  return {
    selectClassName: cn(
      "nakas-select",
      `text-${size}`,
      error && "nakas-select-error",
      disabled && "nakas-select-disabled",
      className
    ),
    wrapperClassName: "nakas-select-wrapper",
    hasError: Boolean(error),
    isDisabled: Boolean(disabled),
  };
}
