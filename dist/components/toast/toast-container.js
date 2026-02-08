import { jsx as _jsx } from "react/jsx-runtime";
import { useToastContext } from "./toast-context.js";
import { ToastItem } from "./toast-item.js";
export const ToastContainer = () => {
    const { toasts } = useToastContext();
    return (_jsx("div", { className: "toast-container", children: toasts.map((toast) => (_jsx(ToastItem, { toast: toast }, toast.id))) }));
};
//# sourceMappingURL=toast-container.js.map