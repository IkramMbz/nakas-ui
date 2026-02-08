"use client";

import clsx from "clsx";
import { X } from "lucide-react";
import { useState, useEffect } from "react";

import { useDialogContext } from "./dialog-context.js";
import { DialogConfig } from "./types.js";

type DialogItemProps = {
  dialog: DialogConfig;
};

export const DialogItem = ({ dialog }: DialogItemProps): React.ReactElement => {
  const { closeDialog } = useDialogContext();

  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const handleClose = (): void => {
    if (isExiting) return;

    setIsExiting(true);
    setIsVisible(false);

    setTimeout(() => {
      closeDialog(dialog.id);
      dialog.onCancel?.();
    }, 200);
  };

  const handleOverlayClick = (e: React.MouseEvent): void => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  useEffect((): (() => void) => {
    document.body.style.overflow = "hidden";

    requestAnimationFrame((): void => {
      setIsVisible(true);
    });

    return (): void => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div
      className="dialog-overlay dialog-wrapper"
      onClick={handleOverlayClick}
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
        zIndex: 1000,
      }}
    >
      <div
        className={clsx(
          "dialog-content",
          isVisible && !isExiting ? "dialog-visible" : "dialog-hidden",
          dialog.className
        )}
      >
        <div className="dialog-header">
          <div className="dialog-title-wrapper">
            {dialog.icon && <div className="dialog-icon">{dialog.icon}</div>}
            <h3 className="dialog-title">{dialog.title}</h3>
          </div>

          <button
            onClick={handleClose}
            className="dialog-close"
            aria-label="Close"
          >
            <X className="dialog-close-icon" />
          </button>
        </div>

        {dialog.description && (
          <p className="dialog-description">{dialog.description}</p>
        )}

        {dialog.content && <div className="dialog-body">{dialog.content}</div>}
      </div>
    </div>
  );
};
