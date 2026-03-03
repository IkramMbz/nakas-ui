import { DEFAULT_TOAST_OPTIONS } from "./toast.types.js";
import type { ToastState, ToastStateOptions } from "./toast.types.js";

function cn(...classes: (string | false | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function getToastScriptContent(uid: string, duration: number): string {
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

export function getToastState(options: ToastStateOptions = {}): ToastState {
  const resolved = { ...DEFAULT_TOAST_OPTIONS, ...options };
  const { type, description, infiniteDuration, duration, className } = resolved;

  return {
    className: cn(
      "nakas-toast nakas-toast-content nakas-card",
      `nakas-toast-${type}`,
      className
    ),
    iconClassName: cn("nakas-toast-icon", `nakas-toast-icon-${type}`),
    hasDescription: Boolean(description),
    autoDismiss: !infiniteDuration,
    duration,
  };
}
