export interface ErrorBlockStateOptions {
  error?: string;
  showIcon?: boolean;
  infiniteDuration?: boolean;
  duration?: number;
}

export interface ErrorBlockState {
  className: string;
  autoDismiss: boolean;
  duration: number;
}

export const DEFAULT_ERROR_BLOCK_OPTIONS: Required<ErrorBlockStateOptions> = {
  error: "An error occurred",
  showIcon: true,
  infiniteDuration: true,
  duration: 5000,
};
