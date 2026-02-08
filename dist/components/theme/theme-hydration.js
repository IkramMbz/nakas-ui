const FONT_URLS = {
    Inter: "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap",
    Roboto: "https://fonts.googleapis.com/css2?family=Roboto:wght@100..900&display=swap",
    Poppins: "https://fonts.googleapis.com/css2?family=Poppins:wght@100..900&display=swap",
    Montserrat: "https://fonts.googleapis.com/css2?family=Montserrat:wght@100..900&display=swap",
    "Open Sans": "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300..800&display=swap",
    Lato: "https://fonts.googleapis.com/css2?family=Lato:wght@100..900&display=swap",
    Arial: "", // System
};
export function generateHydrationScript(defaultTheme) {
    const themeCookieName = "nakas-theme";
    const modeCookieName = "nakas-mode";
    const defaultThemeJSON = JSON.stringify(defaultTheme);
    return `
(function() {
  try {
    function getCookie(name) {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(name + '=')) {
          return decodeURIComponent(cookie.substring(name.length + 1));
        }
      }
      return null;
    }

    function resolveMode(mode) {
      if (mode === 'light' || mode === 'dark') return mode;
      if (mode === 'system' || !mode) {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      }
      return 'light';
    }

    const themeCookie = getCookie('${themeCookieName}');
    const modeCookie = getCookie('${modeCookieName}') || 'system';
    
    let theme;
    try {
      theme = themeCookie ? JSON.parse(themeCookie) : ${defaultThemeJSON};
    } catch (e) {
      theme = ${defaultThemeJSON};
    }
    
    const effectiveMode = resolveMode(modeCookie);
    const colors = theme[effectiveMode].colors;

    const root = document.documentElement;

    Object.entries(colors).forEach(function(entry) {
      root.style.setProperty('--color-' + entry[0], entry[1]);
    });

    root.style.setProperty('--font-family-heading', theme.fonts.heading || 'Poppins');
    root.style.setProperty('--font-family-body', theme.fonts.body || 'Lato');

    root.style.setProperty('--font-weight-body', theme.fontProperties.body.weight);
    root.style.setProperty('--font-style-body', theme.fontProperties.body.style);
    root.style.setProperty('--font-display-body', theme.fontProperties.body.display);
    root.style.setProperty('--font-weight-heading', theme.fontProperties.heading.weight);
    root.style.setProperty('--font-style-heading', theme.fontProperties.heading.style);
    root.style.setProperty('--font-display-heading', theme.fontProperties.heading.display);

    root.style.setProperty('--boder-radius', theme.borderRadius);
    root.style.setProperty('--spacing', theme.spacing);

    if (theme.breakpoints) {
      Object.entries(theme.breakpoints).forEach(function(entry) {
        root.style.setProperty('--breakpoint-' + entry[0], entry[1]);
      });
    }

    root.style.backgroundColor = colors.background;
    root.style.color = colors['primary-color'];

    root.setAttribute('data-theme-hydrated', 'true');
    root.setAttribute('data-theme-mode', modeCookie);
    root.setAttribute('data-effective-mode', effectiveMode);

    if (modeCookie === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      mediaQuery.addEventListener('change', function(e) {
        const newMode = e.matches ? 'dark' : 'light';
        const newColors = theme[newMode].colors;
        
        Object.entries(newColors).forEach(function(entry) {
          root.style.setProperty('--color-' + entry[0], entry[1]);
        });
        
        root.style.backgroundColor = newColors.background;
        root.style.color = newColors['primary-color'];
        root.setAttribute('data-effective-mode', newMode);
      });
    }
  } catch (error) {
    console.error('[nakas-ui] Theme hydration failed:', error);
  }
})();
`.trim();
}
export function generateSSRStyles(theme, mode) {
    const colors = theme[mode].colors;
    const colorVars = Object.entries(colors)
        .map(([key, value]) => `  --color-${key}: ${value};`)
        .join("\n");
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
  --boder-radius: ${theme.borderRadius};
  --spacing: ${theme.spacing};
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
  transition: background-color 0.2s ease, color 0.2s ease;
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
//# sourceMappingURL=theme-hydration.js.map