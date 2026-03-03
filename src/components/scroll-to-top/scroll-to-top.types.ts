import type { ElementSize } from "@/lib/types";

export interface ScrollToTopStateOptions {
  children?: unknown;
  size?: ElementSize;
  className?: string;
}

export interface ScrollToTopState {
  className: string;
  iconSize: number;
}

export const ICON_SIZES: Record<ElementSize, number> = {
  xs: 14,
  sm: 16,
  md: 18,
  lg: 20,
  xl: 22,
};

export const DEFAULT_SCROLL_TO_TOP_OPTIONS: Required<ScrollToTopStateOptions> =
  {
    children: "",
    size: "md",
    className: "",
  };
