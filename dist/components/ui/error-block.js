import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from "clsx";
import { AlertCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
const ErrorBlock = ({ error, duration = 5000, infiniteDuration = true, className, showIcon = true, }) => {
    const [visible, setVisible] = useState(true);
    const timerRef = useRef(null);
    useEffect(() => {
        setVisible(true);
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
        if (infiniteDuration)
            return;
        timerRef.current = setTimeout(() => {
            setVisible(false);
        }, duration);
        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
        };
    }, [error, duration, infiniteDuration]);
    if (!visible)
        return null;
    return (_jsxs("div", { className: clsx("nakas-error-block", className), children: [showIcon && _jsx(AlertCircle, { size: 20 }), _jsx("span", { children: error })] }));
};
export default ErrorBlock;
//# sourceMappingURL=error-block.js.map