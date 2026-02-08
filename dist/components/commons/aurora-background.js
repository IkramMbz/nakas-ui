import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from "clsx";
const AuroraBackground = ({ children, lowOpacity = false, className = "", showRadialGradient = false, flexDirection = "column", ...props }) => {
    return (_jsxs("div", { className: clsx("nakas-aurora-container", className), ...props, children: [_jsx("div", { className: "nakas-aurora-overlay", style: { opacity: !lowOpacity ? 0.9 : 0.3 } }), _jsx("div", { className: "nakas-aurora", style: {
                    ...(showRadialGradient && {
                        maskImage: "radial-gradient(ellipse at 100% 0%, #000 10%, transparent 70%)",
                        WebkitMaskImage: "radial-gradient(ellipse at 100% 0%, #000 10%, transparent 70%)", // pour Safari
                    }),
                } }), children && (_jsx("div", { className: clsx(flexDirection === "column" ? "flex-col" : ""), children: children }))] }));
};
export default AuroraBackground;
//# sourceMappingURL=aurora-background.js.map