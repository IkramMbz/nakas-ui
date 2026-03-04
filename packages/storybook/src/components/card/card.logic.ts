import { DEFAULT_CARD_OPTIONS } from "./card.types.js";
import type { CardState, CardStateOptions } from "./card.types.js";

function cn(...classes: (string | false | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function getCardState(options: CardStateOptions = {}): CardState {
  const { loading, flexDirection, backgroundColor, fullWidth, className } = {
    ...DEFAULT_CARD_OPTIONS,
    ...options,
  };

  const style: string[] = [];
  if (!loading && backgroundColor)
    style.push(`background-color:${backgroundColor}`);
  style.push(
    flexDirection === "row"
      ? "flex-direction:row; align-items:center;"
      : "flex-direction:column"
  );
  style.push(fullWidth ? "width:100%" : "width:fit-content");

  return {
    className: cn(
      "nakas-card",
      loading && "nakas-card-skeleton skeleton",
      fullWidth && "w-full",
      className
    ),
    style: style.join(";"),
  };
}
