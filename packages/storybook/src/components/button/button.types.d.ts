import type { ElementSize } from "@/lib/types";
export declare const BUTTON_VARIANTS: readonly [
  "default",
  "negative",
  "primary",
  "secondary",
  "outline",
];
export type ButtonVariant = (typeof BUTTON_VARIANTS)[number];
export interface ButtonStateOptions {
  variant?: ButtonVariant;
  size?: ElementSize;
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
}
export interface ButtonState {
  className: string;
  isDisabled: boolean;
}
export declare const DEFAULT_BUTTON_OPTIONS: Required<ButtonStateOptions>;
//# sourceMappingURL=button.types.d.ts.map
