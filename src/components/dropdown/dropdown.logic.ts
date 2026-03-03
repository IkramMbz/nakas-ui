import { DEFAULT_DROPDOWN_OPTIONS } from "./dropdown.types.js";
import type { DropdownState, DropdownStateOptions } from "./dropdown.types.js";

function cn(...classes: (string | false | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function getDropdownState(
  options: DropdownStateOptions = {}
): DropdownState {
  const resolved = { ...DEFAULT_DROPDOWN_OPTIONS, ...options };
  const { placement, size, className } = resolved;

  return {
    className: cn("nakas-dropdown", className),
    triggerClassName: cn(
      "nakas-dropdown-trigger",
      `nakas-dropdown-trigger-${size}`,
      `nakas-text-${size}`
    ),
    menuClassName: cn(
      "nakas-dropdown-menu nakas-card",
      `nakas-dropdown-menu-${placement}`,
      `nakas-dropdown-menu-${size}`
    ),
  };
}

export function getDropdownScriptContent(uid: string): string {
  return `
    (function() {
      if (!window.openDropdown) {
        window.openDropdown = function(id) {
          document.getElementById(id).classList.add('nakas-dropdown-open');
          document.getElementById(id + '-menu').classList.add('nakas-dropdown-menu-open');
        };
      }

      if (!window.closeDropdown) {
        window.closeDropdown = function(id) {
          document.getElementById(id).classList.remove('nakas-dropdown-open');
          document.getElementById(id + '-menu').classList.remove('nakas-dropdown-menu-open');
        };
      }

      function init() {
        const dropdown = document.getElementById('${uid}');
        if (!dropdown) return;

        function handler(e) {
          if (!dropdown.contains(e.target)) {
            window.closeDropdown('${uid}');
          }
        }

        document.addEventListener('click', handler);

        window['__removeDropdownListener_${uid}'] = () => {
          document.removeEventListener('click', handler);
        };
      }

      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
      } else {
        init();
      }
    })();
  `;
}
