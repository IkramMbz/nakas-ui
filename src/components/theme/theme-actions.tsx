"use client";

import { Copy, Download, Heading } from "lucide-react";
import { useContext } from "react";

import ThemeModeToggler from "./theme-mode-toggler.js";
import { ThemeContext } from "./theme-provider.js";
import Button from "../ui/button.js";
import Card from "../ui/card.js";

const ThemeActions = (): React.ReactElement | null => {
  const context = useContext(ThemeContext);
  // const [importStatus, setImportStatus] = useState<string>("");

  if (!context) return null;

  // const { currentTheme, exportThemeAsJSON } = context;
  const { currentTheme } = context;

  const copyThemeJSON = (): void => {
    navigator.clipboard.writeText(JSON.stringify(currentTheme, null, 2));
    alert("Copié !");
  };

  // const handleImport = (success: boolean): void => {
  //   setImportStatus(
  //     success ? "✓ Thème importé avec succès" : "✗ Erreur d'importation"
  //   );
  //   setTimeout(() => setImportStatus(""), 3000);
  // };

  return (
    <Card>
      <Heading type="h2" className="text-primary-color">
        Actions
      </Heading>

      <ThemeModeToggler />

      {/* <ThemeImporter onImport={handleImport} /> */}

      <Button
        // onClick={exportThemeAsJSON}
        className="w-full"
        variant="secondary"
        size="lg"
      >
        <Download size={20} />
        Exporter le thème actuel
      </Button>

      <Button
        onClick={copyThemeJSON}
        className="w-full"
        size="lg"
        variant="outline"
      >
        <Copy size={20} />
        Copier JSON
      </Button>

      {/* {importStatus && <p className="text-sm text-center">{importStatus}</p>} */}
    </Card>
  );
};

export default ThemeActions;
