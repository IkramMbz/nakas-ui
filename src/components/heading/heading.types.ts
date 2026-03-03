import { ELEMENT_SIZES } from "../../lib/types";

export const HEADING_SIZES = [...ELEMENT_SIZES, "2xl"] as const;
export type HeadingSize = (typeof HEADING_SIZES)[number];

export const HEADING_TYPES = ["h1", "h2", "h3", "h4", "h5", "h6"] as const;
export type HeadingType = (typeof HEADING_TYPES)[number];

export const DEFAULT_HEADING_SIZE: Record<HeadingType, HeadingSize> = {
  h1: "2xl",
  h2: "xl",
  h3: "lg",
  h4: "md",
  h5: "sm",
  h6: "xs",
};

export interface HeadingStateOptions {
  type?: HeadingType;
  size?: HeadingSize;
  color?: string;
  className?: string;
}

export interface HeadingState {
  tag: HeadingType;
  className: string;
  color?: string;
}
