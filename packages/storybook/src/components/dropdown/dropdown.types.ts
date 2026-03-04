import type { ElementSize } from "@/lib/types";

export type DropdownPlacement = "bottom-start" | "bottom-end" | "bottom-center";

export interface DropdownStateOptions {
  placement?: DropdownPlacement;
  open?: boolean;
  size?: ElementSize;
  className?: string;
}

export interface DropdownState {
  className: string;
  menuClassName: string;
  triggerClassName: string;
}

export const DEFAULT_DROPDOWN_OPTIONS: Required<DropdownStateOptions> = {
  placement: "bottom-start",
  open: false,
  size: "md",
  className: "",
};
