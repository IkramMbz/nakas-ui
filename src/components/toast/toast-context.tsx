"use client";

import { createContext, useContext } from "react";

import { ToastContextType } from "./types.js";

export const ToastContext = createContext<ToastContextType | undefined>(
  undefined
);

export const useToastContext = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToastContext must be used within ToastProvider");
  }
  return context;
};
