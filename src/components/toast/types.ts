export type ToastType = "success" | "error" | "loading" | "info";

export type Toast = {
  id: string | number;
  type: ToastType;
  title: string;
  description?: string;
  duration?: number;
};

export type ToastProps = {
  title?: string;
  description?: string;
  id?: string | number;
  duration?: number;
};

export type ToastContextType = {
  toasts: Toast[];
  addToast: (
    toast: Omit<Toast, "id"> & { id?: string | number }
  ) => string | number;
  removeToast: (id: string | number) => void;
  updateToast: (id: string | number, updates: Partial<Toast>) => void;
};
