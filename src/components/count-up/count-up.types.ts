export interface CountUpStateOptions {
  from?: number;
  to?: number;
  duration?: number;
  delay?: number;
  direction?: "up" | "down";
  separator?: string;
  className?: string;
}

export interface CountUpState {
  startValue: number;
  endValue: number;
  durationMs: number;
  delayMs: number;
  useSeparator: boolean;
}

export const DEFAULT_COUNT_UP_OPTIONS: Required<CountUpStateOptions> = {
  from: 0,
  to: 100,
  duration: 2,
  delay: 0,
  direction: "up",
  separator: "",
  className: "",
};
