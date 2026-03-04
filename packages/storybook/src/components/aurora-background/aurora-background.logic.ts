import { cn } from "../../lib/utils.js";
import { DEFAULT_AURORA_OPTIONS } from "./aurora-background.types.js";
import type {
  AuroraState,
  AuroraStateOptions,
} from "./aurora-background.types.js";

export function getAuroraState(options: AuroraStateOptions = {}): AuroraState {
  const resolved = { ...DEFAULT_AURORA_OPTIONS, ...options };
  const { lowOpacity, showRadialGradient, className } = resolved;

  const overlayOpacity = lowOpacity ? "0.05" : "0.15";
  const radialGradient = showRadialGradient
    ? "background: radial-gradient(ellipse at center, rgba(124,108,252,0.3) 0%, transparent 70%);"
    : "";

  return {
    className: cn("nakas-aurora-container", className),
    overlayStyle: `opacity: ${overlayOpacity}; ${radialGradient}`,
    auroraStyle: lowOpacity ? "opacity: 0.3;" : "",
  };
}
