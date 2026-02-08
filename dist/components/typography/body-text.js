"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import clsx from "clsx";
import { motion } from "framer-motion";
const BodyText = ({ children, className = "", size = "lg", type = "p", color = "var(--color-primary-color)", animated = false, fullWidth = false, ...props }) => {
    let Component = type;
    if (animated) {
        Component = type === "p" ? motion.p : motion.span;
    }
    const animationProps = animated
        ? {
            initial: { y: 120, opacity: 0 },
            whileInView: { y: 0, opacity: 1 },
            viewport: { once: true },
            transition: {
                type: "spring",
                stiffness: 320,
                damping: 70,
                mass: 1,
            },
        }
        : {};
    return (_jsx(Component, { className: clsx("nakas-text", `text-${size}`, fullWidth && "w-full", className), ...animationProps, style: { color }, ...props, children: children }));
};
export default BodyText;
//# sourceMappingURL=body-text.js.map