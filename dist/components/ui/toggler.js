"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import clsx from "clsx";
import { useEffect, useState } from "react";
const Toggler = ({ value, onChange, backgroundColor = "var(--color-nega-background)", color = "var(--color-nega-bold-color)", disabled = false, leftIcon, rightIcon, thumbClassName = "", trackClassName = "", }) => {
    const [internalValue, setInternalValue] = useState(value);
    useEffect(() => {
        setInternalValue(value);
    }, [value]);
    const toggle = () => {
        if (!disabled) {
            const next = !internalValue;
            setInternalValue(next);
            onChange(next);
        }
    };
    return (_jsx("button", { role: "switch", "aria-checked": internalValue, tabIndex: disabled ? -1 : 0, onClick: toggle, className: clsx("nakas-toggler", disabled && "toggler-disabled", trackClassName), style: { backgroundColor: backgroundColor }, children: _jsx("span", { className: clsx("toggler-thumb", internalValue && "toggler-thumb-active", thumbClassName), style: {
                color: color,
            }, children: internalValue ? rightIcon : leftIcon }) }));
};
export default Toggler;
//# sourceMappingURL=toggler.js.map