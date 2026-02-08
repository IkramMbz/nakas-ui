"use client";
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useContext } from "react";
import { ThemeContext } from "./theme-provider.js";
import { BodyText, Heading } from "../typography/index.js";
import { Card } from "../ui/index.js";
const ThemeInfo = () => {
    const context = useContext(ThemeContext);
    if (!context)
        return null;
    return (_jsxs(Card, { backgroundColor: "var(--color-accent)", color: "text-center text-primary-color", gap: "gap-2", children: [_jsxs(Heading, { type: "h2", children: ["Th\u00E8me \u00AB ", context.currentTheme.name, " \u00BB"] }), context.currentTheme.author && (_jsxs(BodyText, { className: "mx-auto", children: ["Par", " ", context.currentTheme.authorUrl ? (_jsx("a", { href: context.currentTheme.authorUrl, target: "_blank", rel: "noopener noreferrer", children: context.currentTheme.author })) : (context.currentTheme.author)] }))] }));
};
export default ThemeInfo;
//# sourceMappingURL=theme-info.js.map