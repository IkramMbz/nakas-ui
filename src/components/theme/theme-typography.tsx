"use client";

import { useContext } from "react";

import BodyText from "../typography/body-text.js";
import Heading from "../typography/heading.js";
import HR from "../ui/hr.js";
import { ThemeContext } from "./theme-provider.js";

const loremIpsum = "Naka ipsum dolor sit amet, consectetur adipiscing elit.";

const ThemeTypography = (): React.ReactElement | null => {
  const context = useContext(ThemeContext);

  if (!context) return null;

  const { currentTheme } = context;

  return (
    <>
      <Heading type="h1">Titre H1 - {currentTheme.fonts.heading}</Heading>

      <Heading type="h2">Titre H2 - {currentTheme.fonts.heading}</Heading>

      <Heading type="h3">Titre H3 - {currentTheme.fonts.heading}</Heading>

      <HR />

      <BodyText size="lg">
        Texte principal (Large) - {currentTheme.fonts.body} : {loremIpsum}
      </BodyText>

      <BodyText>
        Texte principal (Base) - {currentTheme.fonts.body} : {loremIpsum}
      </BodyText>

      <BodyText size="sm">
        Texte principal (Small) - {currentTheme.fonts.body} : {loremIpsum}
      </BodyText>

      <BodyText size="xs">
        Texte principal (xs) - {currentTheme.fonts.body} : {loremIpsum}
      </BodyText>
    </>
  );
};

export default ThemeTypography;
