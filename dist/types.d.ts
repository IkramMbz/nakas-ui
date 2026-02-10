export declare const ELEMENT_SIZES: readonly ["xs", "sm", "md", "lg", "xl"];
export type ElementSize = (typeof ELEMENT_SIZES)[number];
export type ThemeMode = "light" | "dark";
type ThemeAttribut = {
    colors: {
        "primary-accent": string;
        "secondary-accent": string;
        background: string;
        "nega-background": string;
        "bold-color": string;
        "primary-color": string;
        "secondary-color": string;
        "nega-bold-color": string;
        "nega-primary-color": string;
        "nega-secondary-color": string;
    };
};
export type Theme = {
    name: string;
    author: string;
    authorUrl: string;
    light: ThemeAttribut;
    dark: ThemeAttribut;
    fonts: {
        body: string;
        heading: string;
    };
    fontProperties: {
        body: {
            weight: string;
            style: string;
            display: string;
        };
        heading: {
            weight: string;
            style: string;
            display: string;
        };
        sizeMultiplier: number;
    };
    borderRadius: string;
    spacing: string;
    breakpoints: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
        "2xl": string;
    };
};
export type ColorContrastAuditResult = {
    ratio: number;
    AA_NORMAL: boolean;
    AA_LARGE: boolean;
    AAA_NORMAL: boolean;
    AAA_LARGE: boolean;
};
export {};
//# sourceMappingURL=types.d.ts.map