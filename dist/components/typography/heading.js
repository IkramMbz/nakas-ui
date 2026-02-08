"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import clsx from "clsx";
import { motion } from "framer-motion";
const defaultSizeByType = {
    h1: "xl",
    h2: "lg",
    h3: "md",
    h4: "sm",
};
const Heading = ({ children, className = "", type = "h1", color = "var(--color-primary-color)", animated = false, fullWidth = false, size, ...props }) => {
    let Component = type;
    if (animated) {
        if (type === "h1")
            Component = motion.h1;
        else if (type === "h2")
            Component = motion.h2;
        else if (type === "h3")
            Component = motion.h3;
        else
            Component = motion.h4;
    }
    const animationProps = animated
        ? {
            initial: { y: 120, opacity: 0 },
            whileInView: { y: 0, opacity: 1 },
            viewport: { once: true },
            transition: {
                type: "spring",
                stiffness: 280,
                damping: 70,
                mass: 1,
            },
        }
        : {};
    const finalSize = size || defaultSizeByType[type];
    return (_jsx(Component, { className: clsx("nakas-heading", `heading-${finalSize}`, fullWidth && "w-full", className), ...animationProps, style: { color }, ...props, children: children }));
};
export default Heading;
//# sourceMappingURL=heading.js.map