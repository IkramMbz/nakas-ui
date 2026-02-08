"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useCallback, useEffect, useMemo, useState, useRef, } from "react";
import { STORAGE_KEYS } from "../../lib/constants.js";
import { getCookie, setCookie } from "../../lib/cookies.js";
export const ThemeContext = createContext(null);
/**
 * Applique un thème au DOM de manière optimisée
 * Utilise requestAnimationFrame pour éviter les reflows multiples
 */
function applyThemeToDOM(theme, mode) {
    if (typeof window === "undefined")
        return;
    const root = document.documentElement;
    const body = document.body;
    const colors = theme[mode].colors;
    requestAnimationFrame(() => {
        Object.entries(colors).forEach(([key, value]) => {
            root.style.setProperty(`--color-${key}`, value);
        });
        root.style.setProperty("--font-family-heading", theme.fonts.heading || "Poppins");
        root.style.setProperty("--font-family-body", theme.fonts.body || "Lato");
        root.style.setProperty("--font-weight-body", theme.fontProperties.body.weight);
        root.style.setProperty("--font-style-body", theme.fontProperties.body.style);
        root.style.setProperty("--font-display-body", theme.fontProperties.body.display);
        root.style.setProperty("--font-weight-heading", theme.fontProperties.heading.weight);
        root.style.setProperty("--font-style-heading", theme.fontProperties.heading.style);
        root.style.setProperty("--font-display-heading", theme.fontProperties.heading.display);
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
        body.style.backgroundColor = colors.background;
        body.style.color = colors["primary-color"];
        // Data attributes
        root.setAttribute("data-theme-mode", mode);
        root.setAttribute("data-effective-mode", mode);
        root.setAttribute("data-theme-hydrated", "true");
    });
}
export function ThemeProvider({ children, appPrefix, initialTheme, availableThemes = {}, }) {
    const THEME_COOKIE_NAME = appPrefix + "-" + STORAGE_KEYS.THEME_COOKIE;
    const THEME_MODE_COOKIE_NAME = appPrefix + "-" + STORAGE_KEYS.MODE_COOKIE;
    const applyingThemeRef = useRef(false);
    const [isHydrated, setIsHydrated] = useState(false);
    const [currentTheme, setCurrentTheme] = useState(() => {
        if (typeof window === "undefined")
            return initialTheme;
        const raw = getCookie(THEME_COOKIE_NAME);
        if (!raw)
            return initialTheme;
        try {
            return JSON.parse(raw);
        }
        catch {
            return initialTheme;
        }
    });
    const [currentMode, setCurrentMode] = useState(() => {
        if (typeof window === "undefined")
            return "system";
        const mode = getCookie(THEME_MODE_COOKIE_NAME);
        return mode === "light" || mode === "dark" || mode === "system"
            ? mode
            : "system";
    });
    const [effectiveMode, setEffectiveMode] = useState(() => {
        if (typeof window === "undefined")
            return "light";
        if (currentMode === "system") {
            return window.matchMedia("(prefers-color-scheme: dark)").matches
                ? "dark"
                : "light";
        }
        return currentMode;
    });
    // Memoize switchTheme to prevent re-calls
    const switchTheme = useCallback((themeName) => {
        const theme = availableThemes[themeName];
        if (theme) {
            setCurrentTheme(theme);
        }
    }, [availableThemes]);
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
    const setMode = useCallback((mode) => {
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
        if (typeof window === "undefined" || applyingThemeRef.current)
            return;
        applyingThemeRef.current = true;
        setCookie(THEME_MODE_COOKIE_NAME, currentMode);
        const applyMode = (mode) => {
            setEffectiveMode(mode);
            applyThemeToDOM(currentTheme, mode);
        };
        if (currentMode === "system") {
            const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
            const updateMode = () => applyMode(mediaQuery.matches ? "dark" : "light");
            updateMode();
            mediaQuery.addEventListener("change", updateMode);
            applyingThemeRef.current = false;
            return () => {
                mediaQuery.removeEventListener("change", updateMode);
                applyingThemeRef.current = false;
            };
        }
        else {
            applyMode(currentMode);
            applyingThemeRef.current = false;
        }
    }, [currentMode, currentTheme, THEME_MODE_COOKIE_NAME]);
    // Apply theme when changes
    useEffect(() => {
        if (typeof window === "undefined")
            return;
        setCookie(THEME_COOKIE_NAME, JSON.stringify(currentTheme));
        applyThemeToDOM(currentTheme, effectiveMode);
    }, [currentTheme, effectiveMode, THEME_COOKIE_NAME]);
    // Memoize context value to prevent useless re-renders
    const value = useMemo(() => ({
        currentTheme,
        currentMode,
        effectiveMode,
        switchTheme,
        toggleMode,
        setMode,
        getAllThemes,
        isHydrated,
    }), [
        currentTheme,
        currentMode,
        effectiveMode,
        switchTheme,
        toggleMode,
        setMode,
        getAllThemes,
        isHydrated,
    ]);
    return (_jsx(ThemeContext.Provider, { value: value, children: children }));
}
//# sourceMappingURL=theme-provider.js.map