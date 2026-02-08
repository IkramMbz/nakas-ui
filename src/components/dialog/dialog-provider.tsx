"use client";

import { useState, useCallback, useEffect } from "react";

import { DialogContext } from "./dialog-context.js";
import { DialogContainer } from "./dialog-container.js";
import { setDialogManager } from "./dialog.js";
import { DialogConfig } from "./types.js";

export const DialogProvider = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement => {
  const [dialogs, setDialogs] = useState<DialogConfig[]>([]);

  const openDialog = useCallback((config: Omit<DialogConfig, "id">) => {
    const id = `dialog-${Date.now()}-${Math.random()}`;
    const newDialog: DialogConfig = {
      ...config,
      id,
      variant: config.variant || "default",
    };

    setDialogs((prev) => [...prev, newDialog]);
    return id;
  }, []);

  const closeDialog = useCallback((id?: string) => {
    if (id) {
      setDialogs((prev) => prev.filter((dialog) => dialog.id !== id));
    } else {
      setDialogs((prev) => prev.slice(0, -1));
    }
  }, []);

  const contextValue = { dialogs, openDialog, closeDialog };

  useEffect((): (() => void) => {
    setDialogManager(contextValue);

    return () => {
      setDialogManager(null);
    };
  }, [contextValue]);

  return (
    <DialogContext.Provider value={contextValue}>
      {children}
      <DialogContainer />
    </DialogContext.Provider>
  );
};
