const WCAG_THRESHOLDS = {
    AA_NORMAL: 4.5,
    AA_LARGE: 3,
    AAA_NORMAL: 7,
    AAA_LARGE: 4.5,
};
export const hexToRgb = (hex) => {
    let cleaned = hex.replace("#", "");
    if (cleaned.length === 3) {
        cleaned =
            cleaned[0] +
                cleaned[0] +
                cleaned[1] +
                cleaned[1] +
                cleaned[2] +
                cleaned[2];
    }
    return {
        r: parseInt(cleaned.substring(0, 2), 16),
        g: parseInt(cleaned.substring(2, 4), 16),
        b: parseInt(cleaned.substring(4, 6), 16),
    };
};
export const getContrastColor = (hexColor) => {
    if (!hexColor)
        return "#000000";
    const { r, g, b } = hexToRgb(hexColor);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 125 ? "#000000" : "#ffffff";
};
const relativeLuminance = (r, g, b) => {
    const gammaCorrect = (c) => c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    const R_lin = gammaCorrect(r / 255);
    const G_lin = gammaCorrect(g / 255);
    const B_lin = gammaCorrect(b / 255);
    return 0.2126 * R_lin + 0.7152 * G_lin + 0.0722 * B_lin;
};
const contrastRatio = (rgbA, rgbB) => {
    const L1 = relativeLuminance(rgbA.r, rgbA.g, rgbA.b);
    const L2 = relativeLuminance(rgbB.r, rgbB.g, rgbB.b);
    const lighter = Math.max(L1, L2);
    const darker = Math.min(L1, L2);
    return (lighter + 0.05) / (darker + 0.05);
};
export const checkContrastText = (fg, bg) => {
    const ratio = contrastRatio(fg, bg);
    return {
        ratio,
        AA_NORMAL: ratio >= WCAG_THRESHOLDS.AA_NORMAL,
        AA_LARGE: ratio >= WCAG_THRESHOLDS.AA_LARGE,
        AAA_NORMAL: ratio >= WCAG_THRESHOLDS.AAA_NORMAL,
        AAA_LARGE: ratio >= WCAG_THRESHOLDS.AAA_LARGE,
    };
};
export const auditResultExplanation = (contrast) => {
    const { ratio, AAA_NORMAL, AAA_LARGE, AA_NORMAL } = contrast;
    if (AAA_NORMAL) {
        return {
            icon: "🟢",
            level: "Perfect",
            message: "Readable by everyone",
            detail: `Excellent contrast (${ratio.toFixed(1)}x more visible)`,
        };
    }
    if (AAA_LARGE) {
        return {
            icon: "🟢",
            level: "Very Good",
            message: "Readable by most people",
            detail: "OK for large text, improve for small text",
        };
    }
    if (AA_NORMAL) {
        return {
            icon: "🟡",
            level: "Fair",
            message: "Acceptable but can be improved",
            detail: "Some people may have difficulty reading",
        };
    }
    return {
        icon: "🔴",
        level: "Problematic",
        message: "Difficult to read for many people",
        detail: ratio < 2
            ? "Increase contrast significantly"
            : "Increase contrast slightly",
    };
};
//# sourceMappingURL=colors-functions.js.map