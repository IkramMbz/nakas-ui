import { cn } from "../../lib/utils.js";
import { DEFAULT_DIALOG_OPTIONS } from "./dialog.types.js";
import type { DialogState, DialogStateOptions } from "./dialog.types.js";

export function getDialogState(
  options: DialogStateOptions = {
    children: "",
  }
): DialogState {
  const resolved = { ...DEFAULT_DIALOG_OPTIONS, ...options };
  const { children, className } = resolved;

  return {
    children: children ?? "",
    className: cn("nakas-dialog", className),
  };
}
