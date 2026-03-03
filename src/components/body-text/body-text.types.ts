import type { ElementSize } from "@/lib/types";

export type BodyTextElement = "p" | "span";

export interface BodyTextStateOptions {
  size?: ElementSize;
  type?: BodyTextElement;
  color?: string;
  fullWidth?: boolean;
  className?: string;
}

export interface BodyTextState {
  className: string;
  style: string;
  tag: BodyTextElement;
}

export const DEFAULT_BODY_TEXT_OPTIONS: Required<BodyTextStateOptions> = {
  size: "md",
  type: "p",
  color: "",
  fullWidth: false,
  className: "",
};
