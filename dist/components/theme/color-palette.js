"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Copy } from "lucide-react";
import { useContext } from "react";
import { ThemeContext } from "./theme-provider.js";
import BodyText from "../typography/body-text.js";
export const getContrastColor = (hexColor) => {
    if (!hexColor)
        return "#000000";
    const color = hexColor.replace("#", "");
    const r = parseInt(color.substring(0, 2), 16);
    const g = parseInt(color.substring(2, 4), 16);
    const b = parseInt(color.substring(4, 6), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 125 ? "#000000" : "#ffffff";
};
const ColorPalette = () => {
    const context = useContext(ThemeContext);
    if (!context)
        return null;
    const { effectiveMode } = context;
    const colors = context.currentTheme[effectiveMode].colors;
    return (_jsx("div", { className: "color-palette", children: Object.entries(colors).map(([key, value]) => (_jsxs("div", { className: "color-item", children: [_jsxs("div", { className: "color-swatch", style: {
                        backgroundColor: value,
                        color: getContrastColor(value),
                    }, onClick: () => navigator.clipboard.writeText(value), title: "Click to copy", children: [_jsx(Copy, { size: 20 }), _jsx("span", { children: "Copy" })] }), _jsxs("div", { className: "color-info", children: [_jsx(BodyText, { size: "sm", style: { color: colors["primary-color"] }, children: key }), _jsx(BodyText, { size: "sm", style: { color: colors["primary-color"] }, children: value })] })] }, key))) }));
};
export default ColorPalette;
//# sourceMappingURL=color-palette.js.map