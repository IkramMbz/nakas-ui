import type { ElementSize } from "../../lib/types";

export interface TextLinkStateOptions {
  href?: string;
  external?: boolean;
  size?: ElementSize;
  color?: string;
  className?: string;
}

export interface TextLinkState {
  href: string;
  target: string;
  className: string;
  color?: string;
  showExternalIcon: boolean;
}
