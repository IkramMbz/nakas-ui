import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import BodyText from "../typography/body-text.js";
const NotificationBar = ({ author, authorUrl, backgroundColor, color, }) => {
    return (_jsx("div", { className: "notification-bar shimmer", style: { background: backgroundColor, color: color }, children: _jsxs(BodyText, { className: "notification-bar-text", children: ["Th\u00E8me \u00E9labor\u00E9 par", " ", authorUrl ? (_jsx("a", { href: authorUrl, target: "_blank", rel: "noopener noreferrer", children: author })) : (author)] }) }));
};
export default NotificationBar;
//# sourceMappingURL=notification-bar.js.map