export interface AuroraStateOptions {
  children?: unknown;
  lowOpacity?: boolean;
  showRadialGradient?: boolean;
  className?: string;
}

export interface AuroraState {
  className: string;
  overlayStyle: string;
  auroraStyle: string;
}

export const DEFAULT_AURORA_OPTIONS: Required<AuroraStateOptions> = {
  children: "",
  lowOpacity: false,
  showRadialGradient: false,
  className: "",
};
