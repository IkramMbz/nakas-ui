export interface SectionStateOptions {
  children: unknown;
  fullwidth?: boolean;
  displayGrid?: boolean;
  firstSection?: boolean;
  flexDirection?: "row" | "column";
  animated?: boolean;
  className?: string;
}

export interface SectionState {
  tag: "section";
  className: string;
}

export const DEFAULT_SECTION_OPTIONS: Required<SectionStateOptions> = {
  children: "",
  fullwidth: false,
  displayGrid: false,
  firstSection: false,
  flexDirection: "column",
  animated: false,
  className: "",
};
