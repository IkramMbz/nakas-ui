import { Theme } from "src/types.js";
export declare const isValidHexColor: (color: string) => boolean;
export declare const validateTheme: (theme: unknown) => theme is Theme;
export declare const sanitizeTheme: (theme: Theme, defaultTheme: Theme) => Theme;
export declare const serializeTheme: (theme: Theme) => string;
export declare const deserializeTheme: (cookieValue: string | null) => Theme | null;
//# sourceMappingURL=theme-validation.d.ts.map