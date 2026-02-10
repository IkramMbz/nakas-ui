"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Copy } from "lucide-react";
import { useContext, useCallback, useMemo } from "react";
import { ThemeContext } from "./theme-provider.js";
import { toast } from "../toast/toast.js";
import { ToastProvider } from "../toast/toast-provider.js";
import BodyText from "../typography/body-text.js";
import ContrastIndicator from "./contrast-indicator.js";
import { checkContrastText, getContrastColor, hexToRgb, } from "../../lib/colors-functions.js";
const EXCLUDE_KEYS = [
    "background",
    "nega-bold-color",
    "nega-primary-color",
    "nega-secondary-color",
];
const ColorPalette = () => {
    const context = useContext(ThemeContext);
    const handleCopy = useCallback(async (value) => {
        try {
            await navigator.clipboard.writeText(value);
            toast.success({
                title: "Copié",
                description: "Code couleur copié dans le presse-papiers",
            });
        }
        catch {
            toast.error({
                title: "Erreur",
                description: "Impossible de copier la couleur",
            });
        }
    }, []);
    const colorEntries = useMemo(() => {
        if (!context)
            return [];
        const { effectiveMode, currentTheme } = context;
        const colors = currentTheme[effectiveMode].colors;
        const bgRgb = hexToRgb(colors["background"]);
        return Object.entries(colors).map(([key, value]) => {
            const colorRgb = hexToRgb(value);
            const textColor = getContrastColor(value);
            const textColorRgb = hexToRgb(textColor);
            return {
                key,
                value,
                bgContrast: checkContrastText(colorRgb, bgRgb), // Couleur vs Background
                textContrast: checkContrastText(textColorRgb, colorRgb), // Texte vs Couleur
                textColor,
                isExcluded: EXCLUDE_KEYS.includes(key),
            };
        });
    }, [context]);
    if (!context)
        return null;
    const primaryColor = context.currentTheme[context.effectiveMode].colors["primary-color"];
    return (_jsx(ToastProvider, { children: _jsx("div", { className: "color-palette", children: colorEntries.map(({ key, value, bgContrast, textContrast, textColor, isExcluded }) => (_jsxs("div", { className: "color-item", children: [_jsx(BodyText, { size: "sm", color: primaryColor, className: "key", children: key }), _jsxs("div", { className: "color-swatch", style: { backgroundColor: value, color: textColor }, onClick: () => handleCopy(value), title: "Cliquer pour copier", children: [_jsx(Copy, { size: 20 }), _jsx("span", { children: value })] }), _jsx("div", { className: "color-info", children: isExcluded ? (_jsx(BodyText, { size: "sm", color: primaryColor, children: "Contrast audit not required" })) : (_jsxs(_Fragment, { children: [_jsx(ContrastIndicator, { title: "Color on Background Contrast Audit:", contrast: bgContrast }), _jsx(ContrastIndicator, { title: "Text on this Color Contrast Audit:", contrast: textContrast })] })) })] }, key))) }) }));
};
export default ColorPalette;
//# sourceMappingURL=color-palette.js.map