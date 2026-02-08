import { jsx as _jsx } from "react/jsx-runtime";
import clsx from "clsx";
const CustomIcon = ({ icon: Icon, backgroundColor = "var(--color-accent)", color = "var(--color-nega-bold-color)", direction = "left", }) => {
    return (_jsx("div", { className: clsx("nakas-custom-icon", direction === "left" ? "icon-rotate-left" : "icon-rotate-right"), style: { backgroundColor, color }, children: _jsx(Icon, { size: 24 }) }));
};
export default CustomIcon;
//# sourceMappingURL=custom-icon.js.map