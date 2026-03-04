import { DEFAULT_HR_OPTIONS } from "./hr.types.js";
import type { HrState, HrStateOptions } from "./hr.types.js";

function cn(...classes: (string | false | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function getHrState(options: HrStateOptions = {}): HrState {
  const resolved = { ...DEFAULT_HR_OPTIONS, ...options };
  return {
    className: cn("nakas-hr", resolved.className),
  };
}
