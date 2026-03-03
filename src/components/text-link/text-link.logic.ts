import type { TextLinkState, TextLinkStateOptions } from "./text-link.types.js";

function cn(...classes: (string | false | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function getTextLinkState(
  options: TextLinkStateOptions = {}
): TextLinkState {
  const { href = "#", external = false, size, color, className } = options;

  return {
    href,
    target: external ? '_blank" rel="noopener noreferrer' : "",
    className: cn("nakas-text-link", size && `nakas-text-${size}`, className),
    color,
    showExternalIcon: external,
  };
}
