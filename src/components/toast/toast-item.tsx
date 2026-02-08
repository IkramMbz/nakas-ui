import clsx from "clsx";
import { CheckCircle, XCircle, Loader, X, Info } from "lucide-react";
import { useState } from "react";

import { useToastContext } from "./toast-context.js";
import { Toast } from "./types.js";

type ToastItemProps = {
  toast: Toast;
};

export const ToastItem = ({ toast }: ToastItemProps): React.ReactElement => {
  const { removeToast } = useToastContext();
  const [isExiting, setIsExiting] = useState(false);

  const handleClose = (): void => {
    setIsExiting(true);
    setTimeout(() => {
      removeToast(toast.id);
    }, 300);
  };

  const getIcon = (): React.ReactNode => {
    switch (toast.type) {
      case "success":
        return <CheckCircle className="toast-icon toast-icon-success" />;
      case "error":
        return <XCircle className="toast-icon toast-icon-error" />;
      case "loading":
        return <Loader className="toast-icon toast-icon-loading" />;
      case "info":
        return <Info className="toast-icon toast-icon-info" />;
      default:
        return null;
    }
  };

  return (
    <div
      className={clsx(
        "nakas-toast",
        `toast-${toast.type}`,
        isExiting && "toast-exiting"
      )}
    >
      <div className="toast-content">
        {getIcon()}

        <div className="toast-text">
          <p className="toast-title">{toast.title}</p>
          {toast.description && (
            <p className="toast-description">{toast.description}</p>
          )}
        </div>

        {toast.type !== "loading" && (
          <button
            onClick={handleClose}
            className="toast-close"
            aria-label="Close"
          >
            <X className="toast-close-icon" />
          </button>
        )}
      </div>
    </div>
  );
};
