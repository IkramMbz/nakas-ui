import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
const Dropdown = ({ label, items, size = "md", selectedItemKey, onItemClick, renderItem, getItemKey, className = "", }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);
    const toggleOpen = () => setOpen((prev) => !prev);
    const renderDefaultItemLabel = (item) => {
        if (typeof item === "string")
            return item;
        if (typeof item === "number")
            return String(item);
        if (typeof item === "object" && item !== null) {
            const record = item;
            if (typeof record.name === "string")
                return record.name;
            if (typeof record.info === "object" &&
                record.info !== null &&
                typeof record.info.name === "string") {
                return record.info.name;
            }
        }
        return String(item);
    };
    const handleItemClick = (item) => {
        onItemClick?.(item);
        setOpen(false);
    };
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    return (_jsxs("div", { className: "flex-col", ref: ref, children: [_jsxs("button", { onClick: toggleOpen, className: clsx("nakas-form-field", `nakas-form-item-${size}`, className), children: [_jsx("span", { children: label }), _jsx(ChevronDown, { size: 16, className: clsx("dropdown-icon", open && "dropdown-icon-open") })] }), open && (_jsx("div", { className: "nakas-dropdown", children: items.map((item, index) => {
                    const key = getItemKey(item);
                    const isSelected = selectedItemKey === key;
                    if (renderItem) {
                        return (_jsx("div", { onClick: () => handleItemClick(item), className: "dropdown-item-wrapper", children: renderItem(item, index, isSelected) }, key));
                    }
                    return (_jsx("button", { className: clsx("dropdown-item", isSelected && "dropdown-item-selected", index === 0 && "dropdown-item-first", index === items.length - 1 && "dropdown-item-last"), onClick: () => handleItemClick(item), children: renderDefaultItemLabel(item) }, key));
                }) }))] }));
};
export default Dropdown;
//# sourceMappingURL=dropdown.js.map