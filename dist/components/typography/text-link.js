"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import clsx from "clsx";
import { motion } from "framer-motion";
const TextLink = ({ children, href, size = "md", className = "", external = false, animated = false, }) => {
    if (external && animated) {
        return (_jsx(motion.a, { href: href, target: "_blank", rel: "noopener noreferrer", className: clsx("nakas-text-link", className), initial: { opacity: 0, y: 8 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.4, ease: "easeOut" }, children: children }));
    }
    if (external) {
        return (_jsx("a", { href: href, target: "_blank", rel: "noopener noreferrer", className: clsx("nakas-text-link", `text-${size}`, className), children: children }));
    }
    if (animated) {
        return (_jsx(motion.a, { href: href, className: clsx("nakas-text-link", `text-${size}`, className), initial: { opacity: 0, y: 8 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.4, ease: "easeOut" }, children: children }));
    }
    return (_jsx("a", { href: href, className: clsx("nakas-text-link", `text-${size}`, className), children: children }));
};
export default TextLink;
//# sourceMappingURL=text-link.js.map