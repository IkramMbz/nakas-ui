"use client";

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
import { Theme } from "../../types.js";
import Header from "./header.js";

const DISPLAY_COUNT = 5;

type VisibleTheme = {
  theme: Theme;
  position: number;
  isCurrent: boolean;
};

const HomePage = (): React.ReactElement | null => {
  const context = useContext(ThemeContext);
  if (!context) return null;
  const { currentTheme, effectiveMode } = context;

  // const [importStatus, setImportStatus] = useState<string>("");
  // const [copiedColor, setCopiedColor] = useState<string>("");

  if (!context) return null;

  const allThemes = Object.values(context.getAllThemes());
  const allThemesLength = allThemes.length;
  const centerPosition = Math.floor(DISPLAY_COUNT / 2);
  const currentIndex = allThemes.findIndex((t) => t.name === currentTheme.name);
  const colors = context.currentTheme[effectiveMode].colors;

  const getVisibleThemes = (): VisibleTheme[] => {
    const visible: VisibleTheme[] = [];

    const startOffset = centerPosition;

    for (let i = 0; i < DISPLAY_COUNT; i++) {
      const index =
        (currentIndex - startOffset + i + allThemesLength) % allThemesLength;
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

  return (
    <div className="nakas-ui-landing shimmer">
      <AuroraBackground showRadialGradient lowOpacity />

      <div className="screen">
        <div className="inner" style={{ backgroundColor: colors.background }}>
          <NotificationBar
            author={currentTheme.author}
            authorUrl={currentTheme.authorUrl || null}
            backgroundColor={`linear-gradient(to right, ${colors["primary-accent"]}, ${colors["secondary-accent"]})`}
            color={colors["secondary-accent"]}
          />

          <div className="main">
            <Header />

            <main id="main-content">
              <LandingDemoKPI themes={visibleThemes.slice(0, 3)} />

              <div
                className="flex flex-col items-center justify-center"
                style={{ gap: "2rem" }}
              >
                <div className="header">
                  {visibleThemes.map(({ theme, position, isCurrent }) => (
                    <div
                      key={`${theme.name}-${position}`}
                      className="flex-col items-center"
                    >
                      {/* {!isCurrent && (
                                            <span className="mb-4 font-bold text-sm opacity-70">
                                                {theme.name}
                                            </span>
                                        )} */}

                      <button
                        className={`planet ${isCurrent ? "big scale-110" : "w-24 h-24 opacity-60 hover:opacity-80"}`}
                        style={{
                          background: `radial-gradient(circle, ${theme.light.colors["secondary-accent"]}, ${theme.light.colors["primary-accent"]})`,
                          boxShadow: isCurrent
                            ? `0px 0px 40px ${theme.light.colors["secondary-accent"]}`
                            : `0px 0px 20px ${theme.light.colors["secondary-accent"]}`,
                        }}
                      />
                    </div>
                  ))}
                </div>

                <Heading type="h1" animated>
                  Construisez avec le thème{" "}
                  <span className="text-gradient">{currentTheme.name}</span>
                </Heading>

                <BodyText size="xl" className="mb-4">
                  Nakas UI est un espace d'exploration (playground) dédié au
                  design d'interfaces. Il met en avant des thèmes visuels pensés
                  pour la cohérence, la lisibilité et l'identité des produits de
                  l'univers Nakas.
                  {/* Visualisez, créez et exportez vos thèmes personnalisés<br />
                                    <span className="text-sm">
                                        (Bientôt disponible)
                                    </span> */}
                </BodyText>

                <ThemeSwitcher />
              </div>
            </main>

            {/* <Footer /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
