"use client";

import Logo from "./logo.js";
import ThemeModeToggler from "../theme/theme-mode-toggler.js";

const Header = (): React.ReactElement => {
  return (
    <div className="nakas-ui-landing-header">
      <Logo />

      <ThemeModeToggler />
    </div>
  );
};

export default Header;
