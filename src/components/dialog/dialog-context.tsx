"use client";

import { createContext, useContext } from "react";

import { DialogContextType } from "./types.js";

export const DialogContext = createContext<DialogContextType | undefined>(
  undefined
);

export const useDialogContext = (): DialogContextType => {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error("useDialogContext must be used within DialogProvider");
  }
  return context;
};
