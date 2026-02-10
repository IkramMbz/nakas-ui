import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { auditResultExplanation } from "../../lib/colors-functions.js";
import BodyText from "../typography/body-text.js";
const ContrastIndicator = ({ title, contrast, }) => {
    const info = auditResultExplanation(contrast);
    return (_jsxs("div", { children: [_jsx(BodyText, { size: "sm", className: "key", children: title }), _jsxs(BodyText, { size: "sm", children: [info.icon, " ", _jsx("strong", { children: info.level }), " : ", info.message, ".", _jsx("br", {}), info.detail, "."] })] }));
};
export default ContrastIndicator;
//# sourceMappingURL=contrast-indicator.js.map