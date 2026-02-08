"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useCallback, useEffect } from "react";
import { DialogContext } from "./dialog-context.js";
import { DialogContainer } from "./dialog-container.js";
import { setDialogManager } from "./dialog.js";
export const DialogProvider = ({ children, }) => {
    const [dialogs, setDialogs] = useState([]);
    const openDialog = useCallback((config) => {
        const id = `dialog-${Date.now()}-${Math.random()}`;
        const newDialog = {
            ...config,
            id,
            variant: config.variant || "default",
        };
        setDialogs((prev) => [...prev, newDialog]);
        return id;
    }, []);
    const closeDialog = useCallback((id) => {
        if (id) {
            setDialogs((prev) => prev.filter((dialog) => dialog.id !== id));
        }
        else {
            setDialogs((prev) => prev.slice(0, -1));
        }
    }, []);
    const contextValue = { dialogs, openDialog, closeDialog };
    useEffect(() => {
        setDialogManager(contextValue);
        return () => {
            setDialogManager(null);
        };
    }, [contextValue]);
    return (_jsxs(DialogContext.Provider, { value: contextValue, children: [children, _jsx(DialogContainer, {})] }));
};
//# sourceMappingURL=dialog-provider.js.map