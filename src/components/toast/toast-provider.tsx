import { useState, useCallback, useEffect } from "react";

import { ToastContext } from "./toast-context.js";
import { ToastContainer } from "./toast-container.js";
import { setToastManager } from "./toast.js";
import { Toast } from "./types.js";

export const ToastProvider = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = useCallback(
    (toast: Omit<Toast, "id"> & { id?: string | number }) => {
      const id = toast.id || Date.now() + Math.random();
      const newToast: Toast = {
        ...toast,
        id,
        duration:
          toast.duration ?? (toast.type === "loading" ? undefined : 4000),
      };

      setToasts((prev) => [...prev, newToast]);

      if (newToast.duration) {
        setTimeout(() => {
          removeToast(id);
        }, newToast.duration);
      }

      return id;
    },
    []
  );

  const removeToast = useCallback((id: string | number) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const updateToast = useCallback(
    (id: string | number, updates: Partial<Toast>) => {
      setToasts((prev) =>
        prev.map((toast) =>
          toast.id === id ? { ...toast, ...updates } : toast
        )
      );

      if (updates.duration) {
        setTimeout(() => {
          removeToast(id);
        }, updates.duration);
      }
    },
    [removeToast]
  );

  const contextValue = { toasts, addToast, removeToast, updateToast };

  useEffect(() => {
    setToastManager(contextValue);
    return (): void => {
      setToastManager(null);
    };
  }, [contextValue]);

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  );
};
