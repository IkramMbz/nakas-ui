"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Moon, Sun } from "lucide-react";
import { useContext } from "react";
import BodyText from "../typography/body-text.js";
import { ThemeContext } from "./theme-provider.js";
import Toggler from "../ui/toggler.js";
function ThemeDemoWrapper({ label, children, }) {
    const context = useContext(ThemeContext);
    if (!context)
        return null;
    const { currentMode, toggleMode, isHydrated } = context;
    if (!isHydrated)
        return null;
    const { effectiveMode } = context;
    const colors = context.currentTheme[effectiveMode].colors;
    return (_jsxs("div", { className: "nakas-tdw", style: {
            backgroundColor: colors.background,
            color: colors["primary-color"],
        }, children: [_jsxs("div", { className: "nakas-tdw-header", children: [_jsx(BodyText, { size: "xl", className: "nakas-tdw-title", style: {
                            color: colors["primary-color"],
                        }, children: label }), _jsx(Toggler, { value: currentMode === "light", onChange: toggleMode, leftIcon: _jsx(Sun, { size: 20, className: "text-bold-color" }), rightIcon: _jsx(Moon, { size: 20, className: "text-bold-color" }), backgroundColor: colors["nega-background"], color: colors["nega-bold-color"], trackClassName: "bg-accent", thumbClassName: "bg-nega-bold-color" })] }), children && children] }));
}
export default ThemeDemoWrapper;
//# sourceMappingURL=theme-demo-wrapper.js.map