import { Theme, ThemeMode } from "../../types.js";
import {
  generateHydrationScript,
  generateSSRStyles,
  generateFontStyleLinks,
} from "../../lib/theme-ssr.js";

interface ThemeScriptProps {
  theme: Theme;
  mode?: ThemeMode;
  nonce?: string;
  appPrefix: string;
}

export function ThemeScript({
  theme,
  mode = "light",
  nonce,
  appPrefix,
}: ThemeScriptProps): React.ReactElement {
  const hydrationScript = generateHydrationScript(theme, appPrefix);
  const ssrStyles = generateSSRStyles(theme, mode);
  const fontLinks = generateFontStyleLinks(theme);

  return (
    <>
      <style
        id="nakas-theme-ssr"
        dangerouslySetInnerHTML={{ __html: ssrStyles }}
        nonce={nonce}
      />

      {fontLinks.map(
        (
          link: { rel: string | undefined; href: string | undefined },
          index: number
        ) => (
          <link key={`font-${index}`} rel={link.rel} href={link.href} />
        )
      )}

      <script
        id="nakas-theme-hydration"
        dangerouslySetInnerHTML={{ __html: hydrationScript }}
        nonce={nonce}
      />
    </>
  );
}

export function generateThemeScriptHTML(
  theme: Theme,
  mode: "light" | "dark" = "light",
  appPrefix: string = "nakas",
  nonce?: string
): string {
  const hydrationScript = generateHydrationScript(theme, appPrefix);
  const ssrStyles = generateSSRStyles(theme, mode);
  const fontLinks = generateFontStyleLinks(theme);

  const nonceAttr = nonce ? ` nonce="${nonce}"` : "";

  const fontsHTML = fontLinks
    .map(
      (link: { rel: string; href: string }) =>
        `<link rel="${link.rel}" href="${link.href}">`
    )
    .join("\n");

  return `
<style id="nakas-theme-ssr"${nonceAttr}>
${ssrStyles}
</style>
${fontsHTML}
<script id="nakas-theme-hydration"${nonceAttr}>
${hydrationScript}
</script>
  `.trim();
}
