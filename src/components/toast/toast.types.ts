export const TOAST_TYPES = ["success", "error", "info", "loading"] as const;
export type ToastType = (typeof TOAST_TYPES)[number];

export interface ToastStateOptions {
  type?: ToastType;
  title?: string;
  description?: string;
  infiniteDuration?: boolean;
  duration?: number;
  className?: string;
}

export interface ToastState {
  className: string;
  iconClassName: string;
  hasDescription: boolean;
  autoDismiss: boolean;
  duration: number;
}

export const DEFAULT_TOAST_OPTIONS: Required<ToastStateOptions> = {
  type: "success",
  title: "Title",
  description: "",
  infiniteDuration: false,
  duration: 4000,
  className: "",
};
