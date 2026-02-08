import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import BodyText from "../typography/body-text.js";
import Heading from "../typography/heading.js";
const PageTitle = ({ title, subtitle, size = "lg", }) => {
    return (_jsxs("div", { className: "flex-col", children: [_jsx(Heading, { size: size, children: title }), subtitle && _jsx(BodyText, { size: size, children: subtitle })] }));
};
export default PageTitle;
//# sourceMappingURL=page-title.js.map