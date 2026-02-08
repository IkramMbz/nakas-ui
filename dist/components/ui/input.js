import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from "clsx";
import ErrorBlock from "../ui/error-block.js";
const Input = ({ className = "", type = "text", label, size = "sm", error, required = false, onChange, ...props }) => {
    return (_jsxs("div", { className: "flex-col", children: [label && (_jsxs("label", { children: [label, required && _jsx("span", { className: "nakas-required-indicator", children: "*" })] })), _jsx("input", { type: type, onChange: (e) => onChange?.(e.target.value), className: clsx("nakas-form-field", `nakas-form-item-${size}`, `text-${size}`, error && "error", className), ...props }), error && _jsx(ErrorBlock, { error: error, showIcon: true })] }));
};
export default Input;
//# sourceMappingURL=input.js.map