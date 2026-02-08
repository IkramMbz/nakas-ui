"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { ArrowBigUp } from "lucide-react";
import { useEffect, useState } from "react";
const SCROLL_TOP_OFFSET = 256;
const ScrollToTop = ({ children, className = "", size = "md", }) => {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const onScroll = () => {
            setVisible(window.scrollY > SCROLL_TOP_OFFSET);
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    if (!visible)
        return null;
    return (_jsx("button", { onClick: scrollToTop, className: `button-default nakas-scroll-to-top-button nakas-stt-button-${size} ${className}`, "aria-label": "Scroll to top", children: !children ? _jsx(ArrowBigUp, { size: 20 }) : children }));
};
export default ScrollToTop;
//# sourceMappingURL=scroll-to-top.js.map