import { Theme, ThemeMode } from "../../types.js";
type ThemeScriptProps = {
    theme: Theme;
    mode?: ThemeMode;
    nonce?: string;
    appPrefix: string;
};
export declare function ThemeScript({ theme, mode, nonce, appPrefix, }: ThemeScriptProps): React.ReactElement;
export declare function generateThemeScriptHTML(theme: Theme, mode?: "light" | "dark", appPrefix?: string, nonce?: string): string;
export {};
//# sourceMappingURL=theme-script.d.ts.map