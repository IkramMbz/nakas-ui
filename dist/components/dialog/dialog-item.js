"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from "clsx";
import { X } from "lucide-react";
import { useState, useEffect } from "react";
import { useDialogContext } from "./dialog-context.js";
export const DialogItem = ({ dialog }) => {
    const { closeDialog } = useDialogContext();
    const [isVisible, setIsVisible] = useState(false);
    const [isExiting, setIsExiting] = useState(false);
    const handleClose = () => {
        if (isExiting)
            return;
        setIsExiting(true);
        setIsVisible(false);
        setTimeout(() => {
            closeDialog(dialog.id);
            dialog.onCancel?.();
        }, 200);
    };
    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            handleClose();
        }
    };
    useEffect(() => {
        document.body.style.overflow = "hidden";
        requestAnimationFrame(() => {
            setIsVisible(true);
        });
        return () => {
            document.body.style.overflow = "unset";
        };
    }, []);
    return (_jsx("div", { className: "dialog-overlay dialog-wrapper", onClick: handleOverlayClick, style: {
            position: "fixed",
            inset: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 1000,
        }, children: _jsxs("div", { className: clsx("dialog-content", isVisible && !isExiting ? "dialog-visible" : "dialog-hidden", dialog.className), children: [_jsxs("div", { className: "dialog-header", children: [_jsxs("div", { className: "dialog-title-wrapper", children: [dialog.icon && _jsx("div", { className: "dialog-icon", children: dialog.icon }), _jsx("h3", { className: "dialog-title", children: dialog.title })] }), _jsx("button", { onClick: handleClose, className: "dialog-close", "aria-label": "Close", children: _jsx(X, { className: "dialog-close-icon" }) })] }), dialog.description && (_jsx("p", { className: "dialog-description", children: dialog.description })), dialog.content && _jsx("div", { className: "dialog-body", children: dialog.content })] }) }));
};
//# sourceMappingURL=dialog-item.js.map