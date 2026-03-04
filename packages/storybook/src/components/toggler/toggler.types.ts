export interface TogglerStateOptions {
  value?: boolean;
  disabled?: boolean;
  leftIcon?: string;
  rightIcon?: string;
  className?: string;
}

export interface TogglerState {
  className: string;
  thumbClassName: string;
  iconContent: string;
}

export const DEFAULT_TOGGLER_OPTIONS: Required<TogglerStateOptions> = {
  value: false,
  disabled: false,
  leftIcon: "",
  rightIcon: "",
  className: "",
};
