import { FONT_URLS } from "./constants.js";
export function generateHydrationScript(defaultTheme, appPrefix) {
    const themeCookieName = `${appPrefix}-nakas-theme`;
    const modeCookieName = `${appPrefix}-nakas-theme-mode`;
    const defaultThemeJSON = JSON.stringify(defaultTheme);
    return `
(function() {
  try {
    function getCookie(name) {
      var cookies = document.cookie.split(";");
      for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.startsWith(name + "=")) {
          return decodeURIComponent(cookie.substring(name.length + 1));
        }
      }
      return null;
    }
    
    function resolveMode(mode) {
      if (mode === "light" || mode === "dark") return mode;
      if (mode === "system" || !mode) {
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      }
      return "light";
    }

    function applyColors(colors, root, body) {
      Object.entries(colors).forEach(function(entry) {
        root.style.setProperty("--color-" + entry[0], entry[1]);
      });
      root.style.backgroundColor = colors.background;
      root.style.color = colors["primary-color"];
      body.style.backgroundColor = colors.background;
      body.style.color = colors["primary-color"];
    }

    var themeCookie = getCookie("${themeCookieName}");
    var modeCookie = getCookie("${modeCookieName}") || "system";
    
    var theme;
    try {
      theme = themeCookie ? JSON.parse(themeCookie) : ${defaultThemeJSON};
    } catch (e) {
      theme = ${defaultThemeJSON};
    }
    
    var effectiveMode = resolveMode(modeCookie);
    var colors = theme[effectiveMode].colors;
    var root = document.documentElement;
    var body = document.body;

    applyColors(colors, root, body);

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
      Object.entries(theme.breakpoints).forEach(function(entry) {
        root.style.setProperty("--breakpoint-" + entry[0], entry[1]);
      });
    }

    root.setAttribute("data-theme-hydrated", "true");
    root.setAttribute("data-theme-mode", modeCookie);
    root.setAttribute("data-effective-mode", effectiveMode);

    if (modeCookie === "system") {
      var mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      mediaQuery.addEventListener("change", function(e) {
        var newMode = e.matches ? "dark" : "light";
        var newColors = theme[newMode].colors;
        applyColors(newColors, root, body);
        root.setAttribute("data-effective-mode", newMode);
      });
    }
  } catch (error) {
    console.error("[nakas-ui] Theme hydration failed:", error);
  }
})();
`.trim();
}
/**
 * Génère les styles CSS inline pour le SSR
 * @param theme - Thème à appliquer
 * @param mode - Mode clair ou sombre
 * @returns Chaîne CSS à injecter dans <style>
 */
export function generateSSRStyles(theme, mode) {
    const colors = theme[mode].colors;
    const colorVars = Object.entries(colors)
        .map(([key, value]) => `  --color-${key}: ${value};`)
        .join("\n");
    const breakpointVars = theme.breakpoints
        ? Object.entries(theme.breakpoints)
            .map(([key, value]) => `  --breakpoint-${key}: ${value};`)
            .join("\n")
        : "";
    return `
:root {
${colorVars}
  --font-family-heading: ${theme.fonts.heading || "Poppins"};
  --font-family-body: ${theme.fonts.body || "Lato"};
  --font-weight-body: ${theme.fontProperties.body.weight};
  --font-style-body: ${theme.fontProperties.body.style};
  --font-display-body: ${theme.fontProperties.body.display};
  --font-weight-heading: ${theme.fontProperties.heading.weight};
  --font-style-heading: ${theme.fontProperties.heading.style};
  --font-display-heading: ${theme.fontProperties.heading.display};
  --border-radius: ${theme.borderRadius};
  --spacing: ${theme.spacing};
${breakpointVars}
}

html {
  background-color: var(--color-background);
  color: var(--color-primary-color);
}

body {
  background-color: var(--color-background);
  color: var(--color-primary-color);
  font-family: var(--font-family-body);
  font-weight: var(--font-weight-body);
  margin: 0;
}
`.trim();
}
export function generateFontPreloadLinks(theme) {
    const fonts = new Set([theme.fonts.heading, theme.fonts.body]);
    const links = [];
    fonts.forEach((font) => {
        const url = FONT_URLS[font];
        if (url) {
            links.push({
                rel: "preload",
                href: url,
                as: "style",
            });
        }
    });
    return links;
}
export function generateFontStyleLinks(theme) {
    const fonts = new Set([theme.fonts.heading, theme.fonts.body]);
    const links = [];
    fonts.forEach((font) => {
        const url = FONT_URLS[font];
        if (url) {
            links.push({
                rel: "stylesheet",
                href: url,
            });
        }
    });
    return links;
}
//# sourceMappingURL=theme-ssr.js.map