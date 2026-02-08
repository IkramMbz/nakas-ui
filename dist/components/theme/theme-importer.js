"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Upload } from "lucide-react";
import { useContext, useRef } from "react";
import { ThemeContext } from "./theme-provider.js";
import { Button } from "../ui/index.js";
// interface ThemeImporterProps {
//   onImport: (success: boolean) => void;
// }
// const ThemeImporter = ({ onImport }: ThemeImporterProps) => {
const ThemeImporter = () => {
    const context = useContext(ThemeContext);
    const fileInputRef = useRef(null);
    const handleFileUpload = (e) => {
        const file = e.target.files?.[0];
        if (!file || !context)
            return;
        const reader = new FileReader();
        // reader.onload = (event) => {
        //     try {
        //         const jsonData = event.target?.result as string;
        //         const success = context.importThemeFromJSON(jsonData);
        //         onImport(success);
        //     } catch {
        //         onImport(false);
        //     }
        // };
        reader.readAsText(file);
    };
    return (_jsxs(_Fragment, { children: [_jsx("input", { ref: fileInputRef, type: "file", accept: ".json", onChange: handleFileUpload, className: "hidden" }), _jsxs(Button, { className: "w-full", variant: "secondary", onClick: () => fileInputRef.current?.click(), size: "lg", children: [_jsx(Upload, { size: 20 }), "Importer un th\u00E8me"] })] }));
};
export default ThemeImporter;
//# sourceMappingURL=theme-importer.js.map