import { ColorContrastAuditResult } from "../types.js";
type RgbColor = {
    r: number;
    g: number;
    b: number;
};
export declare const hexToRgb: (hex: string) => RgbColor;
export declare const getContrastColor: (hexColor: string) => string;
export declare const checkContrastText: (fg: RgbColor, bg: RgbColor) => ColorContrastAuditResult;
export declare const auditResultExplanation: (contrast: ColorContrastAuditResult) => {
    icon: string;
    level: string;
    message: string;
    detail: string;
};
export {};
//# sourceMappingURL=colors-functions.d.ts.map