"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import clsx from "clsx";
import { motion } from "framer-motion";
const Card = ({ children, className = "", gap = "1rem", padding = "1rem", animated = false, backgroundColor = "var(--color-nega-bold-color)", color = "var(--color-primary-color)", loading = false, flexDirection = "column", ...props }) => {
    const styles = {
        ...(flexDirection === "column" ? { flexDirection: "column" } : {}),
        ...(backgroundColor ? { backgroundColor } : {}),
        ...(color ? { color } : {}),
        ...(padding ? { padding } : {}),
        ...(gap ? { gap } : {}),
    };
    const baseClassName = clsx("nakas-card", loading && "loading pulse", className);
    if (animated) {
        return (_jsx(motion.div, { className: baseClassName, style: styles, initial: { y: 50, opacity: 0 }, whileInView: { y: 0, opacity: 1 }, viewport: { once: true }, transition: {
                type: "spring",
                stiffness: 320,
                damping: 70,
                mass: 1,
            }, children: children }));
    }
    return (_jsx("div", { className: baseClassName, style: styles, ...props, children: children }));
};
export default Card;
//# sourceMappingURL=card.js.map