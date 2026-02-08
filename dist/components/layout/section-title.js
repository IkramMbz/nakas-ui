"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from "clsx";
import { motion } from "framer-motion";
import BodyText from "../typography/body-text.js";
import TextLink from "../typography/text-link.js";
const SectionTitle = ({ children, description, flexRow = false, className = "", buttonLabel, buttonHref, label, appIcon, }) => {
    return (_jsxs("div", { className: clsx(!flexRow ? "section-flex-col" : "section-flex-row", className), children: [label && (_jsxs(motion.div, { initial: { y: 120, opacity: 0 }, whileInView: { y: 0, opacity: 1 }, viewport: { once: true }, transition: { type: "spring", stiffness: 320, damping: 70, mass: 1 }, className: "flex-row", children: [_jsx(BodyText, { size: "sm", children: label }), appIcon && _jsx("span", { children: appIcon })] })), children, description && (_jsx(BodyText, { className: "section-title-description", children: description })), buttonLabel && buttonHref && (_jsx(TextLink, { href: buttonHref, className: "section-title-button", children: buttonLabel }))] }));
};
export default SectionTitle;
//# sourceMappingURL=section-title.js.map