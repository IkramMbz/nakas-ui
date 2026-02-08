import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from "clsx";
import { CheckCircle, XCircle, Loader, X, Info } from "lucide-react";
import { useState } from "react";
import { useToastContext } from "./toast-context.js";
export const ToastItem = ({ toast }) => {
    const { removeToast } = useToastContext();
    const [isExiting, setIsExiting] = useState(false);
    const handleClose = () => {
        setIsExiting(true);
        setTimeout(() => {
            removeToast(toast.id);
        }, 300);
    };
    const getIcon = () => {
        switch (toast.type) {
            case "success":
                return _jsx(CheckCircle, { className: "toast-icon toast-icon-success" });
            case "error":
                return _jsx(XCircle, { className: "toast-icon toast-icon-error" });
            case "loading":
                return _jsx(Loader, { className: "toast-icon toast-icon-loading" });
            case "info":
                return _jsx(Info, { className: "toast-icon toast-icon-info" });
            default:
                return null;
        }
    };
    return (_jsx("div", { className: clsx("nakas-toast", `toast-${toast.type}`, isExiting && "toast-exiting"), children: _jsxs("div", { className: "toast-content", children: [getIcon(), _jsxs("div", { className: "toast-text", children: [_jsx("p", { className: "toast-title", children: toast.title }), toast.description && (_jsx("p", { className: "toast-description", children: toast.description }))] }), toast.type !== "loading" && (_jsx("button", { onClick: handleClose, className: "toast-close", "aria-label": "Close", children: _jsx(X, { className: "toast-close-icon" }) }))] }) }));
};
//# sourceMappingURL=toast-item.js.map