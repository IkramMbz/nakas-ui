import { useToastContext } from "./toast-context.js";
import { ToastItem } from "./toast-item.js";

export const ToastContainer = (): React.ReactElement => {
  const { toasts } = useToastContext();

  return (
    <div className="toast-container">
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} />
      ))}
    </div>
  );
};
