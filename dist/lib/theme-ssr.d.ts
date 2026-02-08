import { Theme, ThemeMode } from "src/types.js";
export declare function generateHydrationScript(defaultTheme: Theme, appPrefix: string): string;
/**
 * Génère les styles CSS inline pour le SSR
 * @param theme - Thème à appliquer
 * @param mode - Mode clair ou sombre
 * @returns Chaîne CSS à injecter dans <style>
 */
export declare function generateSSRStyles(theme: Theme, mode: ThemeMode): string;
export declare function generateFontPreloadLinks(theme: Theme): Array<{
    href: string;
    as: string;
    rel: string;
}>;
export declare function generateFontStyleLinks(theme: Theme): Array<{
    href: string;
    rel: string;
}>;
//# sourceMappingURL=theme-ssr.d.ts.map