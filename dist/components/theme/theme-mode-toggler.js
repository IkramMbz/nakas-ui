"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { Sun, Moon } from "lucide-react";
import { useContext } from "react";
import { ThemeContext } from "./theme-provider.js";
import Toggler from "../ui/toggler.js";
const ThemeModeToggler = () => {
    const context = useContext(ThemeContext);
    if (!context)
        return null;
    const { currentMode, toggleMode, isHydrated } = context;
    if (!isHydrated)
        return null;
    return (_jsx(Toggler, { value: currentMode === "light", onChange: toggleMode, leftIcon: _jsx(Sun, { size: 20, className: "text-bold-color" }), rightIcon: _jsx(Moon, { size: 20, className: "text-bold-color" }), trackClassName: "bg-accent", thumbClassName: "bg-nega-bold-color" }));
};
export default ThemeModeToggler;
//# sourceMappingURL=theme-mode-toggler.js.map