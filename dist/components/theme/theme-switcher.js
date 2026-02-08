"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from "clsx";
import { Check, Palette } from "lucide-react";
import { useContext } from "react";
import { ThemeContext } from "./theme-provider.js";
import Button from "../ui/button.js";
const ThemeSwitcher = () => {
    const context = useContext(ThemeContext);
    if (!context)
        return null;
    const { currentTheme, effectiveMode, switchTheme, getAllThemes } = context;
    const allThemes = getAllThemes();
    return (_jsx("div", { className: "theme-switcher", children: Object.entries(allThemes).map(([key, theme]) => (_jsxs(Button, { onClick: () => switchTheme(key), className: clsx("theme-switcher-button", currentTheme.name === theme.name && "theme-switcher-button-active"), variant: "primary", backgroundColor: theme[effectiveMode].colors["primary-accent"], color: theme[effectiveMode].colors["nega-bold-color"], children: [_jsxs("div", { className: "theme-switcher-button-content", children: [_jsx(Palette, { size: 20 }), _jsx("span", { className: "theme-switcher-button-name", children: theme.name })] }), currentTheme.name === theme.name && _jsx(Check, { size: 20 })] }, key))) }));
};
export default ThemeSwitcher;
//# sourceMappingURL=theme-switcher.js.map