export interface DialogStateOptions {
  children: unknown;
  label?: string;
  className?: string;
}

export interface DialogState {
  children: unknown;
  className: string;
}

export const DEFAULT_DIALOG_OPTIONS: Required<DialogStateOptions> = {
  children: "",
  label: "Dialog Title",
  className: "",
};
