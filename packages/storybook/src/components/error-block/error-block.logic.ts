import { DEFAULT_ERROR_BLOCK_OPTIONS } from "./error-block.types.js";
import type {
  ErrorBlockState,
  ErrorBlockStateOptions,
} from "./error-block.types.js";

export function getErrorBlockScriptContent(
  uid: string,
  duration: number
): string {
  return `
    (function() {
      setTimeout(() => {
        const el = document.getElementById('${uid}');
        if (!el) return;
        el.style.transition = 'opacity 300ms ease';
        el.style.opacity = '0';
        setTimeout(() => el.remove(), 300);
      }, ${duration});
    })();
  `;
}

export function getErrorBlockState(
  options: ErrorBlockStateOptions = {}
): ErrorBlockState {
  const resolved = { ...DEFAULT_ERROR_BLOCK_OPTIONS, ...options };

  return {
    className: "nakas-error-block flex items-center gap-2",
    autoDismiss: !resolved.infiniteDuration,
    duration: resolved.duration,
  };
}
