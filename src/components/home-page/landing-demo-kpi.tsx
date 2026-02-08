import BodyText from "../typography/body-text.js";
import { Theme } from "../../types.js";

interface VisibleTheme {
  theme: Theme;
  position: number;
}

interface LandingDemoKPIProps {
  themes: VisibleTheme[];
}

const LandingDemoKPI = ({
  themes,
}: LandingDemoKPIProps): React.ReactElement => {
  const nbThemes = themes.length;

  return (
    <div className="landing-demo-kpi">
      {themes.map(({ theme, position }, index) => (
        <div key={`${theme.name}-${position}`} className="theme-wrapper">
          <div
            className="theme-kpi-button"
            style={{
              background: `radial-gradient(circle, ${theme.light.colors["secondary-accent"]}, ${theme.light.colors["primary-accent"]})`,
              boxShadow: `0px 0px 40px ${theme.light.colors["secondary-accent"]}`,
              marginLeft: index !== 0 ? "-16px" : "0",
            }}
          />
        </div>
      ))}

      <BodyText className="kpi-text" size="sm">
        {nbThemes} thèmes disponibles
      </BodyText>
    </div>
  );
};

export default LandingDemoKPI;
