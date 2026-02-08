"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useContext } from "react";
import ColorPalette from "./color-palette.js";
import ThemeActions from "./theme-actions.js";
import ThemeInfo from "./theme-info.js";
import ThemeModeToggler from "./theme-mode-toggler.js";
import { ThemeContext } from "./theme-provider.js";
import ThemeSwitcher from "./theme-switcher.js";
import ThemeTypography from "./theme-typography.js";
import { Heading } from "../typography/index.js";
import { Card } from "../ui/index.js";
const ThemeManager = () => {
    const context = useContext(ThemeContext);
    if (!context)
        return null;
    const { getAllThemes } = context;
    const allThemesLength = Object.keys(getAllThemes()).length;
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: "gap-8 grid lg:grid-cols-2", children: [_jsx(ThemeActions, {}), _jsxs(Card, { backgroundColor: "var(--color-bold-color)", children: [_jsxs(Heading, { type: "h2", className: "text-nega-primary-color", children: ["S\u00E9lection du th\u00E8me (", allThemesLength, ")"] }), _jsx(ThemeSwitcher, {})] })] }), _jsx(ThemeInfo, {}), _jsxs("div", { className: "gap-8 grid lg:grid-cols-2", children: [_jsxs(Card, { children: [_jsxs("div", { className: "flex gap-8 items-center justify-between", children: [_jsx(Heading, { type: "h3", children: "Couleurs" }), _jsx(ThemeModeToggler, {})] }), _jsx(ColorPalette, {})] }), _jsxs(Card, { children: [_jsx(Heading, { type: "h3", children: "Police d'\u00E9criture" }), _jsx(ThemeTypography, {})] })] })] }));
};
export default ThemeManager;
//# sourceMappingURL=theme-manager.js.map