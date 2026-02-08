import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import BodyText from "../typography/body-text.js";
const LandingDemoKPI = ({ themes, }) => {
    const nbThemes = themes.length;
    return (_jsxs("div", { className: "landing-demo-kpi", children: [themes.map(({ theme, position }, index) => (_jsx("div", { className: "theme-wrapper", children: _jsx("div", { className: "theme-kpi-button", style: {
                        background: `radial-gradient(circle, ${theme.light.colors["secondary-accent"]}, ${theme.light.colors["primary-accent"]})`,
                        boxShadow: `0px 0px 40px ${theme.light.colors["secondary-accent"]}`,
                        marginLeft: index !== 0 ? "-16px" : "0",
                    } }) }, `${theme.name}-${position}`))), _jsxs(BodyText, { className: "kpi-text", size: "sm", children: [nbThemes, " th\u00E8mes disponibles"] })] }));
};
export default LandingDemoKPI;
//# sourceMappingURL=landing-demo-kpi.js.map