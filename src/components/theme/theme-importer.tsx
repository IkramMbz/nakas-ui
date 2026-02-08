"use client";

import { Upload } from "lucide-react";
import { useContext, useRef } from "react";

import { ThemeContext } from "./theme-provider.js";
import { Button } from "../ui/index.js";

// interface ThemeImporterProps {
//   onImport: (success: boolean) => void;
// }

// const ThemeImporter = ({ onImport }: ThemeImporterProps) => {
const ThemeImporter = (): React.ReactElement => {
  const context = useContext(ThemeContext);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0];
    if (!file || !context) return;

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

  return (
    <>
      <input
        ref={fileInputRef}
        type="file"
        accept=".json"
        onChange={handleFileUpload}
        className="hidden"
      />
      <Button
        className="w-full"
        variant="secondary"
        onClick={() => fileInputRef.current?.click()}
        size="lg"
      >
        <Upload size={20} />
        Importer un thème
      </Button>
    </>
  );
};

export default ThemeImporter;
