import type { ElementSize } from "@/lib/types";

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectStateOptions {
  size?: ElementSize;
  label?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  value?: string;
  className?: string;
}

export interface SelectState {
  selectClassName: string;
  wrapperClassName: string;
  hasError: boolean;
  isDisabled: boolean;
}

export const DEFAULT_SELECT_OPTIONS: Required<SelectStateOptions> = {
  size: "md",
  label: "",
  placeholder: "Choose an option…",
  required: false,
  disabled: false,
  error: "",
  value: "",
  className: "",
};
