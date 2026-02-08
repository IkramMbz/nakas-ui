import { FONT_URLS } from "./constants.js";
export const isValidHexColor = (color) => {
    return /^#([0-9A-Fa-f]{3}){1,2}$/.test(color);
};
export const validateTheme = (theme) => {
    if (!theme || typeof theme !== "object")
        return false;
    const t = theme;
    if (!t.name || typeof t.name !== "string")
        return false;
    if (!t.light?.colors || !t.dark?.colors)
        return false;
    const requiredColors = [
        "primary-accent",
        "secondary-accent",
        "background",
        "nega-background",
        "bold-color",
        "primary-color",
        "secondary-color",
    ];
    for (const color of requiredColors) {
        const lightColor = t.light.colors[color];
        const darkColor = t.dark.colors[color];
        if (!lightColor ||
            typeof lightColor !== "string" ||
            !isValidHexColor(lightColor)) {
            return false;
        }
        if (!darkColor ||
            typeof darkColor !== "string" ||
            !isValidHexColor(darkColor)) {
            return false;
        }
    }
    return true;
};
export const sanitizeTheme = (theme, defaultTheme) => {
    const sanitized = { ...theme };
    if (sanitized.fonts?.body && !FONT_URLS[sanitized.fonts.body]) {
        sanitized.fonts.body = "Lato";
    }
    if (sanitized.fonts?.heading && !FONT_URLS[sanitized.fonts.heading]) {
        sanitized.fonts.heading = "Poppins";
    }
    if (!sanitized.fontProperties) {
        sanitized.fontProperties = {
            body: { weight: "400", style: "normal", display: "swap" },
            heading: { weight: "600", style: "normal", display: "swap" },
            sizeMultiplier: 1,
        };
    }
    if (!sanitized.breakpoints) {
        sanitized.breakpoints = defaultTheme.breakpoints;
    }
    return sanitized;
};
export const serializeTheme = (theme) => {
    try {
        return JSON.stringify({
            name: theme.name,
            author: theme.author,
            authorUrl: theme.authorUrl,
            light: theme.light,
            dark: theme.dark,
            fonts: theme.fonts,
            fontProperties: theme.fontProperties,
            borderRadius: theme.borderRadius,
            spacing: theme.spacing,
            breakpoints: theme.breakpoints,
        });
    }
    catch {
        return "";
    }
};
export const deserializeTheme = (cookieValue) => {
    if (!cookieValue)
        return null;
    try {
        const parsed = JSON.parse(cookieValue);
        if (!parsed.name || !parsed.light?.colors || !parsed.dark?.colors) {
            return null;
        }
        return parsed;
    }
    catch {
        return null;
    }
};
//# sourceMappingURL=theme-validation.js.map