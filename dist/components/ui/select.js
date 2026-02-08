import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import ErrorBlock from "../ui/error-block.js";
const Select = ({ label, required = false, size = "md", error, value, items, onChange, getItemKey, getItemLabel, className = "", dropdownClassName = "", disabled = false, placeholder = "Select...", ...props }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);
    const selectedKey = value ? getItemKey(value) : null;
    const selectedLabel = useMemo(() => {
        if (!value)
            return placeholder;
        return getItemLabel(value);
    }, [value, getItemLabel, placeholder]);
    useEffect(() => {
        if (!open)
            return;
        const handleClickOutside = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [open]);
    const handleSelect = (item) => {
        onChange?.(item);
        setOpen(false);
    };
    return (_jsxs("div", { className: "flex-col", ref: ref, ...props, children: [label && (_jsxs("label", { children: [label, required && _jsx("span", { className: "nakas-required-indicator", children: "*" })] })), _jsxs("div", { className: "cursor-pointer nakas-select-container", children: [_jsxs("button", { type: "button", disabled: disabled, onClick: () => setOpen((p) => !p), className: clsx("nakas-form-field", `nakas-form-item-${size}`, error && "error", className), children: [_jsx("span", { className: "select-value", children: selectedLabel }), _jsx(ChevronDown, { size: 16, className: clsx("select-icon", open && "select-icon-open") })] }), open && !disabled && (_jsx("div", { className: clsx("nakas-dropdown", dropdownClassName), children: items.map((item, index) => {
                            const key = getItemKey(item);
                            const isSelected = key === selectedKey;
                            return (_jsx("button", { type: "button", onClick: () => handleSelect(item), className: clsx("select-item", isSelected && "select-item-selected", index === 0 && "select-item-first", index === items.length - 1 && "select-item-last"), children: getItemLabel(item) }, key));
                        }) }))] }), error && _jsx(ErrorBlock, { error: error, showIcon: true })] }));
};
export default Select;
//# sourceMappingURL=select.js.map