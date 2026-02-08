import { Theme, ThemeMode } from "../../types.js";
export declare function generateHydrationScript(defaultTheme: Theme): string;
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
//# sourceMappingURL=theme-hydration.d.ts.map