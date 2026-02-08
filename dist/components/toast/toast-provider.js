import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useCallback, useEffect } from "react";
import { ToastContext } from "./toast-context.js";
import { ToastContainer } from "./toast-container.js";
import { setToastManager } from "./toast.js";
export const ToastProvider = ({ children, }) => {
    const [toasts, setToasts] = useState([]);
    const addToast = useCallback((toast) => {
        const id = toast.id || Date.now() + Math.random();
        const newToast = {
            ...toast,
            id,
            duration: toast.duration ?? (toast.type === "loading" ? undefined : 4000),
        };
        setToasts((prev) => [...prev, newToast]);
        if (newToast.duration) {
            setTimeout(() => {
                removeToast(id);
            }, newToast.duration);
        }
        return id;
    }, []);
    const removeToast = useCallback((id) => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, []);
    const updateToast = useCallback((id, updates) => {
        setToasts((prev) => prev.map((toast) => toast.id === id ? { ...toast, ...updates } : toast));
        if (updates.duration) {
            setTimeout(() => {
                removeToast(id);
            }, updates.duration);
        }
    }, [removeToast]);
    const contextValue = { toasts, addToast, removeToast, updateToast };
    useEffect(() => {
        setToastManager(contextValue);
        return () => {
            setToastManager(null);
        };
    }, [contextValue]);
    return (_jsxs(ToastContext.Provider, { value: contextValue, children: [children, _jsx(ToastContainer, {})] }));
};
//# sourceMappingURL=toast-provider.js.map