"use client";

import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
  useRef,
} from "react";

import { Theme } from "../../types.js";
import { STORAGE_KEYS } from "../../lib/constants.js";
import { getCookie, setCookie } from "../../lib/cookies.js";

type ThemeContextType = {
  currentTheme: Theme;
  currentMode: "light" | "dark" | "system";
  effectiveMode: "light" | "dark";
  switchTheme: (themeName: string) => void;
  toggleMode: () => void;
  setMode: (mode: "light" | "dark" | "system") => void;
  getAllThemes: () => Record<string, Theme>;
  isHydrated: boolean;
};

type ThemeProviderProps = {
  children: ReactNode;
  appPrefix: string;
  initialTheme: Theme;
  availableThemes?: Record<string, Theme>;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

/**
 * Applique un thème au DOM de manière optimisée
 * Utilise requestAnimationFrame pour éviter les reflows multiples
 */
function applyThemeToDOM(theme: Theme, mode: "light" | "dark"): void {
  if (typeof window === "undefined") return;

  const root = document.documentElement;
  const colors = theme[mode].colors;

  requestAnimationFrame(() => {
    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });

    root.style.setProperty(
      "--font-family-heading",
      theme.fonts.heading || "Poppins"
    );
    root.style.setProperty("--font-family-body", theme.fonts.body || "Lato");

    root.style.setProperty(
      "--font-weight-body",
      theme.fontProperties.body.weight
    );
    root.style.setProperty(
      "--font-style-body",
      theme.fontProperties.body.style
    );
    root.style.setProperty(
      "--font-display-body",
      theme.fontProperties.body.display
    );
    root.style.setProperty(
      "--font-weight-heading",
      theme.fontProperties.heading.weight
    );
    root.style.setProperty(
      "--font-style-heading",
      theme.fontProperties.heading.style
    );
    root.style.setProperty(
      "--font-display-heading",
      theme.fontProperties.heading.display
    );

    root.style.setProperty("--border-radius", theme.borderRadius);
    root.style.setProperty("--spacing", theme.spacing);

    if (theme.breakpoints) {
      Object.entries(theme.breakpoints).forEach(([key, value]) => {
        root.style.setProperty(`--breakpoint-${key}`, value);
      });
    }

    // Direct Style on root and body
    root.style.backgroundColor = colors.background;
    root.style.color = colors["primary-color"];

    const body = document.body;
    if (body) {
      body.style.backgroundColor = colors.background;
      body.style.color = colors["primary-color"];
    }

    // Data attributes
    root.setAttribute("data-theme-mode", mode);
    root.setAttribute("data-effective-mode", mode);
    root.setAttribute("data-theme-hydrated", "true");
  });
}

export function ThemeProvider({
  children,
  appPrefix,
  initialTheme,
  availableThemes = {},
}: ThemeProviderProps): React.ReactElement {
  const THEME_COOKIE_NAME = appPrefix + "-" + STORAGE_KEYS.THEME_COOKIE;
  const THEME_MODE_COOKIE_NAME = appPrefix + "-" + STORAGE_KEYS.MODE_COOKIE;

  const applyingThemeRef = useRef(false);

  const [isHydrated, setIsHydrated] = useState(false);

  const [currentTheme, setCurrentTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return initialTheme;

    const raw = getCookie(THEME_COOKIE_NAME);
    if (!raw) return initialTheme;

    try {
      return JSON.parse(raw);
    } catch {
      return initialTheme;
    }
  });

  const [currentMode, setCurrentMode] = useState<"light" | "dark" | "system">(
    () => {
      if (typeof window === "undefined") return "system";

      const mode = getCookie(THEME_MODE_COOKIE_NAME);
      return mode === "light" || mode === "dark" || mode === "system"
        ? mode
        : "system";
    }
  );

  const [effectiveMode, setEffectiveMode] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") return "light";

    if (currentMode === "system") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return currentMode;
  });

  // Memoize switchTheme to prevent re-calls
  const switchTheme = useCallback(
    (themeName: string) => {
      const theme = availableThemes[themeName];
      if (theme) {
        setCurrentTheme(theme);
      }
    },
    [availableThemes]
  );

  const toggleMode = useCallback(() => {
    setCurrentMode((prev) => {
      const next = prev === "light" ? "dark" : "light";

      // Application immédiate sans attendre le prochain render
      setEffectiveMode(next);
      applyThemeToDOM(currentTheme, next);
      setCookie(THEME_MODE_COOKIE_NAME, next);

      return next;
    });
  }, [currentTheme, THEME_MODE_COOKIE_NAME]);

  const setMode = useCallback((mode: "light" | "dark" | "system") => {
    setCurrentMode(mode);
  }, []);

  const getAllThemes = useCallback(() => availableThemes, [availableThemes]);

  // One time Hydration
  useEffect(() => {
    setIsHydrated(true);

    requestAnimationFrame(() => {
      document.documentElement.classList.add("theme-ready");
      document.body.classList.add("theme-ready");
    });
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || applyingThemeRef.current) return;

    applyingThemeRef.current = true;
    setCookie(THEME_MODE_COOKIE_NAME, currentMode);

    const applyMode = (mode: "light" | "dark"): void => {
      setEffectiveMode(mode);
      applyThemeToDOM(currentTheme, mode);
    };

    if (currentMode === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const updateMode = (): void =>
        applyMode(mediaQuery.matches ? "dark" : "light");

      updateMode();
      mediaQuery.addEventListener("change", updateMode);

      applyingThemeRef.current = false;

      return (): void => {
        mediaQuery.removeEventListener("change", updateMode);
        applyingThemeRef.current = false;
      };
    } else {
      applyMode(currentMode);
      applyingThemeRef.current = false;
    }
  }, [currentMode, currentTheme, THEME_MODE_COOKIE_NAME]);

  // Apply theme when changes
  useEffect(() => {
    if (typeof window === "undefined") return;

    setCookie(THEME_COOKIE_NAME, JSON.stringify(currentTheme));
    applyThemeToDOM(currentTheme, effectiveMode);
  }, [currentTheme, effectiveMode, THEME_COOKIE_NAME]);

  // Memoize context value to prevent useless re-renders
  const value = useMemo<ThemeContextType>(
    () => ({
      currentTheme,
      currentMode,
      effectiveMode,
      switchTheme,
      toggleMode,
      setMode,
      getAllThemes,
      isHydrated,
    }),
    [
      currentTheme,
      currentMode,
      effectiveMode,
      switchTheme,
      toggleMode,
      setMode,
      getAllThemes,
      isHydrated,
    ]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
