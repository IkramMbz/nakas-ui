"use client";
import { createContext, useContext } from "react";
export const ToastContext = createContext(undefined);
export const useToastContext = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error("useToastContext must be used within ToastProvider");
    }
    return context;
};
//# sourceMappingURL=toast-context.js.map