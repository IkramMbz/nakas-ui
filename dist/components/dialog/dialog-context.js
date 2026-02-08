"use client";
import { createContext, useContext } from "react";
export const DialogContext = createContext(undefined);
export const useDialogContext = () => {
    const context = useContext(DialogContext);
    if (!context) {
        throw new Error("useDialogContext must be used within DialogProvider");
    }
    return context;
};
//# sourceMappingURL=dialog-context.js.map