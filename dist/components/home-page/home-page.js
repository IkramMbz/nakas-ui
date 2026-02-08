"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./home-page.css";
import "./galaxy.css";
import { useContext } from "react";
import LandingDemoKPI from "./landing-demo-kpi.js";
import NotificationBar from "./notification-bar.js";
import AuroraBackground from "../commons/aurora-background.js";
import { ThemeContext } from "../theme/theme-provider.js";
import ThemeSwitcher from "../theme/theme-switcher.js";
import Heading from "../typography/heading.js";
import BodyText from "../typography/body-text.js";
import Header from "./header.js";
const DISPLAY_COUNT = 5;
const HomePage = () => {
    const context = useContext(ThemeContext);
    if (!context)
        return null;
    const { currentTheme, effectiveMode } = context;
    // const [importStatus, setImportStatus] = useState<string>("");
    // const [copiedColor, setCopiedColor] = useState<string>("");
    if (!context)
        return null;
    const allThemes = Object.values(context.getAllThemes());
    const allThemesLength = allThemes.length;
    const centerPosition = Math.floor(DISPLAY_COUNT / 2);
    const currentIndex = allThemes.findIndex((t) => t.name === currentTheme.name);
    const colors = context.currentTheme[effectiveMode].colors;
    const getVisibleThemes = () => {
        const visible = [];
        const startOffset = centerPosition;
        for (let i = 0; i < DISPLAY_COUNT; i++) {
            const index = (currentIndex - startOffset + i + allThemesLength) % allThemesLength;
            visible.push({
                theme: allThemes[index],
                position: i,
                isCurrent: index === currentIndex,
            });
        }
        return visible;
    };
    const visibleThemes = getVisibleThemes();
    // const copyThemeJSON = () => {
    //     navigator.clipboard.writeText(JSON.stringify(currentTheme, null, 2));
    //     setCopiedColor("✓ Copié !");
    //     alert("Copié !")
    //     setTimeout(() => setCopiedColor(""), 2000);
    // };
    // const handleImport = (success: boolean) => {
    //     setImportStatus(success ? "✓ Thème importé avec succès" : "✗ Erreur d'importation");
    //     setTimeout(() => setImportStatus(""), 3000);
    // };
    return (_jsxs("div", { className: "nakas-ui-landing", children: [_jsx(AuroraBackground, { showRadialGradient: true, lowOpacity: true, className: "shimmer" }), _jsx("div", { className: "screen", children: _jsxs("div", { className: "inner", style: { backgroundColor: colors.background }, children: [_jsx(NotificationBar, { author: currentTheme.author, authorUrl: currentTheme.authorUrl || null, backgroundColor: `linear-gradient(to right, ${colors["primary-accent"]}, ${colors["secondary-accent"]})`, color: colors["secondary-accent"] }), _jsxs("div", { className: "main", children: [_jsx(Header, {}), _jsxs("main", { id: "main-content", children: [_jsx(LandingDemoKPI, { themes: visibleThemes.slice(0, 3) }), _jsxs("div", { className: "flex-col items-center justify-center", style: { gap: "2rem" }, children: [_jsx("div", { className: "header", children: visibleThemes.map(({ theme, position, isCurrent }) => (_jsx("div", { className: "flex-col items-center", children: _jsx("button", { className: `planet ${isCurrent ? "big scale-110" : "w-24 h-24 opacity-60 hover:opacity-80"}`, style: {
                                                                background: `radial-gradient(circle, ${theme.light.colors["secondary-accent"]}, ${theme.light.colors["primary-accent"]})`,
                                                                boxShadow: isCurrent
                                                                    ? `0px 0px 40px ${theme.light.colors["secondary-accent"]}`
                                                                    : `0px 0px 20px ${theme.light.colors["secondary-accent"]}`,
                                                            } }) }, `${theme.name}-${position}`))) }), _jsxs(Heading, { type: "h1", animated: true, children: ["Construisez avec le th\u00E8me", " ", _jsx("span", { className: "text-gradient", children: currentTheme.name })] }), _jsx(BodyText, { size: "xl", className: "mb-4", children: "Nakas UI est un espace d'exploration (playground) d\u00E9di\u00E9 au design d'interfaces. Il met en avant des th\u00E8mes visuels pens\u00E9s pour la coh\u00E9rence, la lisibilit\u00E9 et l'identit\u00E9 des produits de l'univers Nakas." }), _jsx(ThemeSwitcher, {})] })] })] })] }) })] }));
};
export default HomePage;
//# sourceMappingURL=home-page.js.map