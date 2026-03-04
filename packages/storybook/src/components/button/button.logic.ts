import { cn } from "../../lib/utils.js";
import { DEFAULT_BUTTON_OPTIONS } from "./button.types.js";
import type { ButtonState, ButtonStateOptions } from "./button.types.js";

export function getButtonClasses(
  options: Partial<ButtonStateOptions> = {}
): string {
  const resolved = {
    ...DEFAULT_BUTTON_OPTIONS,
    ...options,
  };

  const { variant, size, loading, disabled, fullWidth, className } = resolved;

  return cn(
    "nakas-btn nakas-text",
    `nakas-btn-${variant}`,
    `nakas-btn-${size}`,
    `nakas-text-${size}`,
    fullWidth && "w-full",
    (disabled || loading) &&
      "opacity-60 pointer-events-none cursor-not-allowed",
    className
  );
}

function resolveOptions(
  options: ButtonStateOptions = {}
): Required<ButtonStateOptions> {
  return { ...DEFAULT_BUTTON_OPTIONS, ...options };
}

export function getButtonState(options: ButtonStateOptions = {}): ButtonState {
  const resolved = resolveOptions(options);

  const isDisabled = resolved.disabled || resolved.loading;

  return {
    className: getButtonClasses(resolved),
    isDisabled,
  };
}
