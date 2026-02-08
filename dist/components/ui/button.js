import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from "clsx";
import { LoaderCircle } from "lucide-react";
const Button = ({ children, variant = "default", size = "md", className = "", backgroundColor, color, loading = false, fullWidth = false, ...props }) => {
    return (_jsxs("button", { type: "button", className: clsx("nakas-button", `button-${size}`, `button-${variant}`, loading && "loading", className), style: {
            ...(backgroundColor ? { backgroundColor } : {}),
            ...(color ? { color } : {}),
            ...(!fullWidth ? { width: "fit-content" } : { width: "100%" }),
        }, ...props, children: [loading && _jsx(LoaderCircle, { size: 20, className: "spin" }), children] }));
};
export default Button;
//# sourceMappingURL=button.js.map