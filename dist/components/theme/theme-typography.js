"use client";
import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useContext } from "react";
import BodyText from "../typography/body-text.js";
import Heading from "../typography/heading.js";
import HR from "../ui/hr.js";
import { ThemeContext } from "./theme-provider.js";
const loremIpsum = "Naka ipsum dolor sit amet, consectetur adipiscing elit.";
const ThemeTypography = () => {
    const context = useContext(ThemeContext);
    if (!context)
        return null;
    const { currentTheme } = context;
    return (_jsxs(_Fragment, { children: [_jsxs(Heading, { type: "h1", children: ["Titre H1 - ", currentTheme.fonts.heading] }), _jsxs(Heading, { type: "h2", children: ["Titre H2 - ", currentTheme.fonts.heading] }), _jsxs(Heading, { type: "h3", children: ["Titre H3 - ", currentTheme.fonts.heading] }), _jsx(HR, {}), _jsxs(BodyText, { size: "lg", children: ["Texte principal (Large) - ", currentTheme.fonts.body, " : ", loremIpsum] }), _jsxs(BodyText, { children: ["Texte principal (Base) - ", currentTheme.fonts.body, " : ", loremIpsum] }), _jsxs(BodyText, { size: "sm", children: ["Texte principal (Small) - ", currentTheme.fonts.body, " : ", loremIpsum] }), _jsxs(BodyText, { size: "xs", children: ["Texte principal (xs) - ", currentTheme.fonts.body, " : ", loremIpsum] })] }));
};
export default ThemeTypography;
//# sourceMappingURL=theme-typography.js.map