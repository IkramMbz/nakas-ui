import { DEFAULT_COUNT_UP_OPTIONS } from "./count-up.types.js";
import type { CountUpState, CountUpStateOptions } from "./count-up.types.js";

export function getCountUpState(
  options: CountUpStateOptions = {}
): CountUpState {
  const { from, to, duration, delay, direction, separator } = {
    ...DEFAULT_COUNT_UP_OPTIONS,
    ...options,
  };

  return {
    startValue: direction === "down" ? to : from,
    endValue: direction === "down" ? from : to,
    durationMs: duration * 1000,
    delayMs: delay * 1000,
    useSeparator: Boolean(separator),
  };
}

export function getCountUpScriptContent(
  id: string,
  state: CountUpState
): string {
  const { startValue, endValue, durationMs, delayMs, useSeparator } = state;
  return `
      (function() {
        function runCountUp(id, from, to, duration, sep, delay) {
          setTimeout(function() {
            var el = document.getElementById(id);
            if (!el) return;
            var start = performance.now();
            var range = to - from;
            function fmt(n) {
              var r = Math.round(n);
              return sep ? r.toLocaleString('en-US') : String(r);
            }
            function step(now) {
              var t = Math.min((now - start) / duration, 1);
              var ease = t < 0.5 ? 2*t*t : -1+(4-2*t)*t;
              el.textContent = fmt(from + range * ease);
              if (t < 1) requestAnimationFrame(step);
              else el.textContent = fmt(to);
            }
            requestAnimationFrame(step);
          }, delay || 0);
        }
        function init() {
          runCountUp('${id}', ${startValue}, ${endValue}, ${durationMs}, ${useSeparator}, ${delayMs});
        }
        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', init);
        } else {
          init();
        }
        window['__replay_${id}'] = function() {
          runCountUp('${id}', ${startValue}, ${endValue}, ${durationMs}, ${useSeparator}, ${delayMs});
        };
      })();
  `;
}
