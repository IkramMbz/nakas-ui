import { ReactNode } from "react";
import { Theme } from "../../types.js";
export interface ThemeContextType {
    currentTheme: Theme;
    currentMode: "light" | "dark" | "system";
    effectiveMode: "light" | "dark";
    switchTheme: (themeName: string) => void;
    toggleMode: () => void;
    setMode: (mode: "light" | "dark" | "system") => void;
    getAllThemes: () => Record<string, Theme>;
    isHydrated: boolean;
}
interface ThemeProviderProps {
    children: ReactNode;
    appPrefix: string;
    initialTheme: Theme;
    availableThemes?: Record<string, Theme>;
}
export declare const ThemeContext: import("react").Context<ThemeContextType | null>;
export declare function ThemeProvider({ children, appPrefix, initialTheme, availableThemes, }: ThemeProviderProps): React.ReactElement;
export {};
//# sourceMappingURL=theme-provider.d.ts.map