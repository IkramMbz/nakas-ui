// Merges class strings
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

// Generates aria attributes from component state
export function getAriaProps(options: {
  disabled?: boolean;
  loading?: boolean;
  expanded?: boolean;
  selected?: boolean;
  required?: boolean;
  invalid?: boolean;
  label?: string;
  describedBy?: string;
}): Record<string, string | boolean | undefined> {
  const attrs: Record<string, string | boolean | undefined> = {};

  if (options.disabled) attrs["aria-disabled"] = true;
  if (options.loading) attrs["aria-busy"] = true;
  if (options.expanded !== undefined) attrs["aria-expanded"] = options.expanded;
  if (options.selected !== undefined) attrs["aria-selected"] = options.selected;
  if (options.required) attrs["aria-required"] = true;
  if (options.invalid) attrs["aria-invalid"] = true;
  if (options.label) attrs["aria-label"] = options.label;
  if (options.describedBy) attrs["aria-describedby"] = options.describedBy;

  return attrs;
}

export const hexToRgb = (hex: string): { r: number; g: number; b: number } => {
  let h = hex.replace("#", "");
  if (h.length === 3) h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
  return {
    r: parseInt(h.slice(0, 2), 16),
    g: parseInt(h.slice(2, 4), 16),
    b: parseInt(h.slice(4, 6), 16),
  };
};

export const getContrastColor = (hex: string): string => {
  const { r, g, b } = hexToRgb(hex);
  return (r * 299 + g * 587 + b * 114) / 1000 > 125 ? "#000000" : "#ffffff";
};

// Returns the correct HTML element tag for a polymorphic component
export function resolveTag<T extends string>(
  as: T | undefined,
  defaultTag: string
): string {
  return as ?? defaultTag;
}
