"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Copy, Download, Heading } from "lucide-react";
import { useContext } from "react";
import ThemeModeToggler from "./theme-mode-toggler.js";
import { ThemeContext } from "./theme-provider.js";
import Button from "../ui/button.js";
import Card from "../ui/card.js";
const ThemeActions = () => {
    const context = useContext(ThemeContext);
    // const [importStatus, setImportStatus] = useState<string>("");
    if (!context)
        return null;
    // const { currentTheme, exportThemeAsJSON } = context;
    const { currentTheme } = context;
    const copyThemeJSON = () => {
        navigator.clipboard.writeText(JSON.stringify(currentTheme, null, 2));
        alert("Copié !");
    };
    // const handleImport = (success: boolean): void => {
    //   setImportStatus(
    //     success ? "✓ Thème importé avec succès" : "✗ Erreur d'importation"
    //   );
    //   setTimeout(() => setImportStatus(""), 3000);
    // };
    return (_jsxs(Card, { children: [_jsx(Heading, { type: "h2", className: "text-primary-color", children: "Actions" }), _jsx(ThemeModeToggler, {}), _jsxs(Button
            // onClick={exportThemeAsJSON}
            , { 
                // onClick={exportThemeAsJSON}
                className: "w-full", variant: "secondary", size: "lg", children: [_jsx(Download, { size: 20 }), "Exporter le th\u00E8me actuel"] }), _jsxs(Button, { onClick: copyThemeJSON, className: "w-full", size: "lg", variant: "outline", children: [_jsx(Copy, { size: 20 }), "Copier JSON"] })] }));
};
export default ThemeActions;
//# sourceMappingURL=theme-actions.js.map