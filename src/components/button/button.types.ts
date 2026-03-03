import type { ElementSize } from "@/lib/types";

export const BUTTON_VARIANTS = [
  "default",
  "negative",
  "primary",
  "secondary",
  "outline",
] as const;

export type ButtonVariant = (typeof BUTTON_VARIANTS)[number];

export interface ButtonStateOptions {
  variant?: ButtonVariant;
  size?: ElementSize;
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
}

export interface ButtonState {
  className: string;
  isDisabled: boolean;
}

export const DEFAULT_BUTTON_OPTIONS: Required<ButtonStateOptions> = {
  variant: "default",
  size: "md",
  loading: false,
  disabled: false,
  fullWidth: false,
  className: "",
};
