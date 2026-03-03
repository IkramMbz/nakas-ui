export interface CardStateOptions {
  loading?: boolean;
  flexDirection?: "row" | "column";
  backgroundColor?: string;
  fullWidth?: boolean;
  className?: string;
}

export interface CardState {
  className: string;
  style: string;
}

export const DEFAULT_CARD_OPTIONS: Required<CardStateOptions> = {
  loading: false,
  flexDirection: "column",
  backgroundColor: "",
  fullWidth: false,
  className: "",
};
