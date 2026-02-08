"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import clsx from "clsx";
import { motion } from "framer-motion";
const Section = ({ children, fullwidth = false, displayGrid = false, firstSection = false, flexDirection = "column", className = "", animated = false, ...props }) => {
    const baseClassName = clsx("nakas-section", firstSection && "section-first", !displayGrid
        ? flexDirection === "column"
            ? "section-flex-col"
            : "flex"
        : "section-grid", fullwidth && "section-fullwidth", className);
    if (animated) {
        return (_jsx(motion.section, { className: baseClassName, initial: { y: 120, opacity: 0 }, whileInView: { y: 0, opacity: 1 }, viewport: { once: true }, transition: {
                type: "spring",
                stiffness: 280,
                damping: 70,
                mass: 1,
            }, children: children }));
    }
    return (_jsx("section", { className: baseClassName, ...props, children: children }));
};
export default Section;
//# sourceMappingURL=section.js.map