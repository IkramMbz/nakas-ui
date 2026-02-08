import { ToastContextType, ToastProps, ToastType } from "./types.js";

let toastManager: ToastContextType | null = null;

export const setToastManager = (manager: ToastContextType | null): void => {
  toastManager = manager;
};

export const toast = {
  success: (props?: ToastProps): string | number | undefined => {
    if (!toastManager) {
      console.warn(
        "ToastProvider not found. Please wrap your app with ToastProvider."
      );
      return;
    }
    return toastManager.addToast({
      type: "success",
      title: props?.title ?? "Success",
      description: props?.description,
      id: props?.id,
      duration: props?.duration,
    });
  },

  error: (props?: ToastProps): string | number | undefined => {
    if (!toastManager) {
      console.warn(
        "ToastProvider not found. Please wrap your app with ToastProvider."
      );
      return;
    }
    return toastManager.addToast({
      type: "error",
      title: props?.title ?? "Error",
      description: props?.description ?? "Something went wrong.",
      id: props?.id,
      duration: props?.duration,
    });
  },

  loading: (props?: ToastProps): string | number | undefined => {
    if (!toastManager) {
      console.warn(
        "ToastProvider not found. Please wrap your app with ToastProvider."
      );
      return;
    }
    return toastManager.addToast({
      type: "loading",
      title: props?.title ?? "Loading",
      description: props?.description ?? "...",
      id: props?.id,
      duration: props?.duration,
    });
  },

  info: (props?: ToastProps): string | number | undefined => {
    if (!toastManager) {
      console.warn(
        "ToastProvider not found. Please wrap your app with ToastProvider."
      );
      return;
    }
    return toastManager.addToast({
      type: "info",
      title: props?.title ?? "Info",
      description: props?.description,
      id: props?.id,
      duration: props?.duration,
    });
  },

  dismiss: (id: string | number): string | void => {
    if (!toastManager) return;
    toastManager.removeToast(id);
  },

  update: (
    id: string | number,
    props: Partial<ToastProps> & { type?: ToastType }
  ): string | void => {
    if (!toastManager) return;
    toastManager.updateToast(id, {
      title: props.title,
      description: props.description,
      type: props.type,
      duration: props.duration,
    });
  },
};
