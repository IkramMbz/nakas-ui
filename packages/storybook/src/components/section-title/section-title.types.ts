export interface SectionTitleStateOptions {
  label?: string;
  heading?: string;
  description?: string;
  buttonLabel?: string;
  buttonHref?: string;
  flexRow?: boolean;
  appIcon?: string;
  btnClassName?: string;
  className?: string;
}

export interface SectionTitleState {
  className: string;
  btnClassName: string;
  wrapperClassName: string;
  hasLabel: boolean;
  hasDescription: boolean;
  hasButton: boolean;
}

export const DEFAULT_SECTION_TITLE_OPTIONS: Required<SectionTitleStateOptions> =
  {
    label: "",
    heading: "Section Title",
    description: "",
    buttonLabel: "",
    buttonHref: "#",
    flexRow: false,
    appIcon: "",
    btnClassName: "nakas-btn-default nakas-btn-xs",
    className: "",
  };
