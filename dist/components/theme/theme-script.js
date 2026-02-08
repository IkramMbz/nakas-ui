import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { generateHydrationScript, generateSSRStyles, generateFontStyleLinks, } from "../../lib/theme-ssr.js";
export function ThemeScript({ theme, mode = "light", nonce, appPrefix, }) {
    const hydrationScript = generateHydrationScript(theme, appPrefix);
    const ssrStyles = generateSSRStyles(theme, mode);
    const fontLinks = generateFontStyleLinks(theme);
    return (_jsxs(_Fragment, { children: [_jsx("style", { id: "nakas-theme-ssr", dangerouslySetInnerHTML: { __html: ssrStyles }, nonce: nonce }), fontLinks.map((link, index) => (_jsx("link", { rel: link.rel, href: link.href }, `font-${index}`))), _jsx("script", { id: "nakas-theme-hydration", dangerouslySetInnerHTML: { __html: hydrationScript }, nonce: nonce })] }));
}
export function generateThemeScriptHTML(theme, mode = "light", appPrefix = "nakas", nonce) {
    const hydrationScript = generateHydrationScript(theme, appPrefix);
    const ssrStyles = generateSSRStyles(theme, mode);
    const fontLinks = generateFontStyleLinks(theme);
    const nonceAttr = nonce ? ` nonce="${nonce}"` : "";
    const fontsHTML = fontLinks
        .map((link) => `<link rel="${link.rel}" href="${link.href}">`)
        .join("\n");
    return `
<style id="nakas-theme-ssr"${nonceAttr}>
${ssrStyles}
</style>
${fontsHTML}
<script id="nakas-theme-hydration"${nonceAttr}>
${hydrationScript}
</script>
  `.trim();
}
//# sourceMappingURL=theme-script.js.map