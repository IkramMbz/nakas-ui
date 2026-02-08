import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import BodyText from "../typography/body-text.js";
// import { NAVIGATION, FOOTER_CTA_LINK } from "@/lib/navigation";
const FOOTER_CTA_LINK = "#";
const Footer = () => {
    return (_jsxs("footer", { className: "flex flex-col gap-4 items-center justify-center", children: [_jsx("div", { className: "flex items-center gap-8", children: _jsx(BodyText, { className: "underline", type: "span", children: "Mentions l\u00E9gales" }) }), _jsxs("div", { children: [_jsxs(BodyText, { children: ["\u00A9 ", new Date().getFullYear(), " ", _jsx("a", { href: "/", className: "font-semibold", children: "Nakas UI" }), " ", "- Par", " ", _jsx("a", { href: FOOTER_CTA_LINK, className: "text-accent", target: "_blank", rel: "noopener noreferrer", children: "IMBZ" })] }), _jsx(BodyText, { className: "mb-4", children: "Tous droits r\u00E9serv\u00E9s." })] })] }));
};
export default Footer;
//# sourceMappingURL=footer.js.map