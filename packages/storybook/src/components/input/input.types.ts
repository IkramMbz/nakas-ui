import type { ElementSize } from "@/lib/types";

export const INPUT_TYPES = [
  "text",
  "email",
  "password",
  "number",
  "tel",
  "url",
] as const;
export type InputType = (typeof INPUT_TYPES)[number];

export interface InputStateOptions {
  size?: ElementSize;
  type?: InputType;
  label?: string;
  placeholder?: string;
  value?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
}

export interface InputState {
  inputClassName: string;
  wrapperClassName: string;
  hasError: boolean;
  isDisabled: boolean;
}

export const DEFAULT_INPUT_OPTIONS: Required<InputStateOptions> = {
  size: "md",
  type: "text",
  label: "",
  placeholder: "",
  value: "",
  error: "",
  required: false,
  disabled: false,
  className: "",
};
